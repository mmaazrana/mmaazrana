'use client'
import React, { FC, useEffect, useState } from 'react'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import Image from 'next/image'
import { useTheme } from 'next-themes' // Static svg imports
import webDesktop from '../../public/svgs/web-desktop.svg'
import productDesktop from '../../public/svgs/product-desktop.svg'
import appDesktop from '../../public/svgs/app-desktop.svg'
import videoDesktop from '../../public/svgs/video-desktop.svg'
import logoDesktop from '../../public/svgs/logo-desktop.svg'
import blenderDesktop from '../../public/svgs/blender-desktop.svg' // Static svg light imports
import webDesktopLight from '../../public/svgs/web-desktop-light.svg'
import appDesktopLight from '../../public/svgs/app-desktop-light.svg'
import productDesktopLight from '../../public/svgs/product-desktop-light.svg'
import videoDesktopLight from '../../public/svgs/video-desktop-light.svg'
import logoDesktopLight from '../../public/svgs/logo-desktop-light.svg'
import blenderDesktopLight from '../../public/svgs/blender-desktop-light.svg'
import { ServiceCardProps } from '@/helpers/types'

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  illustrationDescription,
  index,
  className,
  onClick,
}) => {
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

  const indexClasses = {
    0: 'justify-end items-end text-right top-right-desktop-gradient',
    1: 'justify-end items-center text-center top-center-desktop-gradient',
    2: 'justify-end items-start text-left top-left-desktop-gradient',
    3: 'justify-start items-end text-right bottom-right-desktop-gradient',
    4: 'justify-start items-center text-center bottom-center-desktop-gradient',
    5: 'justify-start items-start text-left bottom-left-desktop-gradient',
  }

  const hoverRotationClasses = {
    0: 'hover:rotate-y-6 hover:-rotate-x-6',
    1: 'hover:-rotate-x-12',
    2: 'hover:-rotate-y-6 hover:-rotate-x-6',
    3: 'hover:rotate-y-6 hover:rotate-x-6',
    4: 'hover:rotate-x-12',
    5: 'hover:-rotate-y-6 hover:rotate-x-6',
  }

  const serviceClasses = [
    'absolute right-0 origin-right pointer-events-none z-10 flex justify-end items-start min-w-[20vw] w-full h-full pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 -mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8',
    'absolute right-0 2xl:right-1/2 2xl:translate-x-1/2 pointer-events-none z-10 flex justify-center items-start min-w-[20vw] w-full h-full -mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8',
    'absolute right-0 pointer-events-none z-10 flex justify-start items-start min-w-[20vw] w-full h-full pl-6 lg:pl-10 xl:pl-11 2xl:pl-32 -mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8',
    'absolute left-0 pointer-events-none z-10 flex justify-end items-end min-w-[20vw] w-full h-full pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 2xl:-ml-8 mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    'absolute left-0 2xl:left-1/2 2xl:-translate-x-1/2 pointer-events-none z-10 flex justify-center items-end min-w-[20vw] w-full h-full mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    'absolute left-0 pointer-events-none z-10 flex justify-start items-end min-w-[20vw] w-full h-full pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
  ]

  const imageClasses = [
    'w-full min-w-[200%] -mr-[6.5rem] mr-0 mt-2 lg:mt-0 -mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 md:min-w-[145%] 2xl:min-w-[130%]',
    'w-full min-w-[140%] -mr-[4.25rem] ml-0 mt-2 md:-mb-16 lg:mt-0 lg:-mb-24 lg:mx-0 xl:-mb-28 2xl:-mb-32 md:min-w-[145%] 2xl:min-w-[130%]',
    'w-full min-w-[163%] -mr-[4.5rem] mr-0 md:min-w-[155%] 2xl:min-w-[150%] md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 ',
    'w-full min-w-[150%] -ml-[2.75rem] ml-0 mr-0 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 md:min-w-[145%] 2xl:min-w-[130%]',
    'w-full min-w-[152%] -ml-[3.4rem] mr-0 ml-0 !-mb-20 lg:!-mb-28 md:mt-2 lg:mt-0 xl:!-mb-32 2xl:!-mb-40 md:min-w-[150%] 2xl:min-w-[135%] ',
    'w-full min-w-[185%] -ml-[5.7rem] -ml-2 lg:-ml-3 2xl:-ml-4 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-36 md:min-w-[152%] 2xl:min-w-[130%]',
  ]

  const dynamicClasses = [
    indexClasses[index],
    'flex flex-col p-6 lg:p-10 xl:p-11 2xl:p-12 transition-none shadow-services rounded-3xl aspect-square w-full h-fit',
    onClick ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={
        'cursor-pointer service aspect-square w-full !transition-none flex justify-center lg:align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden perspective-[1000px] group'
      }
    >
      <div
        className={`relative aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden transform-style-3d transition-transform rotate-x-0 rotate-y-0  group ${hoverRotationClasses[index]}`}
      >
        <div className={serviceClasses[index]}>
          <Image
            src={isDarkMode ? darkSVGs[index] : lightSVGs[index]}
            className={imageClasses[index]}
            alt={`Illustration for service of ${title}`}
            aria-label={illustrationDescription}
            loading='lazy'
          />
        </div>
        <div
          className={`relative border border-transparent bg-clip-content outline outline-1 outline-transparent ${dynamicClasses}`}
        >
          <Typography tag='h3' type='4xl' weight='semi-bold'>
            {title}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
