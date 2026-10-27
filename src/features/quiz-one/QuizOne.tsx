'use client'

import Link from 'next/link'
import { startTransition, useEffect, useMemo, useState, type FormEvent } from 'react'
import { quizOneVocabulary, type QuizOneVocabularyItem } from './data'
import { evaluateAttempt, makeChoiceOptions, meaningMatches, sampleWithoutReplacement, validateQuestionCount } from './logic.mjs'
import styles from './quizOne.module.css'

type QuizMode = 'choice' | 'typing'
type Stage = 'setup' | 'practice' | 'complete'
type AnswerState = 'answering' | 'retry' | 'revealed'
type QuestionResult = { correct: boolean; attempts: number }

const QUICK_COUNTS = [10, 20, 30, 50]
const OPTION_LABELS = ['A', 'B', 'C', 'D']
const THEME_KEY = 'kotoba-en-theme-v1'

export default function QuizOne() {
  const [stage, setStage] = useState<Stage>('setup')
  const [quizMode, setQuizMode] = useState<QuizMode>('choice')
  const [questionCount, setQuestionCount] = useState('10')
  const [session, setSession] = useState<QuizOneVocabularyItem[]>([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [options, setOptions] = useState<QuizOneVocabularyItem[]>([])
  const [answerState, setAnswerState] = useState<AnswerState>('answering')
  const [attempts, setAttempts] = useState(0)
  const [typedAnswer, setTypedAnswer] = useState('')
  const [selectedOptionId, setSelectedOptionId] = useState('')
  const [results, setResults] = useState<QuestionResult[]>([])
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const countValidation = useMemo(
    () => validateQuestionCount(questionCount, quizOneVocabulary.length),
    [questionCount],
  )
  const current = session[questionIndex]
  const correctCount = results.filter((result) => result.correct).length
  const firstTryCount = results.filter((result) => result.correct && result.attempts === 1).length

  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem(THEME_KEY) } catch { /* Use the system preference. */ }
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    startTransition(() => setTheme(saved === 'dark' || saved === 'light' ? saved : preferred))
  }, [])

  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    try { localStorage.setItem(THEME_KEY, nextTheme) } catch { /* Apply for this visit. */ }
  }

  const resetQuestion = (item: QuizOneVocabularyItem, mode: QuizMode) => {
    setAnswerState('answering')
    setAttempts(0)
    setTypedAnswer('')
    setSelectedOptionId('')
    setOptions(mode === 'choice' ? makeChoiceOptions(item, quizOneVocabulary) : [])
  }

  const startWithDeck = (deck: QuizOneVocabularyItem[], mode: QuizMode) => {
    if (!deck[0]) return
    setSession(deck)
    setQuizMode(mode)
    setQuestionIndex(0)
    setResults([])
    resetQuestion(deck[0], mode)
    setStage('practice')
  }

  const startNewRandomSet = () => {
    if (countValidation.count === null) return
    startWithDeck(sampleWithoutReplacement(quizOneVocabulary, countValidation.count), quizMode)
  }

  const revealAnswer = (correct: boolean, usedAttempts: number) => {
    setAttempts(usedAttempts)
    setAnswerState('revealed')
    setResults((currentResults) => {
      const nextResults = [...currentResults]
      nextResults[questionIndex] = { correct, attempts: usedAttempts }
      return nextResults
    })
  }

  const submitChoice = (option: QuizOneVocabularyItem) => {
    if (!current || answerState === 'revealed') return
    const outcome = evaluateAttempt(option.id === current.id, attempts)
    setSelectedOptionId(option.id)
    if (outcome.state === 'revealed') {
      revealAnswer(outcome.correct, outcome.attempts)
    } else {
      setAttempts(outcome.attempts)
      setAnswerState('retry')
    }
  }

  const submitTypedAnswer = (event: FormEvent) => {
    event.preventDefault()
    if (!current || answerState === 'revealed' || !typedAnswer.trim()) return
    const outcome = evaluateAttempt(meaningMatches(typedAnswer, current), attempts)
    if (outcome.state === 'revealed') {
      revealAnswer(outcome.correct, outcome.attempts)
    } else {
      setAttempts(outcome.attempts)
      setAnswerState('retry')
      setTypedAnswer('')
    }
  }

  const advance = () => {
    const nextIndex = questionIndex + 1
    if (nextIndex >= session.length) {
      setStage('complete')
      return
    }
    const nextItem = session[nextIndex]
    setQuestionIndex(nextIndex)
    resetQuestion(nextItem, quizMode)
  }

  const returnToSetup = () => {
    setStage('setup')
    setSession([])
    setResults([])
  }

  return <div className={`shell ${styles.quizShell}`}>
    <header className="topbar">
      <Link className="logo" href="/">word<span>craft</span></Link>
      <nav className={styles.headerNav} aria-label="English learning">
        <Link href="/">Kho từ vựng</Link>
        <span aria-current="page">Quiz 1</span>
      </nav>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} aria-pressed={theme === 'dark'}>
        {theme === 'light' ? '☾ Dark' : '☀ Light'}
      </button>
    </header>

    <main className={styles.main}>
      {stage === 'setup' && <section className={styles.setup} aria-labelledby="quiz-one-title">
        <Link className={styles.backLink} href="/">← Về khu học tiếng Anh</Link>
        <div className={styles.hero}>
          <div>
            <p className="eyebrow">Academic English 7 · 66 từ tổng hợp</p>
            <h1 id="quiz-one-title">Quiz 1</h1>
            <p>Ôn ngẫu nhiên toàn bộ từ vựng trong tài liệu, với hai lượt trả lời cho mỗi câu.</p>
          </div>
          <span className={styles.wordBadge}><b>{quizOneVocabulary.length}</b> từ / cụm từ</span>
        </div>

        <div className={styles.setupGrid}>
          <fieldset className={styles.panel}>
            <legend>1. Chọn số câu</legend>
            <div className={styles.quickCounts}>
              {QUICK_COUNTS.map((count) => <button
                key={count}
                type="button"
                className={questionCount === String(count) ? styles.selected : ''}
                onClick={() => setQuestionCount(String(count))}
                aria-pressed={questionCount === String(count)}
              >{count}</button>)}
            </div>
            <label className={styles.customCount} htmlFor="quiz-one-count">
              Hoặc nhập số câu tùy chọn
              <input
                id="quiz-one-count"
                type="number"
                inputMode="numeric"
                min="1"
                max={quizOneVocabulary.length}
                step="1"
                value={questionCount}
                onChange={(event) => setQuestionCount(event.target.value)}
                aria-describedby="quiz-one-count-help"
                aria-invalid={Boolean(countValidation.error)}
              />
            </label>
            <p id="quiz-one-count-help" className={countValidation.error ? styles.error : styles.help} role="status">
              {countValidation.error || `Sẽ lấy ngẫu nhiên ${countValidation.count} câu, không lặp từ.`}
            </p>
          </fieldset>

          <fieldset className={styles.panel}>
            <legend>2. Chọn cách trả lời</legend>
            <div className={styles.modeChoices}>
              <button type="button" className={quizMode === 'choice' ? styles.selected : ''} onClick={() => setQuizMode('choice')} aria-pressed={quizMode === 'choice'}>
                <span className={styles.modeIcon}>A–D</span><span><b>Chọn đáp án</b><small>4 lựa chọn cho mỗi từ</small></span>
              </button>
              <button type="button" className={quizMode === 'typing' ? styles.selected : ''} onClick={() => setQuizMode('typing')} aria-pressed={quizMode === 'typing'}>
                <span className={styles.modeIcon}>⌨</span><span><b>Tự nhập nghĩa</b><small>Chấp nhận đáp án ngắn tương đương</small></span>
              </button>
            </div>
          </fieldset>
        </div>

        <button className={styles.primaryButton} type="button" disabled={countValidation.count === null} onClick={startNewRandomSet}>
          Bắt đầu Quiz 1 <span aria-hidden="true">→</span>
        </button>
        <p className={styles.sourceNote}>Nguồn: “Tổng hợp từ vựng sau Quizz 1” · 11 bài học · dữ liệu Quiz 1 tách riêng khỏi kho từ cá nhân.</p>
      </section>}

      {stage === 'practice' && current && <section className={styles.practice} aria-labelledby="question-title">
        <div className={styles.practiceTopline}>
          <button className={styles.backLink} type="button" onClick={returnToSetup}>← Thiết lập lại</button>
          <span>{quizMode === 'choice' ? 'Chọn A–D' : 'Tự nhập nghĩa'} · Tối đa 2 lượt</span>
        </div>

        <div className={styles.progressMeta}>
          <div className={styles.progressText}><span>Câu {questionIndex + 1} / {session.length}</span><span>{correctCount} câu đúng</span></div>
          <progress value={questionIndex + (answerState === 'revealed' ? 1 : 0)} max={session.length} aria-label={`${questionIndex + 1} trên ${session.length} câu`} />
        </div>

        <article className={styles.questionCard}>
          <p>{current.lesson}</p>
          <span>Chọn hoặc viết nghĩa tiếng Việt của</span>
          <h1 id="question-title">{current.term}</h1>
        </article>

        {quizMode === 'choice' ? <div className={styles.options} aria-label="Các đáp án">
          {options.map((option, index) => {
            const isSelectedWrong = selectedOptionId === option.id && option.id !== current.id
            const isCorrectReveal = answerState === 'revealed' && option.id === current.id
            return <button
              key={option.id}
              type="button"
              className={`${isSelectedWrong ? styles.wrongOption : ''} ${isCorrectReveal ? styles.correctOption : ''}`}
              disabled={answerState === 'revealed' || (answerState === 'retry' && isSelectedWrong)}
              onClick={() => submitChoice(option)}
              aria-label={`${OPTION_LABELS[index]}. ${option.meaning}`}
            >
              <b>{OPTION_LABELS[index]}</b><span>{option.meaning}</span><i aria-hidden="true">{isCorrectReveal ? '✓' : '→'}</i>
            </button>
          })}
        </div> : <form className={styles.typingForm} onSubmit={submitTypedAnswer}>
          <label htmlFor="quiz-one-answer">Nghĩa tiếng Việt</label>
          <div>
            <input
              key={questionIndex}
              id="quiz-one-answer"
              autoFocus
              autoComplete="off"
              value={typedAnswer}
              disabled={answerState === 'revealed'}
              onChange={(event) => setTypedAnswer(event.target.value)}
              placeholder="Nhập nghĩa ngắn gọn…"
              aria-describedby="typed-answer-help"
              aria-invalid={answerState === 'retry'}
            />
            <button type="submit" disabled={!typedAnswer.trim() || answerState === 'revealed'}>Kiểm tra</button>
          </div>
          <small id="typed-answer-help">Không phân biệt hoa/thường, dấu câu, khoảng trắng hay dấu tiếng Việt.</small>
        </form>}

        <div className={styles.feedback} aria-live="polite">
          {answerState === 'answering' && <p className={styles.neutral}>Bạn có 2 lượt trả lời cho câu này.</p>}
          {answerState === 'retry' && <p className={styles.retry}><b>Chưa đúng.</b> Bạn còn 1 lượt — thử lại nhé.</p>}
          {answerState === 'revealed' && <div className={results[questionIndex]?.correct ? styles.correctFeedback : styles.revealFeedback}>
            <strong>{results[questionIndex]?.correct ? 'Chính xác!' : 'Đã hết 2 lượt — đây là đáp án đúng.'}</strong>
            <dl>
              <div><dt>Từ / cụm từ</dt><dd>{current.term}</dd></div>
              <div><dt>Nghĩa</dt><dd>{current.meaning}</dd></div>
              <div><dt>Phát âm</dt><dd>{current.pronunciation}</dd></div>
              <div><dt>Ví dụ</dt><dd lang="en">{current.example}</dd></div>
            </dl>
            <details><summary>Xem định nghĩa gốc bằng tiếng Anh</summary><p lang="en">{current.definition}</p></details>
          </div>}
        </div>

        {answerState === 'revealed' && <button className={styles.primaryButton} type="button" onClick={advance} autoFocus>
          {questionIndex + 1 === session.length ? 'Xem kết quả' : 'Câu tiếp theo'} <span aria-hidden="true">→</span>
        </button>}
      </section>}

      {stage === 'complete' && <section className={styles.complete} aria-labelledby="complete-title" aria-live="polite">
        <div className={styles.completeMark} aria-hidden="true">✓</div>
        <p className="eyebrow">Hoàn thành Quiz 1</p>
        <h1 id="complete-title">Anh đã hoàn thành {session.length} câu</h1>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCorrect}><b>{correctCount}</b><span>Trả lời đúng</span></div>
          <div className={styles.summaryWrong}><b>{session.length - correctCount}</b><span>Được hiển thị đáp án</span></div>
          <div className={styles.summaryCorrect}><b>{firstTryCount}</b><span>Đúng ngay lượt đầu</span></div>
        </div>
        <div className={styles.completionActions}>
          <button className={styles.primaryButton} type="button" onClick={startNewRandomSet}>Bộ ngẫu nhiên mới <span aria-hidden="true">↻</span></button>
          <button className={styles.secondaryButton} type="button" onClick={() => startWithDeck([...session], quizMode)}>Học lại bộ này</button>
          <button className={styles.textButton} type="button" onClick={returnToSetup}>Đổi số câu hoặc cách trả lời</button>
        </div>
      </section>}
    </main>

    <footer><span>wordcraft</span><span>Quiz 1 · Academic English 7</span></footer>
  </div>
}
