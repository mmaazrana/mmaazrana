import React from 'react'
import Nav from '@/components/navs/nav'
import WorkHero from '@/components/sections/work-page/work-hero'
import WorkBottomNav from '@/components/navs/bottom-nav/work-bottom-nav'
import { Metadata } from 'next'
import MyWorkSection from '@/components/sections/work-page/my-work-section'
import { SearchParams } from '@/helpers/types'
import { WorkCategories } from '@/helpers/enums'

// Define the base URL for metadata
const metadataBase = new URL('https://maazrana.com') // Replace with your actual domain

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams
}): Promise<Metadata> {
  const { tab } = await searchParams
  const activeTab = tab ? String(tab) : WorkCategories.productDesign

  return {
    metadataBase,
    title: tab ? `Portfolio Work - ${activeTab}` : 'Portfolio Work - Design & Development',
    description:
      tab ?
        `Explore a collection of product design (UI/UX), web development, mobile app development, and graphic design projects by Maaz Rana - ${activeTab}.`
      : 'Explore a collection of product design (UI/UX), web development, mobile app development, and graphic design projects by Maaz Rana.',
    keywords: [
      'Portfolio',
      'Projects',
      'Case Studies',
      'Product Design',
      'UI/UX',
      'Web Development',
      'Mobile Development',
      'Graphic Design',
      'Maaz Rana',
    ],
    alternates: { canonical: './' },
  }
}

export default async function Portfolio({ searchParams }: { searchParams: SearchParams }) {
  const { tab } = await searchParams
  const activeTab = tab ? String(tab) : WorkCategories.productDesign

  return (
    <div className='overflow-x-hidden max-w-[100vw]'>
      <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col'>
        <Nav />
        <section
          className={
            'xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
          }
        >
          <WorkHero />
        </section>
        <MyWorkSection activeTab={activeTab} />
        <WorkBottomNav activeTab={activeTab} />
      </main>
    </div>
  )
}
