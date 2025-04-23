import { ColorTypes, WeightTypes } from '@/helpers/enums';
import Typography from '@/components/Typography';
import { TextTypes } from '@/helpers/enums';
import { px, transform, useInView } from 'motion/react';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

interface NumberedCardProps {
  index: number;
  title: string;
  description: string;
  rotation: 'left' | 'right';
}

export default function NumberedCard({ index, title, description, rotation }: NumberedCardProps) {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const cardRef = useRef(null);
  const cardIsInView = useInView(cardRef, {
    margin: `-45% 0px -45% 0px`,
    amount: 0.2,
  });
  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col ${
        rotation === 'left' ? 'rotate-y-2' : '-rotate-y-2'
      } hover:-translate-y-2 ${
        rotation === 'left'
          ? cardIsInView && isMobile
            ? 'translate-x-2'
            : 'hover:translate-x-2'
          : cardIsInView && isMobile
            ? '-translate-x-2'
            : 'hover:-translate-x-2'
      } transform-style-preserve-3d transition-transform duration-300 ease-in-out ${cardIsInView && isMobile && '-translate-y-2'}`}
    >
      <Typography
        type={TextTypes['9xl']}
        weight={WeightTypes.black}
        color={ColorTypes.error}
        className={`absolute top-4 xs:top-2 sm:top-0 -translate-y-1/2 ${
          rotation === 'left'
            ? '-left-8 xs:-left-10 sm:-left-12'
            : '-right-8 xs:-right-10 sm:-right-12'
        } opacity-60 z-[-10] ${
          rotation === 'left' ? 'error-text-stroke' : 'secondary-text-stroke'
        } text-primary-accent uppercase font-black !text-[1000%]`}
      >
        {`${index + 1}`}
      </Typography>
      <div
        className={`flex flex-col items-center justify-center py-7 xs:py-7.5 sm:py-8 md:py-8.5 lg:py-9 xl:py-9.5 2xl:py-10 px-7 xs:px-7.5 sm:px-8 md:px-8.5 lg:px-9 xl:px-9.5 2xl:px-10 gap-2.5 xs:gap-3 md:gap-3.5 xl:gap-4 outline outline-1 outline-secondary/40 bg-secondary-hover/10 hover:bg-primary-invert/25 transition-colors duration-300 ease-in-out z-[2] rounded-2xl md:rounded-3xl backdrop-blur-xs ${cardIsInView && isMobile && '!bg-primary-invert/25'}`}
      >
        <Typography type={TextTypes['2xl']} weight={WeightTypes.bold} className="text-center">
          {title}
        </Typography>
        <Typography
          type={TextTypes['lg']}
          weight={WeightTypes.light}
          className="opacity-80 text-center"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}
