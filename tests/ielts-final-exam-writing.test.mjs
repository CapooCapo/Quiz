import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'
import { countWords, hasConclusionLanguage } from '../src/features/ielts-final-exam/logic.mjs'

const transpile = async (path) => {
  const source = await readFile(new URL(path, import.meta.url), 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  }).outputText
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
}

const { writingTask1, writingTask2, getWritingTask1, getWritingTask2 } = await transpile('../src/features/ielts-final-exam/data/examData.ts')
const read = (path) => readFile(new URL(path, import.meta.url), 'utf8')
const sum = (values) => values.reduce((total, value) => total + value, 0)

test('task 1 covers all five VLU chart types with a Static or Dynamic label', () => {
  assert.equal(writingTask1.length, 5)
  assert.deepEqual([...new Set(writingTask1.map((item) => item.chart))].sort(), ['bar', 'line', 'multiple', 'pie', 'table'])
  for (const item of writingTask1) assert.ok(['Static', 'Dynamic'].includes(item.period), item.id)
  assert.equal(writingTask1.find((item) => item.chart === 'bar').period, 'Dynamic')
  assert.equal(writingTask1.find((item) => item.chart === 'table').period, 'Static')
})

test('task 2 covers the three essay types', () => {
  assert.equal(writingTask2.length, 3)
  assert.deepEqual([...new Set(writingTask2.map((item) => item.essayType))].sort(), ['advantages', 'discussion', 'opinion'])
})

test('chart data is consistent: series match labels, pies total 100 and tables match headers', () => {
  for (const item of writingTask1) {
    const spec = item.spec
    if (spec.kind === 'bar' || spec.kind === 'line') {
      for (const series of spec.data.series) assert.equal(series.values.length, spec.data.labels.length, `${item.id} ${series.name}`)
    }
    if (spec.kind === 'multiple') {
      for (const series of spec.bar.series) assert.equal(series.values.length, spec.bar.labels.length, item.id)
    }
    const pies = spec.kind === 'pie' || spec.kind === 'multiple' ? spec.pies : []
    for (const pie of pies) assert.equal(sum(pie.slices.map((slice) => slice.value)), 100, `${item.id} ${pie.title}`)
    if (spec.kind === 'table') {
      for (const row of spec.table.rows) assert.equal(row.length, spec.table.headers.length, item.id)
    }
  }
})

test('task 1 model answers reach 150 words and their overview contains no figures', () => {
  for (const item of writingTask1) {
    const words = Object.values(item.model).reduce((total, text) => total + countWords(text), 0)
    assert.ok(words >= 150, `${item.id} has ${words} words`)
    assert.doesNotMatch(item.model.overview, /\d/, `${item.id} overview must not contain figures`)
    assert.equal(hasConclusionLanguage(Object.values(item.model).join(' ')), false, `${item.id} must not contain a conclusion`)
  }
})

test('task 2 model essays reach 250 words and include a conclusion', () => {
  for (const item of writingTask2) {
    const words = Object.values(item.model).reduce((total, text) => total + countWords(text), 0)
    assert.ok(words >= 250, `${item.id} has ${words} words`)
    assert.ok(item.model.conclusion.length > 0, `${item.id} needs a conclusion`)
  }
})

test('every writing item has hint words and a sample sentence', () => {
  for (const item of [...writingTask1, ...writingTask2]) {
    assert.ok(item.hints.words.length >= 4, `${item.id} needs hint words`)
    assert.ok(item.hints.sentence.length > 20, `${item.id} needs a sample sentence`)
  }
})

test('writing routes are statically generated and look up tasks by id', () => {
  assert.equal(getWritingTask1('task1-households-cars').task, 1)
  assert.equal(getWritingTask2('task2-free-education').task, 2)
  assert.equal(getWritingTask1('missing'), undefined)
})

test('writing editor enforces the minimum word counts and shows hints and model answers', async () => {
  const editor = await read('../src/features/ielts-final-exam/components/WritingExercise.tsx')
  assert.match(editor, /minWords = isTask1 \? 150 : 250/)
  assert.match(editor, /Gợi ý/)
  assert.match(editor, /Xem dàn ý & bài mẫu/)
  assert.match(editor, /hasConclusionLanguage/)
})
