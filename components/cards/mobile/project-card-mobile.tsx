'use client'

import React, { FC, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import Typography from '@/components/Typography'
import { TestimonialClients } from '@/helpers/enums'
import { useInView } from 'motion/react'
import Link from 'next/link'
import { capitalizeWords, getClientId, getPageSlug } from '@/helpers/parsers'
import { clientData } from '@/helpers/constants'
import { ChevronRight } from 'lucide-react'

interface ProjectCardMobileProps {
  title: string
  description: string
  image: StaticImageData
  alt: boolean
  altImage?: StaticImageData
  testimonialKey?: TestimonialClients
}

const ProjectCardMobile: FC<ProjectCardMobileProps> = ({
  title,
  description,
  image,
  alt,
  altImage,
  testimonialKey,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { margin: '-35% 0px -35% 0px', amount: 0.2 })

  useEffect(() => {
    if (!isInView && cardRef.current) {
      cardRef.current.scrollTop = 0
    }
  }, [isInView])

  const ClientLogo = clientData.find(client => client.key === testimonialKey)?.companyLogo

  return (
    <div className='relative group'>
      {testimonialKey && (
        <Link
          href={`/clients?openProjects=${testimonialKey}#${getClientId(testimonialKey)}`}
          className='absolute w-fit max-w-fit opacity-100 group/affiliate flex flex-row justify-center items-center gap-2xs bottom-s hover:!bg-white-dynamic transition-all duration-300 right-s pl-xs pr-3xs hover:pr-2xs py-2xs bg-white-dynamic/50 group-hover:bg-white-dynamic/75 shadow-xl backdrop-blur-sm outline outline-1 outline-secondary/0 rounded-full z-2'
        >
          {ClientLogo && <ClientLogo className='max-w-[1rem] w-fit h-4' />}
          <Typography
            type='base'
            weight='regular'
            leading='flat'
            className='!text-black-dynamic whitespace-nowrap py-4xs w-fit max-w-fit'
          >
            Affiliated with {capitalizeWords(testimonialKey)}
          </Typography>
          <ChevronRight className='w-0 h-0 group-hover/affiliate:h-s group-hover/affiliate:w-s transition-width duration-300 stroke-black-dynamic/75' />
        </Link>
      )}
      <Link href={`/work/${getPageSlug(title)}`}>
        <div
          ref={cardRef}
          id='project'
          className={`cursor-pointer group work overflow-hidden scroll-smooth no-scrollbar max-h-[22rem] sm:max-h-[384px] h-[100vw] items-start bg-secondary-hover rounded-3xl grid gap-xl p-xl ${alt ? 'sm:basis-60' : 'flex-1'} ${isInView && 'overflow-y-scroll'} transition-all duration-300 select-none`}
        >
          <div className='flex flex-col gap-2xs sticky top-0'>
            <Typography tag='h3' type='4xl' weight='bold'>
              {title}
            </Typography>
            <Typography type='xl' weight='light' leading='prose' className='opacity-75'>
              {description}
            </Typography>
          </div>
          <Image
            priority
            className={`pointer-events-none border-none overflow-hidden shadow-2xl ${alt ? `border-2 w-full rounded-lg ${isInView && '!scale-[0.55]'}` : `border-[1.3px] rounded-md overflow-hidden align-top min-w-full scale-150 ${isInView && '!scale-100'} `} origin-top-left transition-transform duration-300`}
            sizes={alt ? '90vw' : '100vw'}
            src={image}
            alt={`${title} Banner`}
          />
          {alt && altImage && (
            <Image
              priority
              className={`pointer-events-none border-none overflow-hidden shadow-2xl border-2 w-full rounded-lg scale-[0.55] translate-y-[100%] translate-x-[45%] origin-top-left transition-transform duration-300 ${isInView && '!-translate-y-[15%]'}`}
              sizes='90vw'
              src={altImage}
              alt={`${title} Alternate View`}
            />
          )}
        </div>
      </Link>
    </div>
  )
}

export default ProjectCardMobile
