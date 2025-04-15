'use client';

import React, { FC, useRef, useState } from 'react';
import AboutCard from '@/components/cards/about-card';
import Typography from '@/components/Typography';
import { ColorTypes, TextTypes, WeightTypes } from '@/helpers/enums';
import SectionTitle from './section-title';
import { useAboutContext } from './about-content';
import Medal from '@/components/icons/medal';
import { useInView } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

interface EducationSectionProps {
  className?: string;
}

const EducationSection: FC<EducationSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive } = useAboutContext();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 445 });
  const educationRef = useRef(null);
  const educationIsInView = useInView(educationRef, {
    margin: `-45% 0px -45% 0px`,
    amount: 0.2,
  });

  const handleMouseEnter = () => {
    setActiveCard('EDUCATION');
    setIsActive(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsHovered(false);
  };

  return (
    <div
      ref={educationRef}
      className={`relative h-fit order-2 sm:row-span-2 md:row-span-3 ${className}`}
    >
      <AboutCard
        className="h-full min-h-fit max-h-fit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isHovered || (isMobile && educationIsInView)}
      >
        <div className={'flex flex-col gap-2 sm:gap-3 md:gap-4'}>
          <div className={'flex flex-col gap-1 md:gap-2'}>
            <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
              Software Engineering
            </Typography>
            <Typography
              type={TextTypes.xl}
              color={ColorTypes.primaryHover}
              className={'opacity-75'}
            >
              Bachelors of Engineering - National University of Sciences and Technology
            </Typography>
            <Typography
              type={TextTypes.lg}
              weight={WeightTypes.semiBold}
              color={ColorTypes.secondary}
            >
              CGPA - 3.61
            </Typography>
          </div>
          <div className={'flex flex-row gap-2 sm:gap-3 md:gap-4 items-center justify-start'}>
            <Medal
              fill={'var(--golden)'}
              className={'h-[24px] sm:h-[25px] md:h-[26px] lg:h-[27px] xl:h-[28px]'}
            />
            <Typography type={TextTypes.xl} weight={WeightTypes.medium} color={ColorTypes.golden}>
              President&apos;s Gold Medalist
            </Typography>
          </div>
        </div>
      </AboutCard>
      <SectionTitle
        text="Education"
        isInView={isMobile ? educationIsInView : true}
        className="translate-x-3 right-0 left-auto"
      />
    </div>
  );
};

export default EducationSection;
