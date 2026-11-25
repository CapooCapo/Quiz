'use client'

import Link from 'next/link'
import { useState } from 'react'
import { readingSets } from '../data/examData'
import { readingStrategySteps } from '../data/skills'
import { VocabularyQuiz } from './VocabularyQuiz'

type ReadingSub = 'mode1' | 'mode2' | 'reading'

const subTabs: { id: ReadingSub; label: string }[] = [
  { id: 'mode1', label: 'Mode 1 · Nghĩa 5–5' },
  { id: 'mode2', label: 'Mode 2 · Ngữ cảnh 5–5' },
  { id: 'reading', label: 'Reading · 7 dạng bài' },
]

export function ReadingPanel() {
  const [sub, setSub] = useState<ReadingSub>('mode1')
  return (
    <div className="space-y-6">
      <div role="tablist" aria-label="Chế độ luyện Reading và từ vựng" className="flex flex-wrap gap-2">
        {subTabs.map((tab) => {
          const active = sub === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSub(tab.id)}
              className={`rounded-lg border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${active ? 'border-accent bg-accent text-paper' : 'border-paper-soft bg-paper text-ink hover:border-orange'}`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {sub === 'mode1' && <VocabularyQuiz mode={1} />}
      {sub === 'mode2' && <VocabularyQuiz mode={2} />}
      {sub === 'reading' && <ReadingSetList />}
    </div>
  )
}

function ReadingSetList() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <section aria-labelledby="reading-steps" className="rounded-xl border border-paper-soft bg-paper p-5 lg:self-start">
        <h3 id="reading-steps" className="font-display text-lg font-bold">Quy trình làm bài</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          {readingStrategySteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section aria-labelledby="reading-sets" className="space-y-3">
        <h3 id="reading-sets" className="font-display text-lg font-bold">Chọn một dạng đề</h3>
        {readingSets.map((set, index) => (
          <Link
            key={set.id}
            href={`/ielts-final-exam/reading/${set.id}`}
            className="group flex items-center justify-between gap-4 rounded-xl border border-paper-soft bg-paper px-5 py-4 no-underline transition-colors hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
          >
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-[0.12em] text-accent">Đề {index + 1} · {set.topic}</span>
              <span className="mt-0.5 block font-bold">{set.typeName}</span>
              <span className="mt-0.5 block truncate text-sm text-muted">{set.title} · {set.items.length} câu hỏi</span>
            </span>
            <span aria-hidden="true" className="shrink-0 font-bold text-accent transition-transform group-hover:translate-x-1 motion-reduce:transition-none">Làm bài →</span>
          </Link>
        ))}
      </section>
    </div>
  )
}
