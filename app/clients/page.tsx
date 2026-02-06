import Nav from '@/components/navs/nav'
import BottomNav from '@/components/navs/bottom-nav'
import React from 'react'
import StackedTestimonials from '@/components/sections/clients-page/clients-hero'
import { Metadata } from 'next'
import loadDynamic from 'next/dynamic'
import Loader from '@/components/loader'

// ISR: Revalidate every 1 week for static period (no content changes expected)
export const revalidate = 604800

const EsteemedClients = loadDynamic(
  () => import('@/components/sections/clients-page/esteemed-clients'),
  { loading: () => <Loader /> },
)

const WorkDetails = loadDynamic(() => import('@/components/sections/clients-page/work-details'), {
  loading: () => <Loader />,
})

// Define default metadata
export const metadata: Metadata = {
  title: 'Client Testimonials & Collaborations',
  description:
    "Discover how Maaz Rana's expertise in product design and development has driven success for clients like Alfabolt, Kueenz Technologies, and Beacon Tutors. Explore their testimonials and project collaborations.",
}

export default async function ClientsPage() {
  return (
    <div className='max-w-[100vw]'>
      <Nav />
      <div className='overflow-hidden'>
        <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 pb-2xl flex justify-center items-center flex-col'>
          <BottomNav />
          <StackedTestimonials />
          <EsteemedClients />
          <WorkDetails />
        </main>
      </div>
    </div>
  )
}
