'use client';

import React, { FC, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import Typography from '@/components/Typography';

import { TextTypes, WeightTypes } from '@/helpers/enums';
import { useInView } from 'motion/react';

interface ProjectCardMobileProps {
  title: string;
  description: string;
  image: StaticImageData;
  alt: boolean;
  altImage?: StaticImageData;
}

const ProjectCardMobile: FC<ProjectCardMobileProps> = ({
  title,
  description,
  image,
  alt,
  altImage,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    margin: '-45% 0px -45% 0px',
    amount: 0.2,
  });

  return (
    <div
      ref={cardRef}
      id={'project'}
      className={`cursor-pointer group work overflow-hidden h-[320px] sm:h-[384px] items-start bg-secondary-hover rounded-3xl grid gap-8 sm:gap-9 md:gap-10 p-8 sm:p-9 ${alt ? 'sm:basis-60' : 'flex-1'} transition-all duration-300`}
    >
      <div className={'flex flex-col gap-1 sm:gap-2'}>
        <Typography type={TextTypes['4xl']} weight={WeightTypes.bold}>
          {title}
        </Typography>
        <Typography type={TextTypes.xl}>{description}</Typography>
      </div>
      <Image
        priority
        className={`border-none overflow-hidden shadow-2xl ${alt ? `border-2 w-full rounded-md sm:rounded-lg ${isInView && '!scale-[0.55]'}` : `border-[1.3px] rounded-xl sm:rounded-md overflow-hidden align-top min-w-full scale-150 ${isInView && '!scale-100'} `} origin-top-left transition-transform duration-300`}
        src={image}
        alt={'Project Banner'}
      />
      {alt && altImage && (
        <Image
          priority
          className={`border-none overflow-hidden shadow-2xl border-2 w-full rounded-3xl sm:rounded-lg scale-[0.55] translate-y-[100%] translate-x-[45%] origin-top-left transition-transform duration-300 ${isInView && '!-translate-y-[10%]'}`}
          src={altImage}
          alt={'Project Banner'}
        />
      )}
    </div>
  );
};

export default ProjectCardMobile;
