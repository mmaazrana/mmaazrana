import React, { FC } from 'react'
import ProjectTestimonialCard from '@/components/cards/project-testimonial-card'
import SectionTitle from '@/components/main-section-title'
import { TestimonialT } from '@/helpers/types'

interface SingleClientTestimonialProps {
  testimonial: TestimonialT
}

const SingleClientTestimonial: FC<SingleClientTestimonialProps> = ({ testimonial }) => {
  return (
    <section className={'px-4xl gap-9xl flex items-start justify-center flex-col w-full'}>
      <SectionTitle title='Client Feedback' buttonText='All Testimonials' href='/clients' />
      <ProjectTestimonialCard testimonialData={testimonial} />
    </section>
  )
}

export default SingleClientTestimonial
