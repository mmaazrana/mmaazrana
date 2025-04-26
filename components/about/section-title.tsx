import React from 'react'
import { archivo } from '@/helpers/fonts'

interface SectionTitleProps {
  text: string
  isInView: boolean
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, isInView, className = '' }) => {
  return (
    <span
      suppressHydrationWarning
      className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 -translate-x-3 left-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-end text-right ${
        isInView ? 'custom-text-stroke-active' : 'custom-text-stroke'
      } ${archivo.className} ${className}`}
    >
      {text}
    </span>
  )
}

export default SectionTitle
