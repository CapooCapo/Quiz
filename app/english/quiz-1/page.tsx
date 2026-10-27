import type { Metadata } from 'next'
import QuizOne from '../../../src/features/quiz-one/QuizOne'

export const metadata: Metadata = {
  title: 'Quiz 1 — Academic English 7 | Wordcraft',
  description: 'Practise all 66 words from the Academic English 7 Quiz 1 revision pack.',
}

export default function QuizOnePage() {
  return <QuizOne />
}
