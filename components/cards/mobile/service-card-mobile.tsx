'use client'
import React, { FC, useEffect, useState } from 'react'
import Typography from '@/components/typography'
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

const ServiceCardMobile: FC<ServiceCardProps> = ({
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

  const darkSVGs = [webMobile, productMobile, appMobile, videoMobile, logoMobile, blenderMobile]

  const lightSVGs = [
    webMobileLight,
    productMobileLight,
    appMobileLight,
    videoMobileLight,
    logoMobileLight,
    blenderMobileLight,
  ]

  const indexClasses = {
    0: 'justify-center items-start text-left center-right-tablet-gradient',
    1: 'justify-center items-start text-left center-right-tablet-gradient',
    2: 'justify-center items-start text-left center-right-tablet-gradient',
    3: 'justify-center items-end text-right center-left-tablet-gradient',
    4: 'justify-center items-end text-right center-left-tablet-gradient',
    5: 'justify-center items-end text-right center-left-tablet-gradient',
  }

  const serviceClasses = [
    'absolute right-0 origin-right pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full pr-8 -mt-0',
    'absolute right-0 pointer-events-none z-10 flex justify-start items-center min-w-[20vw] w-fit h-full -mt-0',
    'absolute right-0 pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full pl-8 -mt-0',
    'absolute left-0 pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full pr-8 mt-0',
    'absolute left-0 pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full mt-0',
    'absolute left-0 pointer-events-none z-10 flex justify-end items-center min-w-[20vw] w-fit h-full pl-8 mt-0',
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
    'flex flex-col p-8 md:p-6 lg:p-10 xl:p-11 2xl:p-12 transition-none shadow-services rounded-xl sm:aspect-video md:aspect-square w-full h-fit',
    onClick ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={
        'cursor-pointer  service sm:aspect-video md:aspect-square w-full !transition-none flex justify-center lg:align-middle bg-clip-content outline outline-1 outline-transparent group'
      }
    >
      <div className='relative sm:aspect-video md:aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent group'>
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

export default ServiceCardMobile
