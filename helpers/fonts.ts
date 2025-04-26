import { Archivo, Nunito_Sans } from 'next/font/google'

export const nunito = Nunito_Sans({
  weight: 'variable',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  axes: ['wdth', 'opsz', 'YTLC'],
})

export const archivo = Archivo({
  weight: 'variable',
  style: ['normal'],
  subsets: ['latin'],
  preload: true,
  axes: ['wdth'],
})
