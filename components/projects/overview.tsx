'use client'

import Typography from '@/components/Typography'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { workBottomNavCategories } from '@/helpers/constants'
import Button from '@/components/button'
import { ExternalLink } from 'lucide-react'
import { getProjectData } from '@/helpers/parsers'

interface OverviewProps {
  project: string
}

export default function ProjectOverview({ project }: OverviewProps) {
  const projectData = getProjectData(project)

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
    <div className='flex flex-col items-center justify-center w-full gap-x-4 gap-y-6 xs:gap-y-7 md:gap-y-8 mb-8 sm:mb-4'>
      <div className='flex flex-col lg:flex-row gap-8 xs:gap-9 sm:gap-10 md:gap-11 lg:gap-12 xl:gap-13 2xl:gap-14 max-w-full'>
        <div className='flex flex-col w-full gap-8 xs:gap-9 sm:gap-10 md:gap-11 lg:gap-12 xl:gap-13 2xl:gap-14'>
          <div className='flex flex-row flex-wrap items-start justify-start gap-x-xs gap-y-m'>
            {projectData.categories.map(category => (
              <Link key={category} href={`/work?tab=${category}`}>
                <Typography
                  type='lg'
                  className='px-s py-2xs whitespace-nowrap text-center bg-secondary-hover/15 outline outline-1 outline-secondary hover:bg-primary-invert/70 transition-all duration-300 rounded-full cursor-pointer'
                >
                  {`${workBottomNavCategories.find(c => c.key === category)?.text}`}
                </Typography>
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12'>
            <div className='flex flex-col items-start justify-start gap-6'>
              <Typography tag='h3' type='5xl' weight='bold' className=''>
                Project Requirements
              </Typography>
              <Typography type='xl' weight='light' className='opacity-75 leading-relaxed'>
                {projectData.detailedAnalysis.overview}
              </Typography>
            </div>
            <div className='flex flex-col gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12'>
              <div className='grid grid-cols-1 gap-4 xs:gap-5 md:gap-6'>
                {projectData.detailedAnalysis.requirements.map((item, index) => (
                  <div key={index} className='flex items-start gap-5'>
                    <span className='text-xs -ml-2xs w-s h-0.5 bg bg-secondary rounded-full font-bold self-center' />
                    <Typography type='xl' weight='light' className='opacity-75'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-3'>
                {projectData.liveUrl && (
                  <Link
                    href={projectData.liveUrl || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-fit'
                  >
                    <Button
                      className='w-fit'
                      type='primary'
                      text='Visit Live Site'
                      textSize='xl'
                      textWeight='regular'
                    />
                  </Link>
                )}
                {projectData.figmaUrl && (
                  <Link
                    href={projectData.figmaUrl || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-fit'
                  >
                    <Button
                      className='w-fit'
                      type='secondary'
                      rightIcon={<ExternalLink className='fill-none stroke-primary-accent' />}
                      text={`Visit Figma File`}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {projectData.images.screenshots.length > 0 && (
          <div className='relative flex w-[110%] about:w-full self-center lg:w-fit h-fit'>
            <div
              className='relative drop-shadow-image-carousel z-2 w-full max-w-full lg:max-w-lg overflow-hidden h-fit p-l bg-primary-accent outline outline-1 outline-secondary/50 rounded-5xl'
              ref={emblaRef}
            >
              <div className='flex'>
                {projectData.images.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`relative flex-[0_0_50%] min-w-[77.5vw] about:min-w-xs md:min-w-sm lg:min-w-md md:flex-[0_0_33.33%] -mx-xl h-fit rounded-lg overflow-hidden transition-all duration-300 ${
                      index === activeIndex ? 'z-1 scale-100' : '-z-1 scale-90'
                    } ${index === 0 && 'ml-0'} ${index === projectData.images.screenshots.length - 1 && 'mr-0'}`}
                  >
                    <Image
                      src={screenshot}
                      alt={`${projectData.title} screenshot ${index + 1}`}
                      loading='lazy'
                      placeholder='blur'
                      sizes='(max-width: 444px) 100vw, (max-width: 768px) 50vw, 20vw'
                      className='w-full h-fit'
                    />
                  </div>
                ))}
              </div>
            </div>
            <Typography
              type='8xl'
              weight='black'
              color='primary-accent'
              className='absolute bottom-0 secondary-text-stroke text-primary-accent/95 translate-y-[90%] about:translate-y-[75%] about:-right-4 text-center about:text-right -z-10'
            >
              PROJECT SCREENSHOTS
            </Typography>
          </div>
        )}
      </div>
      <div className='flex flex-row w-full gap-8 py-20'>
        <span className='text-xs w-full h-0.5 bg bg-secondary/25 rounded-full font-bold self-center' />

        <Typography
          type='lg'
          weight='light'
          color='primary-hover'
          className='opacity-50 whitespace-nowrap'
        >
          {`Completed - ${projectData.detailedAnalysis.completeOn}`}
        </Typography>
        <span className='text-xs w-full h-0.5 bg bg-secondary/25 rounded-full font-bold self-center' />
      </div>
    </div>
  )
}
