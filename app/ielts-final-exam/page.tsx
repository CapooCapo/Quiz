import type { Metadata } from 'next'
import IeltsFinalExamHub from '../../src/features/ielts-final-exam/IeltsFinalExamHub'

export const metadata: Metadata = {
  title: 'IELTS Final Exam — Luyện thi chuẩn đầu ra',
  description: 'Ôn luyện từ vựng, Reading, Listening, Writing và Speaking theo định dạng đề chuẩn đầu ra.',
}

export default function IeltsFinalExamPage() {
  return <IeltsFinalExamHub />
}
