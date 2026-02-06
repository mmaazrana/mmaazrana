import React from 'react'
import Nav from '@/components/navs/nav'
import WorkHero from '@/components/sections/work-page/work-hero'
import WorkBottomNav from '@/components/navs/bottom-nav/work-bottom-nav'
import MyWorkSection from '@/components/sections/work-page/my-work-section'
import { WorkCategories } from '@/helpers/enums'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// ISR: Revalidate every 1 week for portfolio pages
export const revalidate = 604800

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  
  const categoryNames: Record<string, string> = {
    [WorkCategories.productDesign]: 'Product Design (UI/UX)',
    [WorkCategories.productDevelopment]: 'Web & Mobile Development',
    [WorkCategories.videoEditing]: 'Video Editing',
    [WorkCategories.illustration]: 'Graphic Design',
    [WorkCategories.blender]: '3D Artworks',
  }

  const categoryName = categoryNames[category] || 'Portfolio'

  return {
    title: `${categoryName} - Portfolio | Maaz Rana`,
    description: `Explore Maaz Rana's ${categoryName.toLowerCase()} projects and case studies.`,
  }
}

export async function generateStaticParams() {
  return [
    { category: WorkCategories.productDesign },
    { category: WorkCategories.productDevelopment },
    { category: WorkCategories.videoEditing },
    { category: WorkCategories.illustration },
    { category: WorkCategories.blender },
  ]
}

export default async function PortfolioCategoryPage({ params }: Props) {
  const { category } = await params

  // Validate category
  const validCategories = Object.values(WorkCategories)
  if (!validCategories.includes(category as WorkCategories)) {
    notFound()
  }

  return (
    <div className='max-w-[100vw]'>
      <Nav />
      <div className='overflow-hidden'>
        <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 pb-2xl xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col'>
          <WorkHero />
          <MyWorkSection activeTab={category} />
          <WorkBottomNav activeTab={category} />
        </main>
      </div>
    </div>
  )
}
