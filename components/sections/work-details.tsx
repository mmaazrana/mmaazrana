import React from 'react'
import { clientData } from '@/helpers/constants'
import Accordion from '@/components/accordion'
import ProductsInvolved from './products-involved'
import ToolsAndTechnologies from './tools-and-technologies'
import TestimonialData from './testimonial-data'

const WorkDetails = () => {
  return (
    <>
      {clientData.map((data, index) => {
        return (
          <Accordion
            key={index}
            heading={data.heading}
            isExpanded={index === 0}
            content={
              <div className='flex flex-col gap-10 py-4'>
                <TestimonialData
                  testimonial={data.testimonial}
                  clientName={data.clientName}
                  companyName={data.companyName}
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
    </>
  )
}

export default WorkDetails
