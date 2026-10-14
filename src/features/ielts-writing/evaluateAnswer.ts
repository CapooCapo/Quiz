import type { AcademyQuestion } from './types'

export function evaluateAnswer(question: AcademyQuestion, answer: string | string[]) {
  const normalize=(value:string)=>value.trim().toLowerCase().replace(/[.!?,]/g,'').replace(/\s+/g,' ')
  const actual=Array.isArray(answer)?answer:answer
  const accepted=Array.isArray(question.answer)?question.answer:[question.answer]
  if(question.type==='ordering') return Array.isArray(actual)&&normalize(actual.join(' '))===normalize(accepted.join(' '))
  if(question.type==='error-correction') return accepted.some(item=>normalize(String(actual))===normalize(item))
  if(question.type==='trend') return accepted.some(item=>normalize(String(actual)).includes(normalize(item)))
  if(question.type==='write-one') return accepted.every(item=>normalize(String(actual)).includes(normalize(item)))
  return accepted.some(item=>normalize(String(actual))===normalize(item))
}
