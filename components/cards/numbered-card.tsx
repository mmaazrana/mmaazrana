'use client'

import {} from '@/helpers/enums'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

interface NumberedCardProps {
  index: number
  title: string
  description: string
  rotation: 'left' | 'right'
}

export default function NumberedCard({ index, title, description, rotation }: NumberedCardProps) {
  const isMobile = useMediaQuery({ maxWidth: 640 })
  const cardRef = useRef(null)
  const cardIsInView = useInView(cardRef, { margin: `-45% 0px -45% 0px`, amount: 0.2 })
  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col ${
        rotation === 'left' ? 'rotate-y-2' : '-rotate-y-2'
      } hover:-translate-y-2 ${
        rotation === 'left' ?
          cardIsInView && isMobile ?
            'translate-x-2'
          : 'hover:translate-x-2'
        : cardIsInView && isMobile ? '-translate-x-2'
        : 'hover:-translate-x-2'
      } transform-style-preserve-3d transition-transform duration-250 ease-in-out group ${cardIsInView && isMobile && '-translate-y-2'}`}
    >
      <Typography
        type='9xl'
        weight='black'
        color='error'
        className={`absolute top-4 xs:top-2 sm:top-0 -translate-y-1/2 ${
          rotation === 'left' ?
            '-left-8 xs:-left-10 sm:-left-12 error-text-stroke opacity-40 group-hover:opacity-80'
          : '-right-8 xs:-right-10 sm:-right-12 secondary-text-stroke opacity-50 group-hover:opacity-100'
        } 
        ${
          cardIsInView && isMobile ?
            rotation === 'left' ?
              '!text-primary-accent/40 !opacity-80'
            : '!text-primary-accent/40 !opacity-100'
          : ''
        }
        z-[-10] text-primary-accent/97 group-hover:text-primary-accent/50  !transition-colors duration-300 ease-in-out uppercase font-black !text-[1000%]`}
      >
        {`${index + 1}`}
      </Typography>
      <div
        className={`flex flex-col items-center justify-center py-7 xs:py-7.5 sm:py-8 md:py-8.5 lg:py-9 xl:py-9.5 2xl:py-10 px-7 xs:px-7.5 sm:px-8 md:px-8.5 lg:px-9 xl:px-9.5 2xl:px-10 gap-2.5 xs:gap-3 md:gap-3.5 xl:gap-4 
          outline outline-1  transition-colors duration-300 ease-in-out z-[2] rounded-3xl backdrop-blur-sm hover:outline-2
          ${rotation === 'left' ? 'outline-error/40 bg-error/2 hover:bg-error/10 hover:outline-error/80' : 'outline-secondary/60 bg-secondary-hover/10 hover:outline-secondary hover:bg-primary-invert/20'}
          ${
            cardIsInView && isMobile ?
              rotation === 'left' ?
                '!bg-error/10 !outline-error/80 !outline-2'
              : '!bg-primary-invert/20 !outline-secondary !outline-2'
            : ''
          }
          `}
      >
        <Typography tag='h4' type='2xl' weight='bold' className='text-center'>
          {title}
        </Typography>
        <Typography type='lg' weight='light' className='opacity-80 text-center'>
          {description}
        </Typography>
      </div>
    </div>
  )
}
