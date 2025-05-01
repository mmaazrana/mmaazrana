import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import Providers from '@/app/providers'
import { domAnimation, LazyMotion } from 'motion/react'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'MAAZ RANA - Personal Branding',
  description:
    'Detail Oriented Product Designer and Developer focused on producing human friendly solutions to real world problems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta name='pwa-demo' content='pwa-demo' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='pwa-demo' />
        <meta name='description' content='pwa-demo' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#22365E' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='initial-scale=1, viewport-fit=cover, width=device-width'
        ></meta>
      </Head>
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
