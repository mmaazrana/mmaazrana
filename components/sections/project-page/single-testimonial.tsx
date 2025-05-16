import React, { FC } from 'react'
import ProjectTestimonialCard from '@/components/cards/project-testimonial-card'
import SectionTitle from '@/components/main-section-title'
import { TestimonialT } from '@/helpers/types'

interface SingleClientTestimonialProps {
  testimonial: TestimonialT
}

const SingleClientTestimonial: FC<SingleClientTestimonialProps> = ({ testimonial }) => {
  return (
    <section
      className={
        'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-20 lg:gap-18 md:gap:16 sm:gap-14 gap-12 flex items-start justify-center flex-col w-full'
      }
    >
      <SectionTitle title='Client Feedback' buttonText='All Testimonials' href='/clients' />
      <ProjectTestimonialCard testimonialData={testimonial} />
    </section>
  )
}

export default SingleClientTestimonial
