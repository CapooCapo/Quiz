import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'
import { isAnswerCorrect, normalizeAnswer } from '../src/features/ielts-final-exam/grading.mjs'
import { buildRuns, removeHighlight } from '../src/features/ielts-final-exam/highlight.mjs'
import { countWords } from '../src/features/ielts-final-exam/logic.mjs'

const transpile = async (path) => {
  const source = await readFile(new URL(path, import.meta.url), 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  }).outputText
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
}

const { readingSets, getReadingSet } = await transpile('../src/features/ielts-final-exam/data/examData.ts')
const { listeningTypes } = await transpile('../src/features/ielts-final-exam/data/listening.ts')
const read = (path) => readFile(new URL(path, import.meta.url), 'utf8')

test('there are seven reading sets, one for each question type, with unique ids', () => {
  assert.equal(readingSets.length, 7)
  assert.equal(new Set(readingSets.map((set) => set.id)).size, 7)
  assert.deepEqual(
    [...new Set(readingSets.map((set) => set.type))].sort(),
    ['completion', 'matching_headings', 'matching_info', 'multiple_choice', 'short_answer', 'tfng', 'ynng'],
  )
})

test('each passage has four labelled paragraphs and about 200 words or more', () => {
  for (const set of readingSets) {
    assert.deepEqual(set.passage.map((paragraph) => paragraph.label), ['A', 'B', 'C', 'D'], `${set.id} labels`)
    const words = set.passage.reduce((sum, paragraph) => sum + countWords(paragraph.text), 0)
    assert.ok(words >= 200 && words <= 400, `${set.id} has ${words} words`)
  }
})

test('every item has a usable answer key, a Vietnamese explanation and valid options', () => {
  const ids = new Set()
  for (const set of readingSets) {
    assert.ok(set.items.length >= 3, `${set.id} needs items`)
    assert.ok(set.tactics.length >= 2, `${set.id} needs tactics`)
    for (const item of set.items) {
      assert.ok(!ids.has(item.id), `duplicate item id ${item.id}`)
      ids.add(item.id)
      assert.ok(item.answers.length > 0, `${item.id} has no answer`)
      assert.match(item.explanation, /[À-ỹ]/u, `${item.id} explanation should be Vietnamese`)
      if (item.kind !== 'text') {
        assert.ok(item.options?.length >= 2, `${item.id} needs options`)
        for (const answer of item.answers) assert.ok(item.options.includes(answer), `${item.id}: "${answer}" is not an option`)
      }
      if (item.kind === 'text') {
        assert.ok(item.wordLimit >= 1, `${item.id} needs a word limit`)
        for (const answer of item.answers) assert.ok(countWords(answer) <= item.wordLimit, `${item.id}: "${answer}" exceeds the limit`)
      }
    }
  }
})

test('multiple-choice set asks for two answers in its multi-select item', () => {
  const multi = getReadingSet('multiple-choice').items.find((item) => item.kind === 'multi')
  assert.equal(multi.answers.length, 2)
})

test('text answers are graded case-insensitively and enforce the word limit', () => {
  assert.equal(normalizeAnswer('March.'), 'march')
  assert.equal(isAnswerCorrect({ kind: 'text', answers: ['40,000', '40000'], wordLimit: 2 }, '40000'), true)
  assert.equal(isAnswerCorrect({ kind: 'text', answers: ['corridors'], wordLimit: 2 }, 'corridors of the city today'), false)
  assert.equal(isAnswerCorrect({ kind: 'text', answers: ['half'], wordLimit: 1 }, ''), false)
})

test('select, choice and multi items compare exact options', () => {
  assert.equal(isAnswerCorrect({ kind: 'select', answers: ['TRUE'] }, 'TRUE'), true)
  assert.equal(isAnswerCorrect({ kind: 'select', answers: ['TRUE'] }, 'FALSE'), false)
  assert.equal(isAnswerCorrect({ kind: 'multi', answers: ['x', 'y'] }, ['y', 'x']), true)
  assert.equal(isAnswerCorrect({ kind: 'multi', answers: ['x', 'y'] }, ['x']), false)
})

test('highlight runs keep the text intact and split around offsets', () => {
  const runs = buildRuns('abcdefgh', [{ id: 'h1', start: 2, end: 5, color: 'yellow' }])
  assert.equal(runs.map((run) => run.text).join(''), 'abcdefgh')
  assert.deepEqual(runs.map((run) => run.color), [null, 'yellow', null])
})

test('a later highlight overrides an overlapping earlier one', () => {
  const runs = buildRuns('abcdef', [
    { id: 'h1', start: 0, end: 4, color: 'yellow' },
    { id: 'h2', start: 2, end: 6, color: 'pink' },
  ])
  assert.deepEqual(runs.map((run) => [run.text, run.color]), [['ab', 'yellow'], ['cdef', 'pink']])
})

test('removing one highlight leaves the others', () => {
  const list = [{ id: 'a' }, { id: 'b' }]
  assert.deepEqual(removeHighlight(list, 'a'), [{ id: 'b' }])
})

test('listening lists the seven question types with a description each', () => {
  assert.equal(listeningTypes.length, 7)
  for (const type of listeningTypes) assert.ok(type.name && type.description, type.name)
})

test('reading routes are statically generated and unknown ids return 404', async () => {
  const page = await read('../app/ielts-final-exam/reading/[exercise]/page.tsx')
  assert.match(page, /generateStaticParams/)
  assert.match(page, /dynamicParams = false/)
  assert.match(page, /notFound\(\)/)
})

test('theme tokens exist for both palettes and feedback uses green and red tokens', async () => {
  const css = await read('../app/ielts-final-exam/tailwind.css')
  assert.match(css, /:root\[data-theme='dark'\]/)
  assert.match(css, /prefers-color-scheme: dark/)
  for (const token of ['--fe-success', '--fe-danger', '--fe-paper', '--fe-ink']) assert.match(css, new RegExp(token))
  const quiz = await read('../src/features/ielts-final-exam/components/VocabularyQuiz.tsx')
  assert.match(quiz, /border-success bg-success-soft text-success/)
})

test('Wordcraft links to the IELTS Final Exam product', async () => {
  const app = await read('../src/App.tsx')
  assert.match(app, /href="\/ielts-final-exam"/)
})
