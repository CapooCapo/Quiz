import type { WritingLesson } from '../types'

export const visualLessons: WritingLesson[] = [
  {
    id: 'read-a-line-chart',
    categoryId: 'task-1-charts',
    title: 'Read the trend',
    objective: 'Follow the overall movement before selecting supporting figures.',
    order: 1,
    status: 'published',
    chartDatasetId: 'vietnam-renewable-electricity-share',
    durationMinutes: 4,
    skill: 'Line charts',
  },
  {
    id: 'find-turning-points',
    categoryId: 'task-1-charts',
    title: 'Find turning points',
    objective: 'Notice highs, lows, and the point where a trend changes direction.',
    order: 2,
    status: 'published',
    chartDatasetId: 'vietnam-renewable-electricity-share',
    durationMinutes: 5,
    skill: 'Key features',
  },
  {
    id: 'compare-categories',
    categoryId: 'task-1-charts',
    title: 'Compare categories',
    objective: 'Rank categories and describe meaningful gaps without listing every figure.',
    order: 3,
    status: 'published',
    chartDatasetId: 'renewable-electricity-country-comparison-2021',
    durationMinutes: 5,
    skill: 'Bar charts',
  },
]
