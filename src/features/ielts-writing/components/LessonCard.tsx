import type { WritingLesson } from '../types'
import styles from '../academy.module.css'
export function LessonCard({ lesson, index, completed, onOpen }: { lesson: WritingLesson; index: number; completed: boolean; onOpen: () => void }) {
  return <button type="button" className={`${styles.lessonCard} ${completed ? styles.lessonDone : ''}`} onClick={onOpen}>
    <span className={styles.lessonNumber}>{String(index+1).padStart(2,'0')}</span><span className={styles.lessonInfo}><strong>{lesson.title}</strong><small>{lesson.objective}</small></span><span className={styles.lessonTime}>{completed?'✓ Done':`${lesson.durationMinutes ?? 5} min`} ↗</span>
  </button>
}
