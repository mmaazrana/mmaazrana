import React, { FC } from 'react'
import CSRTestimonialCard from '@/components/cards/csr-testimonial-card'
import SSRTestimonialCard from '@/components/cards/ssr-testimonial-card'
import { TestimonialClients } from '@/helpers/enums'

export interface TestimonialCardProps {
  variant: 'animated' | 'flat'
  testimonialKey?: TestimonialClients
  testimonial: string
  client: string
  designation: string
  isActive: boolean
}

const TestimonialCard: FC<TestimonialCardProps> = ({ variant, ...props }) => {
  return variant === 'animated' ?
      <CSRTestimonialCard {...props} />
    : <SSRTestimonialCard {...props} />
}

export default TestimonialCard
