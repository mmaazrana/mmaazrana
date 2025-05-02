import React from 'react'
import * as m from 'motion/react-m'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services (Coming Soon)',
  description:
    'Discover the range of services offered by Maaz Rana, including product design (UI/UX), web development, mobile app development, and more. Page currently under construction.',
  robots: { index: false, follow: false }, // Tell search engines not to index this page yet
}

function Services() {
  return (
    <div className='relative flex items-center justify-center h-[100dvh] w-[100vw] min-h-[100dvh] min-w-[100vw] overflow-hidden'>
      <div className='h-full w-full flex flex-col items-center justify-center gap-[4vw] lg:gap-[2vw] overflow-hidden'>
        <div className='basis-1/6 flex justify-end items-end'>
          <div className='spinner mb-[4vw] lg:mb-[2vw]'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>{' '}
        </div>
        <svg
          viewBox='0 0 275 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='flex h-[7.25vw] lg:h-[3.5vw]'
        >
          <m.g
            clipPath='url(#clip0_56_5)'
            initial={{ translateX: 112 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 112 }}
            transition={{ translateX: { duration: 0.5, ease: 'linear', delay: 1.5 } }}
          >
            <m.path
              d='M37.9168 11.7766C38.119 12.2045 38.119 12.703 37.9168 13.1309L31.747 26.3592L26.7153 37.1516C26.1416 38.3837 24.3875 38.3837 23.8138 37.1516L20.2304 29.4723C19.6567 28.2402 17.9027 28.2402 17.329 29.4723L12.7252 39.3383C12.4618 39.9026 11.8975 40.2647 11.2721 40.2647H1.83872C0.667785 40.2647 -0.108138 39.0467 0.385631 37.9887L5.80769 26.3592L12.2925 12.4537L17.329 1.66136C17.9027 0.429287 19.6567 0.429287 20.2304 1.66136L23.8138 9.34064C24.3875 10.5727 26.1416 10.5727 26.7153 9.34064L30.2986 1.66136C30.8723 0.429287 32.6264 0.429287 33.2001 1.66136L37.9168 11.7766Z'
              strokeDasharray={300}
              initial={{ strokeDashoffset: 300, fillOpacity: 0 }}
              animate={{ strokeDashoffset: 150, fillOpacity: 1 }}
              exit={{ strokeDashoffset: 300, fillOpacity: 0 }}
              transition={{
                strokeDashoffset: { duration: 1, ease: 'linear' },
                fillOpacity: { duration: 0.3, ease: 'linear', delay: 1 },
              }}
              fill='var(--primary)'
              fillOpacity={0.1}
              stroke='var(--primary)'
              strokeWidth={1}
            />
            <m.path
              strokeDasharray={300}
              initial={{ strokeDashoffset: 300, fillOpacity: 0 }}
              animate={{ strokeDashoffset: 150, fillOpacity: 1 }}
              exit={{ strokeDashoffset: 300, fillOpacity: 0 }}
              transition={{
                strokeDashoffset: { duration: 3.5, ease: 'linear' },
                fillOpacity: { duration: 0.3, ease: 'linear', delay: 1 },
              }}
              fill='var(--secondary)'
              fillOpacity={0.1}
              stroke='var(--secondary)'
              strokeWidth={1}
              d='M48.6904 40.2648H40.7477C39.5768 40.2648 38.8009 39.0468 39.2946 37.9887L43.2636 29.4724C43.8373 28.2403 45.5914 28.2403 46.1651 29.4724L50.134 37.9887C50.6278 39.0515 49.8519 40.2648 48.6809 40.2648H48.6904Z'
            />
          </m.g>
          <m.path
            initial={{ width: 0, translateX: 200, fillOpacity: 0 }}
            animate={{ width: 100, translateX: 0, fillOpacity: 1 }}
            exit={{ width: 0, translateX: 200, fillOpacity: 0 }}
            transition={{
              width: { duration: 0.65, ease: 'linear', delay: 1.4 },
              translateX: { duration: 0.65, ease: 'linear', delay: 1.4 },
              fillOpacity: { duration: 1.5, ease: 'linear', delay: 1.2 },
            }}
            fill='var(--primary)'
            d='M93.0479 13.21V28.5H90.5399V18.028L85.8759 28.5H84.1379L79.4519 18.028V28.5H76.9439V13.21H79.6499L85.0179 25.2L90.3639 13.21H93.0479ZM114.362 25.376H107.96L106.86 28.5H104.242L109.72 13.188H112.624L118.102 28.5H115.462L114.362 25.376ZM113.658 23.33L111.172 16.224L108.664 23.33H113.658ZM138.502 25.376H132.1L131 28.5H128.382L133.86 13.188H136.764L142.242 28.5H139.602L138.502 25.376ZM137.798 23.33L135.312 16.224L132.804 23.33H137.798ZM155.844 26.322H162.95V28.5H152.874V26.542L159.958 15.388H152.874V13.21H162.95V15.168L155.844 26.322ZM196.948 28.5L193.428 22.384H191.514V28.5H189.006V13.21H194.286C195.46 13.21 196.45 13.4153 197.256 13.826C198.078 14.2367 198.686 14.7867 199.082 15.476C199.493 16.1653 199.698 16.9353 199.698 17.786C199.698 18.7833 199.405 19.6927 198.818 20.514C198.246 21.3207 197.359 21.8707 196.156 22.164L199.94 28.5H196.948ZM191.514 20.382H194.286C195.225 20.382 195.929 20.1473 196.398 19.678C196.882 19.2087 197.124 18.578 197.124 17.786C197.124 16.994 196.89 16.378 196.42 15.938C195.951 15.4833 195.24 15.256 194.286 15.256H191.514V20.382ZM220.925 25.376H214.523L213.423 28.5H210.805L216.283 13.188H219.187L224.665 28.5H222.025L220.925 25.376ZM220.221 23.33L217.735 16.224L215.227 23.33H220.221ZM248.409 28.5H245.901L238.355 17.082V28.5H235.847V13.188H238.355L245.901 24.584V13.188H248.409V28.5ZM269.72 25.376H263.318L262.218 28.5H259.6L265.078 13.188H267.982L273.46 28.5H270.82L269.72 25.376ZM269.016 23.33L266.53 16.224L264.022 23.33H269.016Z'
          />
          <defs>
            <clipPath id='clip0_56_5'>
              <rect width='50.2939' height='40' fill='white' transform='translate(0 0.5)' />
            </clipPath>
          </defs>
        </svg>
        <m.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.3, ease: 'linear', delay: 2 } }}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-200 lg:scale-100 w-[38vw] animate-[rotate_15s_linear_infinite]'
        >
          <path
            id='circlePath1'
            fill='none'
            d='
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    '
          />
          <text>
            <textPath
              href='#circlePath1'
              className='fill-secondary uppercase text-xs leading-none tracking-[1.6] font-[50]'
            >
              Loading an experience for you.
            </textPath>
          </text>
        </m.svg>
        <m.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.3, ease: 'linear', delay: 2.5 } }}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-200 lg:scale-100 w-[50vw] rotate-30 animate-[rotate_20s_linear_infinite]'
        >
          <path
            id='circlePath2'
            fill='none'
            d='
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    '
          />
          <text>
            <textPath
              href='#circlePath2'
              className='fill-secondary uppercase text-xs leading-none tracking-[1.4] font-[100]'
            >
              Please Wait &nbsp; &nbsp; &nbsp;&nbsp; Pleas wait
            </textPath>
          </text>
        </m.svg>
        <m.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.3, ease: 'linear', delay: 3 } }}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-200 lg:scale-100 w-[64vw] rotate-60 animate-[rotate_25s_linear_infinite]'
        >
          <path
            id='circlePath3'
            fill='none'
            d='
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    '
          />
          <text>
            <textPath
              href='#circlePath3'
              className='fill-secondary uppercase text-xs leading-none tracking-[1.2] font-[200]'
            >
              Loading an experience for you.
            </textPath>
          </text>
        </m.svg>
        <m.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.3, ease: 'linear', delay: 3.5 } }}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-200 lg:scale-100 w-[82vw] rotate-90 animate-[rotate_30s_linear_infinite]'
        >
          <path
            id='circlePath4'
            fill='none'
            d='
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    '
          />
          <text>
            <textPath
              href='#circlePath4'
              className='fill-secondary uppercase text-xs leading-none tracking-[1] font-[400]'
            >
              Please Wait &nbsp; &nbsp; &nbsp;&nbsp; Pleas wait
            </textPath>
          </text>
        </m.svg>
        <m.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.3, ease: 'linear', delay: 4 } }}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 scale-200 lg:scale-100 w-[104vw] rotate-60 animate-[rotate_35s_linear_infinite]'
        >
          <path
            id='circlePath5'
            fill='none'
            d='
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    '
          />
          <text>
            <textPath
              href='#circlePath5'
              className='fill-secondary uppercase text-xs leading-none tracking-[0.8] font-[800]'
            >
              Loading an experience for you.
            </textPath>
          </text>
        </m.svg>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.5, ease: 'linear', delay: 10 } }}
          className='flex flex-col gap-[2vw] lg:gap-[1vw] justify-center items-center basis-1/6 justify-start items-center'
        >
          <div className='text-primary-hover text-center text-[2.3vw] lg:text-[1.15vw] opacity-75 font-[175]'>
            Taking too long?
          </div>
          <a
            href='mailto:awaismaaz@gmail.com'
            className='cursor-pointer text-primary-accent bg-primary hover:bg-primary-hover transition-colors duration-300 px-[3.5vw] lg:px-[1.75vw] py-[0.7vw] lg:py-[0.35vw] h-fit w-fit rounded-full text-[2.5vw] lg:text-[1.25vw] leading-[2] font-[575]'
          >
            Report a bug
          </a>
        </m.div>
      </div>
    </div>
  )
}

export default Services
