export type SkillId = 'reading' | 'listening' | 'writing' | 'speaking'

export const skillTabs: { id: SkillId; label: string; index: string }[] = [
  { id: 'reading', label: 'Reading & Từ vựng', index: '01' },
  { id: 'listening', label: 'Listening', index: '02' },
  { id: 'writing', label: 'Writing', index: '03' },
  { id: 'speaking', label: 'Speaking', index: '04' },
]
