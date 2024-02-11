import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  manifest : "/manifest.json",
  title: 'MAAZ RANA - Personal Branding',
  description: 'Detail Oriented Product Designer and Developer focused on producing human friendly solutions to real world problems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en  ">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
