'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/button'
import { useBottomNav } from './bottom-nav-context'

interface SocialLinkProps {
  icon: React.ReactElement<{ className?: string }>
  text: string
  href: string
  index: number
}

const SocialLink: FC<SocialLinkProps> = ({ icon, text, href, index }) => {
  const { isEndOfPage } = useBottomNav()

  return (
    <motion.div
      animate={{ opacity: isEndOfPage ? 1 : 0, y: isEndOfPage ? 0 : 100 }}
      transition={{
        duration: isEndOfPage ? 0.25 : 0.15,
        delay: isEndOfPage ? 0.25 + index * 0.05 : 0,
      }}
      className='transition-none'
    >
      <Link href={href} target='_blank' rel='noopener noreferrer' aria-label={text}>
        <Button leftIcon={icon} text={text} type='secondary' textWeight='medium' />
      </Link>
    </motion.div>
  )
}

export default SocialLink
