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
    className={'px-4xl gap-4xl flex items-start justify-center flex-col w-full'}
  >
    <MainSectionTitle title='Profile' />
    <AboutProvider>
      <div className='relative flex flex-col about:grid h-auto content-start grid-flow-row-dense grid-rows-none min-[600px]:grid-cols-2 min-[1080px]:grid-cols-3 grid-flow-col-dense gap-2xl'>
        <div className='flex flex-col h-full min-h-full gap-2xl order-1 row-span-4'>
          <IntroSection />
          <EducationSection />
          <TechStackSection className='block md:hidden' />
          <ClientsSection />
        </div>
        <div className='flex flex-col gap-2xl order-2 row-span-4'>
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
