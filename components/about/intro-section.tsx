'use client'

import React, { FC, useRef, useState } from 'react'
import AboutCard from '@/components/cards/about-card'
import Typography from '@/components/Typography'
import SectionTitle from './section-title'
import { useAboutContext } from './about-content'
import { useInView } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

interface IntroSectionProps {
  className?: string
}

const IntroSection: FC<IntroSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive } = useAboutContext()
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 445 })

  const introRef = useRef(null)
  const introIsInView = useInView(introRef, { margin: `-45% 0px -45% 0px`, amount: 0.2 })

  const handleMouseEnter = () => {
    setActiveCard('MAAZ RANA')
    setIsActive(true)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setIsHovered(false)
  }

  return (
    <div
      ref={introRef}
      className={`relative h-fit order-1 sm:row-span-2 md:row-span-3 group ${className}`}
    >
      <AboutCard
        className='h-full min-h-fit max-h-fit'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isHovered || (isMobile && introIsInView)}
      >
        <Typography
          type='xl'
          leading='prose'
          weight='light'
          color='primary-hover'
          className='opacity-75 group-hover:opacity-100 transition-100 duration-300'
        >
          With "5+ years of experience", I am a User-centric Product Designer & Developer dedicated
          to crafting visually stunning and intuitive digital products.
        </Typography>
      </AboutCard>
      <SectionTitle
        text='Intro'
        isInView={isMobile ? introIsInView : true}
        className='translate-x-3 right-0 left-auto'
      />
    </div>
  )
}

export default IntroSection
