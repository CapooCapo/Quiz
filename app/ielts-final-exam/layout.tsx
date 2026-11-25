import './tailwind.css'

export default function FinalExamLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="fe-root">{children}</div>
}
