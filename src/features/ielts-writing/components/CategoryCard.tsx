import type { CategoryArtwork, WritingCategory } from '../types'
import styles from '../academy.module.css'

function CategoryIllustration({ artwork }: { artwork: CategoryArtwork }) {
  if (artwork === 'chart') {
    return <svg viewBox="0 0 180 118" aria-hidden="true" className={styles.illustrationSvg}>
      <path d="M25 92H158M38 86V69h17v17m16 0V54h17v32m16 0V39h17v47m16 0V25h17v61" className={styles.chartBars} />
      <path d="m31 58 29-13 27 7 29-26 29-9" className={styles.chartLine} />
      <circle cx="60" cy="45" r="4" className={styles.chartPoint} /><circle cx="87" cy="52" r="4" className={styles.chartPoint} /><circle cx="116" cy="26" r="4" className={styles.chartPoint} />
    </svg>
  }

  if (artwork === 'map') {
    return <svg viewBox="0 0 180 118" aria-hidden="true" className={styles.illustrationSvg}>
      <path d="m26 31 42-12 43 12 42-12v69l-42 12-43-12-42 12zM68 19v69m43-57v69" className={styles.mapLines} />
      <path d="M39 73c13-18 23 10 36-6s22 9 35-7 18-6 32-21" className={styles.mapRoute} />
      <circle cx="39" cy="73" r="5" className={styles.mapStart} /><circle cx="142" cy="39" r="6" className={styles.mapEnd} />
    </svg>
  }

  return <svg viewBox="0 0 180 118" aria-hidden="true" className={styles.illustrationSvg}>
    <rect x="36" y="17" width="108" height="84" rx="10" className={styles.essayPaper} />
    <path d="M54 39h71M54 53h58M54 67h63M54 81h43" className={styles.essayLines} />
    <circle cx="131" cy="82" r="18" className={styles.essaySeal} /><path d="m124 82 5 5 10-12" className={styles.essayCheck} />
  </svg>
}

export function CategoryCard({ category, index }: { category: WritingCategory; index: number }) {
  return <article className={`${styles.categoryCard} ${styles[`category${index + 1}`]}`}>
    <div className={styles.illustration}>
      <span className={styles.illustrationIndex}>0{index + 1}</span>
      <CategoryIllustration artwork={category.artwork} />
    </div>
    <div className={styles.categoryBody}>
      <p className={styles.categoryLabel}>{category.label}</p>
      <h3>{category.title}</h3>
      <p className={styles.categoryDescription}>{category.description}</p>
      <div className={styles.categoryMeta}><span>Curriculum track</span><span className={styles.status}>{category.status === 'available' ? 'Lessons available' : 'Coming soon'}</span></div>
    </div>
  </article>
}
