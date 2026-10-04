import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wordcraft — English vocabulary practice',
  description: 'Build your English vocabulary through quick quizzes and sentence practice.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
