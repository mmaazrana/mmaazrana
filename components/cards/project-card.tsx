import React, { FC } from 'react'

import Image, { StaticImageData } from 'next/image'
import Typography from '@/components/Typography'

import Link from 'next/link'
import { capitalizeWords, getClientId, getPageSlug } from '@/helpers/parsers'
import { ChevronRight } from 'lucide-react'
import { TestimonialClients } from '@/helpers/enums'
import { getClientLogo } from '@/helpers/constants'

interface ProjectCardProps {
  title: string
  description: string
  image: StaticImageData
  alt: boolean
  altImage?: StaticImageData
  testimonialKey?: TestimonialClients
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  alt,
  altImage,
  testimonialKey,
}) => {
  const ClientLogo = testimonialKey ? getClientLogo(testimonialKey) : null

  return (
    <div className='relative group overflow-hidden rounded-3xl'>
      <div className='absolute flex flex-row justify-center items-center p-xs right-s top-s bg-primary-invert/40 rounded-full z-2 translate-y-[-200%] group-hover:translate-y-0 duration-300'>
        <ChevronRight className='w-s h-s stroke-primary/75' />
      </div>
      {testimonialKey && (
        <Link
          aria-label={`View ${title} - Affiliated with ${capitalizeWords(testimonialKey)}`}
          href={`/clients?openProjects=${testimonialKey}#${getClientId(testimonialKey)}`}
          className='absolute opacity-100 group/affiliate flex flex-row justify-center items-center gap-2xs bottom-s hover:!bg-white-dynamic transition-all duration-300 right-s pl-xs pr-3xs hover:pr-2xs py-2xs bg-white-dynamic/75 backdrop-blur-sm outline outline-1 outline-black-dynamic/5 rounded-full z-2'
        >
          {ClientLogo && <ClientLogo className='w-fit h-4 max-w-[1rem]' />}
          <Typography
            type='base'
            weight='regular'
            leading='flat'
            className='!text-black-dynamic whitespace-nowrap py-4xs'
          >
            Affiliated with {capitalizeWords(testimonialKey)}
          </Typography>
          <ChevronRight className='w-0 h-0 group-hover/affiliate:h-s group-hover/affiliate:w-s transition-width duration-300 stroke-black-dynamic/75' />
        </Link>
      )}
      <div className='absolute group/affiliate bottom-s left-s z-2 transition-transform mix-blend-hard-light backdrop-blur-xs translate-y-[200%] group-hover:translate-y-0 duration-300'>
        <div className='flex flex-row justify-center items-center gap-2xs px-xs py-2xs bg-primary/90 shadow-lg rounded-full'>
          <Typography
            type='base'
            weight='regular'
            leading='flat'
            className='!text-primary-accent whitespace-nowrap py-4xs'
          >
            Case Study
          </Typography>
        </div>
      </div>
      <Link aria-label={`View ${title} - ${description}`} href={`/work/${getPageSlug(title)}`}>
        <div
          id='project'
          className={`drop-shadow-product cursor-pointer group work overflow-hidden h-[320px] sm:h-[384px] md:h-[448px] lg:h-[512px] xl:h-[576px] items-start bg-secondary-hover rounded-3xl grid gap-xl p-3xl ${alt ? 'sm:basis-60 md:basis-2/5 lg:basis-1/3' : 'flex-1 md:basis-3/5 lg:basis-2/3 '} transition-all duration-300 scroll-smooth`}
        >
          <div className='absolute flex w-full -bottom-1 h-[60%] mix-blend-overlay backdrop-blur-3xl mask-to-b pointer-events-none z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-600' />
          <div className='absolute flex w-full -bottom-1 h-[60%] mix-blend-overlay bg-white mask-to-b-white pointer-events-none z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-600' />
          <div className='absolute w-full h-full product-gradient rounded-3xl pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity duration-600 -z-1' />
          <div className='absolute w-full h-full product-gradient-hover rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600 -z-1' />
          <div className='flex flex-col gap-2xs sticky top-0 relative z-2'>
            <Typography tag='h3' type='4xl' weight='bold'>
              {title}
            </Typography>
            <Typography type='xl' weight='light' leading='prose' className='opacity-75'>
              {description}
            </Typography>
          </div>
          <Image
            priority
            className={`relative border-none overflow-hidden ${alt ? `border-2 w-full rounded-md group-hover:scale-[0.55]` : `border-[1.3px] rounded-sm overflow-hidden pb-10 md:pb-0 align-top min-w-full scale-150 group-hover:scale-100 transition-all duration-[400ms]`} origin-top-left transition-transform duration-[400ms] hover:!translate-y-[-6lh] z-3`}
            sizes={
              alt ?
                '(max-width: 640px) 90vw, (max-width: 1600px) 40vw, 528px'
              : '(max-width: 640px) 100vw, (max-width: 1600px) 60vw, 1100px'
            }
            src={image}
            alt={`${title} Banner`}
          />
          {alt && altImage && (
            <Image
              priority
              className={`relative border-none overflow-hidden border-2 w-full rounded-2xl scale-[0.55] translate-y-[100%] translate-x-[45%] group-hover:-translate-y-[15%] sm:group-hover:-translate-y-[18%] hover:!translate-y-[-14lh] origin-top-left transition-transform duration-500 z-2`}
              sizes='(max-width: 640px) 90vw, (max-width: 1600px) 40vw, 528px'
              src={altImage}
              alt={`${title} Alternate View`}
            />
          )}
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
