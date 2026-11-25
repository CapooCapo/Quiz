import { countWords } from './logic.mjs'

/** Lowercase, drop punctuation and collapse spaces so “March.” matches “march”. */
export function normalizeAnswer(value) {
  return value.toLowerCase().replace(/[.,;:!?'’"]/g, '').replace(/\s+/g, ' ').trim()
}

/**
 * @param {{ kind: string; answers: string[]; wordLimit?: number }} item
 * @param {string | string[]} value text for text/select/choice, string[] for multi
 * @returns {boolean}
 */
export function isAnswerCorrect(item, value) {
  if (item.kind === 'multi') {
    const picked = Array.isArray(value) ? [...value].sort() : []
    const expected = [...item.answers].sort()
    return picked.length === expected.length && picked.every((choice, index) => choice === expected[index])
  }
  const text = typeof value === 'string' ? value : ''
  if (item.kind === 'text') {
    if (item.wordLimit !== undefined && countWords(text) > item.wordLimit) return false
    const normalized = normalizeAnswer(text)
    return normalized !== '' && item.answers.some((answer) => normalizeAnswer(answer) === normalized)
  }
  return item.answers.includes(text)
}
