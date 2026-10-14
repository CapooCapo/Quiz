'use client'

import { useMemo, useState } from 'react'
import type { WritingChartDataset } from '../types'
import styles from '../academy.module.css'

export function ChartViewer({ dataset }: { dataset: WritingChartDataset }) {
  const [selected, setSelected] = useState(0)
  const width = 640, height = 300, left = 58, right = 24, top = 24, bottom = 48
  const max = Math.max(...dataset.data.map((point) => point.value)) * 1.12
  const min = Math.min(0, Math.min(...dataset.data.map((point) => point.value)) * .82)
  const points = useMemo(() => dataset.data.map((point, index) => ({
    ...point,
    x: left + index * (width - left - right) / Math.max(1, dataset.data.length - 1),
    y: top + (max - point.value) * (height - top - bottom) / (max - min),
  })), [dataset, max, min])
  const path = points.map(({ x, y }, index) => `${index ? 'L' : 'M'}${x},${y}`).join(' ')
  return <section className={styles.chartCard} aria-labelledby={`chart-${dataset.id}`}>
    <div className={styles.chartHeading}><div><p className={styles.eyebrow}>SOURCE DATA · {dataset.chartType.toUpperCase()}</p><h3 id={`chart-${dataset.id}`}>{dataset.title}</h3><p>{dataset.subtitle}</p></div><span className={styles.sourceBadge}>VERIFIED DATA</span></div>
    <svg className={styles.chartSvg} viewBox={`0 0 ${width} ${height}`} role="group" aria-label={`${dataset.title}. ${dataset.accessibleSummary}`}>
      {[0, .25, .5, .75, 1].map((fraction) => { const y = top + fraction * (height - top - bottom); const value = max - fraction * (max - min); return <g key={fraction}><line x1={left} x2={width-right} y1={y} y2={y} className={styles.gridLine}/><text x={left-9} y={y+4} textAnchor="end" className={styles.axisText}>{value.toFixed(0)}{dataset.unit}</text></g> })}
      {dataset.chartType === 'line' ? <path d={path} className={styles.dataLine}/> : points.map((p) => <rect key={p.label} x={p.x-24} y={p.y} width="48" height={height-bottom-p.y} rx="5" className={styles.dataBar}/>)}
      {points.map((p,index) => <g key={p.label} role="button" tabIndex={0} aria-label={`${p.label}: ${p.value.toFixed(2)}${dataset.unit}. ${p.observation}`} aria-pressed={selected===index} onClick={()=>setSelected(index)} onKeyDown={(event)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();setSelected(index)}}} className={styles.chartPointGroup}><circle cx={p.x} cy={p.y} r={selected===index?8:5} className={styles.dataPoint}/><text x={p.x} y={height-17} textAnchor="middle" className={styles.axisText}>{p.label}</text></g>)}
    </svg>
    <p className={styles.chartObservation} aria-live="polite"><strong>{points[selected]?.label}: {points[selected]?.value.toFixed(2)}{dataset.unit}</strong> — {points[selected]?.observation}</p>
    <details className={styles.dataDetails}><summary>Accessible data and source</summary><p>{dataset.accessibleSummary}</p><div className={styles.tableWrap}><table><caption>{dataset.title}</caption><thead><tr><th scope="col">{dataset.chartType==='line'?'Year':'Country'}</th><th scope="col">Value ({dataset.unit})</th><th scope="col">Observation</th></tr></thead><tbody>{dataset.data.map((p)=><tr key={p.label}><th scope="row">{p.label}</th><td>{p.value.toFixed(2)}</td><td>{p.observation}</td></tr>)}</tbody></table></div><a href={dataset.sourceUrl} target="_blank" rel="noreferrer">{dataset.sourceName} ↗</a></details>
  </section>
}
