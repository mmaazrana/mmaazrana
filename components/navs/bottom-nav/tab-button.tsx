'use client'

import React, { FC } from 'react'
import * as m from 'motion/react-m'

interface TabButtonProps {
  onClick: () => void
  ariaLabel: string
  isEndOfPage: boolean
  delay: number
  icon: React.ReactNode
}

const TabButton: FC<TabButtonProps> = ({ onClick, ariaLabel, isEndOfPage, delay, icon }) => (
  <m.button
    initial={{ opacity: 0, transform: 'translateY(100px)' }}
    animate={{ opacity: isEndOfPage ? 0 : 1, transform: `translateY(${isEndOfPage ? 100 : 0}px)` }}
    transition={{ duration: 0.25, delay }}
    onClick={onClick}
    className='h-10 sm:h-12 w-10 sm:w-12 aspect-square flex justify-center items-center rounded-full bg-secondary/30 backdrop-blur-sm shadow-xl z-100'
    aria-label={ariaLabel}
  >
    {icon}
  </m.button>
)

export default TabButton
