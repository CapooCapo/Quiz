export type WritingCategoryId = 'task-1-charts' | 'task-1-visuals' | 'task-2-essays'

export type CategoryArtwork = 'chart' | 'map' | 'essay'

export interface WritingCategory {
  id: WritingCategoryId
  label: string
  title: string
  description: string
  artwork: CategoryArtwork
  status: 'planned' | 'available'
}

export interface WritingLesson {
  id: string
  categoryId: WritingCategoryId
  title: string
  objective: string
  order: number
  status: 'draft' | 'published'
  chartDatasetId?: string
  durationMinutes?: number
  skill?: string
}

export interface TeachingLesson extends WritingLesson {
  explanationVi: string
  grammar: string
  correctExample: string
  incorrectExample: string
  alternatives: string[]
  guidedQuestion: { prompt: string; options: string[]; answer: string; explanation: string }
  chartExercise: string
}

export interface VocabularyCard {
  id: string; group: string; term: string; meaning: string; partOfSpeech: string
  pattern: string; usage: string; example: string; commonMistake: string
  mistakeExplanation: string; alternatives: string[]; practice: string
  chartDirection: 'up' | 'down' | 'flat' | 'mixed'
}

export interface AcademyQuestion {
  id: string; type: 'multiple-choice' | 'fill-blank' | 'ordering' | 'error-correction' | 'matching' | 'trend' | 'write-one'
  prompt: string; choices?: string[]; answer: string | string[]; explanation: string
}

export interface WritingVocabularyItem {
  id: string
  lessonId: string
  term: string
  meaning: string
  example: string
}

export type WritingQuestion =
  | {
      id: string
      lessonId: string
      type: 'multiple-choice'
      prompt: string
      choices: { id: string; text: string }[]
      answerId: string
      explanation: string
    }
  | {
      id: string
      lessonId: string
      type: 'sentence-building'
      prompt: string
      tokens: string[]
      expectedSentence: string
      explanation: string
    }
  | {
      id: string
      lessonId: string
      type: 'chart-description'
      prompt: string
      datasetId: string
      expectedObservations: string[]
      explanation: string
    }

export interface WritingChartPoint {
  label: string
  value: number
  observation: string
}

export interface WritingChartDataset {
  id: string
  title: string
  subtitle: string
  chartType: 'line' | 'bar'
  unit: string
  data: WritingChartPoint[]
  accessibleSummary: string
  sourceName: string
  sourceUrl: string
}
