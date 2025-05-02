import React, { FC } from 'react'
import { services } from '@/helpers/constants'
import ServiceCard from '@/components/cards/service-card'
import ServiceCardTablet from '@/components/cards/tablet/service-card-tablet'
import ServiceCardMobile from '@/components/cards/mobile/service-card-mobile'

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  return (
    <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 items-center justify-between !bg-transparent w-full'>
      {services.map(service => (
        <div key={service.index}>
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
        </div>
      ))}
    </div>
  )
}

export default Services
