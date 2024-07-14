import React, { FC, useEffect, useState } from "react";
import { services } from "@/helpers/constants";
import ServiceCard from "@/components/cards/serviceCard";
import Image from "next/image";
import { useColorScheme } from "@/components/utils/hooks";

interface ServicesProps {
  windowWidth: number;
  currentScreen: string;
}

const Services: FC<ServicesProps> = ({ windowWidth, currentScreen }) => {
  const { isDark } = useColorScheme();
  const [currentMode, setCurrentMode] = useState("");
  useEffect(() => {
    isDark ? setCurrentMode("") : setCurrentMode("-light");
  }, [isDark]);
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 items-center justify-between !bg-transparent w-full">
      {services.map((service) => (
        <ServiceCard
          windowWidth={windowWidth}
          title={service.title}
          index={service.index}
          key={service.index}
          svg={
            <div className={service.className}>
              <Image
                src={
                  service.baseSrc + "-" + currentScreen + currentMode + ".svg"
                }
                className={`w-full
                  ${service.index === 0 && "min-w-[200%] -mr-[6.5rem] service:min-w-[340%] service:-mr-[7.65rem] service:mb-2 sm:mr-32 sm:mt-10 md:mr-0 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[150%]"}
                  ${service.index === 1 && "min-w-[140%] -mr-[4.25rem] service:min-w-[160%] service:-ml-[2.2rem] service:mr-0 service:mb-3 sm:ml-28 sm:mt-10 md:ml-0 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[150%]"}
                  ${service.index === 2 && "min-w-[163%] -mr-[4.5rem] service:min-w-[280%] service:-mr-[6rem] service:mt-4 sm:mr-40 sm:mt-0 sm:mb-0 md:mr-0 md:min-w-[155%] 2xl:min-w-[170%] md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%]"}
                  ${service.index === 3 && "min-w-[150%] -ml-[2.75rem] service:min-w-[200%] service:-mr-[3.5rem] service:ml-0 sm:ml-32 sm:mt-0 sm:mb-0 md:ml-0 md:mr-0 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[150%]"}
                  ${service.index === 4 && "min-w-[152%] -ml-[3.4rem] service:min-w-[147%] service:-ml-[0.8rem] sm:mr-28 sm:-mb-16 md:mr-0 md:ml-0 md:!-mb-20 lg:!-mb-28 md:mt-2 lg:mt-0 xl:!-mb-32 2xl:!-mb-36 md:min-w-[150%] 2xl:min-w-[155%] sm:min-w-[100%]"}
                  ${service.index === 5 && "min-w-[185%] -ml-[5.7rem] service:min-w-[170%] service:-ml-[3.25rem] sm:ml-28 sm:-mb-16 md:-ml-2 lg:-ml-3 2xl:-ml-4 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-28 md:min-w-[152%] 2xl:min-w-[157%] sm:min-w-[100%]"}
                  `}
                alt={service.title}
                height={500}
                width={500}
                quality={75}
                priority
              />
            </div>
          }
        />
      ))}
    </div>
  );
};

export default Services;
