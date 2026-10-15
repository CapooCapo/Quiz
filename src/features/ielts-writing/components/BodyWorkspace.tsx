'use client'

import { startTransition, useEffect, useState } from 'react'
import { ChartViewer } from './ChartViewer'
import { chartDatasets } from '../data/charts'
import styles from '../academy.module.css'

const key='wordcraft-ielts-body-draft-v1'
const stages=[
  {title:'1 · Find the endpoints',prompt:'Enter the starting value (2010) and ending value (2021) for Viet Nam.',checks:['38.69','41.17']},
  {title:'2 · Locate turning points',prompt:'Name the selected-period high and low (value + year).',checks:['48.11','2012','30.87','2019']},
  {title:'3 · Describe the trend accurately',prompt:'Write one sentence describing the rise, fall and later recovery without claiming a continuous trend.',checks:['2012','2019']},
  {title:'4 · Compare categories',prompt:'Compare Viet Nam and Malaysia using the 2021 bar chart and “respectively” or a comparative.',checks:['41.17','17.00']},
]
export function BodyWorkspace({onComplete}:{onComplete:(id:string)=>void}) {
  const [stage,setStage]=useState(0); const [exercise,setExercise]=useState(''); const [body1,setBody1]=useState(''); const [body2,setBody2]=useState(''); const [feedback,setFeedback]=useState('')
  useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem(key)||'{}');startTransition(()=>{setExercise(saved.exercise||'');setBody1(saved.body1||'');setBody2(saved.body2||'')})}catch{/* fresh draft */}},[])
  const save=(next:{exercise?:string;body1?:string;body2?:string})=>{const data={exercise,body1,body2,...next};try{localStorage.setItem(key,JSON.stringify(data))}catch{/* storage may be disabled */}}
  const check=()=>{const normalized=exercise.toLowerCase();const missed=stages[stage].checks.filter(value=>!normalized.includes(value.toLowerCase()));setFeedback(missed.length?`Check the chart again: include or explain ${missed.join(', ')}.`:'Key chart evidence found. Now make sure your sentence states the relationship clearly.');if(!missed.length&&stage<stages.length-1)setStage(stage+1)}
  return <div><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>SPRINT 5 · BODY PARAGRAPHS</p><h2>Turn data into a clear comparison</h2></div><p>Progressively practise endpoints, turning points, trend sentences and paragraph grouping.</p></div><ChartViewer dataset={chartDatasets[0]}/><div className={styles.learningGrid}><section className={styles.lessonPanel}><p className={styles.eyebrow}>PROGRESSIVE EXERCISE · {stage+1}/{stages.length}</p><h3>{stages[stage].title}</h3><p>{stages[stage].prompt}</p><textarea className={styles.bodyInput} rows={4} value={exercise} onChange={event=>{setExercise(event.target.value);setFeedback('');save({exercise:event.target.value})}} aria-label="Chart data exercise response" placeholder="Write your answer with relevant data"/><button className={styles.smallAction} onClick={check} disabled={!exercise.trim()}>Check key details</button>{feedback&&<p className={styles.inlineNote} aria-live="polite">{feedback}</p>}<ul className={styles.exerciseSteps}>{stages.map((item,i)=><li key={item.title} aria-current={i===stage?'step':undefined}>{item.title}</li>)}</ul></section><section className={styles.lessonPanel}><p className={styles.eyebrow}>PARAGRAPH BUILDER</p><h3>Group related data</h3><p>Body 1: describe the early movement and turning point. Body 2: describe the low, recovery and comparison where relevant.</p><label className={styles.writingField}><strong>Body 1</strong><textarea rows={5} value={body1} onChange={event=>{setBody1(event.target.value);save({body1:event.target.value})}} placeholder="Describe a coherent group of early-period features…"/></label><label className={styles.writingField}><strong>Body 2</strong><textarea rows={5} value={body2} onChange={event=>{setBody2(event.target.value);save({body2:event.target.value})}} placeholder="Describe later movement, low/high points or a comparison…"/></label><button className={styles.smallAction} onClick={()=>{save({body1,body2});onComplete('body-paragraph-draft')}}>Save paragraphs</button><p className={styles.mutedNote}>Draft auto-saves in this browser. Feedback checks key evidence only; it does not assign an IELTS band.</p></section></div></div>
}
