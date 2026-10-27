/** @typedef {import('./data').QuizOneVocabularyItem} QuizOneVocabularyItem */

const VIETNAMESE_STOP_WORDS = new Set([
  'ai', 'bi', 'cac', 'cho', 'co', 'cua', 'duoc', 'gi', 'hoac', 'la', 'lam', 'mot', 'nhung', 'su', 'thu', 'va', 've', 'voi',
])

/** @param {string} value */
export function normalizeMeaning(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLocaleLowerCase('vi')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** @param {string} value */
function contentTokens(value) {
  return normalizeMeaning(value).split(' ').filter((token) => token.length > 1 && !VIETNAMESE_STOP_WORDS.has(token))
}

/**
 * @param {string} answer
 * @param {Pick<QuizOneVocabularyItem, 'meaning' | 'acceptedMeanings'>} item
 */
export function meaningMatches(answer, item) {
  const normalizedAnswer = normalizeMeaning(answer)
  if (!normalizedAnswer) return false

  const accepted = [
    item.meaning,
    ...item.meaning.split(';'),
    ...item.acceptedMeanings,
  ].map(normalizeMeaning).filter(Boolean)

  if (accepted.includes(normalizedAnswer)) return true

  const answerTokens = contentTokens(normalizedAnswer)
  if (!answerTokens.length) return false

  return accepted.some((candidate) => {
    const candidateTokens = contentTokens(candidate)
    const candidateSet = new Set(candidateTokens)
    const allAnswerTokensMatch = answerTokens.every((token) => candidateSet.has(token))
    if (!allAnswerTokensMatch) return false
    if (answerTokens.length >= 2) return true
    return answerTokens[0].length >= 6 && candidateTokens.length <= 2
  })
}

/**
 * @param {string | number} value
 * @param {number} total
 * @returns {{ count: number | null; error: string }}
 */
export function validateQuestionCount(value, total) {
  const raw = typeof value === 'number' ? String(value) : value.trim()
  if (!raw) return { count: null, error: 'Hãy nhập số câu muốn học.' }
  const count = Number(raw)
  if (!Number.isInteger(count) || count < 1) return { count: null, error: 'Số câu phải là số nguyên lớn hơn 0.' }
  if (count > total) return { count: null, error: `Bộ Quiz 1 có tối đa ${total} câu.` }
  return { count, error: '' }
}

/**
 * @template T
 * @param {readonly T[]} items
 * @param {number} count
 * @param {() => number} [random]
 * @returns {T[]}
 */
export function sampleWithoutReplacement(items, count, random = Math.random) {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]]
  }
  return copy.slice(0, Math.min(Math.max(0, count), copy.length))
}

/**
 * @param {QuizOneVocabularyItem} target
 * @param {readonly QuizOneVocabularyItem[]} vocabulary
 * @param {() => number} [random]
 * @returns {QuizOneVocabularyItem[]}
 */
export function makeChoiceOptions(target, vocabulary, random = Math.random) {
  const seenMeanings = new Set([normalizeMeaning(target.meaning)])
  const distractors = sampleWithoutReplacement(
    vocabulary.filter((item) => item.id !== target.id),
    vocabulary.length,
    random,
  ).filter((item) => {
    const normalized = normalizeMeaning(item.meaning)
    if (seenMeanings.has(normalized)) return false
    seenMeanings.add(normalized)
    return true
  }).slice(0, 3)

  if (distractors.length < 3) throw new Error('At least four distinct meanings are required for multiple-choice practice.')
  return sampleWithoutReplacement([target, ...distractors], 4, random)
}

/**
 * @param {boolean} isCorrect
 * @param {number} previousAttempts
 * @returns {{ attempts: number; state: 'retry' | 'revealed'; correct: boolean }}
 */
export function evaluateAttempt(isCorrect, previousAttempts) {
  const attempts = Math.min(2, Math.max(0, previousAttempts) + 1)
  if (isCorrect) return { attempts, state: 'revealed', correct: true }
  return { attempts, state: attempts >= 2 ? 'revealed' : 'retry', correct: false }
}
