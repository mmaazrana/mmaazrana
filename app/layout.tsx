import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Abril_Fatface } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
const abrilFatface = Abril_Fatface({weight: ['400'], subsets: ['latin'],});

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
      <body className={`${poppins.className} ${abrilFatface.className}`}>{children}</body>
    </html>
  )
}
