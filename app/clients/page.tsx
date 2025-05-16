import Nav from '@/components/navs/nav'
import BottomNav from '@/components/navs/bottom-nav'
import React from 'react'
import StackedTestimonials from '@/components/sections/clients-page/clients-hero'
import { Metadata } from 'next'
import { clientData } from '@/helpers/constants'
import { SearchParams } from '@/helpers/types'
import dynamic from 'next/dynamic'
import Loader from '@/components/loader'

const EsteemedClients = dynamic(
  () => import('@/components/sections/clients-page/esteemed-clients'),
  { loading: () => <Loader /> },
)

const WorkDetails = dynamic(() => import('@/components/sections/clients-page/work-details'), {
  loading: () => <Loader />,
})

// Define default metadata
const defaultMetadata: Metadata = {
  title: 'Client Testimonials & Collaborations',
  description:
    "Discover how Maaz Rana's expertise in product design and development has driven success for clients like Alfabolt, Kueenz Technologies, and Beacon Tutors. Explore their testimonials and project collaborations.",
}

// Generate dynamic metadata based on search params
export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams
}): Promise<Metadata> {
  const { openProjects } = await searchParams
  let projectKey: string | undefined = undefined

  if (typeof openProjects === 'string') {
    const keys = openProjects.split(',').filter(Boolean)
    if (keys.length === 1) {
      projectKey = keys[0]
    }
  }

  if (projectKey) {
    const client = clientData.find(c => c.key === projectKey)
    const technologiesUsed = client?.technologiesInvolved.map(t => t.title).join(', ')
    const productsUsed = client?.productsInvolved.map(p => p.title).join(', ')
    if (client) {
      return {
        title: `Client Details | ${client.heading}`,
        description: `Details about the work done for ${client.heading}, including testimonials from ${client.clientName} - ${client.designation}, products involved - ${productsUsed}, and technologies used - ${technologiesUsed}.`,
      }
    }
  }

  return defaultMetadata
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const { openProjects } = await searchParams
  const openKeys =
    openProjects ?
      Array.isArray(openProjects) ?
        openProjects
      : openProjects.split(',')
    : []
  return (
    <div className='max-w-[100vw]'>
      <Nav />
      <div className='overflow-hidden'>
        <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 pb-2xl flex justify-center items-center flex-col'>
          <BottomNav />
          <StackedTestimonials />
          <EsteemedClients />
          <WorkDetails openKeys={openKeys} />
        </main>
      </div>
    </div>
  )
}
