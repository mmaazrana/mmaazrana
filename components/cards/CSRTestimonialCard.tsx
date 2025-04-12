'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { getActiveBreakpoint } from '@/helpers';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { TestimonialCardProps } from '@/components/cards/testimonialCard';
import { useInView } from 'motion/react';
import * as m from 'motion/react-m';

const CSRTestimonialCard: FC<Omit<TestimonialCardProps, 'variant'>> = React.memo(
  ({ testimonial, client, designation, isActive }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    const [activeBreakpoint, setActiveBreakpoint] = useState('2xl');
    const [rectSize, setRectSize] = useState({ width: 0, height: 0 });

    const strokeDashoffset: Record<string, number> = {
      '2xl': 2025,
      xl: 2147,
      lg: 2240,
      md: 2315,
      sm: 2410,
    };
    const strokeDasharray: Record<string, number> = {
      '2xl': 104,
      xl: 94,
      lg: 84,
      md: 74,
      sm: 64,
    };

    // Update rectangle size dynamically
    useEffect(() => {
      const updateSize = () => {
        if (ref.current) {
          const { width, height } = ref.current.getBoundingClientRect();
          setRectSize({ width, height });
        }
      };

      const observer = new ResizeObserver(updateSize);
      if (ref.current) observer.observe(ref.current);

      // Cleanup observer
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const handleResize = () => {
        setActiveBreakpoint(getActiveBreakpoint(window.innerWidth));
      };
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {}, [activeBreakpoint]);

    return (
      <div
        ref={ref}
        className={`cursor-pointer ${isActive && 'shadow-testimonial hover:shadow-testimonial-hover'} testimonial relative h-[270px] sm:h-[232px] md:h-[240px] lg:h-[256px] xl:h-[300px] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[650px] xl:w-[750px] items-start flex flex-col justify-between bg-primary-accent rounded-2xl md:rounded-3xl gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 !transition-all !duration-300 group`}
      >
        <svg
          width="100"
          height="100"
          className={
            'absolute w-full h-full -top-2.5 -left-2.5 overflow-visible !transition-all duration-[100s]'
          }
          style={{ willChange: 'stroke-dashoffset, stroke-dasharray' }}
        >
          <m.rect
            x="10"
            y="10"
            width={rectSize.width - 20}
            height={rectSize.height - 20}
            fill="none"
            animate={{
              strokeDashoffset: strokeDashoffset[activeBreakpoint],
              strokeDasharray: `1400,${isInView && isActive ? strokeDasharray[activeBreakpoint] : 3000}`,
            }}
            transition={{
              duration: !isActive ? 1 : isInView ? 1 : 0,
              delay: !isActive ? 2.85 : isInView ? 0.85 : 0,
            }}
            strokeDashoffset="0"
            strokeLinecap={'round'}
            rx={activeBreakpoint === 'md' || activeBreakpoint === 'sm' ? 16 : 24}
            className={`${isActive ? 'stroke-secondary' : 'stroke-secondary-hover'} stroke-[3px] md:stroke-[3.25px] lg:stroke-[3.5px] xl:stroke-[3.75px] 2xl:stroke-[4px] w-full h-full !transition-colors !duration-[2s]`}
          />
        </svg>
        <svg
          fill={'none'}
          className={
            'absolute z-1 overflow-visible h-[45px] md:h-[52px] lg:h-[60px] xl:h-[68px] 2xl:h-[79px] w-[50px] md:w-[58px] lg:w-[67px] xl:w-[76px] 2xl:w-[88px] right-0 translate-x-1/2 bottom-4 2xl:bottom-1.5 -translate-y-1/2'
          }
        >
          <m.path
            className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? 'stroke-secondary' : 'stroke-secondary-hover'} !transition-colors !duration-[2s]`}
            fill={'none'}
            height={24}
            animate={{
              strokeDasharray: `200,${isInView && isActive ? 25 : 300}`,
            }}
            transition={{
              duration: !isActive ? 0.5 : isInView ? 1 : 0,
              delay: !isActive ? 3.75 : isInView ? 1.75 : 0,
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
              delay: !isActive ? 2.5 : isInView ? 1.5 : 0,
            }}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeDashoffset="245"
            // strokeDasharray={`200,${isInView && isActive ? 25 : 300}`}
            d="m85.33,10.33c0-5.21-3.15-8.4-8.33-8.33h-16.67c-5.21,0-8.33,3.12-8.33,8.22v25.12c0,5.21,3.12,8.33,8.33,8.33h3.12c0,9.38,1.04,16.67-11.46,16.67v12.5q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z"
          />
        </svg>
        <div
          className={`flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 !transition-all !duration-500 ${isActive ? 'opacity-100' : 'opacity-25 group-hover:opacity-50 transition-opacity duration-200'}`}
        >
          <Typography type={TextTypes['2xl']}>{testimonial}</Typography>
        </div>
        <div
          className={`flex flex-row w-full gap-2 !transition-all !duration-500 ${isActive ? 'opacity-100' : 'opacity-25 group-hover:opacity-50 transition-opacity duration-200'}`}
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
