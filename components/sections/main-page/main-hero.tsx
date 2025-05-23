'use client'
import React, { FC, useEffect, useRef, useCallback, useMemo } from 'react'
import Typography from '@/components/Typography'
import Button from '@/components/button'
import { HeroDescriptions, HeroHeadings, LottieLightPaths, LottiePaths } from '@/helpers/constants'
import * as m from 'motion/react-m'
import { AnimatePresence, useInView } from 'motion/react'
import Linkedin from '@/components/icons/linkedin'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import LottieWorkerAnimation from '@/components/utils/lottie'
import { Sections } from '@/helpers/enums'

interface MainHeroProps {}

const MainHero: FC<MainHeroProps> = () => {
  const [index, setIndex] = React.useState(0)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { margin: '-5% 0px -5% 0px', amount: 0.2 })
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(Date.now())
  const remainingTimeRef = useRef<number>(6000)

  const currentLottiePath = useMemo(
    () => (isDark ? LottiePaths[index] : LottieLightPaths[index]),
    [isDark, index],
  )

  const handleIndexChange = useCallback(() => {
    setIndex(prevIndex => (prevIndex + 1) % HeroDescriptions.length)
    startTimeRef.current = Date.now()
    remainingTimeRef.current = 6000
  }, [])

  useEffect(() => {
    if (!isInView) {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = null
      }
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
        timeoutIdRef.current = null
      }
      return
    }

    const intervalDuration = 6000

    const startTimer = () => {
      startTimeRef.current = Date.now()
      timeoutIdRef.current = setTimeout(() => {
        handleIndexChange()
        timeoutIdRef.current = null

        intervalIdRef.current = setInterval(handleIndexChange, intervalDuration)
      }, remainingTimeRef.current)
    }

    startTimer()

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
      }
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [isInView, handleIndexChange])

  return (
    <section
      id={Sections.hero}
      className={'px-4xl gap-4xl flex items-start justify-center flex-col w-full'}
    >
      <div
        ref={sectionRef}
        className={
          'relative w-full flex flex-col-reverse md:flex-row justify-center items-center mb-4 sm:mb-0 gap-l min-h-[500px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] 2xl:min-h-[750px]'
        }
      >
        <div className='flex basis-full h-10xl min-h-10xl md:basis-[55%] flex-col justify-center gap-s'>
          <AnimatePresence mode='wait' initial={false}>
            <m.div
              layout='position'
              className='!transition-none'
              key={'heading' + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Typography tag='h1' type='9xl' weight='bold'>
                {HeroHeadings[index % HeroHeadings.length]}
              </Typography>
            </m.div>
          </AnimatePresence>
          <AnimatePresence mode='wait' initial={false}>
            <m.div
              layout='position'
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
          <m.div
            layout='position'
            className='flex transition-all duration-300 gap-2 items-center justify-start flex-wrap'
          >
            <div className='pt-3 pb-3 pr-3'>
              <Link
                href='https://www.linkedin.com/in/mmaazrana/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Linkedin'
              >
                <Button
                  leftIcon={<Linkedin />}
                  textWeight='medium'
                  type='primary'
                  text="Let's Connect"
                />
              </Link>
            </div>
            <Link
              href='mailto:awaismaaz@gmail.com'
              className='cursor-pointer'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Email'
            >
              <Button type='tertiary' text='awaismaaz@gmail.com' />
            </Link>
          </m.div>
        </div>
        <AnimatePresence mode='wait' initial={false}>
          <div
            key={'lottie' + index}
            className={
              'flex -mr-6 md:mr-6 max-w-[100%] h-[90vw] md:max-w-full md:h-auto md:basis-[65%] lg:basis-[55%] xl:basis-[45%] transition-none self-end md:self-center items-center justify-center origin-left md:scale-[110%] lg:scale-[105%] 2xl:scale-[120%]'
            }
          >
            <LottieWorkerAnimation src={currentLottiePath} isPlaying={isInView} />
          </div>
        </AnimatePresence>
        <span
          className={
            'w-[60vw] h-[60vw] left-0 bottom-0 -translate-x-1/2 translate-y-1/2 aspect-square rounded-full bg-secondary-hover blur-[300px] absolute -z-10 opacity-50'
          }
        ></span>
      </div>
    </section>
  )
}

export default MainHero
