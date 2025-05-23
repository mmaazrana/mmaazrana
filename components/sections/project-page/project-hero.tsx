import Button from '@/components/button'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react'
import Typography from '@/components/Typography'
import { capitalizeWords, getClientId } from '@/helpers/parsers'
import { clientLogoData, getClientLogo } from '@/helpers/constants'
import { ProjectAnalysisT } from '@/helpers/project-analytics'

export default function ProjectHero({ projectData }: { projectData: ProjectAnalysisT }) {
  const ProjectLogo =
    projectData.logo ? clientLogoData[projectData.logo as keyof typeof clientLogoData] : null
  const ClientLogo = projectData.affiliateWith ? getClientLogo(projectData.affiliateWith) : null
  const testimonialKey = projectData.affiliateWith

  const rotationClasses = [
    'rotate-y-20 lg:rotate-y-22 xl:rotate-y-24',
    'rotate-y-8 lg:rotate-y-10 xl:rotate-y-12',
    'rotate-y-0',
    '-rotate-y-8 lg:-rotate-y-10 xl:-rotate-y-12',
    '-rotate-y-20 lg:-rotate-y-22 xl:-rotate-y-24',
  ]

  const extendedRotationClasses = [
    'rotate-y-17 lg:rotate-y-18 xl:rotate-y-20',
    'rotate-y-8 sm:rotate-y-11 lg:rotate-y-12 xl:rotate-y-14',
    'rotate-y-4 lg:rotate-y-5 xl:rotate-y-6',
    'rotate-y-0',
    '-rotate-y-4 lg:-rotate-y-5 xl:-rotate-y-6',
    '-rotate-y-8 sm:-rotate-y-11 lg:-rotate-y-12 xl:-rotate-y-14',
    '-rotate-y-17 lg:-rotate-y-18 xl:-rotate-y-20',
  ]

  const scaleClasses = [
    'mr-[1.8%] lg:mr-[2.6%] xl:mr-[3.4%] scale-130 lg:scale-140 xl:scale-150 hover:-translate-y-12',
    'scale-108 lg:scale-109 xl:scale-110 hover:-translate-y-10',
    'scale-100 hover:-translate-y-8',
    'scale-108 lg:scale-109 xl:scale-110 hover:-translate-y-10',
    'ml-[1.8%] lg:ml-[2.6%] xl:ml-[3.4%] scale-130 lg:scale-140 xl:scale-150 hover:-translate-y-12',
  ]

  const extendedScaleClasses = [
    'mr-[2%] lg:mr-[3.15%] xl:mr-[4.1%] scale-127 lg:scale-141 xl:scale-156 hover:-translate-y-12',
    'mr-[3.7%] sm:mr-[1%] lg:mr-[1.7%] xl:mr-[2.25%] scale-125 sm:scale-114 lg:scale-122 xl:scale-130 hover:-translate-y-12',
    'mr-[0.4%] sm:mr-[0.6%] lg:mr-[1.2%] xl:mr-[1.6%] scale-105 sm:scale-107 lg:scale-112 xl:scale-117 hover:-translate-y-10',
    'scale-100 sm:scale-105 lg:scale-110 xl:scale-114 hover:-translate-y-8',
    'ml-[0.4%] sm:ml-[0.6%] lg:ml-[1.2%] xl:ml-[1.6%] scale-105 sm:scale-107 lg:scale-112 xl:scale-117 hover:-translate-y-10',
    'ml-[3.7%] sm:ml-[1%] lg:ml-[1.7%] xl:ml-[2.25%] scale-125 sm:scale-114 lg:scale-122 xl:scale-130 hover:-translate-y-12',
    'ml-[2%] lg:ml-[3.15%] xl:ml-[4.1%] scale-127 lg:scale-141 xl:scale-156 hover:-translate-y-12',
  ]

  return (
    <section className='flex flex-col justify-start items-center w-full'>
      <div className='relative flex flex-row justify-center items-center w-[80%]'>
        <span
          className={
            'absolute left-1/2 flex -translate-x-1/2 top-1/2 -translate-y-1/2 h-full self-center work-nav-gradient w-full max-w-8xl z-[5] pointer-events-none'
          }
        />
        <span
          className={`absolute left-0 transition-all duration-300 top-1/2 -translate-y-1/2 h-0.5 rounded-full w-full bg-secondary opacity-75 z-[3] pointer-events-none`}
        />
        <Link
          href='/portfolio'
          aria-label='Back to Portfolio'
          className='w-fit bg-primary-accent z-10 relative px-m py-s group hover:px-4xl !transition-all !duration-300'
        >
          <Button
            className='w-fit pr-3xs gap-2xs group'
            textClassName='hover:!text-primary group-hover:text-primary transition-colors duration-300'
            type='tertiary'
            textColor='primary-hover'
            text='Back to Portfolio'
            textSize='xl'
            textWeight='regular'
            leftIcon={
              <ChevronLeft className='!fill-none stroke-secondary group-hover:stroke-primary transition-colors duration-300' />
            }
          />
        </Link>
      </div>
      {projectData.affiliateWith && testimonialKey && (
        <Link
          href={`/clients?openProjects=${testimonialKey}#${getClientId(testimonialKey)}`}
          aria-label={`View ${capitalizeWords(projectData.affiliateWith)}'s Portfolio`}
          className={`${projectData.isMobile ? '-mb-[3%]' : '-mb-[5%]'}  mt-m self-center w-fit max-w-fit opacity-100 group/affiliate flex flex-row justify-center items-center gap-2xs hover:!bg-secondary-hover transition-all duration-300 pl-xs pr-3xs hover:pr-2xs py-2xs bg-secondary-hover/50 outline outline-1 outline-secondary/25 rounded-full z-2`}
        >
          {ClientLogo && <ClientLogo className='max-w-[1rem] w-fit h-4' />}
          <Typography
            type='lg'
            weight='regular'
            leading='flat'
            className='!text-primary whitespace-nowrap py-4xs w-fit max-w-fit'
          >
            Affiliated with {capitalizeWords(projectData.affiliateWith)}
          </Typography>
          <ChevronRight className='w-0 h-0 group-hover/affiliate:h-s group-hover/affiliate:w-s transition-width duration-300 stroke-primary/75' />
        </Link>
      )}
      {/* Hero Images - Desktop Layout */}
      <div
        className={`relative z-5 w-full h-fit hidden sm:flex flex-row justify-center items-center gap-1 mb-11 xs:mb-12.5 sm:mb-14 md:mb-15.5 lg:mb-17 xl:mb-18.5 2xl:mb-20 xs:mt-10 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28`}
      >
        {Array.from({ length: projectData.isMobile ? 7 : 5 }).map((_, index) => {
          const screenshotIndex = index % Math.max(1, projectData.images.screenshots.length)
          const screenshot = projectData.images.screenshots[screenshotIndex]

          return (
            <div
              key={index}
              className={`relative w-full h-full flex perspective-[100px] sm:perspective-[200px] md:perspective-[300px] ${projectData.isMobile ? extendedScaleClasses[index] : scaleClasses[index]} transition-all duration-300 ${projectData.isMobile ? 'aspect-[9/21]' : 'aspect-[3/4]'}`}
            >
              <Image
                src={screenshot}
                alt={`${projectData.title} screenshot ${index + 1}`}
                className={`shadow-testimonial object-cover w-full sm:h-full rounded-md transform-style-3d ${projectData.isMobile ? extendedRotationClasses[index] : rotationClasses[index]} `}
                placeholder='blur'
                sizes={projectData.isMobile ? '17vw' : '25vw'}
              />
            </div>
          )
        })}
      </div>
      {/* Hero Images - Mobile Layout */}
      <div className='relative w-full h-48 xs:h-64 flex sm:hidden flex-row justify-center items-center gap-0 mb-11 xs:mb-12.5 sm:mb-14 xs:mt-10 sm:mt-14'>
        {Array.from({ length: projectData.isMobile ? 5 : 3 }).map((_, index) => {
          const screenshotIndex = index % Math.max(2, projectData.images.screenshots.length)
          const screenshot = projectData.images.screenshots[screenshotIndex]

          return (
            <div
              key={index}
              className={`relative w-full h-full flex perspective-[70px] ${projectData.isMobile ? extendedScaleClasses[index + 1] : scaleClasses[index + 1]} transition-all duration-300 ${projectData.isMobile ? 'aspect-[9/21]' : 'aspect-[3/4]'}`}
            >
              <Image
                src={screenshot}
                alt={`${projectData.title} screenshot ${index + 1}`}
                className={`shadow-testimonial object-cover w-full sm:h-full rounded-md transform-style-3d ${projectData.isMobile ? extendedRotationClasses[index + 1] : rotationClasses[index + 1]} `}
                placeholder='blur'
                sizes={projectData.isMobile ? '25vw' : '35vw'}
              />
            </div>
          )
        })}
      </div>
      {/* Project Header */}
      <div className='mb-s flex flex-col max-w-[60rem] gap-s items-center justify-center text-center'>
        <div className='flex flex-col gap-4xl'>
          <div className='flex flex-col justify-center items-center gap-s'>
            {ProjectLogo && (
              <ProjectLogo
                className={`${projectData.isMobile ? 'mt-2xs' : '-mt-s'} w-fit h-8xl mb-s`}
              />
            )}
            <Typography tag='h1' type='6xl' weight='bold'>
              {projectData.title}
            </Typography>
            <Typography
              type='2xl'
              weight='light'
              leading='medium'
              className='opacity-75 px-4xl sm:px-8xl md:px-10xl'
            >
              {projectData.shortDescription}
            </Typography>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-3'>
            <Link
              href='mailto:awaismaaz@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Get in Touch'
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
                aria-label='Visit Live Site'
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
    </section>
  )
}
