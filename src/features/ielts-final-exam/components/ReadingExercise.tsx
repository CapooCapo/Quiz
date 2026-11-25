'use client'

import { useId, useMemo, useState } from 'react'
import type { ExerciseItem, ReadingSet } from '../data/examData'
import { countWords } from '../logic.mjs'
import { isAnswerCorrect } from '../grading.mjs'
import { CountdownTimer } from './CountdownTimer'
import { PassageViewer, type Highlight } from './PassageViewer'

type Answers = Record<string, string | string[]>

const fieldClass = 'w-full rounded-lg border border-paper-soft bg-paper-soft px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const emptyValue = (item: ExerciseItem): string | string[] => (item.kind === 'multi' ? [] : '')

export function ReadingExerciseView({ set }: { set: ReadingSet }) {
  const [answers, setAnswers] = useState<Answers>({})
  const [submitted, setSubmitted] = useState(false)
  const [highlights, setHighlights] = useState<Highlight[]>([])
  const groupName = useId()

  const results = useMemo(
    () => set.items.map((item) => ({ item, correct: isAnswerCorrect(item, answers[item.id] ?? emptyValue(item)) })),
    [set, answers],
  )
  const score = results.filter((result) => result.correct).length

  const setAnswer = (id: string, value: string | string[]) => setAnswers((current) => ({ ...current, [id]: value }))

  const addHighlight = (highlight: Omit<Highlight, 'id'>) => {
    setHighlights((current) => [...current, { ...highlight, id: `${Date.now()}-${current.length}-${Math.random().toString(36).slice(2, 7)}` }])
  }
  const removeHighlight = (id: string) => setHighlights((current) => current.filter((item) => item.id !== id))

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{set.topic}</p>
          <h1 className="mt-1 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{set.title}</h1>
          <p className="mt-1 text-sm text-muted">{set.typeName}</p>
        </div>
        <CountdownTimer label="Thời gian gợi ý · 20 phút" seconds={20 * 60} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <section aria-labelledby={`${groupName}-passage`} className="rounded-xl border border-paper-soft bg-paper p-5 lg:sticky lg:top-24">
          <h2 id={`${groupName}-passage`} className="mb-3 font-display text-lg font-bold">Bài đọc</h2>
          <PassageViewer
            paragraphs={set.passage}
            highlights={highlights}
            onAdd={addHighlight}
            onRemove={removeHighlight}
            onClearAll={() => setHighlights([])}
          />
        </section>

        <section aria-labelledby={`${groupName}-questions`} className="space-y-4">
          <div className="rounded-xl border border-paper-soft bg-paper p-4">
            <h2 id={`${groupName}-questions`} className="font-display text-base font-bold">Hướng dẫn</h2>
            <p className="mt-1.5 text-sm leading-relaxed">{set.instruction}</p>
            <details className="mt-3 text-sm">
              <summary className="cursor-pointer font-bold text-accent">Chiến thuật làm bài</summary>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                {set.tactics.map((tip) => <li key={tip}>{tip}</li>)}
              </ul>
            </details>
          </div>

          {set.items.map((item, index) => (
            <QuestionCard
              key={item.id}
              number={index + 1}
              item={item}
              value={answers[item.id] ?? emptyValue(item)}
              onChange={(next) => setAnswer(item.id, next)}
              submitted={submitted}
              correct={results[index].correct}
              name={`${groupName}-${item.id}`}
            />
          ))}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {!submitted ? (
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="rounded-lg bg-accent px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
              >
                Nộp bài & Xem giải thích
              </button>
            ) : (
              <>
                <p role="status" className={`rounded-lg px-4 py-2.5 text-sm font-bold ${score === set.items.length ? 'bg-success-soft text-success' : 'bg-danger-soft text-danger'}`}>
                  Đúng {score}/{set.items.length} câu
                </p>
                <button type="button" onClick={reset} className="rounded-lg border border-paper-soft bg-paper px-4 py-2.5 text-sm font-bold text-ink hover:border-orange">
                  Làm lại
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

function QuestionCard({ number, item, value, onChange, submitted, correct, name }: {
  number: number
  item: ExerciseItem
  value: string | string[]
  onChange: (next: string | string[]) => void
  submitted: boolean
  correct: boolean
  name: string
}) {
  const stateClass = !submitted
    ? 'border-paper-soft bg-paper'
    : correct
      ? 'border-success bg-success-soft'
      : 'border-danger bg-danger-soft'
  const words = typeof value === 'string' ? countWords(value) : 0
  const overLimit = item.kind === 'text' && item.wordLimit !== undefined && words > item.wordLimit

  return (
    <article className={`rounded-xl border p-4 transition-colors ${stateClass}`}>
      <div className="flex items-start gap-3">
        <span className="font-display text-sm font-extrabold text-accent">{number}</span>
        <div className="min-w-0 flex-1 space-y-3">
          <p className="text-sm font-semibold leading-relaxed">{item.prompt}</p>

          {item.kind === 'text' && (
            <div>
              <label className="sr-only" htmlFor={name}>Đáp án câu {number}</label>
              <input
                id={name}
                type="text"
                value={typeof value === 'string' ? value : ''}
                disabled={submitted}
                onChange={(event) => onChange(event.target.value)}
                className={fieldClass}
                placeholder={item.wordLimit ? `Tối đa ${item.wordLimit} từ` : undefined}
              />
              {item.wordLimit !== undefined && (
                <p className={`mt-1 text-xs ${overLimit ? 'font-bold text-danger' : 'text-muted'}`}>
                  {words}/{item.wordLimit} từ{overLimit ? ' — vượt giới hạn' : ''}
                </p>
              )}
            </div>
          )}

          {item.kind === 'select' && (
            <select
              id={name}
              aria-label={`Đáp án câu ${number}`}
              value={typeof value === 'string' ? value : ''}
              disabled={submitted}
              onChange={(event) => onChange(event.target.value)}
              className={fieldClass}
            >
              <option value="">Chọn đáp án…</option>
              {item.options?.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          )}

          {item.kind === 'choice' && (
            <fieldset className="space-y-2">
              <legend className="sr-only">Câu {number}</legend>
              {item.options?.map((option) => (
                <label key={option} className="flex cursor-pointer items-start gap-2.5 text-sm">
                  <input
                    type="radio"
                    name={name}
                    value={option}
                    checked={value === option}
                    disabled={submitted}
                    onChange={() => onChange(option)}
                    className="mt-1 accent-[var(--fe-accent)]"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>
          )}

          {item.kind === 'multi' && (
            <fieldset className="space-y-2">
              <legend className="sr-only">Câu {number}: chọn hai đáp án</legend>
              {item.options?.map((option) => {
                const list = Array.isArray(value) ? value : []
                return (
                  <label key={option} className="flex cursor-pointer items-start gap-2.5 text-sm">
                    <input
                      type="checkbox"
                      checked={list.includes(option)}
                      disabled={submitted}
                      onChange={(event) => onChange(event.target.checked ? [...list, option] : list.filter((entry) => entry !== option))}
                      className="mt-1 accent-[var(--fe-accent)]"
                    />
                    <span>{option}</span>
                  </label>
                )
              })}
            </fieldset>
          )}

          {submitted && (
            <div className="space-y-1.5 border-t border-paper-soft pt-3 text-sm">
              <p className={`font-bold ${correct ? 'text-success' : 'text-danger'}`}>
                {correct ? '✓ Chính xác' : '✕ Chưa đúng'}
              </p>
              {!correct && (
                <p>Đáp án đúng: <span className="font-bold text-success">{item.answers.join(' / ')}</span></p>
              )}
              <p className="text-muted leading-relaxed">{item.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
