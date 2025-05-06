'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Link from 'next/link'
import { FooterButtonT } from '@/helpers/types'

interface FooterSectionProps {
  footerButtons: FooterButtonT[][]
  isEndOfPage: boolean
}

const FooterSection: FC<FooterSectionProps> = ({ isEndOfPage, footerButtons }) => {
  return (
    <div
      className={`${isEndOfPage ? 'flex' : 'hidden'} w-full flex-row flex-auto gap-8 justify-between`}
    >
      {footerButtons.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, transform: 'translateY(150px)' }}
          animate={{
            opacity: isEndOfPage ? 1 : 0,
            transform: `translateY(${isEndOfPage ? 0 : 150}px)`,
          }}
          transition={{ duration: isEndOfPage ? 0.25 : 0, delay: isEndOfPage ? 0.1 : 0 }}
          className={
            'transition-colors grow flex flex-auto items-stretch w-full flex-col mt-6 lg:my-8 gap-s'
          }
        >
          <Typography type='2xl' weight='semi-bold' className='mb-3xs whitespace-nowrap'>
            {section[0].text}
          </Typography>
          {section.slice(1).map((button, index) => (
            <div id='pages' key={index} className='transition-colors'>
              <Link href={button.href} aria-label={button.text}>
                <Typography
                  type='xl'
                  weight='light'
                  leading='flat'
                  className={
                    'opacity-50 hover:opacity-100 transition-opacity duration-250 whitespace-nowrap'
                  }
                >
                  {button.text}
                </Typography>
              </Link>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default FooterSection
