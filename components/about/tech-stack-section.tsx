'use client';

import React, { FC, useMemo, useRef, useState } from 'react';
import AboutCard from '@/components/cards/about-card';
import Typography from '@/components/Typography';
import SectionTitle from './section-title';
import { useAboutContext } from './about-content';
import {
  designIconComponents,
  devIconComponents,
  managementIconComponents,
} from '@/helpers/constants';
import { useInView } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

interface TechStackSectionProps {
  className?: string;
}

interface IconContainerProps {
  Icon: React.ComponentType<any>;
  props: any;
}

const IconContainer: React.FC<IconContainerProps> = React.memo(({ Icon, props }) => (
  <div>
    <Icon
      className={
        'w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px]'
      }
      {...props}
    />
  </div>
));

IconContainer.displayName = 'IconContainer';

const TechStackSection: FC<TechStackSectionProps> = ({ className }) => {
  const { setActiveCard, setIsActive } = useAboutContext();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 445 });
  const toolsRef = useRef(null);
  const toolsIsInView = useInView(toolsRef, {
    margin: `-45% 0px -45% 0px`,
    amount: 0.2,
  });

  const handleMouseEnter = () => {
    setActiveCard('TECH STACK');
    setIsActive(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsHovered(false);
  };
  const renderIconSection = useMemo(
    () =>
      (
        title: string,
        icons:
          | typeof devIconComponents
          | typeof designIconComponents
          | typeof managementIconComponents
      ) => (
        <div className={'flex flex-col gap-4 sm:gap-5 md:gap-6'}>
          <Typography type={'xl'} weight='semi-bold' leading={'prose'}>
            {title}
          </Typography>
          <div className={'flex flex-row flex-wrap gap-3 md:gap-4'}>
            {Object.values(icons).map(({ Icon, props }, index) => (
              <IconContainer key={index} Icon={Icon} props={props} />
            ))}
          </div>
        </div>
      ),

    []
  );

  return (
    <div ref={toolsRef} className={`relative h-fit order-3 sm:row-span-2 ${className}`}>
      <AboutCard
        className='h-full min-h-fit max-h-fit'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isHovered || (isMobile && toolsIsInView)}
      >
        <div className={'flex flex-col gap-6 sm:gap-7 md:gap-8'}>
          {renderIconSection('Development', devIconComponents)}
          {renderIconSection('Design', designIconComponents)}
          {renderIconSection('Management', managementIconComponents)}
        </div>
      </AboutCard>
      <SectionTitle
        text='Tech Stack'
        isInView={isMobile ? toolsIsInView : true}
        className='translate-x-3 right-0 left-auto'
      />
    </div>
  );
};

export default React.memo(TechStackSection);
