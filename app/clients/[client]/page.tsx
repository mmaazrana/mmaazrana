import Nav from '@/components/navs/nav'
import BottomNav from '@/components/navs/bottom-nav'
import React from 'react'
import StackedTestimonials from '@/components/sections/clients-page/clients-hero'
import { Metadata } from 'next'
import { clientData } from '@/helpers/constants'
import loadDynamic from 'next/dynamic'
import Loader from '@/components/loader'
import { notFound } from 'next/navigation'

// ISR: Revalidate every 1 week
export const revalidate = 604800

const EsteemedClients = loadDynamic(
  () => import('@/components/sections/clients-page/esteemed-clients'),
  { loading: () => <Loader /> },
)

const WorkDetails = loadDynamic(() => import('@/components/sections/clients-page/work-details'), {
  loading: () => <Loader />,
})

type Props = {
  params: Promise<{ client: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { client } = await params

  const clientInfo = clientData.find(c => c.key === client)

  if (!clientInfo) {
    return {
      title: 'Client Details',
      description: 'Client details page',
    }
  }

  const technologiesUsed = clientInfo.technologiesInvolved.map(t => t.title).join(', ')
  const productsUsed = clientInfo.productsInvolved.map(p => p.title).join(', ')

  return {
    title: `Client Details | ${clientInfo.heading}`,
    description: `Details about the work done for ${clientInfo.heading}, including testimonials from ${clientInfo.clientName} - ${clientInfo.designation}, products involved - ${productsUsed}, and technologies used - ${technologiesUsed}.`,
  }
}

export async function generateStaticParams() {
  return clientData.map(client => ({
    client: client.key,
  }))
}

export default async function ClientPage({ params }: Props) {
  const { client: clientKey } = await params

  // Validate client key
  if (!clientData.find(c => c.key === clientKey)) {
    notFound()
  }

  return (
    <div className='max-w-[100vw]'>
      <Nav />
      <div className='overflow-hidden'>
        <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 pb-2xl flex justify-center items-center flex-col'>
          <BottomNav />
          <StackedTestimonials />
          <EsteemedClients />
          <WorkDetails openedClient={clientKey} />
        </main>
      </div>
    </div>
  )
}
