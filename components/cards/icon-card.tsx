import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { useId, useRef } from 'react';
import * as m from 'motion/react-m';
import { useInView } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

interface IconCardProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function IconCard({ icon: Icon, title, description }: IconCardProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const cardRef = useRef(null);
  const cardIsInView = useInView(cardRef, {
    margin: `-45% 0px -45% 0px`,
    amount: 0.2,
  });
  return (
    <div ref={cardRef} className="relative group">
      {Icon && (
        <Icon
          className={`self-end top-6 sm:-top-4 -left-6 sm:left-auto sm:-right-8 absolute w-20 xs:w-22 sm:w-24 md:w-26 lg:w-28 xl:w-30 2xl:w-32 h-20 xs:h-22 sm:h-24 md:h-26 lg:h-28 xl:h-30 2xl:h-32 stroke-[0.5px] text-secondary opacity-0 group-hover:opacity-75 group-hover:-translate-y-16 transition-all duration-300 ease-in-out ${cardIsInView && isMobile && 'opacity-75 -translate-y-16'}`}
        />
      )}
      <div
        className={`backdrop-blur-xs relative flex flex-col h-full items-start justify-start items-center bg-secondary-hover/10 hover:bg-primary-invert/25 sm:hover:-translate-y-4 transition-all duration-300 ease-in-out px-6 xs:px-7 sm:px-8 md:px-9 lg:px-10 xl:px-11 2xl:px-12 py-6 xs:py-7 sm:py-8 md:py-9 lg:py-10 xl:py-11 2xl:py-12 gap-3 xs:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 rounded-3xl group ${cardIsInView && isMobile && '!bg-primary-invert/25'}`}
      >
        <svg
          width="100"
          height="100"
          className={
            'absolute w-full h-full -top-2.5 -left-2.5 overflow-visible !transition-all duration-[100s]'
          }
        >
          <defs>
            <linearGradient
              id={`aboutCardStroke${id}`}
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientTransform="rotate(45)"
            >
              <stop offset="0%" stopColor="var(--secondary)" stopOpacity="10%" />
              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="100%" />
            </linearGradient>
          </defs>
          <m.rect
            x="10"
            y="10"
            width="100%"
            height="100%"
            fill="none"
            stroke={`url(#aboutCardStroke${id})`}
            strokeWidth={2}
            className={`w-full h-full min-w-full min-h-full !transition-all rounded-rect rounded-xl sm:rounded-2xl md:rounded-3xl opacity-25 group-hover:opacity-50 ${cardIsInView && isMobile && 'opacity-50'}`}
          />
        </svg>
        {Icon && (
          <Icon className="self-end top-4 xs:top-5 sm:top-0 right-4 xs:right-5 sm:right-0 absolute sm:relative sm:self-start w-8 xs:w-9 sm:w-8 md:w-9 lg:w-10 xl:w-11 2xl:w-12 h-8 xs:h-9 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12 stroke-1 text-secondary" />
        )}
        <div className="flex flex-col mr-10 xs:mr-12 sm:mr-0 gap-2 sm:gap-2.5 lg:gap-3">
          <Typography type={TextTypes['3xl']} weight={WeightTypes.bold}>
            {title}
          </Typography>
          <Typography type={TextTypes.xl} className="opacity-75">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
