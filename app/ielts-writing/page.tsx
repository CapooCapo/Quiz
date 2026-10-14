import type { Metadata } from 'next'
import IELTSWritingAcademy from '../../src/features/ielts-writing/IELTSWritingAcademy'

export const metadata: Metadata = {
  title: 'IELTS Writing Academy — Wordcraft',
  description: 'A structured learning path for IELTS Academic Writing Task 1 and Task 2.',
}

export default function IELTSWritingPage() {
  return <IELTSWritingAcademy />
}
