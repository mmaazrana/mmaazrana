'use client';

import React, { FC, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import TestimonialCard from '@/components/cards/testimonialCard';
import { TestimonialT } from '@/helpers/types';

interface AutoScrollTestimonialsProps {
  testimonials: TestimonialT[];
}

const AutoScrollTestimonials: FC<AutoScrollTestimonialsProps> = ({ testimonials }) => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    AutoScroll({
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 1,
    }),
  ]);

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container py-4">
          {testimonials.map((testimonial, index) => (
            <div className="embla__slide" key={index}>
              <TestimonialCard
                variant="flat"
                testimonial={testimonial.testimonial}
                client={testimonial.client}
                designation={testimonial.designation}
                isActive={selectedIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollTestimonials;
