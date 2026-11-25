'use client'

import { startTransition, useEffect, useState } from 'react'
import { FinalExamHeader } from './components/FinalExamHeader'
import { ListeningPanel } from './components/ListeningPanel'
import { ReadingPanel } from './components/ReadingPanel'
import { SpeakingPanel } from './components/SpeakingPanel'
import { WritingPanel } from './components/WritingPanel'
import { skillTabs, type SkillId } from './tabs'

const sectionMeta: Record<SkillId, { title: string; intro: string }> = {
  reading: { title: 'Reading & Từ vựng', intro: 'Luyện 30 từ vựng theo 15 chủ đề và 7 dạng bài Reading.' },
  listening: { title: 'Listening', intro: 'Cấu trúc đề, 7 dạng bài và đồng hồ 40 phút.' },
  writing: { title: 'Writing', intro: 'Task 1 mô tả biểu đồ và Task 2 bài luận, có đếm từ và đồng hồ.' },
  speaking: { title: 'Speaking', intro: 'Chọn chủ đề, luyện cue card theo S.P.E.A.K và học từ gợi ý.' },
}

const isSkill = (value: string): value is SkillId => skillTabs.some((tab) => tab.id === value)

export default function IeltsFinalExamHub() {
  const [skill, setSkill] = useState<SkillId>('reading')
  const meta = sectionMeta[skill]

  // Links from other pages (e.g. the reading exercise page) open a skill with a hash such as #listening.
  useEffect(() => {
    const readHash = () => {
      const value = window.location.hash.replace('#', '')
      if (isSkill(value)) startTransition(() => setSkill(value))
    }
    readHash()
    window.addEventListener('hashchange', readHash)
    return () => window.removeEventListener('hashchange', readHash)
  }, [])

  const select = (next: SkillId) => {
    setSkill(next)
    window.history.replaceState(null, '', `#${next}`)
  }

  return (
    <>
      <FinalExamHeader active={skill} onSelect={select} />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6">
        <section aria-labelledby="fe-section-title" className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">IELTS Final Exam</p>
          <h1 id="fe-section-title" className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{meta.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted">{meta.intro}</p>
        </section>

        {skill === 'reading' && <ReadingPanel />}
        {skill === 'listening' && <ListeningPanel />}
        {skill === 'writing' && <WritingPanel />}
        {skill === 'speaking' && <SpeakingPanel />}
      </main>
    </>
  )
}
