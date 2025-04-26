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

  useEffect(() => {
    const svgs = isDarkMode ? darkSVGs : lightSVGs
    setFirstHalfSVGs(svgs.slice(0, svgs.length / 2))
    setSecondHalfSVGs(svgs.slice(svgs.length / 2))
  }, [isDarkMode])

  return (
    <>
      <div className='flex flex-row justify-center items-start w-full h-[40vw] sm:h-64'>
        {firstHalfSVGs.map((svg, index) => (
          <Image key={index} src={svg} alt={`SVG ${index}`} priority loading='eager' />
        ))}
      </div>
      <div className='flex flex-col justify-center items-center w-full gap-6'>
        <Typography type='8xl' weight='extra-bold' className='text-center'>
          My Work
        </Typography>
        <Typography type='2xl' weight='regular' className='text-center max-w-200 opacity-75'>
          Demonstrating expertise in diverse fields such as mobile and web application development,
          UI/UX design, 3D design and animation, video editing, and logo creation.
        </Typography>
      </div>
      <div className='flex flex-row justify-center items-start w-full h-[40vw] sm:h-64 ml-4'>
        {secondHalfSVGs.map((svg, index) => (
          <Image key={index} src={svg} alt={`SVG ${index}`} priority loading='eager' />
        ))}
      </div>
    </>
  )
}

export default WorkHero
