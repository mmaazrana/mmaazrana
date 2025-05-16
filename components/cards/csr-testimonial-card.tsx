'use client'

import React, { FC, useRef } from 'react'
import Typography from '@/components/Typography'
import { TestimonialCardProps } from '@/components/cards/testimonial-card'
import { useInView } from 'motion/react'
import * as m from 'motion/react-m'
import { ChevronRight, Star } from 'lucide-react'
import Button from '../button'
import { getClientId } from '@/helpers/parsers'
import Link from 'next/link'

const CSRTestimonialCard: FC<Omit<TestimonialCardProps, 'variant'>> = React.memo(
  ({ testimonial, client, designation, isActive, testimonialKey }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref)
    const delayClasses = [
      '!delay-[500ms]',
      '!delay-[550ms]',
      '!delay-[600ms]',
      '!delay-[650ms]',
      '!delay-[700ms]',
    ]

    return (
      <div
        ref={ref}
        className={`relative cursor-pointer outline ${isInView && isActive && 'outline-(length:--fluid-3-4) !duration-[1s]'} ${isActive ? 'outline-secondary shadow-testimonial-hover' : 'outline-secondary-hover'} testimonial relative w-[300px] sm:w-[450px] md:w-[550px] lg:w-[650px] xl:w-[750px] items-start flex flex-col justify-between bg-primary-accent rounded-2xl gap-2xl p-3xl h-full !transition-all !duration-300 ease-linear group`}
      >
        <div className='absolute -top-2xs md:-top-l left-3 xs:left-4 md:left-5 xl:left-6 z-[-15] flex flex-row gap-1 sm:gap-1.5 lg:gap-2'>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star
                key={index}
                className={`stroke-[0.75px] md:stroke-[1px] lg:stroke-[1.25px] h-10 xs:h-11 sm:h-12 md:h-13 lg:h-14 xl:h-15 2xl:h-16 w-10 xs:w-11 sm:w-12 md:w-13 lg:w-14 xl:w-15 2xl:w-16 !transition-all !duration-300 ${delayClasses[index]} ${isInView && isActive ? 'stroke-secondary fill-secondary/75 -translate-y-7' : 'stroke-primary-accent/50 fill-primary-accent/15'}`}
              />
            ))}
        </div>
        <svg
          fill='none'
          className={
            'absolute z-1 overflow-visible h-[45px] md:h-[52px] lg:h-[60px] xl:h-[68px] 2xl:h-[79px] w-[50px] md:w-[58px] lg:w-[67px] xl:w-[76px] 2xl:w-[88px] right-0 translate-x-1/2 bottom-4 2xl:bottom-1.5 -translate-y-1/2'
          }
        >
          <line
            x1='52%'
            y1='-20%'
            x2='52%'
            y2='120%'
            className={`stroke-[3.25px] md:stroke-[3.5px] lg:stroke-[3.75px] xl:stroke-[4px] 2xl:stroke-[4.25px] ${isActive ? 'stroke-primary-accent' : 'stroke-transparent'} transition-colors duration-300`}
          />
          <m.path
            className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? 'stroke-secondary' : 'stroke-secondary-hover'} !transition-colors !duration-[2s]`}
            fill='none'
            height={24}
            animate={{ strokeDasharray: `200,${isInView && isActive ? 25 : 300}` }}
            transition={{
              duration:
                !isActive ? 0.5
                : isInView ? 1
                : 0,
              delay:
                !isActive ? 1.75
                : isInView ? 0.75
                : 0,
            }}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeDashoffset='245'
            d='m35.33,10.33c0-5.21-3.15-8.4-8.33-8.33H10.33C5.12,2,2,5.13,2,10.22v25.12c0,5.21,3.12,8.33,8.33,8.33q4.17,0,4.17,4.17v4.17c0,4.17-4.17,8.33-8.33,8.33s-4.17.03-4.17,4.3v8.2q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z'
          />
          <m.path
            className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? 'stroke-secondary' : 'stroke-secondary-hover'} !transition-colors !duration-[2s]`}
            // className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? "stroke-secondary" : "stroke-secondary-hover"} !transition-all ${!isActive ? "!duration-1000 delay-[450ms]" : isInView ? "!duration-[1500ms] delay-[1250ms]" : "!duration-0"}`}
            fill='none'
            animate={{ strokeDasharray: `200,${isInView && isActive ? 25 : 300}` }}
            transition={{
              duration:
                !isActive ? 0.5
                : isInView ? 1
                : 0,
              delay:
                !isActive ? 1.5
                : isInView ? 0.5
                : 0,
            }}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeDashoffset='245'
            // strokeDasharray={`200,${isInView && isActive ? 25 : 300}`}
            d='m85.33,10.33c0-5.21-3.15-8.4-8.33-8.33h-16.67c-5.21,0-8.33,3.12-8.33,8.22v25.12c0,5.21,3.12,8.33,8.33,8.33h3.12c0,9.38,1.04,16.67-11.46,16.67v12.5q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z'
          />
        </svg>
        <div
          className={`flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 !transition-all !duration-500 ${isActive ? 'opacity-100' : 'opacity-25 transition-opacity duration-200'}`}
        >
          <Typography
            type='xl'
            leading='prose'
            weight='light'
            className='line-clamp-12 md:line-clamp-6 xl:line-clamp-5'
          >
            {testimonial}
          </Typography>
        </div>
        <div
          className={`flex flex-row flex-wrap items-center justify-between gap-s w-full !transition-all !duration-500 ${isActive ? 'opacity-100' : 'opacity-25 transition-opacity duration-200'}`}
        >
          <div className={`inline-block w-fit`}>
            <Typography type='lg' weight='medium' leading='flat' className='inline'>
              {client}
            </Typography>
            <Typography type='lg' weight='light' leading='flat' className='inline'>
              &nbsp; - &nbsp;
            </Typography>
            <Typography type='lg' weight='light' leading='flat' className='inline'>
              {designation}
            </Typography>
          </div>
          {testimonialKey && (
            <Link
              href={`/clients?openProjects=${testimonialKey}#${getClientId(testimonialKey)}`}
              aria-label={`Read More about ${client} - ${designation}`}
              className='w-fit ml-auto'
            >
              <Button
                type='secondary'
                className='self-end bg-secondary-hover/50 !transition-colors !duration-300 text-primary-accent !pl-s !pr-2xs !py-2xs !gap-3xs mr-s rounded-full'
                textSize='base'
                textColor='primary-hover'
                text='Read More'
                rightIcon={<ChevronRight className='w-s h-s stroke-secondary' />}
              />
            </Link>
          )}
        </div>
      </div>
    )
  },
)

CSRTestimonialCard.displayName = 'CSRTestimonialCard'

export default CSRTestimonialCard
