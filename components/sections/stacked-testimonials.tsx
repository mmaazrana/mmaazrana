import React, { FC } from 'react';
import { testimonials } from '@/helpers/constants';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import AutoScrollTestimonials from '@/components/sections/auto-scroll-testimonials';

interface StackedTestimonialsProps {}

const StackedTestimonials: FC<StackedTestimonialsProps> = () => {
  const half = Math.ceil(testimonials.length / 2);
  const firstHalf = testimonials.slice(0, half);
  const secondHalf = testimonials.slice(half);

  return (
    <>
      <AutoScrollTestimonials testimonials={firstHalf} offset={true} />
      <div className={'flex flex-col justify-center items-center w-full gap-2'}>
        <Typography
          type={TextTypes['8xl']}
          weight={WeightTypes.extraBold}
          className={'text-center'}
        >
          Testimonials
        </Typography>
        <Typography type={TextTypes['2xl']} weight={WeightTypes.regular} className={'text-center'}>
          Don’t just take my word for it
        </Typography>
      </div>
      <AutoScrollTestimonials testimonials={secondHalf} />
    </>
  );
};

export default StackedTestimonials;
