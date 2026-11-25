import Link from 'next/link'
import type { SkillId } from '../tabs'
import { skillTabs } from '../tabs'
import { ThemeToggle } from './ThemeToggle'

type FinalExamHeaderProps = {
  active: SkillId
  onSelect: (skill: SkillId) => void
}

export function FinalExamHeader({ active, onSelect }: FinalExamHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-paper-soft bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/ielts-final-exam" className="flex flex-col rounded-md no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            <span className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
              IELTS <span className="text-accent">Final Exam</span>
            </span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted">Luyện thi chuẩn đầu ra</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/"
              className="shrink-0 rounded-lg border border-paper-soft px-3 py-1.5 text-xs font-bold text-muted no-underline transition-colors hover:border-orange hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
            >
              ← Wordcraft
            </Link>
          </div>
        </div>

        <nav aria-label="Kỹ năng luyện thi">
          <ul className="grid list-none grid-cols-2 gap-2 sm:grid-cols-4 md:flex md:flex-wrap">
            {skillTabs.map((tab) => {
              const isActive = tab.id === active
              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => onSelect(tab.id)}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none md:w-auto ${
                      isActive
                        ? 'border-accent bg-accent text-paper shadow-sm'
                        : 'border-paper-soft bg-paper-soft text-ink hover:border-orange hover:bg-paper'
                    }`}
                  >
                    <span aria-hidden="true" className={`text-xs ${isActive ? 'text-paper/80' : 'text-accent'}`}>{tab.index}</span>
                    {tab.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
