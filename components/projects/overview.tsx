'use client'

import Typography from '@/components/Typography'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { workBottomNavCategories } from '@/helpers/constants'
import Button from '@/components/button'
import { ExternalLink } from 'lucide-react'
import { SiFigma } from 'react-icons/si'
import { WorkCategories } from '@/helpers/enums'

interface OverviewProps {
  categories: WorkCategories[]
  overview: string
  title: string
  requirements: string[]
  completeOn: string
  screenshots: StaticImageData[]
  isMobile: boolean
  liveUrl: string
  figmaUrl: string
}

export default function ProjectOverview({
  categories,
  overview,
  title,
  requirements,
  completeOn,
  screenshots,
  isMobile,
  liveUrl,
  figmaUrl,
}: OverviewProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' })
  const [activeIndex, setActiveIndex] = useState(0)
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setActiveIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect)
      onSelect()
    }
    return () => {
      if (emblaApi) {
        emblaApi.off('select', onSelect)
      }
    }
  }, [emblaApi, onSelect])

  return (
    <div className='flex flex-col items-center justify-center w-full gap-x-4 gap-y-6 xs:gap-y-7 md:gap-y-8'>
      <div className='flex flex-row flex-wrap items-start justify-start gap-x-xs gap-y-s -translate-y-2xs w-full'>
        {categories.map(category => (
          <Link
            key={category}
            href={`/portfolio?tab=${category}`}
            aria-label={`View ${workBottomNavCategories.find(c => c.key === category)?.text} Portfolio`}
          >
            <Typography
              type='lg'
              className='px-s py-2xs whitespace-nowrap text-center bg-secondary-hover/15 outline outline-1 outline-secondary hover:bg-primary-invert/70 transition-all duration-300 rounded-full cursor-pointer'
            >
              {`${workBottomNavCategories.find(c => c.key === category)?.text}`}
            </Typography>
          </Link>
        ))}
      </div>
      <div className='flex flex-col lg:flex-ro relative gap-8 xs:gap-9 sm:gap-10 md:gap-11 lg:gap-12 xl:gap-13 2xl:gap-14 max-w-full'>
        <div className='w-full gap-8 xs:gap-9 sm:gap-10 md:gap-11 lg:gap-12 xl:gap-13 2xl:gap-14'>
          <div className='flex flex-col gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12'>
            <div className='flex flex-col items-start justify-start gap-6'>
              <Typography tag='h3' type='5xl' weight='bold' className=''>
                Project Requirements
              </Typography>
              <Typography type='xl' weight='light' className='opacity-75 leading-relaxed'>
                {overview}
              </Typography>
            </div>
            <div className='flex flex-col gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12'>
              <div className='flex flex-col-reverse lg:inline-block space-y-l'>
                {screenshots.length > 0 && (
                  <div className='float-none lg:float-end lg:float-right mt-l lg:mt-0 ml-0 lg:ml-l h-fit max-w-full relative'>
                    <div
                      className='relative drop-shadow-image-carousel z-2 w-full max-w-full lg:max-w-lg overflow-hidden h-fit p-l bg-primary-accent outline outline-1 outline-secondary/50 rounded-5xl'
                      ref={emblaRef}
                    >
                      <div className='flex'>
                        {screenshots.map((screenshot, index) => (
                          <div
                            key={index}
                            className={`relative flex-[0_0_50%] md:flex-[0_0_33.33%] -mx-xl h-fit rounded-lg overflow-hidden transition-all duration-300 ${
                              index === activeIndex ? 'z-1 scale-100' : '-z-1 scale-90'
                            } ${isMobile ? 'min-w-[50vw] about:min-w-[10rem] md:min-w-[15rem] lg:min-w-[17.5rem]' : 'min-w-[77.5vw] about:min-w-xs md:min-w-sm lg:min-w-md'}
                    ${index === 0 && 'ml-0'} ${index === screenshots.length - 1 && 'mr-0'}`}
                          >
                            <Image
                              src={screenshot}
                              alt={`${title} screenshot ${index + 1}`}
                              loading='lazy'
                              quality={99}
                              placeholder='blur'
                              sizes='(max-width: 444px) 100vw, (max-width: 768px) 60vw, 30vw'
                              className='w-full h-full'
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <Typography
                      type='8xl'
                      weight='black'
                      leading='flat'
                      color='primary-accent'
                      className='absolute bottom-0 secondary-50-text-stroke text-primary-accent/95 translate-y-[90%] about:translate-y-[75%] about:-right-4 text-center about:text-right -z-10'
                    >
                      PROJECT SCREENSHOTS
                    </Typography>
                  </div>
                )}
                {requirements.map((item, index) => (
                  <div key={index} className='flex items-start justify-start gap-5'>
                    <div className='-ml-2xs min-w-xs w-xs min-h-[1.25lh] self-start flex flex-col justify-center items-center'>
                      <span className='text-xs min-w-xs w-xs min-h-4xs h-4xs bg-secondary rounded-full' />
                    </div>
                    <Typography type='xl' weight='light' leading='prose' className='opacity-75'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className='flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-3 z-5'>
                {liveUrl && (
                  <Link
                    href={liveUrl || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Visit Live Site - ${title}`}
                    className='w-fit'
                  >
                    <Button
                      className='w-fit'
                      textWeight='medium'
                      type='primary'
                      text='Visit Live Site'
                      rightIcon={
                        <ExternalLink className='h-m w-m fill-none stroke-primary-accent' />
                      }
                      textSize='xl'
                    />
                  </Link>
                )}
                {figmaUrl && (
                  <Link
                    href={figmaUrl || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Visit Figma File - ${title}`}
                    className='w-fit'
                  >
                    <Button
                      className='w-fit !pl-m outline outline-1 outline-secondary/50'
                      textWeight='regular'
                      type='secondary'
                      leftIcon={<SiFigma className='h-m w-m' />}
                      text={`Visit Figma File`}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full gap-8 py-20'>
        <span className='text-xs w-full h-0.5 bg bg-secondary/25 rounded-full font-bold self-center' />

        <Typography
          type='lg'
          weight='light'
          color='primary-hover'
          className='opacity-50 whitespace-nowrap'
        >
          {`Completed - ${completeOn}`}
        </Typography>
        <span className='text-xs w-full h-0.5 bg bg-secondary/25 rounded-full font-bold self-center' />
      </div>
    </div>
  )
}
