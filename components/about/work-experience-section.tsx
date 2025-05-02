'use client'

import React, { FC, useMemo, useRef, useState } from 'react'
import AboutCard from '@/components/cards/about-card'
import Typography from '@/components/Typography'
import SectionTitle from './section-title'
import { useAboutContext } from './about-content'
import { WorkExperiences } from '@/helpers/constants'
import { useInView } from 'motion/react'
import { useMediaQuery } from 'react-responsive'
interface WorkExperienceSectionProps {
  className?: string
}

const WorkExperienceItem: React.FC<{ company: string; roles: string; tenure: string }> = React.memo(
  ({ company, roles, tenure }) => (
    <div className='flex flex-col gap-1 md:gap-2'>
      <Typography tag='h3' type='xl' weight='semi-bold' leading='light'>
        {company}
      </Typography>
      <Typography
        type='lg'
        color='primary-hover'
        weight='light'
        leading='prose'
        className='opacity-80'
      >
        {roles}
      </Typography>
      <Typography tag='h4' type='lg' leading='flat' weight='semi-bold' color='secondary'>
        {tenure}
      </Typography>
    </div>
  ),
)

WorkExperienceItem.displayName = 'WorkExperienceItem'

const WorkExperienceSection: FC<WorkExperienceSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive } = useAboutContext()
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 445 })

  const workRef = useRef(null)
  const workIsInView = useInView(workRef, { margin: `-35% 0px -30% 0px`, amount: 0.2 })

  const handleMouseEnter = () => {
    setActiveCard('WORK EXPERIENCE')
    setIsActive(true)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setIsHovered(false)
  }

  const workExperienceItems = useMemo(
    () =>
      WorkExperiences.map((workExperience, index) => (
        <WorkExperienceItem
          key={index}
          company={workExperience.company}
          roles={workExperience.roles}
          tenure={workExperience.tenure}
        />
      )),
    [],
  )

  return (
    <div
      ref={workRef}
      className={`relative h-fit order-4 sm:row-span-3 md:row-span-4 ${className}`}
    >
      <AboutCard
        className='h-full min-h-fit max-h-fit'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isHovered || (isMobile && workIsInView)}
      >
        <div className='flex flex-col gap-6 sm:gap-7 md:gap-8'>{workExperienceItems}</div>
      </AboutCard>
      <SectionTitle
        text='Work Experience'
        isInView={isMobile ? workIsInView : true}
        className='translate-x-3 right-0 left-auto'
      />
    </div>
  )
}

export default React.memo(WorkExperienceSection)
