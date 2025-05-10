'use client'

import React, { FC, useRef, useState } from 'react'
import AboutCard from '@/components/cards/about-card'
import Typography from '@/components/Typography'
import SectionTitle from './section-title'
import { useAboutContext } from './about-content'
import Medal from '@/components/icons/medal'
import { useInView } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

interface EducationSectionProps {
  className?: string
}

const EducationSection: FC<EducationSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive } = useAboutContext()
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 445 })
  const educationRef = useRef(null)
  const educationIsInView = useInView(educationRef, { margin: `-45% 0px -45% 0px`, amount: 0.2 })

  const handleMouseEnter = () => {
    setActiveCard('EDUCATION')
    setIsActive(true)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setIsHovered(false)
  }

  return (
    <div
      ref={educationRef}
      className={`relative h-fit order-2 sm:row-span-2 md:row-span-3 ${className}`}
    >
      <AboutCard
        className='h-full min-h-fit max-h-fit'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isHovered || (isMobile && educationIsInView)}
      >
        <div className='flex flex-col gap-6 sm:gap-7 md:gap-8'>
          <div className='flex flex-col gap-2 md:gap-3'>
            <Typography tag='h3' type='xl' weight='semi-bold' leading='light'>
              Software Engineer
            </Typography>
            <Typography
              type='lg'
              leading='medium'
              weight='light'
              color='primary-hover'
              className='opacity-80'
            >
              Bachelors of Engineering - National University of Sciences and Technology
            </Typography>
            <Typography type='lg' weight='bold' color='secondary' leading='flat'>
              CGPA - 3.61
            </Typography>
          </div>
          <div className='flex flex-row gap-1 sm:gap-2 md:gap-3 items-center justify-start'>
            <Medal className='fill-golden h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7' />
            <Typography tag='h4' type='lg' weight='medium' color='golden' leading='flat'>
              President&apos;s Gold Medalist
            </Typography>
          </div>
        </div>
      </AboutCard>
      <SectionTitle
        text='Education'
        isInView={isMobile ? educationIsInView : true}
        className='translate-x-3 right-0 left-auto'
      />
    </div>
  )
}

export default EducationSection
