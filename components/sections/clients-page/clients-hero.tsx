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
    <section className={'py-7xl gap-7xl flex justify-center items-center flex-col w-full'}>
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
