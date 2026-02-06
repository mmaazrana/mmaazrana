'use client'
import React, { FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()
  const [isDarkMode, setIsDarkMode] = useState(true)
  const { resolvedTheme } = useTheme()
  
  // Check if navigating within portfolio (skip animations)
  const [skipAnimations, setSkipAnimations] = useState(false)
  
  useEffect(() => {
    const lastPath = sessionStorage.getItem('lastPortfolioPath')
    const isPortfolioNav = lastPath?.startsWith('/portfolio') && pathname.startsWith('/portfolio')
    setSkipAnimations(!!isPortfolioNav)
    sessionStorage.setItem('lastPortfolioPath', pathname)
  }, [pathname])

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const svgData = [
    { dark: webDesktop, light: webDesktopLight, alt: 'Web Application Development Illustration' },
    { dark: productDesktop, light: productDesktopLight, alt: 'Product Design UI/UX Illustration' },
    {
      dark: appDesktop,
      light: appDesktopLight,
      alt: 'Mobile Application Development Illustration',
    },
    {
      dark: videoDesktop,
      light: videoDesktopLight,
      alt: 'Video Editing and Motion Graphics Illustration',
    },
    { dark: logoDesktop, light: logoDesktopLight, alt: 'Logo Design and Branding Illustration' },
    {
      dark: blenderDesktop,
      light: blenderDesktopLight,
      alt: '3D Design and Visualization Illustration',
    },
  ]

  const [firstHalfSVGs, setFirstHalfSVGs] = useState<Array<{ src: string; alt: string }>>([])
  const [secondHalfSVGs, setSecondHalfSVGs] = useState<Array<{ src: string; alt: string }>>([])
  const [firstHalfLoaded, setFirstHalfLoaded] = useState(false)

  useEffect(() => {
    const currentSVGs = svgData.map(item => ({
      src: isDarkMode ? item.dark : item.light,
      alt: item.alt,
    }))
    setFirstHalfSVGs(currentSVGs.slice(0, currentSVGs.length / 2))
    setSecondHalfSVGs(currentSVGs.slice(currentSVGs.length / 2))
  }, [isDarkMode])

  return (
    <>
      <section className={'p-7xl gap-7xl flex justify-center items-center flex-col w-full'}>
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
              initial={skipAnimations ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={skipAnimations ? { duration: 0 } : { duration: 0.5, delay: index * 0.15 }}
              className='h-full min-w-fit'
            >
              <Image
                key={index}
                src={svg.src}
                alt={svg.alt}
                priority
                loading='eager'
                onLoad={() => {
                  if (!firstHalfLoaded) setFirstHalfLoaded(true)
                }}
              />
            </m.div>
          ))}
        </div>
        <div className='flex flex-col justify-center items-center w-full gap-s'>
          <Typography tag='h1' type='8xl' weight='extra-bold' className='text-center'>
            My Work
          </Typography>
          <Typography
            type='2xl'
            weight='regular'
            leading='prose'
            className='text-center max-w-200 opacity-75'
          >
            Explore my diverse portfolio showcasing expertise in mobile and web app development,
            UI/UX design, 3D design & animation, video editing, and logo creation.
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
              initial={skipAnimations ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={skipAnimations ? { duration: 0 } : { duration: 0.5, delay: 0.45 + index * 0.15 }}
              className='h-full min-w-fit'
            >
              <Image
                src={svg.src}
                alt={svg.alt}
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
