'use client';
import Button from '@/components/button';
import { ButtonTypes } from '@/helpers/enums';

import { TextTypes } from '@/helpers/enums';

import { WeightTypes } from '@/helpers/enums';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { useProjectContext } from '@/app/context/project-provider';
import Typography from '@/components/Typography';

export default function ProjectHero() {
  const { projectData } = useProjectContext();
  const rotationClasses = [
    'rotate-y-24',
    'rotate-y-12',
    'rotate-y-0',
    '-rotate-y-12',
    '-rotate-y-24',
  ];

  const scaleClasses = [
    'mr-[3.4%] scale-150 hover:-translate-y-12',
    ' scale-110 hover:-translate-y-10',
    'scale-100 hover:-translate-y-8',
    'scale-110 hover:-translate-y-10',
    'ml-[3.4%] scale-150 hover:-translate-y-12',
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full">
      {/* Back Navigation
          <div className="flex flex-row justify-center items-center w-full">
            <Link href="/work" target="_blank" rel="noopener noreferrer" className="w-fit">
              <Button
                className="w-fit"
                type={ButtonTypes.secondary}
                text="Back to Work"
                textSize={TextTypes.xl}
                textWeight={WeightTypes.regular}
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
                    type={ButtonTypes.secondary}
                    text={category}
                    textSize={TextTypes.lg}
                    textWeight={WeightTypes.regular}
                    className="bg-secondary-hover/50 hover:bg-secondary-hover"
                  />
                </Link>
              ))}
            </div>
          </div> */}

      {/* Hero Images  */}
      <div className="relative w-full h-fit flex flex-row justify-center items-center gap-1 mb-20 mt-28">
        {Array.from({ length: 5 }).map((_, index) => {
          const screenshotIndex = index % Math.max(1, projectData.images.screenshots.length);
          const screenshot = projectData.images.screenshots[screenshotIndex];

          return (
            <div
              key={index}
              className={`w-full h-full flex aspect-[3/4] perspective-[300px] ${scaleClasses[index]} transition-all duration-300`}
            >
              <Image
                src={screenshot}
                alt={`${projectData.title} screenshot ${index + 1}`}
                className={`shadow-testimonial object-cover w-full h-full rounded-xl transform-style-3d ${rotationClasses[index]} `}
                loading="lazy"
                placeholder="blur"
                sizes="15vw"
              />
            </div>
          );
        })}
      </div>

      {/* Project Header */}
      <div className="mb-12 flex flex-col max-w-4xl gap-6 items-center justify-center text-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Typography type={TextTypes['6xl']} weight={WeightTypes.bold}>
              {projectData.title}
            </Typography>
            <Typography type={TextTypes['2xl']} weight={WeightTypes.light} className="opacity-75">
              {projectData.shortDescription}
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <Link
              href={'mailto:awaismaaz@gmail.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <Button
                className="w-fit"
                type={ButtonTypes.primary}
                text="Get in Touch"
                textSize={TextTypes.xl}
                textWeight={WeightTypes.medium}
                leftIcon={<Mail className="!fill-none stroke-primary-accent" />}
              />
            </Link>
            {projectData.liveUrl && (
              <Link
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <Button
                  className="w-fit"
                  type={ButtonTypes.secondary}
                  text="Visit Live Site"
                  textSize={TextTypes.xl}
                  textWeight={WeightTypes.regular}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
