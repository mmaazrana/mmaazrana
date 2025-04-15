'use client';

import React, { FC, useRef } from 'react';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { TestimonialCardProps } from '@/components/cards/TestimonialCard';
import { useInView } from 'motion/react';
import * as m from 'motion/react-m';

const CSRTestimonialCard: FC<Omit<TestimonialCardProps, 'variant'>> = React.memo(
  ({ testimonial, client, designation, isActive }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    return (
      <div
        ref={ref}
        className={`cursor-pointer outline ${isInView && isActive && 'outline-[3px] md:outline-[3.25px] lg:outline-[3.5px] xl:outline-[3.75px] 2xl:outline-[4px] !duration-[1s]'} ${isActive ? 'outline-secondary shadow-testimonial-hover' : 'outline-secondary-hover'} outline-[0px] testimonial relative h-[270px] sm:h-[232px] md:h-[240px] lg:h-[256px] xl:h-[300px] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[650px] xl:w-[750px] items-start flex flex-col justify-between bg-primary-accent rounded-2xl md:rounded-3xl gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 w-full h-full !transition-all !duration-300 ease-linear group`}
      >
        <svg
          fill={'none'}
          className={
            'absolute z-1 overflow-visible h-[45px] md:h-[52px] lg:h-[60px] xl:h-[68px] 2xl:h-[79px] w-[50px] md:w-[58px] lg:w-[67px] xl:w-[76px] 2xl:w-[88px] right-0 translate-x-1/2 bottom-4 2xl:bottom-1.5 -translate-y-1/2'
          }
        >
          <line
            x1="52.5%"
            y1="-20%"
            x2="52.5%"
            y2="120%"
            className="stroke-[3px] md:stroke-[3.25px] lg:stroke-[3.5px] xl:stroke-[3.75px] 2xl:stroke-[4px] stroke-primary-accent"
          />
          <m.path
            className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? 'stroke-secondary' : 'stroke-secondary-hover'} !transition-colors !duration-[2s]`}
            fill={'none'}
            height={24}
            animate={{
              strokeDasharray: `200,${isInView && isActive ? 25 : 300}`,
            }}
            transition={{
              duration: !isActive ? 0.5 : isInView ? 1 : 0,
              delay: !isActive ? 1.75 : isInView ? 0.75 : 0,
            }}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeDashoffset="245"
            d="m35.33,10.33c0-5.21-3.15-8.4-8.33-8.33H10.33C5.12,2,2,5.13,2,10.22v25.12c0,5.21,3.12,8.33,8.33,8.33q4.17,0,4.17,4.17v4.17c0,4.17-4.17,8.33-8.33,8.33s-4.17.03-4.17,4.3v8.2q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z"
          />
          <m.path
            className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? 'stroke-secondary' : 'stroke-secondary-hover'} !transition-colors !duration-[2s]`}
            // className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? "stroke-secondary" : "stroke-secondary-hover"} !transition-all ${!isActive ? "!duration-1000 delay-[450ms]" : isInView ? "!duration-[1500ms] delay-[1250ms]" : "!duration-0"}`}
            fill={'none'}
            animate={{
              strokeDasharray: `200,${isInView && isActive ? 25 : 300}`,
            }}
            transition={{
              duration: !isActive ? 0.5 : isInView ? 1 : 0,
              delay: !isActive ? 1.5 : isInView ? 0.5 : 0,
            }}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeDashoffset="245"
            // strokeDasharray={`200,${isInView && isActive ? 25 : 300}`}
            d="m85.33,10.33c0-5.21-3.15-8.4-8.33-8.33h-16.67c-5.21,0-8.33,3.12-8.33,8.22v25.12c0,5.21,3.12,8.33,8.33,8.33h3.12c0,9.38,1.04,16.67-11.46,16.67v12.5q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z"
          />
        </svg>
        <div
          className={`flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 !transition-all !duration-500 ${isActive ? 'opacity-100' : 'opacity-25 transition-opacity duration-200'}`}
        >
          <Typography type={TextTypes['2xl']}>{testimonial}</Typography>
        </div>
        <div
          className={`flex flex-row w-full gap-2 !transition-all !duration-500 ${isActive ? 'opacity-100' : 'opacity-25 transition-opacity duration-200'}`}
        >
          <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
            {client}
          </Typography>
          <Typography type={TextTypes.xl}>-</Typography>
          <Typography type={TextTypes.xl}>{designation}</Typography>
        </div>
      </div>
    );
  }
);

CSRTestimonialCard.displayName = 'CSRTestimonialCard';

export default CSRTestimonialCard;
