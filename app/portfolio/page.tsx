export const runtime = 'edge'

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

  const metadata: Metadata = {
    metadataBase,
    title: tab ? `Portfolio Work - ${activeTab}` : 'Portfolio Work - Design & Development',
    description:
      tab ?
        `Discover Maaz Rana's diverse portfolio of product design (UI/UX), web development, mobile app development, and graphic design projects - ${activeTab}.`
      : "Discover Maaz Rana's diverse portfolio of product design (UI/UX), web development, mobile app development, and graphic design projects.",
  }

  return metadata
}

export default async function Portfolio({ searchParams }: { searchParams: SearchParams }) {
  const { tab } = await searchParams
  const activeTab = tab ? String(tab) : WorkCategories.productDesign

  return (
    <div className='max-w-[100vw]'>
      <Nav />
      <div className='overflow-hidden'>
        <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96  pb-2xl xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col'>
          <WorkHero />
          <MyWorkSection activeTab={activeTab} />
          <WorkBottomNav activeTab={activeTab} />
        </main>
      </div>
    </div>
  )
}
