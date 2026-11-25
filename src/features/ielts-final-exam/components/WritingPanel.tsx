'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CHART_NAMES, ESSAY_NAMES, writingTask1, writingTask2 } from '../data/examData'

type WritingTab = 'task1' | 'task2'

const tabs: { id: WritingTab; label: string }[] = [
  { id: 'task1', label: 'Writing Task 1 · Báo cáo biểu đồ' },
  { id: 'task2', label: 'Writing Task 2 · Bài luận học thuật' },
]

export function WritingPanel() {
  const [tab, setTab] = useState<WritingTab>('task1')

  return (
    <div className="space-y-6">
      <div role="tablist" aria-label="Chọn loại đề Writing" className="flex flex-wrap gap-2">
        {tabs.map((item) => {
          const active = tab === item.id
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(item.id)}
              className={`rounded-lg border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${active ? 'border-accent bg-accent text-paper' : 'border-paper-soft bg-paper text-ink hover:border-orange'}`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {tab === 'task1' ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {writingTask1.map((item, index) => (
            <li key={item.id}>
              <Link href={`/ielts-final-exam/writing/${item.id}`} className="group block h-full rounded-xl border border-paper-soft bg-paper p-5 no-underline transition-colors hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent">Đề {index + 1} · {CHART_NAMES[item.chart]} · {item.period}</span>
                <span className="mt-1 block font-display text-base font-bold">{item.title}</span>
                <span className="mt-2 block text-sm text-muted">{item.prompt}</span>
                <span className="mt-3 block text-sm font-bold text-accent transition-transform group-hover:translate-x-1 motion-reduce:transition-none">Làm bài →</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {writingTask2.map((item, index) => (
            <li key={item.id}>
              <Link href={`/ielts-final-exam/writing/${item.id}`} className="group block h-full rounded-xl border border-paper-soft bg-paper p-5 no-underline transition-colors hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent">Đề {index + 1} · {ESSAY_NAMES[item.essayType]}</span>
                <span className="mt-1 block font-display text-base font-bold">{item.title}</span>
                <span className="mt-2 block text-sm text-muted">{item.prompt}</span>
                <span className="mt-3 block text-sm font-bold text-accent transition-transform group-hover:translate-x-1 motion-reduce:transition-none">Làm bài →</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
