'use client'

import Link from 'next/link'
import { startTransition, useEffect, useState } from 'react'
import { writingCategories } from './data/categories'
import { chartDatasets } from './data/charts'
import { CategoryCard } from './components/CategoryCard'
import { ChartViewer } from './components/ChartViewer'
import { LessonCard } from './components/LessonCard'
import { visualLessons } from './data/lessons'
import styles from './academy.module.css'

const tabs = ['Explore', 'Introduction & overview', 'Vocabulary & grammar', 'Body paragraphs', 'Quiz & progress', 'Full writing'] as const
export type AcademyTab = typeof tabs[number]

export default function IELTSWritingAcademy() {
  const [tab, setTab] = useState<AcademyTab>('Explore')
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)
  const [completed, setCompleted] = useState<string[]>([])
  useEffect(() => { try { const saved=localStorage.getItem('wordcraft-ielts-progress-v1'); if(saved) startTransition(() => setCompleted(JSON.parse(saved))) } catch { /* Ignore malformed local progress and keep the page usable. */ } }, [])
  useEffect(() => { if (window.location.hash === '#quiz') startTransition(() => setTab('Quiz & progress')) }, [])
  const markCompleted = (id:string) => setCompleted((current)=>{ const next=current.includes(id)?current:[...current,id]; try{localStorage.setItem('wordcraft-ielts-progress-v1',JSON.stringify(next))}catch{/* storage may be unavailable */} return next })
  return <div className={styles.page}>
    <header className={styles.header}>
      <Link className={styles.brand} href="/">word<span>craft</span></Link>
      <nav className={styles.navigation} aria-label="Main navigation"><Link href="/english/practice">Vocabulary</Link><span aria-current="page">Writing Academy</span></nav>
    </header>
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="academy-title">
        <div className={styles.heroCopy}><p className={styles.eyebrow}><span /> IELTS ACADEMIC · WRITING</p><h1 id="academy-title">Make your writing <em>clearer.</em></h1><p className={styles.heroDescription}>Learn to read visuals, choose the details that matter, and build confident, well-structured responses—one skill at a time.</p><div className={styles.heroActions}><a className={styles.primaryAction} href="#academy-workspace">Continue learning <span aria-hidden="true">↓</span></a><span className={styles.foundationNote}>{completed.length} learning items completed</span></div></div>
        <aside className={styles.foundationCard} aria-label="Academy progress"><div className={styles.foundationTop}><span>ACADEMY / TASK 1</span><span className={styles.liveDot}/></div><div className={styles.foundationGraphic} aria-hidden="true"><span className={styles.graphicRing}/><span className={styles.graphicCore}>W</span><span className={styles.graphicOrbit}>READ<br/>→ PLAN<br/>→ WRITE</span></div><div className={styles.foundationBottom}><span>LEARNING SYSTEM</span><strong>{completed.length} completed</strong></div></aside>
      </section>
      <section id="academy-workspace" className={styles.workspace}>
        <div className={styles.tabList} role="tablist" aria-label="Academy learning areas">{tabs.map((name)=><button id={name==='Quiz & progress'?'quiz':undefined} key={name} type="button" role="tab" aria-selected={tab===name} className={tab===name?styles.activeTab:styles.tab} onClick={()=>{setTab(name);setSelectedLesson(null)}}>{name}</button>)}</div>
        {tab==='Explore'&&<>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>YOUR LEARNING MAP</p><h2>Choose a writing track</h2></div><p>Lessons, sourced charts, practice and writing tools in one place.</p></div>
          <div className={styles.categoryGrid}>{writingCategories.map((category,index)=><CategoryCard key={category.id} category={category} index={index}/>)}</div>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>VISUAL LEARNING</p><h2>Learn from real data</h2></div><p>Keyboard-accessible points, explanations and a full data table accompany each chart.</p></div>
          <div className={styles.lessonList}>{visualLessons.map((lesson,index)=><LessonCard key={lesson.id} lesson={lesson} index={index} completed={completed.includes(lesson.id)} onOpen={()=>setSelectedLesson(lesson.id)}/>)}</div>
          {(selectedLesson==='compare-categories'?chartDatasets[1]:chartDatasets[0])&&<ChartViewer dataset={chartDatasets[selectedLesson==='compare-categories'?1:0]}/ >}
          <p className={styles.dataNote}>Numerical data: World Bank World Development Indicators (IEA source). Values are rounded to two decimal places for display.</p>
        </>}
        {tab!=='Explore'&&<LearningWorkspace tab={tab} onComplete={markCompleted}/>}
      </section>
      <footer className={styles.foundationFooter}><div><span className={styles.footerMark}>IELTS</span><p><strong>Learn accurately, write clearly</strong><br/>Progress and drafts are stored in this browser.</p></div><Link href="/english/practice">Return to vocabulary practice <span aria-hidden="true">↗</span></Link></footer>
    </main>
  </div>
}

function LearningWorkspace({tab,onComplete}:{tab:Exclude<AcademyTab,'Explore'>;onComplete:(id:string)=>void}) {
  if(tab==='Introduction & overview') return <TeachingWorkspace onComplete={onComplete}/>
  if(tab==='Vocabulary & grammar') return <VocabularyWorkspace onComplete={onComplete}/>
  if(tab==='Body paragraphs') return <BodyWorkspace onComplete={onComplete}/>
  if(tab==='Quiz & progress') return <QuizWorkspace onComplete={onComplete}/>
  return <WritingWorkspace onComplete={onComplete}/>
}

