'use client'

import { archivo } from '@/helpers/fonts'
import { AnimatePresence, m } from 'motion/react'
import { useAboutContext } from './about-content'

const AnimatedText = () => {
  const { activeCard, isActive } = useAboutContext()

  return (
    <div className='hidden about:flex absolute w-full h-full top-0 left-0 text-center justify-center items-center -z-10'>
      <AnimatePresence mode='wait'>
        <m.span
          key={activeCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ willChange: 'opacity, transform' }}
          className={`transition-all duration-200 text-primary-accent uppercase font-[1000] text-[10.5vw] tracking-[0.5rem] 2xl:text-[180px] leading-[1] ${
            isActive ? 'custom-text-stroke-active' : 'custom-text-stroke'
          } ${archivo.className}`}
        >
          {activeCard}
        </m.span>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedText
