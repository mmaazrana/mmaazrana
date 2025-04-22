import Typography from '@/components/Typography';
import { ButtonTypes, ColorTypes, TextTypes, WeightTypes } from '@/helpers/enums';
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
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="flex flex-row gap-14">
        <div className="flex flex-col w-full gap-14">
          <div className="flex flex-row items-start justify-start gap-4">
            {projectData.categories.map(category => (
              <Link key={category} href={`/work?tab=${category}`}>
                <Typography
                  type={TextTypes.xl}
                  className="px-6 py-3 text-center bg-secondary-hover/15 outline outline-1 outline-secondary hover:bg-primary-invert/70 transition-all duration-300 rounded-full cursor-pointer"
                >
                  {`${workBottomNavCategories.find(c => c.key === category)?.text}`}
                </Typography>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start justify-start gap-6">
              <Typography type={TextTypes['5xl']} weight={WeightTypes.bold} className="">
                Project Requirements
              </Typography>
              <Typography
                type={TextTypes.xl}
                weight={WeightTypes.light}
                className="opacity-75 leading-relaxed"
              >
                {projectData.detailedAnalysis.overview}
              </Typography>
            </div>
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 gap-6">
                {projectData.detailedAnalysis.requirements.map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <span className="text-xs -ml-2 w-6 h-0.5 bg bg-secondary rounded-full font-bold self-center" />
                    <Typography
                      type={TextTypes.xl}
                      weight={WeightTypes.light}
                      className="opacity-75"
                    >
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
              {projectData.liveUrl && (
                <Link href={projectData.liveUrl || ''} target="_blank" className="w-fit">
                  <Button
                    type={ButtonTypes.primary}
                    rightIcon={<ExternalLink className="fill-none stroke-primary-accent" />}
                    text={`Visit live Website`}
                  />{' '}
                </Link>
              )}
              {projectData.figmaUrl && (
                <Link href={projectData.figmaUrl || ''} target="_blank" className="w-fit">
                  <Button
                    type={ButtonTypes.primary}
                    rightIcon={<ExternalLink className="fill-none stroke-primary-accent" />}
                    text={`Visit Figma File`}
                  />{' '}
                </Link>
              )}
            </div>
          </div>
        </div>
        {projectData.images.screenshots.length > 0 && (
          <div className="relative flex w-fit h-fit">
            <div
              style={{
                filter: `drop-shadow(0px 25px 50px var(--secondary))`,
              }}
              className="relative z-2 w-full max-w-lg overflow-hidden h-fit px-8 py-8 bg-primary-accent outline outline-1 outline-secondary/50 rounded-4xl"
              ref={emblaRef}
            >
              <div className="flex">
                {projectData.images.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`relative flex-[0_0_50%] min-w-md md:flex-[0_0_33.33%] -mx-8 h-fit rounded-2xl overflow-hidden transition-all duration-300 ${
                      index === activeIndex ? 'z-1 scale-100' : '-z-1 scale-90'
                    } ${index === 0 && 'ml-0'} ${index === projectData.images.screenshots.length - 1 && 'mr-0'}`}
                  >
                    <Image
                      src={screenshot}
                      alt={`${projectData.title} screenshot ${index + 1}`}
                      className="w-full h-fit"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Typography
              type={TextTypes['8xl']}
              weight={WeightTypes.black}
              color={ColorTypes.primaryAccent}
              className="absolute bottom-0 secondary-text-stroke opacity-50 translate-y-[75%] left-1/2 -translate-x-1/2 text-right -z-10"
            >
              Project Screenshots
            </Typography>
          </div>
        )}
      </div>
      <div className="flex flex-row w-full gap-8 py-20">
        <span className="text-xs w-full h-0.5 bg bg-secondary/25 rounded-full font-bold self-center" />

        <Typography
          type={TextTypes.lg}
          weight={WeightTypes.light}
          color={ColorTypes.primaryHover}
          className="opacity-50 whitespace-nowrap"
        >
          {`Completed - ${projectData.detailedAnalysis.completeOn}`}
        </Typography>
        <span className="text-xs w-full h-0.5 bg bg-secondary/25 rounded-full font-bold self-center" />
      </div>
    </div>
  );
}
