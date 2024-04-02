import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Sections, services } from "@/app/constants";
import ServiceCard from "@/components/cards/serviceCard";

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
    <div className="relative grid grid-cols-3 gap-12 items-center justify-between !bg-transparent">
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
