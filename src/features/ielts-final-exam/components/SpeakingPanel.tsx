'use client'

import { useId, useState } from 'react'
import { speakingPart2Formula } from '../data/skills'
import { speakingTopics } from '../data/speaking'
import { CountdownTimer } from './CountdownTimer'

type Topic = (typeof speakingTopics)[number]

export function SpeakingPanel() {
  const [topicId, setTopicId] = useState<number | null>(null)
  const topic = speakingTopics.find((item) => item.id === topicId) ?? null

  return (
    <div className="space-y-6">
      <section aria-labelledby="speaking-topics" className="space-y-3">
        <h3 id="speaking-topics" className="font-display text-lg font-bold">Chọn chủ đề để học</h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {speakingTopics.map((item) => {
            const active = item.id === topicId
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={() => setTopicId(item.id)}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${active ? 'border-accent bg-accent text-paper' : 'border-paper-soft bg-paper text-ink hover:border-orange'}`}
              >
                <span className={`font-display text-sm font-extrabold ${active ? 'text-paper/80' : 'text-accent'}`}>{String(item.id).padStart(2, '0')}</span>
                <span className="font-bold">{item.name}</span>
              </button>
            )
          })}
        </div>
      </section>

      {topic ? (
        <TopicStudy key={topic.id} topic={topic} />
      ) : (
        <p className="rounded-xl border border-dashed border-paper-soft p-6 text-center text-sm text-muted">
          Chọn một chủ đề phía trên để xem từ vựng, câu hỏi Part 1, cue card và bài mẫu.
        </p>
      )}
    </div>
  )
}

function TopicStudy({ topic }: { topic: Topic }) {
  const id = useId()
  const [used, setUsed] = useState<Record<string, boolean>>({})
  const [showSample, setShowSample] = useState(false)
  const usedCount = topic.suggestedWords.filter((item) => used[item.word]).length

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <div className="space-y-6">
        <section aria-labelledby={`${id}-words`} className="rounded-xl border border-paper-soft bg-paper p-5">
          <h3 id={`${id}-words`} className="font-display text-lg font-bold">Từ vựng & IPA</h3>
          <p className="mt-1 text-xs text-muted" role="status">Đã dùng {usedCount}/{topic.suggestedWords.length} từ trong bài nói.</p>
          <ul className="mt-3 space-y-2">
            {topic.suggestedWords.map((item) => (
              <li key={item.word}>
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-paper-soft bg-paper-soft px-3 py-2.5 text-sm">
                  <input
                    type="checkbox"
                    checked={Boolean(used[item.word])}
                    onChange={(event) => setUsed((value) => ({ ...value, [item.word]: event.target.checked }))}
                    className="mt-1 h-4 w-4 accent-[var(--fe-accent)]"
                  />
                  <span>
                    <span className="font-bold">{item.word}</span>{' '}
                    <span className="text-muted">{item.ipa}</span>
                    <span className="block text-muted">{item.meaningVi}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby={`${id}-part1`} className="rounded-xl border border-paper-soft bg-paper p-5">
          <h3 id={`${id}-part1`} className="font-display text-lg font-bold">Part 1 · Câu hỏi</h3>
          <p className="mt-1 text-xs text-muted">Trả lời trực tiếp ở câu đầu, sau đó thêm 1–2 câu lý do, tần suất hoặc ví dụ.</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
            {topic.part1.map((question) => <li key={question}>{question}</li>)}
          </ol>
        </section>

        <section aria-labelledby={`${id}-timers`} className="grid gap-4 sm:grid-cols-2">
          <h3 id={`${id}-timers`} className="sr-only">Đồng hồ luyện nói</h3>
          <CountdownTimer label="Chuẩn bị · 1 phút" seconds={60} />
          <CountdownTimer label="Nói · 2 phút" seconds={120} />
        </section>
      </div>

      <div className="space-y-6">
        <section aria-labelledby={`${id}-cue`} className="rounded-xl border border-paper-soft bg-paper p-5">
          <h3 id={`${id}-cue`} className="font-display text-lg font-bold">Part 2 · Cue card</h3>
          <p className="mt-2 rounded-lg bg-mint px-4 py-3 text-sm font-bold">{topic.cueCard}</p>
          <p className="mt-3 text-xs text-muted">Bạn nên nói về:</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
            {topic.cuePoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </section>

        <section aria-labelledby={`${id}-speak`} className="rounded-xl border border-paper-soft bg-paper p-5">
          <h3 id={`${id}-speak`} className="font-display text-lg font-bold">Khung gợi ý dàn ý · S.P.E.A.K</h3>
          <ul className="mt-3 space-y-2.5">
            {speakingPart2Formula.map((step) => (
              <li key={step.letter} className="grid grid-cols-[2rem_1fr] gap-2 text-sm">
                <span className="font-display text-lg font-extrabold text-accent">{step.letter}</span>
                <span>
                  <span className="block font-bold">{step.label}</span>
                  <span className="text-muted">{step.hint}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby={`${id}-sample`} className="rounded-xl border border-paper-soft bg-paper p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 id={`${id}-sample`} className="font-display text-lg font-bold">Bài mẫu</h3>
            <button
              type="button"
              aria-expanded={showSample}
              onClick={() => setShowSample((value) => !value)}
              className="rounded-lg border border-paper-soft bg-paper-soft px-3 py-1.5 text-xs font-bold text-ink hover:border-orange"
            >
              {showSample ? 'Ẩn bài mẫu' : 'Xem bài mẫu'}
            </button>
          </div>
          {showSample && <p className="mt-3 text-sm leading-relaxed">{topic.sampleAnswer}</p>}
        </section>
      </div>
    </div>
  )
}
