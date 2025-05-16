import React from 'react'
import Typography from '@/components/Typography'
import { TestimonialClients } from '@/helpers/enums'
import { getClientLogo } from '@/helpers/constants'
import { ExternalLink } from 'lucide-react'
import Button from '../button'
import { testimonialsData } from '@/helpers/project-analytics'
import Link from 'next/link'

interface TestimonialDataProps {
  testimonial: string
  clientName: string
  designation: string
  companyLink?: string
  testimonialKey: TestimonialClients
}

const TestimonialData: React.FC<TestimonialDataProps> = ({
  testimonial,
  clientName,
  designation,
  companyLink,
  testimonialKey,
}) => {
  const companyName = testimonialsData[testimonialKey].companyName
  const ClientLogo = getClientLogo(testimonialKey)
  return (
    <div className='flex flex-col gap-6xl relative mr-0 sm:mr-2'>
      <Typography
        type='2xl'
        weight='light'
        leading='prose'
        className='pr-0 leading-[1.6] sm:pr-22 md:pr-28 lg:pr-30 xl:pr-32 2xl:pr-34'
      >
        {testimonial}
      </Typography>
      <svg
        fill='none'
        viewBox='0 0 100 100'
        className={'absolute z-1 overflow-visible hidden sm:block w-10xl h-10xl -right-4 top-0'}
      >
        <path
          className={`stroke-[1px] md:stroke-[1.5px] xl:stroke-[2px] stroke-secondary/75 !transition-colors !duration-300 group-hover:stroke-secondary`}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray='235'
          strokeDashoffset='520'
          d='m35.33,10.33c0-5.21-3.15-8.4-8.33-8.33H10.33C5.12,2,2,5.13,2,10.22v25.12c0,5.21,3.12,8.33,8.33,8.33q4.17,0,4.17,4.17v4.17c0,4.17-4.17,8.33-8.33,8.33s-4.17.03-4.17,4.3v8.2q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z'
        />
        <path
          className={`stroke-[1px] md:stroke-[1.5px] xl:stroke-[2px] stroke-secondary/75 !transition-colors !duration-300 group-hover:stroke-secondary`}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray='235'
          strokeDashoffset='520'
          d='m85.33,10.33c0-5.21-3.15-8.4-8.33-8.33h-16.67c-5.21,0-8.33,3.12-8.33,8.22v25.12c0,5.21,3.12,8.33,8.33,8.33h3.12c0,9.38,1.04,16.67-11.46,16.67v12.5q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z'
        />
      </svg>
      <div className='flex justify-between items-center gap-m flex-wrap'>
        <div className='flex justify-start items-center gap-2xs'>
          <Typography type='xl' weight='medium'>
            {clientName}
          </Typography>
          <Typography type='xl'>-</Typography>
          <Typography type='xl' className='opacity-75'>
            {designation}
          </Typography>
        </div>
        {companyLink && (
          <Link
            aria-label={`Visit ${companyName}'s Website`}
            href={companyLink}
            target='_blank'
            className='px-s py-xs group bg-secondary-hover/50 hover:bg-secondary/25 transition-all duration-300 rounded-full'
          >
            <Button
              type='tertiary'
              textSize='base'
              textWeight='regular'
              textColor='primary-hover'
              text={`Visit ${companyName}'s Website`}
              leftIcon={ClientLogo && <ClientLogo className='w-fit h-l' />}
              rightIcon={
                <ExternalLink className='mr-4xs w-s h-s stroke-2 stroke-secondary group-hover:stroke-primary-hover transition-colors duration-300' />
              }
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default TestimonialData
