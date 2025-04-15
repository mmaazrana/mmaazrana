import React, { FC } from 'react';
import { AboutProvider } from '../about/about-content';
import IntroSection from '@/components/about/intro-section';
import EducationSection from '../about/education-section';
import TechStackSection from '@/components/about/tech-stack-section';
import ClientsSection from '@/components/about/clients-section';
import SocialsSection from '@/components/about/socials-section';
import WorkExperienceSection from '@/components/about/work-experience-section';
import AnimatedText from '@/components/about/animated-text';

const AboutSection: FC = () => (
  <AboutProvider>
    <div className="relative flex flex-col about:grid h-auto content-start grid-flow-row-dense grid-rows-none grid-cols-2 md:grid-cols-3 grid-flow-col-dense gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12">
      <div className="flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 order-1 row-span-4">
        <IntroSection />
        <EducationSection />
        <TechStackSection className="block md:hidden" />
        <ClientsSection />
      </div>
      <div className="flex flex-col gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 order-2 row-span-4">
        <SocialsSection />
        <TechStackSection className="hidden md:block" />
        <WorkExperienceSection className="block md:hidden" />
      </div>
      <WorkExperienceSection className="hidden md:block" />
      <AnimatedText />
    </div>
  </AboutProvider>
);

AboutSection.displayName = 'AboutSection';

export default AboutSection;
