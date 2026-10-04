export type VocabularyCard = {
  id: string
  japanese: string
  reading: string
  vietnamese: string
  partOfSpeech: string
  notes: string
  source: string
  section: string
  tags: string[]
  rawText: string
  confidence: 'high' | 'review'
  createdAt: string
  updatedAt: string
}

export type ImportResult = {
  fileName: string
  cards: VocabularyCard[]
  rawLines: string[]
  warnings: string[]
}

export interface PdfParser {
  parse(file: File): Promise<ImportResult>
}

export interface CardStorage {
  load(): { cards: VocabularyCard[]; error: string | null }
  save(cards: VocabularyCard[]): string | null
  clear(): string | null
}
