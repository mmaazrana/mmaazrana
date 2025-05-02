import React, { FC } from 'react'
import Typography from '@/components/typography'
import {} from '@/helpers/enums'
import { TestimonialCardProps } from '@/components/cards/testimonial-card'
import { Star } from 'lucide-react'

const SSRTestimonialCard: FC<Omit<TestimonialCardProps, 'variant'>> = ({
  testimonial,
  client,
  designation,
}) => {
  const delayClasses = ['!delay-0', '!delay-50', '!delay-100', '!delay-150', '!delay-200']

  return (
    <div className='relative z-1 group'>
      <div className='absolute -top-5 xs:-top-6 md:-top-7 xl:-top-8 left-3 xs:left-4 md:left-5 xl:left-6 z-[-15] flex flex-row gap-1 sm:gap-1.5 lg:gap-2'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star
              key={index}
              className={`stroke-secondary/50 fill-secondary/10 group-hover:stroke-secondary group-hover:fill-secondary/75 group-hover:-translate-y-8 stroke-[0.75px] md:stroke-[1px] lg:stroke-[1.25px] h-10 xs:h-11 sm:h-12 md:h-13 lg:h-14 xl:h-15 2xl:h-16 w-10 xs:w-11 sm:w-12 md:w-13 lg:w-14 xl:w-15 2xl:w-16 !transition-all !duration-300 ${delayClasses[index]}`}
            />
          ))}
      </div>
      <div className='relative backdrop-blur-xs outline bg-secondary-hover/15 hover:bg-primary-accent/90 hover:drop-shadow-auto-testimonial hover:-translate-y-4 outline-secondary/50 hover:outline-secondary outline-[3px] md:outline-[3.25px] lg:outline-[3.5px] xl:outline-[3.75px] 2xl:outline-[4px] h-full w-[80vw] sm:w-[500px] md:w-[550px] lg:w-[650px] xl:w-[750px] items-start flex flex-col justify-between bg-primary-accent rounded-2xl gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 !transition-all !duration-300 group'>
        <svg
          fill='none'
          className={
            'absolute py-1 md:py-1.5 xl:py-2 z-1 overflow-visible h-[53px] md:h-[64px] lg:h-[72px] xl:h-[84px] 2xl:h-[95px] w-[50px] md:w-[58px] lg:w-[67px] xl:w-[76px] 2xl:w-[88px] !right-0 !translate-x-1/2 !bottom-4 !2xl:bottom-1.5 !-translate-y-1/2'
          }
        >
          <line
            x1='52.5%'
            y1='-20%'
            x2='52.5%'
            y2='120%'
            className={`stroke-[3.25px] md:stroke-[3.5px] lg:stroke-[3.75px] xl:stroke-[4px] 2xl:stroke-[4.25px] stroke-primary-accent transition-colors duration-300`}
          />
          <path
            className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] stroke-secondary/50 !transition-colors !duration-300 group-hover:stroke-secondary`}
            fill='none'
            height={24}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeDasharray='235'
            strokeDashoffset='520'
            d='m35.33,10.33c0-5.21-3.15-8.4-8.33-8.33H10.33C5.12,2,2,5.13,2,10.22v25.12c0,5.21,3.12,8.33,8.33,8.33q4.17,0,4.17,4.17v4.17c0,4.17-4.17,8.33-8.33,8.33s-4.17.03-4.17,4.3v8.2q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z'
          />
          <path
            className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] stroke-secondary/50 !transition-colors !duration-300 group-hover:stroke-secondary`}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeDasharray='235'
            strokeDashoffset='520'
            d='m85.33,10.33c0-5.21-3.15-8.4-8.33-8.33h-16.67c-5.21,0-8.33,3.12-8.33,8.22v25.12c0,5.21,3.12,8.33,8.33,8.33h3.12c0,9.38,1.04,16.67-11.46,16.67v12.5q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z'
          />
        </svg>
        <div className='flex flex-col gap-2'>
          <Typography
            type='xl'
            weight='light'
            leading='medium'
            className='line-clamp-12 md:line-clamp-6 xl:line-clamp-5'
          >
            {testimonial}
          </Typography>
        </div>
        <div className='inline-block w-full'>
          <Typography type='xl' weight='semi-bold' leading='flat' className='inline'>
            {client}
          </Typography>
          <Typography type='xl' weight='light' leading='flat' className='inline'>
            &nbsp; -&nbsp;
          </Typography>
          <Typography type='xl' weight='light' leading='flat' className='inline'>
            {designation}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default SSRTestimonialCard
