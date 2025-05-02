'use client'
import Button from '@/components/button'

import {} from '@/helpers/enums'

import {} from '@/helpers/enums'
import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import Typography from '@/components/typography'
import { getProjectData } from '@/helpers/parsers'

export default function ProjectHero({ project }: { project: string }) {
  const projectData = getProjectData(project)

  const rotationClasses = [
    'rotate-y-20 lg:rotate-y-22 xl:rotate-y-24',
    'rotate-y-8 lg:rotate-y-10 xl:rotate-y-12',
    'rotate-y-0',
    '-rotate-y-8 lg:-rotate-y-10 xl:-rotate-y-12',
    '-rotate-y-20 lg:-rotate-y-22 xl:-rotate-y-24',
  ]

  const scaleClasses = [
    'mr-[1.8%] lg:mr-[2.6%] xl:mr-[3.4%] scale-130 lg:scale-140 xl:scale-150 hover:-translate-y-12',
    'scale-108 lg:scale-109 xl:scale-110 hover:-translate-y-10',
    'scale-100 hover:-translate-y-8',
    'scale-108 lg:scale-109 xl:scale-110 hover:-translate-y-10',
    'ml-[1.8%] lg:ml-[2.6%] xl:ml-[3.4%] scale-130 lg:scale-140 xl:scale-150 hover:-translate-y-12',
  ]

  return (
    <div className='flex flex-col justify-start items-center w-full'>
      {/* Back Navigation
          <div className="flex flex-row justify-center items-center w-full">
            <Link href="/work" target="_blank" rel="noopener noreferrer" className="w-fit">
              <Button
                className="w-fit"
                type='secondary'
                text="Back to Work"
                textSize='xl'
                textWeight='regular'
                leftIcon={<ChevronLeft className="!fill-none stroke-primary" />}
              />
            </Link>
            <div className="flex flex-wrap gap-3 mb-6">
              {projectData.categories.map((category, index) => (
                <Link
                  key={index}
                  href="/work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <Button
                    type='secondary'
                    text={category}
                    textSize='lg'
                    textWeight='regular'
                    className="bg-secondary-hover/50 hover:bg-secondary-hover"
                  />
                </Link>
              ))}
            </div>
          </div> */}

      {/* Hero Images - Desktop Layout */}
      <div className='relative w-full h-28 xs:h-32 sm:h-fit hidden sm:flex flex-row justify-center items-center gap-1 mb-11 xs:mb-12.5 sm:mb-14 md:mb-15.5 lg:mb-17 xl:mb-18.5 2xl:mb-20 xs:mt-10 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28'>
        {Array.from({ length: 5 }).map((_, index) => {
          const screenshotIndex = index % Math.max(1, projectData.images.screenshots.length)
          const screenshot = projectData.images.screenshots[screenshotIndex]

          return (
            <div
              key={index}
              className={`w-full h-full flex aspect-[3/4] perspective-[100px] sm:perspective-[200px] md:perspective-[300px] ${scaleClasses[index]} transition-all duration-300`}
            >
              <Image
                src={screenshot}
                alt={`${projectData.title} screenshot ${index + 1}`}
                className={`shadow-testimonial object-cover w-full sm:h-full rounded-md transform-style-3d ${rotationClasses[index]} `}
                loading='lazy'
                placeholder='blur'
                sizes='135vw'
              />
            </div>
          )
        })}
      </div>

      {/* Hero Images - Mobile Layout */}
      <div className='relative w-full h-48 xs:h-64 flex sm:hidden flex-row justify-center items-center gap-0 mb-11 xs:mb-12.5 sm:mb-14 xs:mt-10 sm:mt-14'>
        {Array.from({ length: 3 }).map((_, index) => {
          const screenshotIndex = index % Math.max(2, projectData.images.screenshots.length)
          const screenshot = projectData.images.screenshots[screenshotIndex]

          return (
            <div
              key={index}
              className={`w-full h-full flex aspect-[3/4] perspective-[70px] ${scaleClasses[index + 1]} transition-all duration-300`}
            >
              <Image
                src={screenshot}
                alt={`${projectData.title} screenshot ${index + 1}`}
                className={`shadow-testimonial object-cover w-full sm:h-full rounded-md transform-style-3d ${rotationClasses[index + 1]} `}
                loading='lazy'
                placeholder='blur'
                sizes='35vw'
              />
            </div>
          )
        })}
      </div>

      {/* Project Header */}
      <div className='mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-12 flex flex-col max-w-[60rem] gap-6 items-center justify-center text-center'>
        <div className='flex flex-col gap-7 xs:gap-8 md:gap-9 xl:gap-10'>
          <div className='flex flex-col gap-2.5 xs:gap-3 md:gap-3.5 xl:gap-4'>
            <Typography tag='h1' type='6xl' weight='bold'>
              {projectData.title}
            </Typography>
            <Typography
              type='2xl'
              weight='light'
              className='opacity-75 px-8 xs:px-10 sm:px-12 md:px-14 lg:px-16 xl:px-18 2xl:px-20'
            >
              {projectData.shortDescription}
            </Typography>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-3'>
            <Link
              href='mailto:awaismaaz@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-fit'
            >
              <Button
                className='w-fit'
                type='primary'
                text='Get in Touch'
                textSize='xl'
                textWeight='medium'
                leftIcon={<Mail className='!fill-none stroke-primary-accent' />}
              />
            </Link>
            {projectData.liveUrl && (
              <Link
                href={projectData.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='w-fit'
              >
                <Button
                  className='w-fit'
                  type='secondary'
                  text='Visit Live Site'
                  textSize='xl'
                  textWeight='regular'
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
