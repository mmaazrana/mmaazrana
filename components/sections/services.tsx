import React, { FC } from "react";
import { services } from "@/helpers/constants";
import ServiceCard from "@/components/cards/serviceCard";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 items-center justify-between !bg-transparent w-full">
      {services.map((service) => (
        <ServiceCard
          title={service.title}
          index={service.index}
          key={service.index}
        />
      ))}
    </div>
  );
};

export default Services;
