'use client'

import React, { FC, useRef, useState } from 'react'
import AboutCard from '@/components/cards/about-card'
import { clientIconComponents } from '@/helpers/constants'
import SectionTitle from './section-title'
import { useAboutContext } from './about-content'
import { useInView } from 'motion/react'
import { useMediaQuery } from 'react-responsive'
import { useTheme } from 'next-themes'

interface ClientsSectionProps {
  className?: string
}

const ClientsSection: FC<ClientsSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive } = useAboutContext()
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 445 })
  const { theme } = useTheme()
  const clientsRef = useRef(null)
  const clientsIsInView = useInView(clientsRef, { margin: `-45% 0px -45% 0px`, amount: 0.2 })
  const isActive = isHovered || (isMobile && clientsIsInView)
  const handleMouseEnter = () => {
    setActiveCard('PAST CLIENTS')
    setIsActive(true)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setIsHovered(false)
  }

  return (
    <div
      ref={clientsRef}
      className={`relative h-fit order-3 sm:row-span-2 md:row-span-3 ${className}`}
    >
      <AboutCard
        className='h-full min-h-fit max-h-fit group'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isActive}
      >
        <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 h-fit group'>
          <div className='flex flex-row flex-wrap gap-y-m gap-x-s relative group'>
            {clientIconComponents.map(({ Icon }, index) => (
              <div key={index} className='relative'>
                <div
                  className={`absolute inset-0 bg-primary-accent mix-blend-darken dark:mix-blend-color-dodge z-1 ${theme === 'light' && '!mix-blend-darken'} ${theme === 'dark' && '!mix-blend-color-dodge'}`}
                />
                <div
                  className={`absolute inset-0 bg-secondary mix-blend-color z-1 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0`}
                />
                <Icon className='h-[24px] sm:h-[26px] md:h-[28px] lg:h-[30px] xl:h-[32px]' />
              </div>
            ))}
          </div>
        </div>
      </AboutCard>
      <SectionTitle
        text='Clients'
        isInView={isMobile ? clientsIsInView : true}
        className='translate-x-3 right-0 left-auto hidden about:block'
      />
    </div>
  )
}

export default ClientsSection
