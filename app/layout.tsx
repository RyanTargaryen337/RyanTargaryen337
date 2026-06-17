import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KEYS — Africa\'s Designated Driver Network',
  description: 'A category infrastructure play for Bolt — built on the validated billion-dollar model from China, adapted for the markets where it actually works.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
