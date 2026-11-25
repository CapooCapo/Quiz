import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wordcraft — English vocabulary practice',
  description: 'Build your English vocabulary through quick quizzes and sentence practice.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // suppressHydrationWarning: browser translation extensions add classes (e.g. "trancy-vi") to <html> before React hydrates.
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>
}
