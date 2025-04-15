import React, { FC } from 'react';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { TestimonialCardProps } from '@/components/cards/testimonial-card';

const SSRTestimonialCard: FC<Omit<TestimonialCardProps, 'variant'>> = ({
  testimonial,
  client,
  designation,
}) => {
  return (
    <div className="outline outline-secondary-hover hover:outline-secondary outline-[5px] md:outline-[4.75px] lg:outline-[4.5px] xl:outline-[4.25px] 2xl:outline-[4px] h-[270px] sm:h-[232px] md:h-[240px] lg:h-[256px] xl:h-[300px] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[650px] xl:w-[750px] items-start flex flex-col justify-between bg-primary-accent rounded-2xl md:rounded-3xl gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 !transition-all !duration-300 group">
      <svg
        fill={'none'}
        className={
          'absolute py-1 md:py-1.5 xl:py-2 z-1 overflow-visible h-[53px] md:h-[64px] lg:h-[72px] xl:h-[84px] 2xl:h-[95px] w-[50px] md:w-[58px] lg:w-[67px] xl:w-[76px] 2xl:w-[88px] !right-0 !translate-x-1/2 !bottom-4 !2xl:bottom-1.5 !-translate-y-1/2 bg-primary-accent'
        }
      >
        <path
          className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] stroke-secondary-hover !transition-colors !duration-300 group-hover:stroke-secondary`}
          fill={'none'}
          height={24}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          strokeDashoffset="245"
          d="m35.33,10.33c0-5.21-3.15-8.4-8.33-8.33H10.33C5.12,2,2,5.13,2,10.22v25.12c0,5.21,3.12,8.33,8.33,8.33q4.17,0,4.17,4.17v4.17c0,4.17-4.17,8.33-8.33,8.33s-4.17.03-4.17,4.3v8.2q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z"
        />
        <path
          className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] stroke-secondary-hover !transition-colors !duration-300 group-hover:stroke-secondary`}
          fill={'none'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          strokeDashoffset="245"
          d="m85.33,10.33c0-5.21-3.15-8.4-8.33-8.33h-16.67c-5.21,0-8.33,3.12-8.33,8.22v25.12c0,5.21,3.12,8.33,8.33,8.33h3.12c0,9.38,1.04,16.67-11.46,16.67v12.5q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z"
        />
      </svg>
      <div className="flex flex-col gap-2">
        <Typography type={TextTypes['2xl']}>{testimonial}</Typography>
      </div>
      <div className="flex flex-row w-full gap-2">
        <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
          {client}
        </Typography>
        <Typography type={TextTypes.xl}>-</Typography>
        <Typography type={TextTypes.xl}>{designation}</Typography>
      </div>
    </div>
  );
};

export default SSRTestimonialCard;
