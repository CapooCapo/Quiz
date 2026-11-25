'use client'

import { useEffect, useId, useRef, useState, startTransition } from 'react'
import { CHART_NAMES, ESSAY_NAMES, type WritingTask1, type WritingTask2 } from '../data/examData'
import { countWords, hasConclusionLanguage } from '../logic.mjs'
import { ChartBlock } from './WritingCharts'
import { CountdownTimer } from './CountdownTimer'

type Task = WritingTask1 | WritingTask2
type FieldKey = 'introduction' | 'overview' | 'body1' | 'body2' | 'conclusion'
type Drafts = Partial<Record<FieldKey, string>>

const CRITERIA = [
  { name: 'Task Achievement / Response', checks: ['Trả lời đủ yêu cầu của đề; Task 1 nêu đúng xu hướng và số liệu chính.', 'Quan điểm (Task 2) rõ ràng và giữ nhất quán.'] },
  { name: 'Coherence & Cohesion', checks: ['Mỗi đoạn có một ý chính rõ ràng.', 'Dùng từ nối phù hợp, không lạm dụng.'] },
  { name: 'Lexical Resource', checks: ['Dùng từ vựng chính xác, tránh lặp từ.', 'Paraphrase đề bài thay vì chép lại.'] },
  { name: 'Grammatical Range & Accuracy', checks: ['Kết hợp câu đơn và câu phức chính xác.', 'Kiểm tra thì, số ít/số nhiều và mạo từ.'] },
]

const field = (key: FieldKey, name: string, hint: string) => ({ key, name, hint })

