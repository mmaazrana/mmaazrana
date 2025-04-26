'use client'
import React, { FC, useEffect, useRef } from 'react'
import Typography from '@/components/Typography'
import Button from '@/components/button'
import { HeroDescriptions, HeroHeadings, LottieLightPaths, LottiePaths } from '@/helpers/constants'
import * as m from 'motion/react-m'
import { AnimatePresence, useInView } from 'motion/react'
import Linkedin from '@/components/icons/linkedin'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import LottieWorkerAnimation from '@/components/utils/lottie'

interface MainHeroProps {}

const MainHero: FC<MainHeroProps> = ({}) => {
  const [index, setIndex] = React.useState(0)
  const { resolvedTheme } = useTheme()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { margin: '-5% 0px -5% 0px', amount: 0.2 })
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(Date.now())
  const remainingTimeRef = useRef<number>(6000) // Initial interval duration

  useEffect(() => {
    const intervalDuration = 6000

    const startTimer = () => {
      startTimeRef.current = Date.now()
      // Use timeout for the first run after resuming with remaining time
      timeoutIdRef.current = setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % HeroDescriptions.length)
        remainingTimeRef.current = intervalDuration // Reset remaining time
        startTimeRef.current = Date.now() // Reset start time for interval
        timeoutIdRef.current = null // Clear timeout ref

        // Start the regular interval after the first timeout
        intervalIdRef.current = setInterval(() => {
          setIndex(prevIndex => (prevIndex + 1) % HeroDescriptions.length)
          startTimeRef.current = Date.now() // Update start time for next interval
          // No need to update remainingTimeRef here as interval clears/restarts
        }, intervalDuration)
      }, remainingTimeRef.current)
    }

    const clearTimers = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
        timeoutIdRef.current = null
        // Calculate remaining time if a timeout was active
        const elapsed = Date.now() - startTimeRef.current
        remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed)
      }
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = null
        // Calculate remaining time if an interval was active
        const elapsed = Date.now() - startTimeRef.current
        remainingTimeRef.current = Math.max(0, intervalDuration - elapsed)
      }
    }

    if (isInView) {
      startTimer()
    } else {
      clearTimers()
    }

    // Cleanup function: Clear timers and update remaining time when leaving view or unmounting
    return () => {
      clearTimers()
    }
  }, [isInView]) // Rerun effect when isInView changes

  const currentAnimation = resolvedTheme === 'dark' ? LottiePaths[index] : LottieLightPaths[index]

  return (
    <div
      ref={sectionRef}
      className={
        'w-full flex flex-col-reverse md:flex-row justify-center md:items-center mb-4 sm:mb-0 gap-2 sm:gap-8 md:gap-4 xl:gap-5 min-h-[500px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] 2xl:min-h-[750px]'
      }
    >
      <div className='flex basis-full md:basis-[55%] flex-col gap-2 sm:gap-3 md:gap-4'>
        <AnimatePresence mode='wait' initial={false}>
          <m.div
            className='!transition-none'
            key={'heading' + index}
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            exit={{ opacity: 0, transform: 'translateY(-20px)' }}
            transition={{ duration: 0.35 }}
          >
            <Typography type='9xl' weight='bold'>
              {HeroHeadings[index % HeroHeadings.length]}
            </Typography>
          </m.div>
        </AnimatePresence>
        <AnimatePresence mode='wait' initial={false}>
          <m.div
            className='!transition-none'
            key={'description' + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Typography
              type='3xl'
              className='!transition-none !opacity-75'
              weight='light'
              leading='medium'
            >
              {HeroDescriptions[index % HeroDescriptions.length]}
            </Typography>
          </m.div>
        </AnimatePresence>
        <div className='flex gap-2 items-center justify-start flex-wrap'>
          <div className='pt-3 pb-3 pr-3'>
            <Link
              href='https://www.linkedin.com/in/mmaazrana/'
              target='_blank'
              aria-label='Linkedin'
            >
              <Button leftIcon={<Linkedin />} textWeight='medium' type='primary' text='Linkedin' />
            </Link>
          </div>
          <Link
            href='mailto:awaismaaz@gmail.com'
            className='cursor-pointer'
            target='_blank'
            aria-label='Email'
          >
            <Button type='tertiary' text='awaismaaz@gmail.com' />
          </Link>
        </div>
      </div>
      <AnimatePresence mode='wait' initial={false}>
        <div
          key={'lottie' + index}
          className={
            'flex -mr-6 md:mr-6 max-w-[100%] h-[90vw] md:max-w-full md:h-auto md:basis-[65%] lg:basis-[55%] xl:basis-[45%] transition-none self-end md:self-center items-center justify-center origin-left md:scale-[110%] lg:scale-[105%] 2xl:scale-[120%]'
          }
        >
          <LottieWorkerAnimation src={currentAnimation} isPlaying={isInView} />
        </div>
      </AnimatePresence>
      <span
        className={
          'w-[60vw] h-[60vw] left-0 bottom-0 -translate-x-1/2 translate-y-1/2 aspect-square rounded-full bg-secondary-hover blur-[300px] absolute -z-10 opacity-50'
        }
      ></span>
    </div>
  )
}

export default MainHero
