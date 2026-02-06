'use client'

import React from 'react'
import { clientData } from '@/helpers/constants'
import Accordion from '@/components/accordion'
import TestimonialData from '@/components/clients/testimonial-data'
import ProductsInvolved from '@/components/clients/products-involved'
import ToolsAndTechnologies from '@/components/clients/tools-and-technologies'
import { getClientId } from '@/helpers/parsers'
import { useSkipAnimationsOnClientNav } from '@/hooks/useSkipAnimationsOnClientNav'

interface WorkDetailsProps {
  openedClient?: string // Single opened accordion
}

const WorkDetails = ({ openedClient }: WorkDetailsProps) => {
  const skipAnimations = useSkipAnimationsOnClientNav()

  return (
    <section className='p-7xl center flex-col w-full'>
      {clientData.map(data => {
        const isOpen = openedClient === data.key
        const accordionId = getClientId(data.key)
        return (
          <Accordion
            key={data.key}
            id={accordionId}
            heading={data.heading}
            isOpen={isOpen}
            queryString={`/${isOpen ? '' : data.key}`}
            skipAnimations={skipAnimations}
            content={
              <div className='flex flex-col gap-10 py-4'>
                <TestimonialData
                  testimonial={data.testimonial}
                  clientName={data.clientName}
                  designation={data.designation}
                  companyLink={data.companyLink}
                  testimonialKey={data.key}
                />
                <div className={`flex flex-col gap-12`}>
                  <ProductsInvolved products={data.productsInvolved} />
                  <ToolsAndTechnologies technologies={data.technologiesInvolved} />
                </div>
              </div>
            }
          />
        )
      })}
    </section>
  )
}

export default WorkDetails
