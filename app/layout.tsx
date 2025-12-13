import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landon Studio - Creative Digital Studio',
  description: 'Modern digital studio creating exceptional web experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
