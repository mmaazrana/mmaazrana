import Nav from '@/components/navs/nav'
import BottomNav from '@/components/navs/bottom-nav'
import React from 'react'
import Hero from '@/components/sections/main-page/main-hero'
import dynamic from 'next/dynamic'
import Loader from '@/components/loader'

// ISR: Revalidate every 1 week for static period (no content changes expected)
export const revalidate = 604800

// Dynamically import below-the-fold components
const Work = dynamic(() => import('@/components/sections/main-page/work'), {
  loading: () => <Loader />,
})
const Services = dynamic(() => import('@/components/sections/main-page/services'), {
  loading: () => <Loader />,
})
const Testimonials = dynamic(() => import('@/components/sections/main-page/testimonials'), {
  loading: () => <Loader />,
})
const AboutSection = dynamic(() => import('@/components/sections/main-page/about-section'), {
  loading: () => <Loader />,
})

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
