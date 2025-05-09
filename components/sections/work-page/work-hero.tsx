'use client'
import React, { FC, useEffect, useState } from 'react'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import { useTheme } from 'next-themes'
import webDesktop from '../../../public/svgs/web-desktop.svg'
import productDesktop from '../../../public/svgs/product-desktop.svg'
import appDesktop from '../../../public/svgs/app-desktop.svg'
import videoDesktop from '../../../public/svgs/video-desktop.svg'
import logoDesktop from '../../../public/svgs/logo-desktop.svg'
import blenderDesktop from '../../../public/svgs/blender-desktop.svg' // Static svg light imports
import webDesktopLight from '../../../public/svgs/web-desktop-light.svg'
import appDesktopLight from '../../../public/svgs/app-desktop-light.svg'
import productDesktopLight from '../../../public/svgs/product-desktop-light.svg'
import videoDesktopLight from '../../../public/svgs/video-desktop-light.svg'
import logoDesktopLight from '../../../public/svgs/logo-desktop-light.svg'
import blenderDesktopLight from '../../../public/svgs/blender-desktop-light.svg'
import Image from 'next/image'
import * as m from 'motion/react-m'

interface WorkHeroProps {}

const WorkHero: FC<WorkHeroProps> = ({}) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const darkSVGs = [
    webDesktop,
    productDesktop,
    appDesktop,
    videoDesktop,
    logoDesktop,
    blenderDesktop,
  ]

  const lightSVGs = [
    webDesktopLight,
    productDesktopLight,
    appDesktopLight,
    videoDesktopLight,
    logoDesktopLight,
    blenderDesktopLight,
  ]

  const [firstHalfSVGs, setFirstHalfSVGs] = useState<string[]>([])
  const [secondHalfSVGs, setSecondHalfSVGs] = useState<string[]>([])
  const [firstHalfLoaded, setFirstHalfLoaded] = useState(false)
  useEffect(() => {
    const svgs = isDarkMode ? darkSVGs : lightSVGs
    setFirstHalfSVGs(svgs.slice(0, svgs.length / 2))
    setSecondHalfSVGs(svgs.slice(svgs.length / 2))
  }, [isDarkMode])

  return (
    <>
      <section
        className={
          'xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
        }
      >
        <div className='relative flex flex-row justify-center items-start w-full h-[40vw] sm:h-64'>
          {!firstHalfLoaded && (
            <div className='absolute w-full h-full z-10 flex flex-row justify-center gap-[30%] items-center'>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className='w-2xl h-2xl bg-secondary animate-ping rounded-full' />
              ))}
            </div>
          )}
          {firstHalfSVGs.map((svg, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className='h-full min-w-fit'
            >
              <Image
                key={index}
                src={svg}
                alt={`SVG ${index}`}
                priority
                loading='eager'
                onLoad={() => {
                  if (!firstHalfLoaded) setFirstHalfLoaded(true)
                }}
              />
            </m.div>
          ))}
        </div>
        <div className='flex flex-col justify-center items-center w-full gap-6'>
          <Typography tag='h1' type='8xl' weight='extra-bold' className='text-center'>
            My Work
          </Typography>
          <Typography type='2xl' weight='regular' className='text-center max-w-200 opacity-75'>
            Demonstrating expertise in diverse fields such as mobile and web application
            development, UI/UX design, 3D design and animation, video editing, and logo creation.
          </Typography>
        </div>
        <div className='relative flex flex-row justify-center items-start w-full h-[40vw] sm:h-64 ml-4'>
          {!firstHalfLoaded && (
            <div className='absolute w-full h-full z-10 flex flex-row justify-center gap-[30%] items-center'>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className='w-2xl h-2xl bg-secondary animate-ping rounded-full' />
              ))}
            </div>
          )}
          {secondHalfSVGs.map((svg, index) => (
            <m.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 + index * 0.15 }}
              className='h-full min-w-fit'
            >
              <Image
                src={svg}
                alt={`SVG ${index}`}
                priority
                loading='eager'
                onLoad={() => {
                  if (!firstHalfLoaded) setFirstHalfLoaded(true)
                }}
              />
            </m.span>
          ))}
        </div>
      </section>
    </>
  )
}

export default WorkHero
