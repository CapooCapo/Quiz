import { readFile } from 'node:fs/promises'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'

const clean = (value) => value.replace(/\s+/g, ' ').trim()
const hasJapanese = (value) => /[ぁ-んァ-ヶ一-龯々～]/.test(value)
const hasVietnamese = (value) => /[a-zA-ZÀ-ỹĐđ]/.test(value)
const isHeader = (value) => /^(語彙|言葉|表現|アクセント|意味|ご\s*い|[A-C]|\d+[\s-]*\d*)$/.test(value) || /言葉.*アクセント.*意味/.test(value)

function rowsFromItems(items) {
  const chunks = items.map((item) => ({ text: clean(item.str), x: item.transform[4], y: item.transform[5] })).filter((item) => item.text)
  const groups = []
  for (const chunk of chunks.sort((a, b) => b.y - a.y)) {
    const row = groups.find((group) => Math.abs(group[0].y - chunk.y) < 3)
    if (row) row.push(chunk)
    else groups.push([chunk])
  }
  return groups.map((chunks) => ({ chunks: chunks.sort((a, b) => a.x - b.x) }))
}

function columnsFromPage(items) {
  const chunks = items.map((item) => ({ text: clean(item.str), x: item.transform[4], y: item.transform[5] })).filter((item) => item.text)
  const accent = chunks.find((chunk) => chunk.text.includes('アクセント'))
  const header = accent && chunks.filter((chunk) => Math.abs(chunk.y - accent.y) < 5)
  const term = header?.find((chunk) => /^(言|表)$/.test(chunk.text))
  const meaning = header?.find((chunk) => chunk.text === '意')
  return term && meaning && accent && term.x < accent.x && accent.x < meaning.x
    ? { readingStart: (term.x + accent.x) / 2, meaningStart: (accent.x + meaning.x) / 2 }
    : null
}

for (const filename of process.argv.slice(2)) {
  const task = pdfjs.getDocument({ data: new Uint8Array(await readFile(filename)) })
  const document = await task.promise
  const cards = []
  let columns = null
  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber)
    try {
      const items = (await page.getTextContent()).items.filter((item) => 'str' in item)
      columns = columnsFromPage(items) ?? columns
      for (const row of rowsFromItems(items)) {
        const text = row.chunks.map((chunk) => chunk.text).join(' ')
        if (!columns || isHeader(text) || !hasJapanese(text)) continue
        const values = [[], [], []]
        for (const chunk of row.chunks) values[chunk.x < columns.readingStart ? 0 : chunk.x < columns.meaningStart ? 1 : 2].push(chunk.text)
        const [term, rawReading, vietnamese] = values.map((value) => clean(value.join(' ')))
        const reading = clean(rawReading.replace(/^[（(][A-Z]+[）)]\s*/, ''))
        const japanese = clean(term.replace(/[（(][^（）()]+[）)]/, '').replace(/^\d+\s*/, ''))
        if (japanese && reading && vietnamese && hasJapanese(japanese) && hasVietnamese(vietnamese)) cards.push({ japanese, reading, vietnamese })
      }
    } finally {
      page.cleanup()
    }
  }
  await task.destroy()
  console.log(`${filename}: ${cards.length} cards`)
  for (const card of cards) console.log(`${card.japanese} | ${card.reading} | ${card.vietnamese}`)
}
