import React, { FC } from 'react'
import { services } from '@/helpers/constants'
import dynamic from 'next/dynamic'
import { Sections } from '@/helpers/enums'
import MainSectionTitle from '@/components/main-section-title'
import Loader from '@/components/loader'
import Link from 'next/link'

// Dynamically import viewport-specific components
const ServiceCard = dynamic(() => import('@/components/cards/service-card'), {
  loading: () => <Loader />,
})
const ServiceCardTablet = dynamic(() => import('@/components/cards/tablet/service-card-tablet'), {
  loading: () => <Loader />,
})
const ServiceCardMobile = dynamic(() => import('@/components/cards/mobile/service-card-mobile'), {
  loading: () => <Loader />,
})

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  return (
    <section
      id={Sections.services}
      className={'px-4xl gap-4xl flex items-start justify-center flex-col w-full'}
    >
      <MainSectionTitle title='Services' />
      <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-xl sm:gap-2xl items-center justify-between !bg-transparent w-full'>
        {services.map(service => (
          <Link
            href={service.href}
            aria-label={`Visit ${service.title} work page`}
            key={service.index}
          >
            <div className='hidden md:block'>
              <ServiceCard
                title={service.title}
                illustrationDescription={service.illustrationDescription}
                index={service.index}
              />
            </div>
            <div className='hidden sm:block md:hidden'>
              <ServiceCardTablet
                title={service.title}
                illustrationDescription={service.illustrationDescription}
                index={service.index}
              />
            </div>
            <div className='block sm:hidden'>
              <ServiceCardMobile
                title={service.title}
                illustrationDescription={service.illustrationDescription}
                index={service.index}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services
