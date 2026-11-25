'use client'

import { useCallback, useId, useRef, useState } from 'react'
import type { Paragraph } from '../data/examData'
import { buildRuns } from '../highlight.mjs'

export type HighlightColor = 'yellow' | 'green' | 'pink'

/** A highlight is stored as character offsets inside one paragraph, so React still owns the DOM. */
export type Highlight = {
  id: string
  paragraph: string
  start: number
  end: number
  color: HighlightColor
}

type Pending = { paragraph: string; start: number; end: number; x: number; y: number }

const COLORS: { id: HighlightColor; label: string; swatch: string }[] = [
  { id: 'yellow', label: 'Từ khóa chính', swatch: 'bg-[#fde68a]' },
  { id: 'green', label: 'Dẫn chứng đáp án', swatch: 'bg-[#bbf7d0]' },
  { id: 'pink', label: 'Từ vựng mới / paraphrase', swatch: 'bg-[#fbcfe8]' },
]

const MARK_CLASS: Record<HighlightColor, string> = {
  yellow: 'bg-[#fde68a]',
  green: 'bg-[#bbf7d0]',
  pink: 'bg-[#fbcfe8]',
}

/** Text inside a highlight stays dark in both themes so it remains readable. */
const MARK_TEXT = 'text-[#1f1a10]'

export function PassageViewer({ paragraphs, highlights, onAdd, onRemove, onClearAll }: {
  paragraphs: Paragraph[]
  highlights: Highlight[]
  onAdd: (highlight: Omit<Highlight, 'id'>) => void
  onRemove: (id: string) => void
  onClearAll: () => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pending, setPending] = useState<Pending | null>(null)
  const [hint, setHint] = useState('')
  const groupId = useId()

  const readSelection = useCallback(() => {
    const container = containerRef.current
    const selection = window.getSelection()
    if (!container || !selection || selection.isCollapsed || selection.rangeCount === 0) {
      setPending(null)
      return
    }
    const range = selection.getRangeAt(0)
    if (!container.contains(range.commonAncestorContainer)) {
      setPending(null)
      return
    }
    const paragraphNodes = Array.from(container.querySelectorAll<HTMLElement>('[data-para]'))
    const startNode = paragraphNodes.find((node) => node.contains(range.startContainer))
    const endNode = paragraphNodes.find((node) => node.contains(range.endContainer))
    if (!startNode || startNode !== endNode) {
      setHint('Hãy chọn trong cùng một đoạn để đánh dấu.')
      setPending(null)
      return
    }
    setHint('')
    const measure = (boundaryNode: Node, boundaryOffset: number) => {
      const probe = document.createRange()
      probe.selectNodeContents(startNode)
      probe.setEnd(boundaryNode, boundaryOffset)
      return probe.toString().length
    }
    const start = measure(range.startContainer, range.startOffset)
    const end = measure(range.endContainer, range.endOffset)
    if (end <= start) {
      setPending(null)
      return
    }
    const rect = range.getBoundingClientRect()
    const box = container.getBoundingClientRect()
    setPending({
      paragraph: startNode.dataset.para ?? '',
      start,
      end,
      x: rect.left - box.left + rect.width / 2,
      y: rect.top - box.top,
    })
  }, [])

  const apply = (color: HighlightColor) => {
    if (!pending) return
    onAdd({ paragraph: pending.paragraph, start: pending.start, end: pending.end, color })
    window.getSelection()?.removeAllRanges()
    setPending(null)
  }

  return (
    <div ref={containerRef} className="relative" onMouseUp={readSelection} onTouchEnd={readSelection} onKeyUp={readSelection}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-paper-soft pb-3">
        <p className="text-xs text-muted">Bôi đen một cụm từ để hiện thanh đánh dấu. Bấm vào đoạn đã tô để xóa.</p>
        <button
          type="button"
          onClick={onClearAll}
          disabled={highlights.length === 0}
          className="rounded-md border border-paper-soft px-2.5 py-1 text-xs font-bold text-ink hover:border-orange"
        >
          Xóa tất cả highlight ({highlights.length})
        </button>
      </div>
      {hint && <p role="status" className="mb-2 text-xs font-bold text-danger">{hint}</p>}

      <div className="space-y-4 text-[0.95rem] leading-[1.8]">
        {paragraphs.map((paragraph) => {
          const runs = buildRuns(paragraph.text, highlights.filter((item) => item.paragraph === paragraph.label))
          return (
            <div key={paragraph.label} className="flex gap-3">
              <span className="w-5 shrink-0 pt-1 font-display text-sm font-extrabold text-accent" aria-hidden="true">{paragraph.label}</span>
              <p data-para={paragraph.label} id={`${groupId}-${paragraph.label}`} className="min-w-0 flex-1">
                {runs.map((run, index) => run.highlightId && run.color ? (
                  <mark
                    key={`${run.highlightId}-${index}`}
                    data-hl-id={run.highlightId}
                    title="Bấm để xóa đánh dấu này"
                    onClick={() => onRemove(run.highlightId as string)}
                    className={`cursor-pointer rounded-sm px-0.5 ${MARK_CLASS[run.color as HighlightColor]} ${MARK_TEXT}`}
                  >
                    {run.text}
                  </mark>
                ) : (
                  <span key={`plain-${index}`}>{run.text}</span>
                ))}
              </p>
            </div>
          )
        })}
      </div>

      {pending && (
        <div
          role="toolbar"
          aria-label="Đánh dấu đoạn đã chọn"
          style={{ left: pending.x, top: Math.max(0, pending.y - 52) }}
          className="absolute z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-lg border border-paper-soft bg-paper px-2 py-1.5 shadow-lg"
        >
          {COLORS.map((color) => (
            <button
              key={color.id}
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => apply(color.id)}
              aria-label={`Highlight: ${color.label}`}
              title={color.label}
              className={`flex h-7 w-7 items-center justify-center rounded-md border border-black/10 ${color.swatch} hover:scale-110 motion-reduce:transform-none`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
