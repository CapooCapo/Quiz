'use client'

import { startTransition, useEffect, useMemo, useState, type ReactNode } from 'react'
import { sampleWithoutReplacement } from '../../quiz-one/logic.mjs'
import { buildVocabularySession, stageForIndex } from '../logic.mjs'
import { vocabularyTopics, vocabularyWords, type IllustrationKey, type VocabularyWord } from '../data/vocabulary'

export type VocabularyMode = 1 | 2

type Question = {
  index: number
  stage: 1 | 2
  promptKind: 'vi' | 'en' | 'sentence'
  promptText: string
  promptDetail: string
  illustration?: IllustrationKey
  choices: string[]
  correct: string
  explanation: string
}

type Phase = 'setup' | 'playing' | 'done'

const MISSED_KEY = 'ielts-final-exam-missed-v1'
const OPTION_LABELS = ['A', 'B', 'C', 'D']
const SESSION_SIZE = 10

function buildQuestion(word: VocabularyWord, mode: VocabularyMode, stage: 1 | 2, index: number): Question {
  const shuffle = (values: string[]) => sampleWithoutReplacement(values, values.length)
  if (mode === 1 && stage === 1) {
    return {
      index, stage, promptKind: 'vi', promptText: word.meaningVi, promptDetail: `Từ loại: ${word.partOfSpeech}`,
      illustration: word.illustration, choices: shuffle([word.word, ...word.distractorsEn]), correct: word.word,
      explanation: `${word.word} /${word.ipa.replace(/\//g, '')}/ (${word.partOfSpeech}) nghĩa là “${word.meaningVi}”.`,
    }
  }
  if (mode === 1) {
    return {
      index, stage, promptKind: 'en', promptText: word.word, promptDetail: `${word.ipa} · ${word.partOfSpeech}`,
      choices: shuffle([word.meaningVi, ...word.distractorsVi]), correct: word.meaningVi,
      explanation: `${word.word} (${word.partOfSpeech}) nghĩa là “${word.meaningVi}”. Đây là nghĩa đúng trong ngữ cảnh học thuật.`,
    }
  }
  const cloze = stage === 1 ? word.context : word.grammar
  return {
    index, stage, promptKind: 'sentence', promptText: cloze.sentence,
    promptDetail: stage === 1 ? 'Chọn từ phù hợp về nghĩa và ngữ cảnh.' : 'Chọn dạng từ đúng về ngữ pháp.',
    choices: shuffle(cloze.options), correct: cloze.answer,
    explanation: `${cloze.explanation} Từ cần nhớ: ${word.word}.`,
  }
}

function Illustration({ kind }: { kind: IllustrationKey }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const shapes: Record<IllustrationKey, ReactNode> = {
    family: <><circle cx="30" cy="30" r="8" {...common} /><circle cx="60" cy="26" r="8" {...common} /><path d="M18 62c0-10 6-16 12-16s12 6 12 16M46 58c0-10 6-16 12-16s12 6 12 16" {...common} /></>,
    book: <><path d="M16 22h22a8 8 0 0 1 8 8v40a6 6 0 0 0-6-6H16z M70 22H48a8 8 0 0 0-8 8v40a6 6 0 0 1 6-6h24z" {...common} /></>,
    briefcase: <><rect x="16" y="34" width="64" height="40" rx="6" {...common} /><path d="M38 34v-8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v8M16 52h64" {...common} /></>,
    coffee: <><path d="M22 40h42v14a16 16 0 0 1-16 16h-10a16 16 0 0 1-16-16z M64 46h4a6 6 0 0 1 0 12h-4 M34 26c-4-4 4-6 0-12 M46 26c-4-4 4-6 0-12" {...common} /></>,
    plane: <><path d="M16 50l56-16-12 30-12-10-10 6 2-12z" {...common} /></>,
    leaf: <><path d="M22 74C22 40 44 22 76 22c0 32-18 52-54 52z M22 74l30-30" {...common} /></>,
    globe: <><circle cx="48" cy="48" r="30" {...common} /><path d="M18 48h60M48 18c-12 14-12 46 0 60M48 18c12 14 12 46 0 60" {...common} /></>,
    music: <><path d="M40 70V26l32-8v44" {...common} /><circle cx="32" cy="70" r="8" {...common} /><circle cx="64" cy="62" r="8" {...common} /></>,
    run: <><circle cx="56" cy="22" r="7" {...common} /><path d="M44 42l12-8 8 10 12 6M44 42l-10 18-12 6M56 34l-8 14 10 18" {...common} /></>,
    phone: <><rect x="32" y="14" width="32" height="68" rx="6" {...common} /><path d="M44 72h8" {...common} /></>,
    shirt: <><path d="M36 18l-18 10 8 18 8-4v40h32V42l8 4 8-18-18-10c-2 6-6 10-12 10s-10-4-12-10z" {...common} /></>,
  }
  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24 text-accent" role="img" aria-label={`Minh họa: ${kind}`}>
      {shapes[kind]}
    </svg>
  )
}

