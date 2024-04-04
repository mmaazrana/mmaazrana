import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { services } from "@/helpers/constants";
import ServiceCard from "@/components/cards/serviceCard";
import { Sections } from "@/helpers/enums";

interface ServicesProps {
  setActiveSection: (section: Sections) => void;
}

const Services: FC<ServicesProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView();

  // Effect to run on inView change
  useEffect(() => {
    inView && setActiveSection(Sections.services);
  }, [inView]);
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
