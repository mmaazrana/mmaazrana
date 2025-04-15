'use client';

import React, { FC, useState } from 'react';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { TestimonialT } from '@/helpers/types';

interface AutoScrollTestimonialsProps {
  testimonials: TestimonialT[];
}

const AutoScrollTestimonials: FC<AutoScrollTestimonialsProps> = ({ testimonials }) => {
  return (
    <div className=" w-full">
      <div className="">
        <div className=" py-4">
          {testimonials.map((testimonial, index) => (
            <div className="" key={index}>
              <TestimonialCard
                variant="flat"
                testimonial={testimonial.testimonial}
                client={testimonial.client}
                designation={testimonial.designation}
                isActive={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollTestimonials;
