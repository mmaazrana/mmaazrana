import React, { FC } from 'react';
import { services } from '@/helpers/constants';
import ServiceCard from '@/components/cards/serviceCard';
import ServiceCardTablet from '@/components/cards/tablet/serviceCardTablet';
import ServiceCardMobile from '@/components/cards/mobile/serviceCardMobile';

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 items-center justify-between !bg-transparent w-full">
      {services.map((service, index) => (
        <div key={service.index}>
          <div className={'hidden md:block'}>
            <ServiceCard title={service.title} index={service.index} />
          </div>
          <div className={'hidden sm:block md:hidden'}>
            <ServiceCardTablet title={service.title} index={service.index} />
          </div>
          <div className={'block sm:hidden'}>
            <ServiceCardMobile title={service.title} index={service.index} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