export function WritingExercise({ task }: { task: Task }) {
  const isTask1 = task.task === 1
  const minWords = isTask1 ? 150 : 250
  const fields = isTask1
    ? [
        field('introduction', 'Introduction', '1–2 câu, paraphrase đề bài.'),
        field('overview', 'Overview', '1–2 câu, nêu xu hướng và điểm nổi bật. Không đưa số liệu cụ thể.'),
        field('body1', 'Body 1', '3–4 câu, nhóm số liệu thứ nhất kèm dẫn chứng.'),
        field('body2', 'Body 2', '3–4 câu, nhóm số liệu thứ hai kèm dẫn chứng.'),
      ]
    : [
        field('introduction', 'Introduction', 'Paraphrase đề bài và nêu quan điểm của bạn.'),
        field('body1', 'Body 1', 'Luận điểm 1: Main idea → Facts → Explanation → Example → Result.'),
        field('body2', 'Body 2', 'Luận điểm 2 hoặc quan điểm đối lập, theo cùng chuỗi triển khai.'),
        field('conclusion', 'Conclusion', 'Tóm tắt quan điểm, không thêm ý mới.'),
      ]

  const storageKey = `ielts-final-exam-writing-${task.id}-v1`
  const [drafts, setDrafts] = useState<Drafts>({})
  const [activeField, setActiveField] = useState<FieldKey>(fields[0].key as FieldKey)
  const [showHint, setShowHint] = useState(false)
  const [showModel, setShowModel] = useState(false)
  const groupName = useId()
  const refs = useRef<Partial<Record<FieldKey, HTMLTextAreaElement | null>>>({})

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? '{}')
      if (saved && typeof saved === 'object') startTransition(() => setDrafts(saved))
    } catch { /* Start with blank drafts when storage is unavailable. */ }
  }, [storageKey])

  const update = (key: FieldKey, value: string) => {
    setDrafts((current) => {
      const next = { ...current, [key]: value }
      try { localStorage.setItem(storageKey, JSON.stringify(next)) } catch { /* Drafts stay in memory for this visit. */ }
      return next
    })
  }

  const totalWords = countWords(fields.map((item) => drafts[item.key] ?? '').join(' '))
  const enough = totalWords >= minWords
  const conclusionUsed = isTask1 && fields.some((item) => hasConclusionLanguage(drafts[item.key] ?? ''))

  const insertWord = (word: string) => {
    const current = drafts[activeField] ?? ''
    const separator = current && !/\s$/.test(current) ? ' ' : ''
    update(activeField, `${current}${separator}${word}`)
    refs.current[activeField]?.focus()
  }

  const usefulWords = task.hints.words

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            {isTask1 ? `Task 1 · ${CHART_NAMES[task.chart]} · ${task.period} chart` : `Task 2 · ${ESSAY_NAMES[task.essayType]}`}
          </p>
          <h1 className="mt-1 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{task.title}</h1>
        </div>
        <CountdownTimer label={isTask1 ? 'Thời gian Task 1 · 20 phút' : 'Thời gian Task 2 · 40 phút'} seconds={isTask1 ? 20 * 60 : 40 * 60} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Left: prompt, chart, structure and useful language */}
        <section aria-labelledby={`${groupName}-prompt`} className="space-y-5 rounded-xl border border-paper-soft bg-paper p-5 lg:sticky lg:top-24">
          <div>
            <h2 id={`${groupName}-prompt`} className="font-display text-base font-bold">Đề bài</h2>
            <p className="mt-1.5 text-sm leading-relaxed">{task.prompt}</p>
          </div>

          {isTask1 && (
            <div className="rounded-lg border border-paper-soft bg-paper-soft p-3">
              <ChartBlock spec={task.spec} title={task.title} />
              {task.chartNote && <p className="mt-2 text-xs italic text-muted">{task.chartNote}</p>}
            </div>
          )}

          <div>
            <h3 className="font-display text-sm font-bold">Cấu trúc bài viết</h3>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
              {fields.map((item) => <li key={item.key}><span className="font-bold">{item.name}:</span> {item.hint}</li>)}
            </ol>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold">Useful language</h3>
            <p className="mt-1 text-xs text-muted">Bấm vào một cụm để chèn vào ô đang chọn.</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {usefulWords.map((item) => (
                <li key={item.word}>
                  <button
                    type="button"
                    onClick={() => insertWord(item.word)}
                    title={item.meaning}
                    className="rounded-full border border-paper-soft bg-paper-soft px-3 py-1 text-xs font-bold text-ink hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.word} <span className="font-normal text-muted">· {item.meaning}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold">Tiêu chí chấm điểm (VLU)</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {CRITERIA.map((criterion) => (
                <li key={criterion.name} className="rounded-lg border border-paper-soft bg-paper-soft px-3 py-2">
                  <p className="font-bold">{criterion.name}</p>
                  <ul className="mt-1 list-disc pl-5 text-muted">
                    {criterion.checks.map((check) => <li key={check}>{check}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Right: editor */}
        <section aria-labelledby={`${groupName}-editor`} className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-paper-soft bg-paper p-4">
            <h2 id={`${groupName}-editor`} className="font-display text-base font-bold">Bài làm</h2>
            <p role="status" aria-live="polite" className={`rounded-full px-3 py-1 text-sm font-bold ${enough ? 'bg-success-soft text-success' : 'bg-danger-soft text-danger'}`}>
              {totalWords} / {minWords} từ{enough ? ' · đạt' : ' · chưa đủ'}
            </p>
          </div>

          {conclusionUsed && (
            <p role="alert" className="rounded-lg bg-danger-soft px-4 py-3 text-sm font-bold text-danger">
              Bài có cụm kết luận (ví dụ “In conclusion”). Task 1 không có đoạn Conclusion; hãy xóa phần này.
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-expanded={showHint}
              onClick={() => setShowHint((value) => !value)}
              className="rounded-lg border border-paper-soft bg-paper-soft px-4 py-2 text-sm font-bold text-ink hover:border-orange"
            >
              {showHint ? 'Ẩn gợi ý' : 'Gợi ý'}
            </button>
            <button
              type="button"
              aria-expanded={showModel}
              onClick={() => setShowModel((value) => !value)}
              className="rounded-lg border border-paper-soft bg-paper-soft px-4 py-2 text-sm font-bold text-ink hover:border-orange"
            >
              {showModel ? 'Ẩn bài mẫu' : 'Xem dàn ý & bài mẫu'}
            </button>
          </div>

          {showHint && (
            <div className="space-y-2 rounded-xl border border-paper-soft bg-paper-soft p-4 text-sm">
              <p className="font-bold">Câu mẫu</p>
              <p className="italic leading-relaxed">“{task.hints.sentence}”</p>
              {!isTask1 && (
                <p className="text-muted">Khung triển khai mỗi luận điểm: Main idea → Facts → Explanation → Example → Result.</p>
              )}
            </div>
          )}

          {showModel && (
            <div className="space-y-3 rounded-xl border border-paper-soft bg-paper p-4 text-sm leading-relaxed">
              <p className="text-xs text-muted">Hãy tự viết trước khi đọc bài mẫu.</p>
              {fields.map((item) => (
                <div key={item.key}>
                  <p className="font-bold text-accent">{item.name}</p>
                  <p>{(task.model as Record<string, string>)[item.key]}</p>
                </div>
              ))}
            </div>
          )}

          {fields.map((item) => (
            <div key={item.key}>
              <label htmlFor={`${groupName}-${item.key}`} className="block text-sm font-bold">{item.name}</label>
              <p className="mb-1.5 text-xs text-muted">{item.hint}</p>
              <textarea
                id={`${groupName}-${item.key}`}
                ref={(node) => { refs.current[item.key] = node }}
                rows={5}
                value={drafts[item.key] ?? ''}
                onFocus={() => setActiveField(item.key)}
                onChange={(event) => update(item.key, event.target.value)}
                className="w-full rounded-lg border border-paper-soft bg-paper-soft px-3 py-2 text-sm leading-relaxed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
