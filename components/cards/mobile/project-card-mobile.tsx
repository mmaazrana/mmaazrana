'use client'

import React, { FC, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import { useInView } from 'motion/react'
import Link from 'next/link'
import { getPageSlug } from '@/helpers/parsers'

interface ProjectCardMobileProps {
  title: string
  description: string
  image: StaticImageData
  alt: boolean
  altImage?: StaticImageData
}

const ProjectCardMobile: FC<ProjectCardMobileProps> = ({
  title,
  description,
  image,
  alt,
  altImage,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { margin: '-35% 0px -35% 0px', amount: 0.2 })

  useEffect(() => {
    if (!isInView && cardRef.current) {
      cardRef.current.scrollTop = 0
    }
  }, [isInView])

  return (
    <Link href={`/work/${getPageSlug(title)}`}>
      <div
        ref={cardRef}
        id='project'
        className={`cursor-pointer group work overflow-hidden scroll-smooth no-scrollbar max-h-[320px] sm:max-h-[384px] h-[320px] sm:h-[384px] items-start bg-secondary-hover rounded-3xl grid gap-xl p-3xl ${alt ? 'sm:basis-60' : 'flex-1'} ${isInView && 'overflow-y-scroll'} transition-all duration-300 select-none`}
      >
        <div className='flex flex-col gap-2xs sticky top-0'>
          <Typography tag='h3' type='4xl' weight='bold'>
            {title}
          </Typography>
          <Typography type='lg' weight='light' leading='prose' className='opacity-75'>
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
  )
}

export default ProjectCardMobile
