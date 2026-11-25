import { sampleWithoutReplacement } from '../quiz-one/logic.mjs'

/**
 * Chia một phiên 10 câu thành hai giai đoạn 5 câu.
 * Câu 1..split: giai đoạn 1 (Việt → Anh hoặc ngữ nghĩa); phần còn lại: giai đoạn 2 (đảo chiều hoặc ngữ pháp).
 * @template T
 * @param {readonly T[]} pool
 * @param {number} [requested]
 * @param {() => number} [random]
 * @returns {{ items: T[]; split: number }}
 */
export function buildVocabularySession(pool, requested = 10, random = Math.random) {
  const count = Math.min(requested, pool.length)
  const items = sampleWithoutReplacement(pool, count, random)
  return { items, split: Math.ceil(count / 2) }
}

/** @param {number} index @param {number} split */
export function stageForIndex(index, split) {
  return index < split ? 1 : 2
}

/** @param {string} text */
export function countWords(text) {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

/**
 * @param {string} answer
 * @param {number} maxWords
 * @returns {{ count: number; ok: boolean; message: string }}
 */
export function checkWordLimit(answer, maxWords) {
  const count = countWords(answer)
  if (count === 0) return { count, ok: false, message: 'Hãy nhập đáp án.' }
  if (count > maxWords) return { count, ok: false, message: `Đáp án vượt quá ${maxWords} từ (đang có ${count} từ).` }
  return { count, ok: true, message: `Đúng giới hạn: ${count}/${maxWords} từ.` }
}

/** Phát hiện câu kết luận, vốn không được phép trong Task 1. */
const CONCLUSION_PATTERN = /\b(in conclusion|to conclude|in summary|to sum up|in closing)\b/i

/** @param {string} text */
export function hasConclusionLanguage(text) {
  return CONCLUSION_PATTERN.test(text)
}

/** @param {number} seconds */
export function formatSeconds(seconds) {
  const safe = Math.max(0, Math.floor(seconds))
  const minutes = Math.floor(safe / 60)
  const rest = safe % 60
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`
}
