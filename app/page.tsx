import Nav from '@/components/navs/nav'
import BottomNav from '@/components/navs/bottom-nav'
import React from 'react'
import Services from '@/components/sections/main-page/services'
import Work from '@/components/sections/main-page/work'
import Hero from '@/components/sections/main-page/main-hero'
import Testimonials from '@/components/sections/main-page/testimonials'
import AboutSection from '@/components/sections/main-page/about-section'

// No specific metadata needed here, it will inherit from layout.tsx
// If you wanted to override:
// export const metadata = {
//   title: 'Custom Home Title',
//   description: 'Custom home description.',
// };

export default function Home() {
  return (
    <div className='max-w-[100vw]'>
      <Nav />
      <div className='overflow-hidden'>
        <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col'>
          <BottomNav />
          <Hero />
          <Work />
          <Services />
          <Testimonials />
          <AboutSection />
        </main>
      </div>
    </div>
  )
}
