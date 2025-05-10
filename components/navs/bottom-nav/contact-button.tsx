'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { useBottomNav } from './bottom-nav-context'
import * as m from 'motion/react-m'
import Typography from '@/components/Typography'
import { AnimatePresence } from 'motion/react'

interface ContactButtonProps {
  isMobile?: boolean
}

const ContactButton: FC<ContactButtonProps> = ({ isMobile = false }) => {
  const { isEndOfPage } = useBottomNav()

  return (
    <m.span layout animate={{ width: isEndOfPage ? '100%' : 'fit' }} transition={{ duration: 0.4 }}>
      <Link
        href='mailto:awaismaaz@gmail.com'
        className={`${isMobile ? 'flex sm:hidden !justify-center !items-center px-4 py-2.5 sm:!p-[9px] md:!p-[10px] lg:!p-[11px] xl:!p-3' : 'hidden sm:flex !justify-center !items-center py-xs px-m'} ${!isEndOfPage && '!p-xs'} flex-row bg-primary hover:bg-primary-hover rounded-full !overflow-hidden !whitespace-nowrap`}
        aria-label={isMobile ? 'Get in Touch' : 'awaismaaz@gmail.com'}
      >
        <Mail className={'fill-none stroke-primary-accent h-m w-m'} />
        <AnimatePresence mode='wait'>
          <m.div
            layout
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: isEndOfPage ? '100%' : 0, opacity: isEndOfPage ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className='flex items-center justify-center'
          >
            <Typography
              type='xl'
              color='primary-accent'
              leading='flat'
              className='whitespace-nowrap'
              weight={isMobile ? 'semi-bold' : 'medium'}
            >
              {isMobile ? 'Get in Touch' : 'awaismaaz@gmail.com'}
            </Typography>
          </m.div>
        </AnimatePresence>
      </Link>
    </m.span>
  )
}

export default ContactButton
