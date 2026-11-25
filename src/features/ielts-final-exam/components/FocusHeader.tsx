import Link from 'next/link'
import type { ReactNode } from 'react'
import { ThemeToggle } from './ThemeToggle'

// Header used while a learner works on one exercise. It replaces the main product header to give the two-column layout more room.
export function FocusHeader({ backHref, backLabel, label, right }: {
  backHref: string
  backLabel: string
  label: string
  right?: ReactNode
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-paper-soft bg-paper/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href={backHref}
            className="shrink-0 rounded-lg border border-paper-soft bg-paper-soft px-3 py-1.5 text-sm font-bold text-ink no-underline hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ← {backLabel}
          </Link>
          <p className="min-w-0 truncate text-xs font-bold uppercase tracking-[0.16em] text-accent">{label}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {right}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
