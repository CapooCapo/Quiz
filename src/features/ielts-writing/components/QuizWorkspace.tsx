'use client'

import { useEffect, useState } from 'react'
import type { AcademyQuestion } from '../types'
import { assessmentQuestions } from '../data/assessment'
import { evaluateAnswer } from '../evaluateAnswer'
import styles from '../academy.module.css'

const storageKey='wordcraft-ielts-quiz-v1'
export function QuizWorkspace({onComplete}:{onComplete:(id:string)=>void}) {
 const [index,setIndex]=useState(0); const [answer,setAnswer]=useState<string[]>([]); const [result,setResult]=useState<boolean|null>(null); const [mistakes,setMistakes]=useState<string[]>([]); const [done,setDone]=useState<string[]>([])
 useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem(storageKey)||'{}');setIndex(Math.min(saved.index||0,assessmentQuestions.length-1));setMistakes(saved.mistakes||[]);setDone(saved.done||[])}catch{/* begin a fresh quiz */}},[])
 const question=assessmentQuestions[index]
 const persist=(next:{index?:number;mistakes?:string[];done?:string[]})=>{try{localStorage.setItem(storageKey,JSON.stringify({index,mistakes,done,...next}))}catch{/* progress remains usable for this session */}}
 const setSingle=(value:string)=>{setAnswer([value]);setResult(null)}
 const submit=()=>{const correct=evaluateAnswer(question,question.type==='ordering'?answer:answer[0]||'');setResult(correct);const nextMistakes=correct?mistakes:mistakes.includes(question.id)?mistakes:[...mistakes,question.id];const nextDone=done.includes(question.id)?done:[...done,question.id];setMistakes(nextMistakes);setDone(nextDone);persist({mistakes:nextMistakes,done:nextDone});if(correct)onComplete(question.id)}
 const advance=()=>{const next=(index+1)%assessmentQuestions.length;setIndex(next);setAnswer([]);setResult(null);persist({index:next})}
 return <div className={styles.learningGrid}><section className={styles.lessonPanel}><p className={styles.eyebrow}>SPRINT 6 · QUESTION {index+1}/{assessmentQuestions.length} · {question.type.toUpperCase()}</p><div className={styles.progressTrack} role="progressbar" aria-label="Quiz progress" aria-valuenow={done.length} aria-valuemin={0} aria-valuemax={assessmentQuestions.length}><span style={{width:`${done.length/assessmentQuestions.length*100}%`}}/></div><h2>{question.prompt}</h2><QuestionInput question={question} answer={answer} setAnswer={setAnswer} setSingle={setSingle}/>{result!==null&&<div className={result?styles.correctFeedback:styles.incorrectFeedback} role="status"><strong>{result?'Correct':'Not quite'}</strong><p>{question.explanation}</p>{!result&&<p><strong>Suggested answer:</strong> {Array.isArray(question.answer)?question.answer.join(' '):question.answer}</p>}</div>}{result===null?<button className={styles.smallAction} onClick={submit} disabled={!answer.length||!answer.join('').trim()}>Check answer</button>:<button className={styles.smallAction} onClick={advance}>Next question →</button>}<p className={styles.mutedNote}>Answered this run: {done.length}/{assessmentQuestions.length}. Progress resumes from this browser.</p></section><aside className={styles.lessonPanel}><p className={styles.eyebrow}>REVIEW MISTAKES</p><h3>Practice history</h3><p>{mistakes.length?`${mistakes.length} question(s) to revisit.`:'No mistakes saved yet.'}</p>{mistakes.map(id=>{const item=assessmentQuestions.find(question=>question.id===id);return item&&<button className={styles.reviewItem} key={id} onClick={()=>{setIndex(assessmentQuestions.indexOf(item));setAnswer([]);setResult(null)}}>{item.prompt}</button>})}<h3>Question types</h3><p className={styles.typeList}>{[...new Set(assessmentQuestions.map(item=>item.type))].join(' · ')}</p></aside></div>
}

function QuestionInput({question,answer,setAnswer,setSingle}:{question:AcademyQuestion;answer:string[];setAnswer:(value:string[])=>void;setSingle:(value:string)=>void}) {
 if(question.type==='multiple-choice'||question.type==='matching')return <div>{question.choices?.map(choice=><label className={styles.choiceRow} key={choice}><input type="radio" name={question.id} checked={answer[0]===choice} onChange={()=>setSingle(choice)}/>{choice}</label>)}</div>
 if(question.type==='ordering')return <div><p className={styles.mutedNote}>Tap each token in sentence order.</p><div className={styles.tokenTray}>{question.choices?.map(token=><button key={token} className={answer.includes(token)?styles.tokenUsed:styles.tokenButton} disabled={answer.includes(token)} onClick={()=>setAnswer([...answer,token])}>{token}</button>)}</div><div className={styles.answerTokens}>{answer.map((token,i)=><button key={`${token}-${i}`} onClick={()=>setAnswer(answer.filter((_,n)=>n!==i))}>{token} ×</button>)}</div></div>
 return <textarea className={styles.bodyInput} rows={question.type==='write-one'?3:2} value={answer[0]||''} onChange={event=>setSingle(event.target.value)} aria-label="Your answer" placeholder={question.type==='fill-blank'?'Type the missing word':'Type your answer'}/>
}
