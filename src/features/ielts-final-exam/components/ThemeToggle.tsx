'use client'

import { startTransition, useEffect, useState } from 'react'

// Same storage key as Wordcraft, so choosing a theme in either product applies to both.
const THEME_KEY = 'kotoba-en-theme-v1'
type Theme = 'light' | 'dark'

export function ThemeToggle() {
  // null until the saved choice is read, so the page never flashes the wrong theme.
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem(THEME_KEY) } catch { /* Storage unavailable: follow the system. */ }
    const system: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initial: Theme = saved === 'dark' || saved === 'light' ? saved : system
    startTransition(() => setTheme(initial))
  }, [])

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = () => {
    const current: Theme = theme ?? 'light'
    const next: Theme = current === 'light' ? 'dark' : 'light'
    setTheme(next)
    try { localStorage.setItem(THEME_KEY, next) } catch { /* Apply for this visit only. */ }
  }

  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Chuyển sang nền sáng' : 'Chuyển sang nền tối'}
      aria-pressed={isDark}
      className="shrink-0 rounded-lg border border-paper-soft bg-paper-soft px-3 py-1.5 text-xs font-bold text-ink transition-colors hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
    >
      {isDark ? '☀ Nền sáng' : '☾ Nền tối'}
    </button>
  )
}
