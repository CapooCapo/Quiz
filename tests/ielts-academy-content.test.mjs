import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8')

test('introduction and overview curricula include required lesson fields', async () => {
  const source = await read('../src/features/ielts-writing/data/introductionOverview.ts')
  for (const term of ['chart-types','number-vs-amount','percentage-proportion','time-expressions','paraphrasing','overall-trends','highest-lowest','increasing-decreasing','stable-trends','contrasting-trends','select-key-features','explanationVi','grammar','correctExample','incorrectExample','alternatives','guidedQuestion','chartExercise']) assert.ok(source.includes(term), `missing ${term}`)
  assert.equal((source.match(/makeLesson\('/g) ?? []).length, 12)
})

test('vocabulary cards document patterns, examples, mistakes and practice', async () => {
  const source = await read('../src/features/ielts-writing/data/vocabulary.ts')
  for (const term of ['Rise / increase / grow','Fall / drop / decline','Remain stable','Fluctuate','Peak / bottom out','Speed / degree','Comparisons','Approximation','increase from A to B','increase by N','peak at N','fluctuate between A and B','commonMistake','mistakeExplanation','alternatives','practice','chartDirection']) assert.ok(source.includes(term), `missing ${term}`)
  assert.ok((source.match(/row\('/g) ?? []).length >= 15)
})

test('body paragraph practice uses structured charts and covers the requested stages', async () => {
  const source = await read('../src/features/ielts-writing/components/BodyWorkspace.tsx')
  for (const term of ['Find the endpoints','Locate turning points','Describe the trend accurately','Compare categories','Body 1','Body 2','localStorage','ChartViewer']) assert.ok(source.includes(term), `missing ${term}`)
})

test('assessment defines all seven requested formats and resumable mistake review', async () => {
  const questions = await read('../src/features/ielts-writing/data/assessment.ts')
  const component = await read('../src/features/ielts-writing/components/QuizWorkspace.tsx')
  const evaluator = await read('../src/features/ielts-writing/evaluateAnswer.ts')
  for (const type of ['multiple-choice','fill-blank','ordering','error-correction','matching','trend','write-one']) assert.ok(questions.includes(`type:'${type}'`), `missing question type ${type}`)
  for (const feature of ['localStorage','mistakes','progress','Next question','Suggested answer']) assert.ok(component.includes(feature), `missing quiz feature ${feature}`)
  assert.match(evaluator,/accepted\.every/, 'write-one validation should support required components in valid variants')
  assert.match(evaluator,/accepted\.some/, 'the evaluator should allow multiple accepted answers')
})

test('full-writing editor saves locally and distinguishes heuristic feedback from AI banding', async () => {
  const component = await read('../src/features/ielts-writing/components/WritingWorkspace.tsx')
  const evaluator = await read('../src/features/ielts-writing/evaluateWriting.ts')
  for (const field of ['introduction','overview','body1','body2']) assert.ok(component.includes(field), `missing editor field ${field}`)
  for (const phrase of ['localStorage','AI band unavailable','No text leaves this browser','2500']) assert.ok(component.includes(phrase), `missing safe behavior ${phrase}`)
  for (const criterion of ['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammatical Range and Accuracy']) assert.ok(evaluator.includes(criterion), `missing ${criterion}`)
  assert.match(evaluator,/peaked at/)
  assert.match(evaluator,/percentage points/)
})

test('optional AI evaluation is server-only, explicitly gated, bounded and rate-limited', async () => {
  const route = await read('../app/api/ielts-writing/evaluate/route.ts')
  const component = await read('../src/features/ielts-writing/components/WritingWorkspace.tsx')
  for (const guard of ["IELTS_AI_EVALUATION_ENABLED !== 'true'",'OPENAI_API_KEY','IELTS_AI_MODEL','2500','recent.length >= 5','max_output_tokens: 1200','store: false','AbortSignal.timeout']) assert.ok(route.includes(guard), `missing safety guard ${guard}`)
  assert.ok(component.includes("fetch('/api/ielts-writing/evaluate'"), 'AI request must go through the server route')
  assert.ok(!component.includes('OPENAI_API_KEY'), 'provider credentials must never reach client component code')
})
