import Nav from '@/components/navs/nav'
import BottomNav from '@/components/navs/bottom-nav'
import React from 'react'
import StackedTestimonials from '@/components/sections/clients-page/clients-hero'
import EsteemedClients from '@/components/sections/clients-page/esteemed-clients'
import WorkDetails from '@/components/sections/clients-page/work-details'
import { Metadata } from 'next'
import { clientData } from '@/helpers/constants'
import { SearchParams } from '@/helpers/types'

// Define default metadata
const defaultMetadata: Metadata = {
  title: 'Client Testimonials & Collaborations',
  description:
    "Read testimonials from clients like Alfabolt, Kueenz Technologies, Beacon Tutors, and others about Maaz Rana's product design and development work.",
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
          <section
            className={
              '2xl:py-20 xl:py-18 lg:py-16 md:py-14 sm:py-12 xs:py-10 py-8 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
            }
          >
            <StackedTestimonials />
          </section>
          <section
            className={
              'xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
            }
          >
            <EsteemedClients />
          </section>
          <section className='2xl:p-20 xl:p-18 lg:p-16 md:p-14 sm:p-12 xs:p-10 p-8  center flex-col w-full'>
            <WorkDetails openKeys={openKeys} />
          </section>
        </main>
      </div>
    </div>
  )
}
