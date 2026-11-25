import type { ChartSpec, LineBarData, PieData, TableData } from '../data/examData'

// Colours are fixed hues that read well on both the light and dark palettes.
const PALETTE = ['#8b6914', '#d4a373', '#3f7d58', '#7b5ea7', '#b5523b']

function Legend({ names }: { names: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-ink" aria-hidden="true">
      {names.map((name, index) => (
        <li key={name} className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm" style={{ background: PALETTE[index % PALETTE.length] }} />
          {name}
        </li>
      ))}
    </ul>
  )
}

export function BarChartSVG({ data, title }: { data: LineBarData; title: string }) {
  const width = 640
  const height = 320
  const left = 52
  const bottom = 40
  const top = 16
  const max = Math.ceil(Math.max(...data.series.flatMap((series) => series.values)) * 1.15)
  const groupWidth = (width - left - 16) / data.labels.length
  const barWidth = (groupWidth * 0.7) / data.series.length
  const plotHeight = height - top - bottom
  const y = (value: number) => top + plotHeight - (value / max) * plotHeight

  return (
    <figure>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${title}. Biểu đồ cột theo ${data.labels.join(', ')}.`} className="w-full h-auto">
        {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
          const value = Math.round(max * fraction)
          return (
            <g key={fraction}>
              <line x1={left} x2={width - 16} y1={y(value)} y2={y(value)} stroke="currentColor" strokeOpacity="0.12" />
              <text x={left - 8} y={y(value) + 4} textAnchor="end" className="fill-current text-[11px] opacity-70">{value}{data.unit}</text>
            </g>
          )
        })}
        {data.labels.map((label, labelIndex) => {
          const groupX = left + labelIndex * groupWidth + groupWidth * 0.15
          return (
            <g key={label}>
              {data.series.map((series, seriesIndex) => {
                const value = series.values[labelIndex]
                const x = groupX + seriesIndex * barWidth
                return (
                  <rect key={series.name} x={x} y={y(value)} width={barWidth * 0.92} height={top + plotHeight - y(value)} rx="2" fill={PALETTE[seriesIndex % PALETTE.length]}>
                    <title>{`${series.name}, ${label}: ${value}${data.unit}`}</title>
                  </rect>
                )
              })}
              <text x={left + labelIndex * groupWidth + groupWidth / 2} y={height - 14} textAnchor="middle" className="fill-current text-[12px] font-bold">{label}</text>
            </g>
          )
        })}
      </svg>
      <Legend names={data.series.map((series) => series.name)} />
    </figure>
  )
}

export function LineChartSVG({ data, title }: { data: LineBarData; title: string }) {
  const width = 640
  const height = 320
  const left = 52
  const bottom = 40
  const top = 16
  const max = Math.ceil(Math.max(...data.series.flatMap((series) => series.values)) * 1.15)
  const plotWidth = width - left - 24
  const plotHeight = height - top - bottom
  const x = (index: number) => left + (index * plotWidth) / (data.labels.length - 1)
  const y = (value: number) => top + plotHeight - (value / max) * plotHeight

  return (
    <figure>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${title}. Biểu đồ đường từ ${data.labels[0]} đến ${data.labels[data.labels.length - 1]}.`} className="w-full h-auto">
        {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
          const value = Math.round(max * fraction * 10) / 10
          return (
            <g key={fraction}>
              <line x1={left} x2={width - 24} y1={y(value)} y2={y(value)} stroke="currentColor" strokeOpacity="0.12" />
              <text x={left - 8} y={y(value) + 4} textAnchor="end" className="fill-current text-[11px] opacity-70">{value}{data.unit}</text>
            </g>
          )
        })}
        {data.labels.map((label, index) => (
          <text key={label} x={x(index)} y={height - 14} textAnchor="middle" className="fill-current text-[12px] font-bold">{label}</text>
        ))}
        {data.series.map((series, seriesIndex) => {
          const colour = PALETTE[seriesIndex % PALETTE.length]
          const points = series.values.map((value, index) => `${x(index)},${y(value)}`).join(' ')
          return (
            <g key={series.name}>
              <polyline points={points} fill="none" stroke={colour} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
              {series.values.map((value, index) => (
                <circle key={index} cx={x(index)} cy={y(value)} r="4" fill={colour}>
                  <title>{`${series.name}, ${data.labels[index]}: ${value}${data.unit}`}</title>
                </circle>
              ))}
            </g>
          )
        })}
      </svg>
      <Legend names={data.series.map((series) => series.name)} />
    </figure>
  )
}

function polar(cx: number, cy: number, radius: number, angle: number) {
  return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) }
}

export function PieChartSVG({ pie }: { pie: PieData }) {
  const total = pie.slices.reduce((sum, slice) => sum + slice.value, 0)
  const cx = 90
  const cy = 90
  const radius = 80
  // Precompute each slice's start and end angle so the render stays free of reassignment.
  const arcs = pie.slices.reduce<{ start: number; end: number }[]>((list, slice) => {
    const start = list.length ? list[list.length - 1].end : -Math.PI / 2
    return [...list, { start, end: start + (slice.value / total) * Math.PI * 2 }]
  }, [])

  return (
    <figure className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
      <svg viewBox="0 0 180 180" role="img" aria-label={`${pie.title}: ${pie.slices.map((slice) => `${slice.label} ${slice.value}%`).join(', ')}`} className="h-44 w-44 shrink-0">
        {pie.slices.map((slice, index) => {
          const { start, end } = arcs[index]
          const from = polar(cx, cy, radius, start)
          const to = polar(cx, cy, radius, end)
          const large = end - start > Math.PI ? 1 : 0
          const path = `M${cx},${cy} L${from.x},${from.y} A${radius},${radius} 0 ${large} 1 ${to.x},${to.y} Z`
          return (
            <path key={slice.label} d={path} fill={PALETTE[index % PALETTE.length]} style={{ stroke: 'var(--fe-paper)' }} strokeWidth="2">
              <title>{`${slice.label}: ${slice.value}%`}</title>
            </path>
          )
        })}
      </svg>
      <div className="min-w-0">
        <p className="text-sm font-bold">{pie.title}</p>
        <ul className="mt-2 space-y-1 text-sm">
          {pie.slices.map((slice, index) => (
            <li key={slice.label} className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 shrink-0 rounded-sm" style={{ background: PALETTE[index % PALETTE.length] }} />
              <span>{slice.label}</span>
              <span className="ml-auto pl-3 font-bold">{slice.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  )
}

export function TableView({ table }: { table: TableData }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-paper-soft">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead className="bg-paper-soft">
          <tr>
            {table.headers.map((header) => <th key={header} scope="col" className="px-3 py-2 font-bold">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-t border-paper-soft">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className={`px-3 py-2 ${index === 0 ? 'font-bold' : 'tabular-nums'}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ChartBlock({ spec, title }: { spec: ChartSpec; title: string }) {
  switch (spec.kind) {
    case 'bar':
      return <BarChartSVG data={spec.data} title={title} />
    case 'line':
      return <LineChartSVG data={spec.data} title={title} />
    case 'pie':
      return <div className="space-y-6">{spec.pies.map((pie) => <PieChartSVG key={pie.title} pie={pie} />)}</div>
    case 'table':
      return <TableView table={spec.table} />
    case 'multiple':
      return (
        <div className="space-y-6">
          <BarChartSVG data={spec.bar} title={`${title} — bar chart`} />
          {spec.pies.map((pie) => <PieChartSVG key={pie.title} pie={pie} />)}
        </div>
      )
  }
}
