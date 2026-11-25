import { notFound } from 'next/navigation'
import { writingTask1, writingTask2, getWritingTask1, getWritingTask2 } from '../../../../src/features/ielts-final-exam/data/examData'
import { WritingExercise } from '../../../../src/features/ielts-final-exam/components/WritingExercise'
import { FocusHeader } from '../../../../src/features/ielts-final-exam/components/FocusHeader'

export const dynamicParams = false

export function generateStaticParams() {
  return [...writingTask1, ...writingTask2].map((item) => ({ id: item.id }))
}

export default async function WritingTaskPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const task = getWritingTask1(id) ?? getWritingTask2(id)
  if (!task) notFound()
  return (
    <>
      <FocusHeader backHref="/ielts-final-exam#writing" backLabel="Quay lại" label="Writing · Chế độ làm bài" />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
        <WritingExercise task={task} />
      </main>
    </>
  )
}
