import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Archivo, Nunito } from 'next/font/google';
import Providers from '@/app/providers';
import { domAnimation, LazyMotion } from 'motion/react';

const nunito = Nunito({
  weight: ['200', '300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const archivo = Archivo({
  weight: ['600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'MAAZ RANA - Personal Branding',
  description:
    'Detail Oriented Product Designer and Developer focused on producing human friendly solutions to real world problems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <body className={`${nunito.className} ${archivo.className}`}>
          <Providers>{children}</Providers>
        </body>
      </LazyMotion>
    </html>
  );
}
