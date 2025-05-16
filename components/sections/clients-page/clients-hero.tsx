import React, { FC } from 'react'
import { testimonials } from '@/helpers/constants'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import AutoScrollTestimonials from '@/components/clients/auto-scroll-testimonials'

interface StackedTestimonialsProps {}

const StackedTestimonials: FC<StackedTestimonialsProps> = () => {
  const half = Math.ceil(testimonials.length / 2)
  const firstHalf = testimonials.slice(0, half)
  const secondHalf = testimonials.slice(half)

  return (
    <section
      className={
        '2xl:py-20 xl:py-18 lg:py-16 md:py-14 sm:py-12 xs:py-10 py-8 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
      }
    >
      <AutoScrollTestimonials testimonials={firstHalf} offset={true} />
      <div className='flex flex-col justify-center items-center w-full gap-2'>
        <Typography tag='h1' type='8xl' weight='extra-bold' className='text-center'>
          Testimonials
        </Typography>
        <Typography type='2xl' weight='regular' className='text-center'>
          Don't just take my word for it
        </Typography>
      </div>
      <AutoScrollTestimonials testimonials={secondHalf} />
    </section>
  )
}

export default StackedTestimonials
