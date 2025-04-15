import React, { FC, ReactElement, useId } from 'react';
import * as m from 'motion/react-m';

interface AboutCardProps {
  children: ReactElement;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
}

const AboutCard: FC<AboutCardProps> = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  isActive,
}) => {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`cursor-pointer about group bg-secondary-hover-10 hover:bg-primary-invert-25 transition-colors duration-300 ease-in-out overflow-hidden relative about:shadow-frosted backdrop-blur-[2px] about:backdrop-blur-[4px] md:backdrop-blur-sm rounded-3xl gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 ${isActive && 'backdrop-blur-[3px] !bg-primary-invert-25'}  ${className}`}
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
          rx={24}
          ry={24}
          width="100%"
          height="100%"
          fill="none"
          stroke={`url(#aboutCardStroke${id})`}
          strokeWidth={2}
          className={`w-full h-full min-w-full min-h-full !transition-all rounded-xl sm:rounded-2xl md:rounded-3xl opacity-25 group-hover:opacity-50 ${isActive && 'opacity-50'}`}
        />
      </svg>
      {children}
    </div>
  );
};

export default AboutCard;
