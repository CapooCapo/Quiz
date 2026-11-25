'use client'

import { useEffect, useRef, useState } from 'react'
import { formatSeconds } from '../logic.mjs'

type CountdownTimerProps = {
  label: string
  seconds: number
  onFinish?: () => void
}

export function CountdownTimer({ label, seconds, onFinish }: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(seconds)
  const [running, setRunning] = useState(false)
  const onFinishRef = useRef(onFinish)

  useEffect(() => {
    onFinishRef.current = onFinish
  })

  useEffect(() => {
    if (!running || remaining === 0) return
    const id = window.setTimeout(() => setRemaining((value) => value - 1), 1000)
    return () => window.clearTimeout(id)
  }, [running, remaining])

  useEffect(() => {
    if (running && remaining === 0) onFinishRef.current?.()
  }, [running, remaining])

  const reset = () => {
    setRunning(false)
    setRemaining(seconds)
  }

  const finished = remaining === 0
  const low = !finished && remaining <= 60

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-paper-soft bg-paper px-4 py-3">
      <div>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent">{label}</p>
        <p
          role="timer"
          className={`font-display text-3xl font-extrabold tabular-nums tracking-tight ${low ? 'text-danger' : 'text-ink'}`}
        >
          {formatSeconds(remaining)}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          disabled={finished}
          onClick={() => setRunning((value) => !value)}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-paper transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          {finished ? 'Hết giờ' : running ? 'Tạm dừng' : 'Bắt đầu'}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-paper-soft bg-paper px-4 py-2 text-sm font-bold text-ink transition-colors hover:border-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          Đặt lại
        </button>
      </div>
    </div>
  )
}
