import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import type { TextItem } from 'pdfjs-dist/types/src/display/api'
import type { PdfParser, VocabularyCard } from './domain'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

type Chunk = { text: string; x: number; y: number }
type TextRow = { text: string; chunks: Chunk[] }
type PageColumns = { readingStart: number; meaningStart: number }

const clean = (value: string) => value.replace(/\s+/g, ' ').trim()
const hasJapanese = (value: string) => /[ぁ-んァ-ヶ一-龯々～]/.test(value)
const hasVietnamese = (value: string) => /[a-zA-ZÀ-ỹĐđ]/.test(value)
const isHeader = (value: string) => /^(語彙|言葉|表現|アクセント|意味|ご\s*い|[A-C]|\d+[\s-]*\d*)$/.test(value) || /言葉.*アクセント.*意味/.test(value)

function rowsFromItems(items: TextItem[]): TextRow[] {
  const chunks = items.map((item) => ({ text: clean(item.str), x: item.transform[4], y: item.transform[5] })).filter((item) => item.text)
  const groups: Chunk[][] = []
  for (const chunk of chunks.sort((a, b) => b.y - a.y)) {
    const row = groups.find((group) => Math.abs(group[0].y - chunk.y) < 3)
    if (row) row.push(chunk)
    else groups.push([chunk])
  }
  return groups
    .map((chunks) => {
      chunks.sort((a, b) => a.x - b.x)
      let previous = -Infinity
      const text = chunks.map((chunk) => {
        const gap = chunk.x - previous
        previous = chunk.x + chunk.text.length * 8
        return gap > 20 ? ` | ${chunk.text}` : chunk.text
      }).join('')
      return { chunks, text: clean(text.replace(/\|\s*$/, '')) }
    })
}

function columnsFromPage(items: TextItem[]): PageColumns | null {
  const chunks = items.map((item) => ({ text: clean(item.str), x: item.transform[4], y: item.transform[5] })).filter((item) => item.text)
  const accent = chunks.find((chunk) => chunk.text.includes('アクセント'))
  if (!accent) return null

  const headerChunks = chunks.filter((chunk) => Math.abs(chunk.y - accent.y) < 5)
  const term = headerChunks.find((chunk) => /^(言|表)$/.test(chunk.text))
  const meaning = headerChunks.find((chunk) => chunk.text === '意')
  if (!term || !meaning || term.x >= accent.x || accent.x >= meaning.x) return null

  return {
    readingStart: (term.x + accent.x) / 2,
    meaningStart: (accent.x + meaning.x) / 2,
  }
}

function cardFromRow(row: TextRow, columns: PageColumns | null, source: string, section: string): VocabularyCard | null {
  if (isHeader(row.text) || !hasJapanese(row.text)) return null
  if (!columns) return null
  const values = [[], [], []] as string[][]
  for (const chunk of row.chunks) {
    const column = chunk.x < columns.readingStart ? 0 : chunk.x < columns.meaningStart ? 1 : 2
    values[column].push(chunk.text)
  }
  const [termAndPos, rawReading, vietnamese] = values.map((column) => clean(column.join(' ')))
  const partOfSpeech = (termAndPos.match(/[（(]([^（）()]+)[）)]/)?.[1] ?? rawReading.match(/^[（(]([^（）()]+)[）)]/)?.[1] ?? '')
  const reading = clean(rawReading.replace(/^[（(][A-Z]+[）)]\s*/, ''))
  const japanese = clean(termAndPos.replace(/[（(][^（）()]+[）)]/, '').replace(/^\d+\s*/, ''))
  if (!japanese || !reading || !vietnamese || !hasJapanese(japanese) || !hasVietnamese(vietnamese)) return null
  const confidence = japanese.length > 1 && reading.length > 1 && vietnamese.length > 2 ? 'high' : 'review'
  const now = new Date().toISOString()
  return {
    id: crypto.randomUUID(), japanese, reading, vietnamese,
    partOfSpeech, notes: '', source, section,
    tags: [section], rawText: row.text, confidence, createdAt: now, updatedAt: now,
  }
}

export const browserPdfParser: PdfParser = {
  async parse(file) {
    const bytes = await file.arrayBuffer()
    const loadingTask = pdfjsLib.getDocument({ data: bytes })
    try {
      const document = await loadingTask.promise
      const source = file.name.replace(/\.pdf$/i, '')
      const sectionMatch = source.match(/(?:^|[-_ ])([ABC])(?:[-_ ]|$)/i)
      const section = sectionMatch?.[1].toUpperCase() ?? 'Imported'
      const rawLines: string[] = []
      const cards: VocabularyCard[] = []
      let pageColumns: PageColumns | null = null
      for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
        const page = await document.getPage(pageNumber)
        try {
          const content = await page.getTextContent()
          const items = content.items.filter((item): item is TextItem => 'str' in item)
          pageColumns = columnsFromPage(items) ?? pageColumns
          const rows = rowsFromItems(items)
          for (const row of rows) {
            rawLines.push(`p${pageNumber}: ${row.text}`)
            const card = cardFromRow(row, pageColumns, source, section)
            if (card) cards.push(card)
          }
        } finally {
          page.cleanup()
        }
      }
      const warnings = [
        'PDF columns are inferred from each page header. Review every imported row, especially multiline readings and notes.',
        cards.length === 0 ? 'No complete rows were detected. The raw extraction is retained below for manual recovery.' : '',
      ].filter(Boolean)
      return { fileName: file.name, cards, rawLines, warnings }
    } finally {
      await loadingTask.destroy()
    }
  },
}
