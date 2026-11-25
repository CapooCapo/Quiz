import { notFound } from 'next/navigation'
import { readingSets, getReadingSet } from '../../../../src/features/ielts-final-exam/data/examData'
import { ReadingExerciseView } from '../../../../src/features/ielts-final-exam/components/ReadingExercise'
import { FocusHeader } from '../../../../src/features/ielts-final-exam/components/FocusHeader'

export const dynamicParams = false

export function generateStaticParams() {
  return readingSets.map((set) => ({ exercise: set.id }))
}

export default async function ReadingExercisePage({ params }: { params: Promise<{ exercise: string }> }) {
  const { exercise: id } = await params
  const set = getReadingSet(id)
  if (!set) notFound()
  return (
    <>
      <FocusHeader backHref="/ielts-final-exam#reading" backLabel="Quay lại" label="Reading · Chế độ làm bài" />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
        <ReadingExerciseView set={set} />
      </main>
    </>
  )
}
