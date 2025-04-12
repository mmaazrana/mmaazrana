import React, { FC } from 'react';
import { AboutProvider } from '../about/AboutContext';
import IntroSection from '../about/IntroSection';
import EducationSection from '../about/EducationSection';
import TechStackSection from '../about/TechStackSection';
import ClientsSection from '../about/ClientsSection';
import SocialsSection from '../about/SocialsSection';
import WorkExperienceSection from '../about/WorkExperienceSection';
import AnimatedText from '../about/AnimatedText';

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
