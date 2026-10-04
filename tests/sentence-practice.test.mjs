import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const appSource = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')

const sentenceAnswerMarkup = appSource.match(/<div className="sentence-answer">([\s\S]*?)<\/div>/)?.[1] ?? ''
const incorrectSentenceFeedback = appSource.match(/\{sentenceCheck !== null && ([\s\S]*?)<\/p>\}/)?.[1] ?? ''

test('a selected sentence token can be removed individually and returned to the tray', () => {
  const answerTokenButton = sentenceAnswerMarkup.match(/sentenceAnswer\.map\(\(token, i\) => <button([^>]*)>/)?.[1] ?? ''
  assert.match(answerTokenButton, /onClick=/, 'answer token buttons need an individual removal action')
  assert.match(answerTokenButton, /sentenceTokens/, 'removing a token must return it to the available tray')
})

test('checking an incorrect sentence reveals the expected sentence', () => {
  assert.match(incorrectSentenceFeedback, /sentenceExpected/, 'incorrect sentence feedback should reveal the expected sentence')
})

test('an unrestorable practice session shows accessible recovery instead of a blank page', () => {
  const recovery = appSource.match(/isPracticePage\s*&&\s*mode\s*===\s*'idle'\s*\?\s*<section\b([^>]*)>([\s\S]*?)<\/section>/)
  assert.ok(recovery, 'the idle practice route needs a visible recovery section when no session was restored')

  const [, sectionAttributes, sectionContent] = recovery
  const labelledBy = sectionAttributes.match(/aria-labelledby="([^"]+)"/)?.[1]
  assert.ok(labelledBy, 'the recovery section must have an accessible name')
  assert.match(sectionContent, new RegExp(`<h[1-6][^>]*id="${labelledBy}"`), 'the recovery section name must come from a visible heading')
  assert.match(sectionContent, /<button\b[^>]*onClick=\{backToEnglish\}[^>]*>[\s\S]*?Back to English practice/i, 'the recovery section must offer an accessible return to English practice action')
})

test('a partially stale saved deck falls back to idle practice recovery', () => {
  const restoration = appSource.slice(appSource.indexOf('const deck = ids.map'), appSource.indexOf('setSelected(deck.map'))
  assert.match(restoration, /if\s*\([\s\S]*?deck\.length\s*!==\s*ids\.length[\s\S]*?\)\s*\{\s*setMode\('idle'\)/, 'restoration must send the session to idle recovery when any saved ID no longer resolves')
})
