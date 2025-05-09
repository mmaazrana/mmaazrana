import React, { FC } from 'react'
import { AboutProvider } from '../../about/about-content'
import IntroSection from '@/components/about/intro-section'
import EducationSection from '../../about/education-section'
import TechStackSection from '@/components/about/tech-stack-section'
import ClientsSection from '@/components/about/clients-section'
import SocialsSection from '@/components/about/socials-section'
import WorkExperienceSection from '@/components/about/work-experience-section'
import AnimatedText from '@/components/about/animated-text'
import MainSectionTitle from '@/components/main-section-title'
import { Sections } from '@/helpers/enums'

const AboutSection: FC = () => (
  <section
    id={Sections.aboutMe}
    className={
      'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
    }
  >
    <MainSectionTitle title='Profile' />
    <AboutProvider>
      <div className='relative flex flex-col about:grid h-auto content-start grid-flow-row-dense grid-rows-none grid-cols-2 md:grid-cols-3 grid-flow-col-dense gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'>
        <div className='flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 order-1 row-span-4'>
          <IntroSection />
          <EducationSection />
          <TechStackSection className='block md:hidden' />
          <ClientsSection />
        </div>
        <div className='flex flex-col gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 order-2 row-span-4'>
          <SocialsSection />
          <TechStackSection className='hidden md:block' />
          <WorkExperienceSection className='block md:hidden' />
        </div>
        <WorkExperienceSection className='hidden md:block' />
        <AnimatedText />
      </div>
    </AboutProvider>
  </section>
)

AboutSection.displayName = 'AboutSection'

export default AboutSection
