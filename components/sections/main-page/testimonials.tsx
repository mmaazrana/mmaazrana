'use client'

import React, { FC, useCallback, useEffect, useState, useRef } from 'react'
import { testimonials } from '@/helpers/constants'
import TestimonialCard from '@/components/cards/testimonial-card'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import { Sections } from '@/helpers/enums'
import MainSectionTitle from '@/components/main-section-title'
import { useInView } from 'motion/react'

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isCarouselInitialized, setIsCarouselInitialized] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { margin: '-5% 0px -5% 0px', amount: 0.2 })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    OPTIONS,
    isInView ? [Autoplay({ delay: 7500, stopOnMouseEnter: true })] : [],
  )

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi || !isInView) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    setIsCarouselInitialized(true)
  }, [emblaApi, onSelect, isInView])

  return (
    <section
      ref={sectionRef}
      id={Sections.testimonials}
      className={'px-4xl py-l gap-2xl flex items-start justify-center flex-col w-full'}
    >
      <MainSectionTitle title='Testimonials' buttonText='Clients' href='/clients' />
      <motion.div className='embla w-full'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container py-xl'>
            {testimonials.map((testimonial, index) => (
              <div
                className='embla__slide'
                key={index}
                onClick={() => {
                  if (!isCarouselInitialized) return
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
                  testimonialKey={testimonial.key}
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
