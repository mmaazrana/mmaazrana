'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'

import webMobile from '@/public/svgs/web-mobile.svg'
import productMobile from '@/public/svgs/product-mobile.svg'
import appMobile from '@/public/svgs/app-mobile.svg'
import videoMobile from '@/public/svgs/video-mobile.svg'
import logoMobile from '@/public/svgs/logo-mobile.svg'
import blenderMobile from '@/public/svgs/blender-mobile.svg'
import webMobileLight from '@/public/svgs/web-mobile-light.svg'
import productMobileLight from '@/public/svgs/product-mobile-light.svg'
import appMobileLight from '@/public/svgs/app-mobile-light.svg'
import videoMobileLight from '@/public/svgs/video-mobile-light.svg'
import logoMobileLight from '@/public/svgs/logo-mobile-light.svg'
import blenderMobileLight from '@/public/svgs/blender-mobile-light.svg'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { ServiceCardProps } from '@/helpers/types'
import { useInView } from 'motion/react'

const ServiceCardMobile: FC<ServiceCardProps> = ({
  title,
  illustrationDescription,
  index,
  className,
  onClick,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const { resolvedTheme } = useTheme()
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { margin: '-35% 0px -35% 0px', amount: 0.2 })

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const darkSVGs = [webMobile, productMobile, appMobile, videoMobile, logoMobile, blenderMobile]

  const lightSVGs = [
    webMobileLight,
    productMobileLight,
    appMobileLight,
    videoMobileLight,
    logoMobileLight,
    blenderMobileLight,
  ]

  const hoverRotationClasses = [
    'rotate-y-[-15deg]',
    'rotate-y-[-15deg]',
    'rotate-y-[-15deg]',
    'rotate-y-[15deg]',
    'rotate-y-[15deg]',
    'rotate-y-[15deg]',
  ]

  const indexClasses = [
    'justify-center items-start text-left center-right-tablet-gradient',
    'justify-center items-start text-left center-right-tablet-gradient',
    'justify-center items-start text-left center-right-tablet-gradient',
    'justify-center items-end text-right center-left-tablet-gradient',
    'justify-center items-end text-right center-left-tablet-gradient',
    'justify-center items-end text-right center-left-tablet-gradient',
  ]

  const hoverGradientClasses = [
    'bg-linear-to-l',
    'bg-linear-to-l',
    'bg-linear-to-l',
    'bg-linear-to-r',
    'bg-linear-to-r',
    'bg-linear-to-r',
  ]

  const serviceClasses = [
    'absolute right-0 origin-right pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full pr-3xl -mt-0',
    'absolute right-0 pointer-events-none z-10 flex justify-start items-center min-w-[20vw] w-fit h-full -mt-0',
    'absolute right-0 pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full pl-3xl -mt-0',
    'absolute left-0 pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full pr-3xl mt-0',
    'absolute left-0 pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full mt-0',
    'absolute left-0 pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full pl-3xl mt-0',
  ]

  const imageClasses = [
    'w-full min-w-[200%] -mr-[6.5rem] service:min-w-[340%] service:-mr-[7.65rem] service:mb-2 sm:mr-32 sm:mt-10 md:mr-0 sm:min-w-[100%]',
    'w-full min-w-[140%] -mr-[4.25rem] service:min-w-[160%] service:-ml-[2.2rem] service:mr-0 service:mb-3 sm:ml-28 sm:mt-10 sm:min-w-[100%]',
    'w-full min-w-[163%] -mr-[4.5rem] service:min-w-[280%] service:-mr-[6rem] service:mt-4 sm:mr-40 sm:mt-0 sm:mb-0 sm:min-w-[100%]',
    'w-full min-w-[150%] -ml-[2.75rem] service:min-w-[200%] service:-mr-[3.5rem] service:ml-0 sm:ml-32 sm:mt-0 sm:mb-0 sm:min-w-[100%]',
    'w-full min-w-[152%] -ml-[3.4rem] service:min-w-[147%] service:-ml-[0.8rem] sm:mr-28 sm:-mb-16 sm:min-w-[100%]',
    'w-full min-w-[185%] -ml-[5.7rem] service:min-w-[170%] service:-ml-[3.25rem] sm:ml-28 sm:-mb-16 sm:min-w-[100%]',
  ]

  const dynamicClasses = [
    indexClasses[index],
    'flex flex-col p-2xl transition-none shadow-services rounded-xl sm:aspect-video md:aspect-square w-full h-fit',
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
        className={`relative sm:aspect-video md:aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden transform-style-3d transition-transform duration-500 rotate-x-0 rotate-y-0 group ${isInView ? hoverRotationClasses[index] : ''}`}
      >
        <div
          className={`absolute w-full h-full from-primary-accent to-primary/25 z-1 rounded-xl mix-blend-soft-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoverGradientClasses[index]} ${isInView ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`absolute w-full h-full from-primary-accent to-primary via-primary/75 z-1 rounded-xl mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoverGradientClasses[index]} ${isInView ? 'opacity-100' : 'opacity-0'}`}
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

export default ServiceCardMobile
