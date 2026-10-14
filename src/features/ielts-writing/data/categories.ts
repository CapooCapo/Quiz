import type { WritingCategory } from '../types'

export const writingCategories: WritingCategory[] = [
  {
    id: 'task-1-charts',
    label: 'ACADEMIC TASK 1',
    title: 'Charts & data',
    description: 'Learn to select key figures, compare categories, and describe change with precision.',
    artwork: 'chart',
    status: 'available',
  },
  {
    id: 'task-1-visuals',
    label: 'ACADEMIC TASK 1',
    title: 'Maps & processes',
    description: 'Build clear language for locations, stages, and the way a process unfolds.',
    artwork: 'map',
    status: 'planned',
  },
  {
    id: 'task-2-essays',
    label: 'ACADEMIC TASK 2',
    title: 'Essays & arguments',
    description: 'Plan a position, develop relevant ideas, and connect paragraphs into a coherent response.',
    artwork: 'essay',
    status: 'planned',
  },
]
