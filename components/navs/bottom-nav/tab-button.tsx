import React, { FC } from 'react'
import * as m from 'motion/react-m'
import Link from 'next/link'

interface TabButtonProps {
  pathName: string
  tab: string
  ariaLabel: string
  isEndOfPage: boolean
  delay: number
  icon: React.ReactNode
}

const TabButton: FC<TabButtonProps> = ({ pathName, tab, ariaLabel, isEndOfPage, delay, icon }) => (
  <Link
    className='relative z-1000'
    href={`${pathName}?tab=${tab}`}
    aria-label={ariaLabel}
    scroll={false}
  >
    <m.div
      initial={{ opacity: 0, transform: 'translateY(100px)' }}
      animate={{
        opacity: isEndOfPage ? 0 : 1,
        transform: `translateY(${isEndOfPage ? 100 : 0}px)`,
      }}
      transition={{ duration: 0.25, delay }}
      className='h-10 sm:h-12 w-10 sm:w-12 aspect-square flex justify-center items-center rounded-full bg-secondary/30 backdrop-blur-sm shadow-xl'
    >
      {icon}
    </m.div>
  </Link>
)

export default TabButton
