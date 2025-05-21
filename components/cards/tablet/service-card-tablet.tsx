'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import webTablet from '@/public/svgs/web-tab.svg'
import productTablet from '@/public/svgs/product-tab.svg'
import appTablet from '@/public/svgs/app-tab.svg'
import videoTablet from '@/public/svgs/video-tab.svg'
import logoTablet from '@/public/svgs/logo-tab.svg'
import blenderTablet from '@/public/svgs/blender-tab.svg'
import webTabletLight from '@/public/svgs/web-tab-light.svg'
import productTabletLight from '@/public/svgs/product-tab-light.svg'
import appTabletLight from '@/public/svgs/app-tab-light.svg'
import videoTabletLight from '@/public/svgs/video-tab-light.svg'
import logoTabletLight from '@/public/svgs/logo-tab-light.svg'
import blenderTabletLight from '@/public/svgs/blender-tab-light.svg'
import { ServiceCardProps } from '@/helpers/types'
import { useInView } from 'motion/react'

const ServiceCardTablet: FC<ServiceCardProps> = ({
  title,
  illustrationDescription,
  index,
  className,
  onClick,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const { resolvedTheme } = useTheme()
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { margin: '-20% 0px -20% 0px', amount: 0.2 })

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const darkSVGs = [webTablet, productTablet, appTablet, videoTablet, logoTablet, blenderTablet]

  const lightSVGs = [
    webTabletLight,
    productTabletLight,
    appTabletLight,
    videoTabletLight,
    logoTabletLight,
    blenderTabletLight,
  ]

  const indexClasses = [
    'justify-end items-end text-right top-left-tablet-gradient',
    'justify-end items-start text-left top-right-tablet-gradient',
    'justify-center items-end text-right center-left-tablet-gradient',
    'justify-center items-start md:items-end text-left center-right-tablet-gradient',
    'justify-start items-end text-right bottom-left-tablet-gradient',
    'justify-start items-start text-left bottom-right-tablet-gradient',
  ]

  const hoverRotationClasses = [
    'rotate-y-[6deg] rotate-x-[-6deg]',
    'rotate-y-[-6deg] rotate-x-[-6deg]',
    'rotate-y-[12deg]',
    'rotate-y-[-12deg]',
    'rotate-y-[6deg] rotate-x-[6deg]',
    'rotate-y-[-6deg] rotate-x-[6deg]',
  ]

  const hoverGradientClasses = [
    'bg-linear-to-br',
    'bg-linear-to-bl',
    'bg-linear-to-r',
    'bg-linear-to-l',
    'bg-linear-to-tr',
    'bg-linear-to-tl',
  ]

  const serviceClasses = [
    'absolute right-0 origin-right pointer-events-none z-10 flex justify-end items-center md:items-start min-w-[20vw] w-fit sm:w-full h-full pr-3xl -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8',
    'absolute right-0 2xl:right-1/2 2xl:translate-x-1/2 pointer-events-none z-10 flex justify-start md:justify-center items-center md:items-start min-w-[20vw] w-fit sm:w-full h-full -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8',
    'absolute right-0 pointer-events-none z-10 flex justify-end md:justify-start items-center md:items-start min-w-[20vw] w-fit sm:w-full h-full pl-3xl -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8',
    'absolute left-0 pointer-events-none z-10 flex justify-end sm:justify-start md:justify-end items-center md:items-end min-w-[20vw] w-fit sm:w-full h-full pr-3xl -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8',
    'absolute left-0 2xl:left-1/2 2xl:-translate-x-1/2 pointer-events-none z-10 flex justify-end md:justify-center items-center md:items-end min-w-[20vw] w-fit sm:w-full h-full mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    'absolute left-0 pointer-events-none z-10 flex  justify-end sm:justify-start items-center md:items-end min-w-[20vw] w-fit sm:w-full h-full pl-3xl mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
  ]

  const imageClasses = [
    'w-full min-w-[200%] -mr-[6.5rem] service:min-w-[340%] service:-mr-[7.65rem] service:mb-2 sm:mr-34 sm:mt-10 md:mr-0 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[130%]',
    'w-full min-w-[140%] -mr-[4.25rem] service:min-w-[160%] service:-ml-[2.2rem] service:mr-0 service:mb-6 sm:ml-32 sm:mt-10 md:ml-0 md:mt-2 md:-mb-16 lg:mt-0 lg:-mb-24 lg:mx-0 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[130%]',
    'w-full min-w-[163%] -mr-[4.5rem] service:min-w-[280%] service:-mr-[6rem] service:mt-4 sm:mr-43 sm:mt-0 sm:mb-0 md:mr-0 md:min-w-[155%] 2xl:min-w-[150%] md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%]',
    'w-full min-w-[150%] -ml-[2.75rem] service:min-w-[200%] service:-mr-[3.5rem] service:ml-0 sm:ml-38 sm:mt-0 sm:mb-0 md:ml-0 md:mr-0 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[130%]',
    'w-full min-w-[152%] -ml-[3.4rem] service:min-w-[147%] service:-ml-[0.8rem] sm:mr-32 sm:-mb-16 md:mr-0 md:ml-0 md:!-mb-20 lg:!-mb-28 md:mt-2 lg:mt-0 xl:!-mb-32 2xl:!-mb-40 md:min-w-[150%] 2xl:min-w-[135%] sm:min-w-[100%]',
    'w-full min-w-[185%] -ml-[5.7rem] service:min-w-[170%] service:-ml-[3.25rem] sm:ml-30 sm:-mb-16 md:-ml-2 lg:-ml-3 2xl:-ml-4 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-36 md:min-w-[152%] 2xl:min-w-[130%] sm:min-w-[100%]',
  ]

  const dynamicClasses = [
    indexClasses[index],
    'flex flex-col p-2xl transition-none shadow-services rounded-3xl sm:aspect-video md:aspect-square w-full h-fit',
    onClick ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={cardRef}
      className={
        'cursor-pointer service sm:aspect-video md:aspect-square w-full !transition-none flex justify-center lg:align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden perspective-[1000px] group'
      }
    >
      <div
        className={`relative sm:aspect-video md:aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent group backface-hidden transform-style-3d transition-transform duration-300 rotate-x-0 rotate-y-0 ${isInView ? hoverRotationClasses[index] : ''}`}
      >
        <div
          className={`absolute w-full h-full from-primary-accent to-primary/25 z-1 rounded-3xl mix-blend-soft-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoverGradientClasses[index]} ${isInView ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`absolute w-full h-full from-primary-accent to-primary via-primary/75 z-1 rounded-3xl mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoverGradientClasses[index]} ${isInView ? 'opacity-100' : 'opacity-0'}`}
        />
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
          <Typography tag='h3' type='3xl' weight='semi-bold'>
            {title}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ServiceCardTablet
