import Typography from '@/components/Typography';
import { ProjectAnalysisT } from '@/helpers/project-analytics';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { workBottomNavCategories } from '@/helpers/constants';
import Button from '@/components/button';
import { ExternalLink } from 'lucide-react';

interface OverviewProps {
  projectData: ProjectAnalysisT;
}

export default function ProjectOverview({ projectData }: OverviewProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect();
    }
    return () => {
      if (emblaApi) {
        emblaApi.off('select', onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  return (
    <div className='flex flex-col items-center justify-center w-full gap-x-4 gap-y-6 xs:gap-y-7 md:gap-y-8 mb-8 sm:mb-4'>
      <div className='flex flex-col lg:flex-row gap-8 xs:gap-9 sm:gap-10 md:gap-11 lg:gap-12 xl:gap-13 2xl:gap-14 max-w-full'>
        <div className='flex flex-col w-full gap-8 xs:gap-9 sm:gap-10 md:gap-11 lg:gap-12 xl:gap-13 2xl:gap-14'>
          <div className='flex flex-row flex-wrap items-start justify-start gap-x-4 gap-y-6 xs:gap-y-7 md:gap-y-8'>
            {projectData.categories.map(category => (
              <Link key={category} href={`/work?tab=${category}`}>
                <Typography
                  type={'xl'}
                  className='px-4 sm:px-5 xl:px-6 py-2 sm:py-2.5 xl:py-3 whitespace-nowrap text-center bg-secondary-hover/15 outline outline-1 outline-secondary hover:bg-primary-invert/70 transition-all duration-300 rounded-full cursor-pointer'
                >
                  {`${workBottomNavCategories.find(c => c.key === category)?.text}`}
                </Typography>
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12'>
            <div className='flex flex-col items-start justify-start gap-6'>
              <Typography type={'5xl'} weight='bold' className=''>
                Project Requirements
              </Typography>
              <Typography type={'xl'} weight='light' className='opacity-75 leading-relaxed'>
                {projectData.detailedAnalysis.overview}
              </Typography>
            </div>
            <div className='flex flex-col gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12'>
              <div className='grid grid-cols-1 gap-4 xs:gap-5 md:gap-6'>
                {projectData.detailedAnalysis.requirements.map((item, index) => (
                  <div key={index} className='flex items-start gap-5'>
                    <span className='text-xs -ml-1 xs:-ml-1.5 md:-ml-2 w-4 xs:w-5 md:w-6 h-0.5 bg bg-secondary rounded-full font-bold self-center' />
                    <Typography type={'xl'} weight='light' className='opacity-75'>
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
              {projectData.liveUrl && (
                <Link href={projectData.liveUrl || ''} target='_blank' className='w-fit'>
                  <Button
                    type={'primary'}
                    rightIcon={<ExternalLink className='fill-none stroke-primary-accent' />}
                    text={`Visit live Website`}
                  />{' '}
                </Link>
              )}
              {projectData.figmaUrl && (
                <Link href={projectData.figmaUrl || ''} target='_blank' className='w-fit'>
                  <Button
                    type={'primary'}
                    rightIcon={<ExternalLink className='fill-none stroke-primary-accent' />}
                    text={`Visit Figma File`}
                  />{' '}
                </Link>
              )}
            </div>
          </div>
        </div>
        {projectData.images.screenshots.length > 0 && (
          <div className='relative flex w-[110%] about:w-full self-center lg:w-fit h-fit'>
            <div
              className='relative drop-shadow-image-carousel z-2 w-full max-w-full lg:max-w-lg overflow-hidden h-fit px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8 xl:py-9 2xl:py-10 bg-primary-accent outline outline-1 outline-secondary/50 rounded-2xl sm:rounded-3xl lg:rounded-4xl'
              ref={emblaRef}
            >
              <div className='flex'>
                {projectData.images.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`relative flex-[0_0_50%] min-w-[77.5vw] about:min-w-xs md:min-w-sm lg:min-w-md md:flex-[0_0_33.33%] -mx-5 sm:-mx-6 md:-mx-7 lg:-mx-8 h-fit rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 ${
                      index === activeIndex ? 'z-1 scale-100' : '-z-1 scale-90'
                    } ${index === 0 && 'ml-0'} ${index === projectData.images.screenshots.length - 1 && 'mr-0'}`}
                  >
                    <Image
                      src={screenshot}
                      alt={`${projectData.title} screenshot ${index + 1}`}
                      loading='lazy'
                      placeholder='blur'
                      sizes='50vw'
                      className='w-full h-fit'
                    />
                  </div>
                ))}
              </div>
            </div>
            <Typography
              type={'8xl'}
              weight='black'
              color={'primary-accent'}
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
          type={'lg'}
          weight='light'
          color={'primary-hover'}
          className='opacity-50 whitespace-nowrap'
        >
          {`Completed - ${projectData.detailedAnalysis.completeOn}`}
        </Typography>
        <span className='text-xs w-full h-0.5 bg bg-secondary/25 rounded-full font-bold self-center' />
      </div>
    </div>
  );
}
