'use client'

import { ArrowRight, Star } from 'lucide-react'
import React, { FC, useRef } from 'react'
import Typography from '../Typography'
import { useInView } from 'motion/react'
import Button from '../button'
import { TestimonialT } from '@/helpers/types'
import { clientData } from '@/helpers/constants'
import Link from 'next/link'

interface ProjectTestimonialCardProps {
  testimonialData: TestimonialT
}

const ProjectTestimonialCard: FC<ProjectTestimonialCardProps> = ({ testimonialData }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: `-15% 0px -15% 0px`, amount: 0.25 })
  const delayClasses = ['!delay-0', '!delay-50', '!delay-100', '!delay-150', '!delay-200']
  const CompanyLogo = clientData.find(client => client.key === testimonialData.key)?.companyLogo
  const productsInvolved = clientData.find(
    client => client.key === testimonialData.key,
  )?.productsInvolved
  return (
    <div ref={ref} className='relative z-1 w-full py-3xl sm:py-0 sm:px-2xl mb-xl group'>
      <div className='absolute -top-1 sm:-top-4 md:-top-6 md:-top-7 xl:-top-8 -left-3xs z-[-15] flex flex-row gap-3xs'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star
              key={index}
              className={`stroke-[0.5px] md:stroke-[0.75px] lg:stroke-[1px] aspect-square h-7xl min-w-7xl sm:h-9xl sm:min-w-9xl w-full !transition-all !duration-300 ${delayClasses[index]} ${isInView ? 'stroke-secondary fill-secondary/75 -translate-y-7' : 'stroke-primary-accent/50 fill-primary-accent/15'}`}
            />
          ))}
      </div>
      <div
        className={`relative w-full outline outline-(length:--fluid-2-4) !duration-[1s] outline-secondary shadow-testimonial-hover testimonial items-start flex flex-col justify-between bg-primary-accent/25 backdrop-blur-sm rounded-4xl gap-2xl p-3xl sm:p-4xl h-full`}
      >
        <svg
          fill='none'
          viewBox='0 0 70 70'
          className={
            'absolute z-1 overflow-visible h-10xl w-10xl right-0 translate-x-1/2 bottom-4 2xl:bottom-1.5 -translate-y-[55%]'
          }
        >
          <line
            x1='52%'
            y1='-20%'
            x2='52%'
            y2='120%'
            className={`stroke-[3.25px] md:stroke-[3.5px] lg:stroke-[3.75px] xl:stroke-[4px] 2xl:stroke-[4.25px] stroke-primary-accent`}
          />
          <path
            className={`scale-[65%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[4px] md:stroke-[3.75px] lg:stroke-[3.5px] xl:stroke-[3.25px] 2xl:stroke-[3px] stroke-secondary`}
            fill='none'
            height={24}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeDasharray='235'
            strokeDashoffset='520'
            d='m35.33,10.33c0-5.21-3.15-8.4-8.33-8.33H10.33C5.12,2,2,5.13,2,10.22v25.12c0,5.21,3.12,8.33,8.33,8.33q4.17,0,4.17,4.17v4.17c0,4.17-4.17,8.33-8.33,8.33s-4.17.03-4.17,4.3v8.2q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z'
          />
          <path
            className={`scale-[65%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[4px] md:stroke-[3.75px] lg:stroke-[3.5px] xl:stroke-[3.25px] 2xl:stroke-[3px] stroke-secondary`}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeDasharray='235'
            strokeDashoffset='520'
            d='m85.33,10.33c0-5.21-3.15-8.4-8.33-8.33h-16.67c-5.21,0-8.33,3.12-8.33,8.22v25.12c0,5.21,3.12,8.33,8.33,8.33h3.12c0,9.38,1.04,16.67-11.46,16.67v12.5q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z'
          />
        </svg>
        <div className='flex flex-col gap-2'>
          <Typography type='2xl' weight='light' leading='prose'>
            {testimonialData.testimonial}
          </Typography>
        </div>
        <div className='flex flex-row flex-wrap gap-xl w-full pr-2xl justify-between items-center'>
          <div className='flex flex-col sm:flex-row gap-xs sm:gap-xl justify-center items-start sm:items-center'>
            {CompanyLogo && <CompanyLogo className='w-fit h-6xl sm:h-10xl max-w-[10rem]' />}
            <div className='flex flex-col gap-2xs sm:inline-block w-full'>
              <Typography type='2xl' weight='semi-bold' leading='flat' className='inline'>
                {testimonialData.client}
              </Typography>
              <Typography type='2xl' weight='light' leading='flat' className='hidden sm:inline'>
                &nbsp; - &nbsp;
              </Typography>
              <Typography type='2xl' weight='light' leading='flat' className='inline'>
                {testimonialData.designation}
              </Typography>
            </div>
          </div>
          <Link
            href={`/clients`}
            className='max-w-full flex flex-col sm:flex-row justify-center items-start sm:items-center gap-xs sm:gap-m pr-s pl-m py-m sm:py-xs bg-secondary-hover/75 hover:bg-secondary/25 transition-all duration-300 rounded-xl sm:rounded-full'
          >
            {productsInvolved && (
              <div className='flex flex-row gap-2xs'>
                {productsInvolved.slice(0, 3).map((product, index) => (
                  <product.logo key={index} className='w-fit max-w-[2rem] h-m' />
                ))}
              </div>
            )}
            <Button
              type='tertiary'
              textSize='lg'
              textWeight='medium'
              textColor='primary-hover'
              text={`View All Projects ${testimonialData.companyName === '' ? '' : 'with'} ${testimonialData.companyName}`}
              rightIcon={<ArrowRight className='self-center w-m h-m stroke-2 stroke-secondary' />}
              className='items-end sm:items-center'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectTestimonialCard
