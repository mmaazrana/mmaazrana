import './globals.css'
import type { Metadata, Viewport } from 'next'
import React from 'react'
import Providers from '@/app/providers'
import { domAnimation, LazyMotion } from 'motion/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

// Define common description
const siteDescription =
  'Maaz Rana: Product Designer (UI/UX), Frontend Web & Mobile (React, Next.js, Flutter) Developer, transforming visions into impactful, human-centered digital experiences.'

// Define Structured Data
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maaz Rana',
  url: 'https://maazrana.com', // Replace with your actual domain
  // Add sameAs URLs if you have profiles on other platforms (LinkedIn, GitHub, etc.)
  sameAs: [
    'https://www.linkedin.com/in/mmaazrana/',
    'https://github.com/mmaazrana', // Add GitHub if applicable
    'https://dribbble.com/mmaazrana',
    'https://www.behance.net/maazrana3',
    'https://www.twitter.com/mmaazrana/',
    // Add other relevant profiles
  ],
  // Briefly describe the person's main roles/professions
  jobTitle: 'Product Designer, Frontend Developer, Mobile App Developer',
  // You could add worksFor, alumniOf, etc. if desired
  author: { '@type': 'Person', name: 'Maaz Rana' },
  description: siteDescription, // Use the variable here
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Maaz Rana Portfolio',
  url: 'https://www.maazrana.com', // Replace with your actual domain
  author: { '@type': 'Person', name: 'Maaz Rana' },
  description: siteDescription, // Use the variable here
  // Potential action for search results
  // potentialAction: {
  //   '@type': 'SearchAction',
  //   target: `${URL}/search?q={search_term_string}`,
  //   'query-input': 'required name=search_term_string',
  // },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.maazrana.com'),
  title: {
    default: 'Maaz Rana - Product Designer & Frontend Developer',
    template: '%s | Maaz Rana',
  },
  description: siteDescription, // Use the variable here
  manifest: '/manifest.json',
  keywords: [
    'Product Designer',
    'UI/UX Designer',
    'UI Designer',
    'UX Developer',
    'Web Designer',
    'Web Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Mobile App Developer',
    'Flutter Developer',
    'Dart Developer',
    '3D Artist',
    'Video Editor',
    'Graphics Designer',
    'Logo Designer',
    'Maaz Rana',
    'Portfolio',
  ],
  authors: [{ name: 'Maaz Rana', url: 'https://www.maazrana.com' }],
  creator: 'Maaz Rana',
  appleWebApp: { capable: true, title: 'Maaz Rana Portfolio', statusBarStyle: 'default' },
  formatDetection: { telephone: false },
  openGraph: {
    title: 'Maaz Rana - Product Designer & Frontend Developer',
    description: siteDescription, // Use the updated siteDescription
    url: 'https://www.maazrana.com',
    siteName: 'Maaz Rana Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maaz Rana - Product Designer & Frontend Developer',
    description: siteDescription, // Use the updated siteDescription
    creator: '@_mmaazrana_',
  },
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico', apple: '/icons/apple-touch-icon.png' },
  other: {
    'structured-data-person': JSON.stringify(personSchema),
    'structured-data-website': JSON.stringify(websiteSchema),
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2B5797',
    'msapplication-tap-highlight': 'no',
  },
}

export const viewport: Viewport = {
  themeColor: '#22365E',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <body>
          <Providers>{children}</Providers>
        </body>
      </LazyMotion>
      {/* Vercel Speed Insights */}
      <SpeedInsights />
      {/* Vercel Analytics */}
      <Analytics />
      {/* Google Analytics */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
    </html>
  )
}
