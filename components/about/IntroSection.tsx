'use client';

import React, { FC, useRef, useState } from 'react';
import AboutCard from '@/components/cards/AboutCard';
import Typography from '@/components/Typography';
import { ColorTypes, TextTypes, WeightTypes } from '@/helpers/enums';
import SectionTitle from './SectionTitle';
import { useAboutContext } from './AboutContext';
import { useInView } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

interface IntroSectionProps {
  className?: string;
}

const IntroSection: FC<IntroSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive, isActive } = useAboutContext();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 445 });

  const introRef = useRef(null);
  const introIsInView = useInView(introRef, {
    margin: `-45% 0px -45% 0px`,
    amount: 0.2,
  });

  const handleMouseEnter = () => {
    setActiveCard('MAAZ RANA');
    setIsActive(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsHovered(false);
  };

  return (
    <div
      ref={introRef}
      className={`relative h-fit order-1 sm:row-span-2 md:row-span-3 ${className}`}
    >
      <AboutCard
        className="h-full min-h-fit max-h-fit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isHovered || (isMobile && introIsInView)}
      >
        <Typography type={TextTypes.xl} color={ColorTypes.primaryHover} className="opacity-75">
          User-centric Product Designer & Developer with 5+ Years of experience, focused on
          developing visually stunning and intuitive products
        </Typography>
      </AboutCard>
      <SectionTitle
        text="Intro"
        isInView={isMobile ? introIsInView : true}
        className="translate-x-3 right-0 left-auto"
      />
    </div>
  );
};

export default IntroSection;
