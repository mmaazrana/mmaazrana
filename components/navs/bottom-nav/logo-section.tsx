'use client'

import React, { FC } from 'react'
import * as m from 'motion/react-m'
import Typography from '@/components/Typography'
import Logo from './logo'

interface LogoSectionProps {
  isEndOfPage: boolean
}

const LogoSection: FC<LogoSectionProps> = ({ isEndOfPage }) => {
  return (
    <div
      className={
        'flex flex-col items-start justify-start w-full lg:w-fit lg:max-w-fit overflow-hidden min-h-fit h-fit gap-1'
      }
    >
      <Logo />
      <m.div
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        animate={{
          opacity: isEndOfPage ? 1 : 0,
          transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
        }}
        transition={{ duration: 0.25, delay: isEndOfPage ? 0.25 : 0 }}
        className='transition-none flex w-full min-w-full'
      >
        <Typography
          type='lg'
          weight='light'
          leading='prose'
          className={`${isEndOfPage ? 'inline-block' : 'hidden'} opacity-75 shrink`}
        >
          Product Designer - Web Developer - Mobile App Developer - Animator - 3D Artist
        </Typography>
      </m.div>
    </div>
  )
}

export default LogoSection