import { introductionLessons, overviewLessons } from './data/introductionOverview'
import { vocabularyCards } from './data/vocabulary'
import { BodyWorkspace } from './components/BodyWorkspace'
import { QuizWorkspace } from './components/QuizWorkspace'
import { WritingWorkspace } from './components/WritingWorkspace'

function TeachingWorkspace({onComplete}:{onComplete:(id:string)=>void}) {
  const [chosen,setChosen]=useState(introductionLessons[0]); const [answer,setAnswer]=useState(''); const [checked,setChecked]=useState(false)
  const all=[...introductionLessons,...overviewLessons]
  return <div className={styles.learningGrid}><aside className={styles.lessonNavigation}><p className={styles.eyebrow}>INTRODUCTION · OVERVIEW</p>{all.map((lesson,i)=><button key={lesson.id} onClick={()=>{setChosen(lesson);setAnswer('');setChecked(false)}} className={chosen.id===lesson.id?styles.selectedLesson:styles.lessonNavButton}><span>{String(i+1).padStart(2,'0')}</span>{lesson.title}</button>)}</aside><article className={styles.lessonContent}><p className={styles.eyebrow}>{chosen.skill}</p><h2>{chosen.title}</h2><p className={styles.leadText}>{chosen.objective}</p><section className={styles.lessonPanel}><h3>Giải thích</h3><p>{chosen.explanationVi}</p><h3>Grammar structure</h3><code>{chosen.grammar}</code><h3>Examples</h3><p className={styles.correctExample}>✓ {chosen.correctExample}</p><p className={styles.incorrectExample}>✗ {chosen.incorrectExample}</p><h3>Alternative expressions</h3><p>{chosen.alternatives.join(' · ')}</p></section><section className={styles.lessonPanel}><h3>Guided quiz</h3><p>{chosen.guidedQuestion.prompt}</p>{chosen.guidedQuestion.options.map((option)=><label className={styles.choiceRow} key={option}><input type="radio" name="guided" value={option} checked={answer===option} onChange={()=>{setAnswer(option);setChecked(false)}}/>{option}</label>)}{checked&&<p className={answer===chosen.guidedQuestion.answer?styles.correctExample:styles.incorrectExample}>{answer===chosen.guidedQuestion.answer?'Correct. ':'Review: '}{chosen.guidedQuestion.explanation}</p>}<button className={styles.smallAction} onClick={()=>setChecked(true)} disabled={!answer}>Check answer</button></section><section className={styles.lessonPanel}><h3>Chart-based exercise</h3><p>{chosen.chartExercise}</p></section><ChartViewer dataset={chartDatasets[chosen.id==="highest-lowest"?1:0]}/><button className={styles.primaryAction} onClick={()=>onComplete(chosen.id)}>Mark lesson complete ✓</button></article></div>
}

function VocabularyWorkspace({onComplete}:{onComplete:(id:string)=>void}) {
  const [group,setGroup]=useState('All'); const [answer,setAnswer]=useState(''); const [checked,setChecked]=useState(false)
  const groups=['All',...new Set(vocabularyCards.map(card=>card.group))]; const cards=group==='All'?vocabularyCards:vocabularyCards.filter(card=>card.group===group)
  return <><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>VOCABULARY & GRAMMAR</p><h2>Describe change precisely</h2></div><p>Patterns clarify which number is a start, endpoint, or difference.</p></div><div className={styles.filterRow}>{groups.map(name=><button key={name} onClick={()=>setGroup(name)} className={group===name?styles.activeFilter:styles.filterButton}>{name}</button>)}</div><div className={styles.vocabGrid}>{cards.map(card=><article className={styles.vocabCard} key={card.id}><MiniTrend direction={card.chartDirection}/><p className={styles.eyebrow}>{card.group}</p><h3>{card.term}</h3><p>{card.meaning} · <em>{card.partOfSpeech}</em></p><code>{card.pattern}</code><p>{card.usage}</p><blockquote>{card.example}</blockquote><div className={styles.mistakeBox}><strong>Common mistake</strong><p>✗ {card.commonMistake}</p><small>{card.mistakeExplanation}</small></div><p><strong>Alternatives:</strong> {card.alternatives.join(', ')}</p>{card.id==='increase'&&<p className={styles.inlineNote}>from A to B = start → end · by N = change amount · peak at N = maximum value · fluctuate between A and B = range</p>}<div className={styles.practiceBox}><strong>Practice</strong><p>{card.practice}</p><input aria-label={`Answer for ${card.term} practice`} value={answer} onChange={e=>{setAnswer(e.target.value);setChecked(false)}} placeholder="Type a short answer"/><button className={styles.smallAction} onClick={()=>{setChecked(true);onComplete(`vocab-${card.id}`)}} disabled={!answer}>Check & save practice</button>{checked&&<p className={styles.inlineNote}>Review the grammar pattern above and check that your preposition and value type match the chart.</p>}</div></article>)}</div></>
}
function MiniTrend({direction}:{direction:'up'|'down'|'flat'|'mixed'}) { const path=direction==='up'?'M5 42 L28 35 L50 38 L75 15':direction==='down'?'M5 15 L28 20 L50 32 L75 42':direction==='flat'?'M5 28 L28 27 L50 29 L75 28':'M5 34 L28 16 L50 38 L75 22'; return <svg className={styles.miniTrend} viewBox="0 0 80 52" role="img" aria-label={`${direction} trend illustration`}><path d="M4 46H78M5 6V46" className={styles.gridLine}/><path d={path} className={styles.dataLine}/></svg> }