export function VocabularyQuiz({ mode }: { mode: VocabularyMode }) {
  const [topicFilter, setTopicFilter] = useState<number | 'all'>('all')
  const [phase, setPhase] = useState<Phase>('setup')
  const [session, setSession] = useState<VocabularyWord[]>([])
  const [split, setSplit] = useState(5)
  const [question, setQuestion] = useState<Question | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [missed, setMissed] = useState<string[]>([])
  const [savedMisses, setSavedMisses] = useState<string[]>([])

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(MISSED_KEY) ?? '[]')
      if (Array.isArray(saved)) startTransition(() => setSavedMisses(saved.filter((id): id is string => typeof id === 'string')))
    } catch { /* Ignore malformed history and keep the quiz usable. */ }
  }, [])

  const pool = useMemo(
    () => (topicFilter === 'all' ? vocabularyWords : vocabularyWords.filter((word) => word.topicId === topicFilter)),
    [topicFilter],
  )
  const plannedCount = Math.min(SESSION_SIZE, pool.length)

  const start = () => {
    const built = buildVocabularySession(pool, SESSION_SIZE)
    if (!built.items.length) return
    setSession(built.items)
    setSplit(built.split)
    setScore(0)
    setMissed([])
    setSelected(null)
    setQuestion(buildQuestion(built.items[0], mode, stageForIndex(0, built.split), 0))
    setPhase('playing')
  }

  const choose = (choice: string) => {
    if (!question || selected !== null) return
    setSelected(choice)
    if (choice === question.correct) {
      setScore((value) => value + 1)
    } else {
      setMissed((value) => [...value, session[question.index].id])
    }
  }

  const finish = (finalMissed: string[]) => {
    const merged = Array.from(new Set([...savedMisses, ...finalMissed]))
    setSavedMisses(merged)
    try { localStorage.setItem(MISSED_KEY, JSON.stringify(merged)) } catch { /* Keep the result for this visit only. */ }
  }

  const next = () => {
    if (!question) return
    const nextIndex = question.index + 1
    if (nextIndex >= session.length) {
      setPhase('done')
      setQuestion(null)
      finish(missed)
      return
    }
    setSelected(null)
    setQuestion(buildQuestion(session[nextIndex], mode, stageForIndex(nextIndex, split), nextIndex))
  }

  const wordById = (id: string) => vocabularyWords.find((word) => word.id === id)
  const sessionMissedWords = missed.map(wordById).filter((word): word is VocabularyWord => Boolean(word))
  const isBanner = question !== null && question.stage === 2 && question.index === split

  if (phase === 'setup') {
    return (
      <div className="space-y-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            {mode === 1 ? 'Mode 1 · Từ vựng theo nghĩa' : 'Mode 2 · Điền khuyết ngữ cảnh và ngữ pháp'}
          </p>
          <p className="mt-2 text-sm text-muted">
            {mode === 1
              ? 'Câu 1–5: nghĩa tiếng Việt và minh họa → chọn từ tiếng Anh. Câu 6–10: đảo chiều, từ tiếng Anh và IPA → chọn nghĩa tiếng Việt.'
              : 'Câu 1–5: chọn từ đúng về nghĩa trong câu. Câu 6–10: chọn dạng từ đúng về ngữ pháp.'}
          </p>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-bold">Chủ đề</legend>
          <div className="flex flex-wrap gap-2">
            {(['all', ...vocabularyTopics.map((topic) => topic.id)] as const).map((value) => {
              const label = value === 'all' ? 'Tất cả' : vocabularyTopics.find((topic) => topic.id === value)?.name ?? ''
              const active = topicFilter === value
              return (
                <button
                  key={String(value)}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTopicFilter(value)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${active ? 'border-accent bg-accent text-paper' : 'border-paper-soft bg-paper text-ink hover:border-orange'}`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </fieldset>

        {pool.length < SESSION_SIZE && (
          <p role="status" className="rounded-lg bg-danger-soft px-4 py-3 text-sm text-danger">
            Chủ đề này hiện có {pool.length} từ, nên phiên sẽ có {plannedCount} câu. Chọn “Tất cả” để có đủ 10 câu.
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={start}
            disabled={pool.length === 0}
            className="rounded-lg bg-accent px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
          >
            Bắt đầu phiên {plannedCount} câu
          </button>
          <span className="text-sm text-muted">Tổng {pool.length} từ trong chủ đề đã chọn.</span>
        </div>

        {savedMisses.length > 0 && (
          <section aria-labelledby={`missed-${mode}`} className="rounded-xl border border-paper-soft bg-paper p-4">
            <h3 id={`missed-${mode}`} className="font-display text-base font-bold">Từ hay sai ({savedMisses.length})</h3>
            <ul className="mt-2 grid gap-1.5 text-sm sm:grid-cols-2">
              {savedMisses.map(wordById).filter((word): word is VocabularyWord => Boolean(word)).map((word) => (
                <li key={word.id} className="rounded-md bg-mint px-3 py-1.5">
                  <span className="font-bold">{word.word}</span> <span className="text-muted">— {word.meaningVi}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    )
  }

  if (phase === 'done') {
    const total = session.length
    return (
      <div className="space-y-5">
        <div className="rounded-xl bg-mint p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Kết quả phiên</p>
          <p className="mt-2 font-display text-4xl font-extrabold">{score}/{total}</p>
          <p className="mt-1 text-sm text-muted">{score === total ? 'Làm đúng toàn bộ phiên. Tiếp tục với vòng mới.' : 'Ôn lại các từ bên dưới trước khi làm vòng mới.'}</p>
        </div>

        {sessionMissedWords.length > 0 ? (
          <section aria-labelledby={`review-${mode}`}>
            <h3 id={`review-${mode}`} className="font-display text-base font-bold">Cần ôn lại</h3>
            <ul className="mt-2 space-y-2">
              {sessionMissedWords.map((word) => (
                <li key={word.id} className="rounded-lg border border-paper-soft bg-paper px-4 py-3 text-sm">
                  <p className="font-bold">{word.word} <span className="font-normal text-muted">{word.ipa} · {word.partOfSpeech}</span></p>
                  <p className="text-muted">{word.meaningVi}</p>
                  <p className="mt-1 italic text-ink">{word.context.sentence.replace('___', word.word)}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="text-sm text-muted">Không có từ nào cần ôn lại trong phiên này.</p>
        )}

        <button
          type="button"
          onClick={start}
          className="rounded-lg bg-accent px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          Làm vòng mới
        </button>
        <button type="button" onClick={() => setPhase('setup')} className="ml-3 text-sm font-bold text-accent underline-offset-4 hover:underline">
          Đổi chủ đề
        </button>
      </div>
    )
  }

  if (!question) return null
  const answered = selected !== null
  const isLast = question.index === session.length - 1

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="font-bold">Câu {question.index + 1}/{session.length}</p>
        <p className="text-muted">Giai đoạn {question.stage}: {question.stage === 1 ? (mode === 1 ? 'Việt → Anh' : 'Ngữ nghĩa & ngữ cảnh') : (mode === 1 ? 'Anh → Việt' : 'Ngữ pháp & từ loại')}</p>
        <p className="font-bold">Điểm: {score}</p>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-soft" aria-hidden="true">
        <div className="h-full bg-accent transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${((question.index + (answered ? 1 : 0)) / session.length) * 100}%` }} />
      </div>

      {isBanner && (
        <p role="status" className="rounded-lg bg-orange/20 px-4 py-3 text-sm font-bold text-accent-strong">
          Đảo chiều luyện phản xạ! {mode === 1 ? 'Từ tiếng Anh và IPA → chọn nghĩa tiếng Việt.' : 'Chọn dạng từ đúng ngữ pháp.'}
        </p>
      )}

      <div className="rounded-xl border border-paper-soft bg-paper p-6 text-center">
        {question.promptKind === 'vi' && question.illustration && <div className="mx-auto mb-3 flex justify-center"><Illustration kind={question.illustration} /></div>}
        {question.promptKind === 'sentence' ? (
          <p className="text-left font-display text-lg font-bold leading-relaxed">{question.promptText}</p>
        ) : (
          <p className="font-display text-2xl font-extrabold">{question.promptText}</p>
        )}
        <p className="mt-2 text-sm text-muted">{question.promptDetail}</p>
      </div>

      <ul className="grid gap-2 sm:grid-cols-2">
        {question.choices.map((choice, position) => {
          const isCorrect = choice === question.correct
          const isChosen = choice === selected
          const state = answered ? (isCorrect ? 'correct' : isChosen ? 'wrong' : 'idle') : 'idle'
          const stateClass = state === 'correct'
            ? 'border-success bg-success-soft text-success'
            : state === 'wrong'
              ? 'border-danger bg-danger-soft text-danger'
              : 'border-paper-soft bg-paper text-ink hover:border-orange'
          return (
            <li key={choice}>
              <button
                type="button"
                aria-disabled={answered}
                onClick={() => choose(choice)}
                className={`flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${answered ? 'cursor-default' : 'cursor-pointer'} ${stateClass}`}
              >
                <span><span className="mr-2 font-bold text-muted">{OPTION_LABELS[position]}</span>{choice}</span>
                {state === 'correct' && <span aria-label="Đúng">✓</span>}
                {state === 'wrong' && <span aria-label="Sai">✕</span>}
              </button>
            </li>
          )
        })}
      </ul>

      {answered && (
        <div className="space-y-3">
          <p role="status" className={`rounded-lg px-4 py-3 text-sm font-bold ${selected === question.correct ? 'bg-success-soft text-success' : 'bg-danger-soft text-danger'}`}>
            {selected === question.correct ? 'Chính xác.' : `Chưa đúng. Đáp án: ${question.correct}.`}
          </p>
          <p className="rounded-lg border border-paper-soft bg-paper px-4 py-3 text-sm leading-relaxed">{question.explanation}</p>
          <button
            type="button"
            onClick={next}
            className="rounded-lg bg-accent px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
          >
            {isLast ? 'Xem kết quả' : 'Câu tiếp theo'}
          </button>
        </div>
      )}
    </div>
  )
}
