'use client'

import Image from 'next/image'
import pfp from '../../public/images/memoji-pfp.webp'
import React, { FC, useRef, useState } from 'react'
import AboutCard from '@/components/cards/about-card'
import SectionTitle from './section-title'
import { useAboutContext } from './about-content'
import { useInView } from 'motion/react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import { SiBehance, SiDribbble, SiGithub, SiLinkedin, SiUpwork } from 'react-icons/si'

interface SocialsSectionProps {
  className?: string
}

const SocialsSection: FC<SocialsSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive } = useAboutContext()
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 445 })

  const socialsRef = useRef(null)
  const socialsIsInView = useInView(socialsRef, { margin: `-45% 0px -45% 0px`, amount: 0.2 })

  const handleMouseEnter = () => {
    setActiveCard('SOCIALS')
    setIsActive(true)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setIsHovered(false)
  }

  return (
    <div
      ref={socialsRef}
      className={`relative !aspect-square h-fit order-3 sm:row-span-2 md:row-span-3 ${className}`}
    >
      <AboutCard
        className='h-fit !aspect-square !gap-0 !p-0 !overflow-clip group'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isHovered || (isMobile && socialsIsInView)}
      >
        <div className='relative flex items-center justify-center group'>
          <Image
            src={pfp}
            alt='Maaz Rana'
            fill
            sizes='(max-width: 445px) 95vw, (max-width: 768px) 45vw, 30vw'
            className={`!aspect-square object-cover  !relative opacity-50 saturate-0 group-hover:opacity-100 group-hover:saturate-100 !transition-all duration-300 ${
              false && '!opacity-100 !saturate-100'
            }`}
            placeholder='blur'
          />
          <div className='absolute bottom-0 left-0 flex flex-row flex-wrap gap-x-2xs gap-y-xs items-end justify-start p-m'>
            <Link
              href='https://www.upwork.com/mmaazrana'
              target='_blank'
              aria-label='Upwork Profile'
              rel='noopener noreferrer'
              className='p-s bg-secondary/7 backdrop-blur-sm rounded-full group-hover:bg-secondary/15 hover:-translate-y-2xs !transition-all duration-300'
            >
              <SiUpwork className='w-s h-s aspect-square' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/mmaazrana'
              target='_blank'
              aria-label='LinkedIn Profile'
              rel='noopener noreferrer'
              className='p-s bg-secondary/7 backdrop-blur-sm rounded-full group-hover:bg-secondary/15 hover:-translate-y-2xs !transition-all duration-300'
            >
              <SiLinkedin className='w-s h-s aspect-square' />
            </Link>
            <Link
              href='https://www.github.com/mmaazrana'
              target='_blank'
              aria-label='GitHub Profile'
              rel='noopener noreferrer'
              className='p-s bg-secondary/7 backdrop-blur-sm rounded-full group-hover:bg-secondary/15 hover:-translate-y-2xs !transition-all duration-300'
            >
              <SiGithub className='w-s h-s aspect-square' />
            </Link>
            <Link
              href='https://www.behance.com/maazrana3'
              target='_blank'
              aria-label='Behance Profile'
              rel='noopener noreferrer'
              className='p-s bg-secondary/7 backdrop-blur-sm rounded-full group-hover:bg-secondary/15 hover:-translate-y-2xs !transition-all duration-300'
            >
              <SiBehance className='w-s h-s aspect-square' />
            </Link>

            <Link
              href='https://www.dribbble.com/mmaazrana'
              target='_blank'
              aria-label='Dribbble Profile'
              rel='noopener noreferrer'
              className='p-s bg-secondary/7 backdrop-blur-sm rounded-full group-hover:bg-secondary/15 hover:-translate-y-2xs !transition-all duration-300'
            >
              <SiDribbble className='w-s h-s aspect-square' />
            </Link>
          </div>
        </div>
      </AboutCard>
      <SectionTitle
        text='Socials'
        isInView={isMobile ? socialsIsInView : true}
        className='translate-x-3 right-0 left-auto'
      />
    </div>
  )
}

export default SocialsSection
