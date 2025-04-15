'use client';

import Image from 'next/image';
import pfp from '../../public/images/memoji-pfp.webp';
import React, { FC, useRef, useState } from 'react';
import AboutCard from '@/components/cards/about-card';
import SectionTitle from './section-title';
import { useAboutContext } from './about-content';
import { useInView } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

interface SocialsSectionProps {
  className?: string;
}

const SocialsSection: FC<SocialsSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive } = useAboutContext();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 445 });

  const socialsRef = useRef(null);
  const socialsIsInView = useInView(socialsRef, {
    margin: `-45% 0px -45% 0px`,
    amount: 0.2,
  });

  const handleMouseEnter = () => {
    setActiveCard('SOCIALS');
    setIsActive(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsHovered(false);
  };

  return (
    <div
      ref={socialsRef}
      className={`relative h-fit order-3 sm:row-span-2 md:row-span-3 ${className}`}
    >
      <AboutCard
        className={'h-fit aspect-square max-h-fit min-h-fit !gap-0 !p-0 !overflow-clip group'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isHovered || (isMobile && socialsIsInView)}
      >
        <Image
          src={pfp}
          alt={'Maaz Rana'}
          fill
          className={`!aspect-square object-cover !max-h-fit !h-fit !relative opacity-50 saturate-0 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-300 ${
            false && '!opacity-100 !saturate-100'
          }`}
          placeholder="blur"
        />
      </AboutCard>
      <SectionTitle
        text="Socials"
        isInView={isMobile ? socialsIsInView : true}
        className="translate-x-3 right-0 left-auto"
      />
    </div>
  );
};

export default SocialsSection;
