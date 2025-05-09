'use client'

import React, { FC, useCallback, useEffect, useState } from 'react'
import { testimonials } from '@/helpers/constants'
import TestimonialCard from '@/components/cards/testimonial-card'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import { Sections } from '@/helpers/enums'
import MainSectionTitle from '@/components/main-section-title'

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 10000, stopOnMouseEnter: true }),
  ])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section
      id={Sections.testimonials}
      className={
        'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
      }
    >
      <MainSectionTitle title='Testimonials' buttonText='Clients' href='/clients' />
      <motion.div className='embla w-full'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container py-4'>
            {testimonials.map((testimonial, index) => (
              <div
                className='embla__slide'
                key={index}
                onClick={() => {
                  if (index > selectedIndex) {
                    index === testimonials.length - 1 && selectedIndex === 0 ?
                      emblaApi?.scrollPrev()
                    : emblaApi?.scrollNext()
                  } else if (index < selectedIndex) {
                    selectedIndex === testimonials.length - 1 && index === 0 ?
                      emblaApi?.scrollNext()
                    : emblaApi?.scrollPrev()
                  }
                }}
              >
                <TestimonialCard
                  variant='animated'
                  testimonial={testimonial.testimonial}
                  client={testimonial.client}
                  designation={testimonial.designation}
                  isActive={selectedIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
