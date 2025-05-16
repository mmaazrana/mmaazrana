'use client'

import React, { FC, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import TestimonialCard from '@/components/cards/testimonial-card'
import { TestimonialT } from '@/helpers/types'

interface AutoScrollTestimonialsProps {
  testimonials: TestimonialT[]
  offset?: boolean
}

const AutoScrollTestimonials: FC<AutoScrollTestimonialsProps> = ({
  testimonials,
  offset = false,
}) => {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 1,
  }
  const [emblaRef] = useEmblaCarousel(OPTIONS, [
    AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1 }),
  ])

  const renderTestimonial = useCallback(
    (testimonial: TestimonialT, index: number) => (
      <div className='embla__slide h-full' key={index}>
        <TestimonialCard
          variant='flat'
          testimonial={testimonial.testimonial}
          client={testimonial.client}
          designation={testimonial.designation}
          isActive={true}
        />
      </div>
    ),
    [],
  )

  return (
    <div className='embla w-full'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className={`embla__container ${offset ? 'ml-80' : 'mr-80'} py-4`}>
          {testimonials.map(renderTestimonial)}
        </div>
      </div>
    </div>
  )
}

export default AutoScrollTestimonials
