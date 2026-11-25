'use client'

import { listeningMethodSteps, listeningParts } from '../data/skills'
import { listeningTypes } from '../data/listening'
import { CountdownTimer } from './CountdownTimer'

export function ListeningPanel() {
  const total = listeningParts.reduce((sum, part) => sum + part.questions, 0)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Listening · 40 phút · {total} câu</p>
          <p className="mt-2 text-sm text-muted">Trang này mô tả các dạng đề. Sản phẩm không có phần âm thanh.</p>
        </div>
        <CountdownTimer label="Thời gian làm bài" seconds={40 * 60} />
      </div>

      <section aria-labelledby="listening-parts">
        <h3 id="listening-parts" className="font-display text-lg font-bold">Cấu trúc 4 phần</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {listeningParts.map((part) => (
            <article key={part.part} className="rounded-xl border border-paper-soft bg-paper p-4">
              <p className="font-display text-base font-bold">{part.part}</p>
              <p className="mt-1 font-display text-3xl font-extrabold text-accent">{part.questions} <span className="text-sm font-bold text-muted">câu</span></p>
              <p className="mt-2 text-sm text-muted">{part.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="listening-types" className="rounded-xl border border-paper-soft bg-paper p-5">
        <h3 id="listening-types" className="font-display text-lg font-bold">7 dạng đề Listening</h3>
        <ol className="mt-3 space-y-3">
          {listeningTypes.map((type, index) => (
            <li key={type.name} className="grid grid-cols-[auto_1fr] gap-3 border-b border-paper-soft pb-3 text-sm last:border-b-0 last:pb-0">
              <span className="font-display font-extrabold text-accent">{index + 1}.</span>
              <span>
                <span className="block font-bold">{type.name}</span>
                <span className="mt-0.5 block text-muted">{type.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="listening-steps" className="rounded-xl border border-paper-soft bg-paper p-5">
        <h3 id="listening-steps" className="font-display text-lg font-bold">Checklist 6 bước làm bài</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          {listeningMethodSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>
    </div>
  )
}
