import type { VocabularyCard } from './domain'

const now = new Date().toISOString()

const make = (id: string, japanese: string, reading: string, vietnamese: string, source: string, section: string, partOfSpeech = 'N'): VocabularyCard => ({
  id, japanese, reading, vietnamese, source, section, partOfSpeech,
  notes: '', tags: [section, 'sample'], rawText: `${japanese} ${reading} ${vietnamese}`,
  confidence: 'high', createdAt: now, updatedAt: now,
})

export const sampleCards: VocabularyCard[] = [
  make('sample-a-vietnam', 'ベトナム', 'ベトナム', 'Việt Nam', 'Sample deck', 'A'),
  make('sample-a-school', '学生', 'がくせい', 'học sinh, sinh viên', 'Sample deck', 'A'),
  make('sample-a-teacher', '先生', 'せんせい', 'thầy/ cô giáo', 'Sample deck', 'A'),
  make('sample-b-now', '今', 'いま', 'bây giờ', 'Sample deck', 'B', 'N / Adv.'),
  make('sample-b-library', '図書館', 'としょかん', 'thư viện', 'Sample deck', 'B'),
  make('sample-b-thanks', 'ありがとうございます', 'ありがとうございます', 'cảm ơn', 'Sample deck', 'B', 'Expression'),
  make('sample-c-dictionary', '辞書', 'じしょ', 'từ điển', 'Sample deck', 'C'),
  make('sample-c-bag', 'かばん', 'かばん', 'cặp, túi', 'Sample deck', 'C'),
  make('sample-c-monday', '月曜日', 'げつようび', 'thứ Hai', 'Sample deck', 'C'),
]
