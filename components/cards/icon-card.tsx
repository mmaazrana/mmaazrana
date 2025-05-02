'use client'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import { useId, useRef } from 'react'
import * as m from 'motion/react-m'
import { useInView } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

interface IconCardProps {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export default function IconCard({ icon: Icon, title, description }: IconCardProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const isMobile = useMediaQuery({ maxWidth: 640 })
  const cardRef = useRef(null)
  const cardIsInView = useInView(cardRef, { margin: `-45% 0px -45% 0px`, amount: 0.2 })
  return (
    <div ref={cardRef} className='relative group'>
      {Icon && (
        <Icon
          className={`self-end top-6 sm:-top-4 -left-6 sm:left-auto sm:-right-8 absolute w-10xl h-10xl stroke-[0.5px] text-secondary opacity-0 group-hover:opacity-75 group-hover:-translate-y-16 transition-all duration-300 ease-in-out ${cardIsInView && isMobile && 'opacity-75 -translate-y-16'}`}
        />
      )}
      <div
        className={`backdrop-blur-xs relative flex flex-col h-full items-start justify-start items-center bg-secondary-hover/10 hover:bg-primary-invert/25 sm:hover:-translate-y-4 transition-all duration-300 ease-in-out p-3xl gap-m rounded-3xl group ${cardIsInView && isMobile && '!bg-primary-invert/25'}`}
      >
        <svg
          width='100'
          height='100'
          className={
            'absolute w-full h-full -top-2.5 -left-2.5 overflow-visible !transition-all duration-[100s]'
          }
        >
          <defs>
            <linearGradient
              id={`aboutCardStroke${id}`}
              gradientUnits='userSpaceOnUse'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
              gradientTransform='rotate(45)'
            >
              <stop offset='0%' stopColor='var(--secondary)' stopOpacity='10%' />
              <stop offset='100%' stopColor='var(--secondary)' stopOpacity='100%' />
            </linearGradient>
          </defs>
          <m.rect
            x='10'
            y='10'
            width='100%'
            height='100%'
            fill='none'
            stroke={`url(#aboutCardStroke${id})`}
            strokeWidth={2}
            className={`w-full h-full min-w-full min-h-full !transition-all rounded-rect opacity-25 group-hover:opacity-50 ${cardIsInView && isMobile && 'opacity-50'}`}
          />
        </svg>
        {Icon && (
          <Icon className='self-end top-4 xs:top-5 sm:top-0 right-4 xs:right-5 sm:right-0 absolute sm:relative sm:self-start w-5xl h-5xl stroke-1 text-secondary' />
        )}
        <div className='flex flex-col mr-10 xs:mr-12 sm:mr-0 gap-2 sm:gap-2.5 lg:gap-3'>
          <Typography tag='h3' type='3xl' weight='bold'>
            {title}
          </Typography>
          <Typography type='xl' className='opacity-75'>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  )
}
