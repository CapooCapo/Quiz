import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'
import {
  buildVocabularySession,
  checkWordLimit,
  countWords,
  formatSeconds,
  hasConclusionLanguage,
  stageForIndex,
} from '../src/features/ielts-final-exam/logic.mjs'

const transpile = async (path) => {
  const source = await readFile(new URL(path, import.meta.url), 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  }).outputText
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
}

const vocabBase = await transpile('../src/features/ielts-final-exam/data/vocabulary.ts')
const vocabExtra = await transpile('../src/features/ielts-final-exam/data/vocabularyExtra.ts')
const vocabularyTopics = vocabBase.vocabularyTopics
const vocabularyWords = [...vocabBase.baseVocabularyWords, ...vocabExtra.extraVocabularyWords]
const { speakingTopics } = await transpile('../src/features/ielts-final-exam/data/speaking.ts')
const pageSource = await readFile(new URL('../app/ielts-final-exam/layout.tsx', import.meta.url), 'utf8')
const headerSource = await readFile(new URL('../src/features/ielts-final-exam/components/FinalExamHeader.tsx', import.meta.url), 'utf8')
const listeningSource = await readFile(new URL('../src/features/ielts-final-exam/components/ListeningPanel.tsx', import.meta.url), 'utf8')

test('vocabulary covers every topic and holds the original words plus the VLU slide list', () => {
  assert.equal(vocabularyTopics.length, 16)
  assert.ok(vocabularyWords.length >= 100, `found ${vocabularyWords.length} words`)
  for (const topic of vocabularyTopics) {
    assert.ok(vocabularyWords.some((word) => word.topicId === topic.id), `topic ${topic.id} has no words`)
  }
  assert.equal(new Set(vocabularyWords.map((word) => word.id)).size, vocabularyWords.length, 'word ids must be unique')
})

test('every vocabulary word has 4 distinct choices in both modes and a Vietnamese explanation', () => {
  for (const word of vocabularyWords) {
    assert.equal(word.distractorsEn.length, 3, `${word.id} needs 3 English distractors`)
    assert.equal(word.distractorsVi.length, 3, `${word.id} needs 3 Vietnamese distractors`)
    assert.ok(!word.distractorsEn.includes(word.word), `${word.id} distractor repeats the answer`)
    assert.ok(!word.distractorsVi.includes(word.meaningVi), `${word.id} distractor repeats the meaning`)
    for (const cloze of [word.context, word.grammar]) {
      assert.equal(new Set(cloze.options).size, 4, `${word.id} options must be 4 distinct values`)
      assert.ok(cloze.options.includes(cloze.answer), `${word.id} answer missing from options`)
      assert.ok(cloze.sentence.includes('___') || cloze.sentence.includes(cloze.answer), `${word.id} sentence needs a blank`)
      assert.match(cloze.explanation, /[À-ỹ]/u, `${word.id} explanation should be Vietnamese`)
    }
  }
})

test('vocabulary session is 10 unique words split 5 and 5 for the reverse stage', () => {
  let seed = 7
  const random = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 }
  const session = buildVocabularySession(vocabularyWords, 10, random)
  assert.equal(session.items.length, 10)
  assert.equal(session.split, 5)
  assert.equal(new Set(session.items.map((item) => item.id)).size, 10)
  assert.deepEqual([0, 4, 5, 9].map((index) => stageForIndex(index, session.split)), [1, 1, 2, 2])
})

test('a topic with fewer words produces a shorter session instead of repeating words', () => {
  const topicPool = vocabularyWords.filter((word) => word.topicId === 4)
  const session = buildVocabularySession(topicPool, 10)
  assert.equal(session.items.length, topicPool.length)
  assert.equal(new Set(session.items.map((item) => item.id)).size, session.items.length)
})

test('speaking has 15 topics, two Part 1 questions, four suggested words and a model answer', () => {
  assert.equal(speakingTopics.length, 15)
  for (const topic of speakingTopics) {
    assert.equal(topic.part1.length, 2, `topic ${topic.id} Part 1`)
    assert.equal(topic.suggestedWords.length, 4, `topic ${topic.id} words`)
    assert.ok(countWords(topic.sampleAnswer) >= 50, `topic ${topic.id} sample answer too short`)
    assert.ok(topic.suggestedWords.every((item) => topic.sampleAnswer.toLowerCase().includes(item.word.toLowerCase().split(' ')[0])), `topic ${topic.id} sample should use suggested words`)
  }
})

test('word-limit validator and conclusion detector', () => {
  assert.equal(countWords('  one two  three '), 3)
  assert.equal(checkWordLimit('strengthen the bond', 2).ok, false)
  assert.equal(checkWordLimit('bond', 2).ok, true)
  assert.equal(checkWordLimit('   ', 2).ok, false)
  assert.equal(hasConclusionLanguage('In conclusion, the trend is clear.'), true)
  assert.equal(hasConclusionLanguage('Overall, the figure rose.'), false)
})

test('timer formats seconds as mm:ss', () => {
  assert.equal(formatSeconds(40 * 60), '40:00')
  assert.equal(formatSeconds(119), '01:59')
  assert.equal(formatSeconds(-3), '00:00')
})

test('the product is served at its own route with an IELTS Final Exam header', () => {
  assert.match(pageSource, /import '\.\/tailwind\.css'/)
  assert.match(headerSource, />\s*IELTS\s*<span[^>]*>Final Exam<\/span>/)
  assert.match(headerSource, /aria-current/)
})

test('listening is a structure-only page: no audio playback and a 40-minute timer', () => {
  assert.doesNotMatch(listeningSource, /<audio|speechSynthesis|new Audio/)
  assert.match(listeningSource, /CountdownTimer label="Thời gian làm bài" seconds=\{40 \* 60\}/)
})

test('every vocabulary word has a Vietnamese translation of its example sentence', async () => {
  const translations = await transpile('../src/features/ielts-final-exam/data/vocabularyExamplesVi.ts')
  const map = translations.exampleTranslationsVi
  const missing = vocabularyWords.filter((word) => !map[word.id]).map((word) => word.id)
  assert.deepEqual(missing, [], 'missing Vietnamese example translations')
  for (const word of vocabularyWords) assert.match(map[word.id], /[À-ỹ]/u, `${word.id} translation should be Vietnamese`)
})
