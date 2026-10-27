import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'
import { evaluateAttempt, makeChoiceOptions, meaningMatches, normalizeMeaning, sampleWithoutReplacement, validateQuestionCount } from '../src/features/quiz-one/logic.mjs'

const dataSource = await readFile(new URL('../src/features/quiz-one/data.ts', import.meta.url), 'utf8')
const quizUiSource = await readFile(new URL('../src/features/quiz-one/QuizOne.tsx', import.meta.url), 'utf8')
const globalThemeSource = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8')
const quizThemeSource = await readFile(new URL('../src/features/quiz-one/quizOne.module.css', import.meta.url), 'utf8')
const academyThemeSource = await readFile(new URL('../src/features/ielts-writing/academy.module.css', import.meta.url), 'utf8')
const academyUiSource = await readFile(new URL('../src/features/ielts-writing/IELTSWritingAcademy.tsx', import.meta.url), 'utf8')
const globalThemeRules = [...globalThemeSource.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(([, selector, declarations]) => ({
  selector: selector.replace(/\/\*[\s\S]*?\*\//g, '').trim(),
  declarations,
}))
const compiledData = ts.transpileModule(dataSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
}).outputText
const dataModuleUrl = `data:text/javascript;base64,${Buffer.from(compiledData).toString('base64')}`
const { quizOneVocabulary } = await import(dataModuleUrl)

test('Quiz 1 contains exactly 66 unique complete vocabulary records', () => {
  assert.equal(quizOneVocabulary.length, 66)
  assert.equal(new Set(quizOneVocabulary.map((item) => item.id)).size, 66)
  assert.equal(new Set(quizOneVocabulary.map((item) => normalizeMeaning(item.term))).size, 66)

  for (const item of quizOneVocabulary) {
    for (const field of ['id', 'lesson', 'term', 'pronunciation', 'meaning', 'definition', 'example']) {
      assert.ok(item[field].trim(), `${item.id} is missing ${field}`)
    }
    assert.ok(item.acceptedMeanings.length > 0, `${item.id} needs at least one practical typed-answer alternative`)
  }
})

test('question counts accept presets/custom values and reject invalid or oversized values', () => {
  for (const count of [10, 20, 30, 50, 66]) assert.deepEqual(validateQuestionCount(count, 66), { count, error: '' })
  assert.equal(validateQuestionCount('', 66).count, null)
  assert.equal(validateQuestionCount(0, 66).count, null)
  assert.equal(validateQuestionCount(2.5, 66).count, null)
  assert.equal(validateQuestionCount(67, 66).count, null)
})

test('random sampling never duplicates vocabulary records', () => {
  const sample = sampleWithoutReplacement(quizOneVocabulary, 50, () => 0.42)
  assert.equal(sample.length, 50)
  assert.equal(new Set(sample.map((item) => item.id)).size, 50)
})

test('multiple-choice questions always contain four distinct options including the answer', () => {
  const target = quizOneVocabulary[0]
  const options = makeChoiceOptions(target, quizOneVocabulary, () => 0.37)
  assert.equal(options.length, 4)
  assert.ok(options.some((option) => option.id === target.id))
  assert.equal(new Set(options.map((option) => normalizeMeaning(option.meaning))).size, 4)
})

test('a one-question custom session uses the full vocabulary pool for four answer choices', () => {
  const questionSet = sampleWithoutReplacement(quizOneVocabulary, 1, () => 0.23)
  assert.equal(questionSet.length, 1)

  const options = makeChoiceOptions(questionSet[0], quizOneVocabulary, () => 0.61)
  assert.equal(options.length, 4)
  assert.ok(options.some((option) => option.id === questionSet[0].id))
  assert.equal(new Set(options.map((option) => option.id)).size, 4)
  assert.equal(new Set(options.map((option) => normalizeMeaning(option.meaning))).size, 4)
})

test('typed answers normalize case, punctuation, whitespace, Vietnamese accents and concise alternatives', () => {
  const destination = quizOneVocabulary.find((item) => item.term === 'destination')
  assert.equal(meaningMatches('  ĐIỂM ĐẾN!!! ', destination), true)
  assert.equal(meaningMatches('diem den', destination), true)
  assert.equal(meaningMatches('nơi đến', destination), true)
  assert.equal(meaningMatches('đường đi', destination), false)
})

test('a question reveals only after a correct answer or the second wrong attempt', () => {
  assert.deepEqual(evaluateAttempt(false, 0), { attempts: 1, state: 'retry', correct: false })
  assert.deepEqual(evaluateAttempt(false, 1), { attempts: 2, state: 'revealed', correct: false })
  assert.deepEqual(evaluateAttempt(true, 0), { attempts: 1, state: 'revealed', correct: true })
  assert.deepEqual(evaluateAttempt(true, 1), { attempts: 2, state: 'revealed', correct: true })
})

test('runtime routes share the official Catppuccin Latte and Mocha theme tokens', () => {
  for (const color of [
    '#eff1f5', '#e6e9ef', '#dce0e8', '#4c4f69', '#8839ef', '#d20f39', '#40a02b', '#fe640b',
    '#1e1e2e', '#181825', '#11111b', '#cdd6f4', '#cba6f7', '#f38ba8', '#a6e3a1', '#fab387',
  ]) {
    assert.match(globalThemeSource.toLowerCase(), new RegExp(color))
  }
  for (const token of ['--wc-bg', '--wc-surface', '--wc-text', '--wc-accent', '--wc-focus', '--wc-success', '--wc-danger', '--wc-warning']) {
    assert.match(globalThemeSource, new RegExp(token))
  }
  assert.match(quizThemeSource, /--quiz-bg:\s*var\(--wc-bg\)/)
  assert.doesNotMatch(quizThemeSource, /--ctp-base:\s*#/)
  assert.match(academyThemeSource, /\.page \{ background: var\(--wc-bg\); color: var\(--wc-text\); \}/)
})

test('legacy dark-mode rules cannot override shared Catppuccin semantic tokens', () => {
  const darkRules = globalThemeRules.filter(({ selector }) => /:root\[data-theme=(?:"dark"|'dark')\]/.test(selector))
  const legacyRootAliases = /--(?:ink|muted|green|mint|line|paper|orange)\s*:\s*#[0-9a-f]{3,8}\b/i
  const hardCodedColor = /#[0-9a-f]{3,8}\b/i

  for (const { selector, declarations } of darkRules) {
    const isRootTokenRule = /^:root\[data-theme=(?:"dark"|'dark')\]$/.test(selector)
    assert.doesNotMatch(
      declarations,
      isRootTokenRule ? legacyRootAliases : hardCodedColor,
      `legacy dark-mode rule overrides shared theme tokens: ${selector}`,
    )
  }
})

test('every global focus outline resolves through the shared focus token', () => {
  const focusOutlineRules = globalThemeRules.filter(({ selector, declarations }) => (
    selector.includes(':focus-visible') && /(?:^|;)\s*outline\s*:/.test(declarations)
  ))

  assert.ok(focusOutlineRules.length > 0, 'expected an app-wide :focus-visible outline rule')
  for (const { selector, declarations } of focusOutlineRules) {
    assert.match(
      declarations,
      /(?:^|;)\s*outline\s*:\s*[^;]*var\(--wc-focus\)/,
      `focus outline bypasses --wc-focus and can override the semantic rule: ${selector}`,
    )
  }
})

test('dark Quiz accents resolve through the semantic Quiz accent token', () => {
  assert.doesNotMatch(
    quizThemeSource,
    /:global\(:root\[data-theme='dark'\]\)[^{]*\{[^}]*var\(--ctp-(?:lavender|mauve)\)/,
    'dark Quiz accent-bearing selectors must use --quiz-accent instead of a Catppuccin primitive',
  )
})

test('semantic states and IELTS theme controls preserve their assigned roles', () => {
  assert.match(quizUiSource, /className=\{`shell \$\{styles\.quizShell\}`\}/)
  assert.match(quizUiSource, /aria-invalid=\{answerState === 'retry'\}/)
  assert.match(quizThemeSource, /\.wrongOption \{[^}]*var\(--quiz-danger\)/s)
  assert.match(quizThemeSource, /\.correctOption \{[^}]*var\(--quiz-success\)[^}]*var\(--quiz-text\)/s)
  assert.match(academyThemeSource, /\.correctFeedback \{[^}]*var\(--wc-success\)[^}]*var\(--wc-success-bg\)/s)
  assert.match(academyThemeSource, /\.incorrectFeedback \{[^}]*var\(--wc-danger\)[^}]*var\(--wc-danger-bg\)/s)
  assert.match(academyThemeSource, /\.mistakeBox \{[^}]*var\(--wc-warning\)[^}]*var\(--wc-warning-bg\)/s)
  assert.match(academyUiSource, /localStorage\.getItem\(THEME_KEY\)/)
  assert.match(academyUiSource, /document\.documentElement\.dataset\.theme = theme/)
  assert.match(academyUiSource, /className=\{styles\.themeToggle\}/)
  assert.match(academyUiSource, /aria-pressed=\{theme === 'dark'\}/)
})
