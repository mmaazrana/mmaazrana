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

  const loaderClasses = [
    "absolute right-0 sm:right-auto sm:left-0 md:left-auto md:top-0 pointer-events-none z-10 flex justify-end items-center md:items-start w-fit h-full p-8 md:p-10 lg:p-14 xl:p-16 2xl:p-24",
    "absolute right-0 md:right-auto md:top-0 pointer-events-none z-10 flex justify-end items-center md:items-start w-fit h-full p-8 md:p-10 lg:p-14 xl:p-16 2xl:p-24",
    "absolute right-0 sm:right-auto sm:left-0 md:left-auto md:top-0 pointer-events-none z-10 flex justify-end items-center md:items-start w-fit h-full p-8 md:p-10 lg:p-14 xl:p-16 2xl:p-24",
    "absolute left-0 sm:left-auto sm:right-0 md:right-auto pointer-events-none z-10 flex justify-end items-center md:items-end w-fit h-full p-8 md:p-10 lg:p-14 xl:p-16 2xl:p-24",
    "absolute left-0 md:left-auto pointer-events-none z-10 flex justify-end sm:justify-start md:justify-end items-center md:items-end w-fit h-full p-8 md:p-10 lg:p-14 xl:p-16 2xl:p-24",
    "absolute left-0 sm:left-auto sm:right-0 md:right-auto pointer-events-none z-10 flex justify-end items-center md:items-end w-fit h-full p-8 md:p-10 lg:p-14 xl:p-16 2xl:p-24",
  ];

  const serviceClasses = [
    "absolute right-0 origin-right pointer-events-none z-10 flex justify-end items-center md:items-start min-w-[20vw] w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8",
    "absolute right-0 2xl:right-1/2 2xl:translate-x-1/2 pointer-events-none z-10 flex justify-start md:justify-center items-center md:items-start min-w-[20vw] w-fit sm:w-full h-full -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8",
    "absolute right-0 pointer-events-none z-10 flex justify-end md:justify-start items-center md:items-start min-w-[20vw] w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-32 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-8",
    "absolute left-0 pointer-events-none z-10 flex justify-end sm:justify-start md:justify-end items-center md:items-end min-w-[20vw] w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 2xl:-ml-8 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4",
    "absolute left-0 2xl:left-1/2 2xl:-translate-x-1/2 pointer-events-none z-10 flex justify-end md:justify-center items-center md:items-end min-w-[20vw] w-fit sm:w-full h-full mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4",
    "absolute left-0 pointer-events-none z-10 flex  justify-end sm:justify-start items-center md:items-end min-w-[20vw] w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4",
  ];

  const imageClasses = [
    "w-full min-w-[200%] -mr-[6.5rem] service:min-w-[340%] service:-mr-[7.65rem] service:mb-2 sm:mr-32 sm:mt-10 md:mr-0 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[130%]",
    "w-full min-w-[140%] -mr-[4.25rem] service:min-w-[160%] service:-ml-[2.2rem] service:mr-0 service:mb-3 sm:ml-28 sm:mt-10 md:ml-0 md:mt-2 md:-mb-16 lg:mt-0 lg:-mb-24 lg:mx-0 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[130%]",
    "w-full min-w-[163%] -mr-[4.5rem] service:min-w-[280%] service:-mr-[6rem] service:mt-4 sm:mr-40 sm:mt-0 sm:mb-0 md:mr-0 md:min-w-[155%] 2xl:min-w-[150%] md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%]",
    "w-full min-w-[150%] -ml-[2.75rem] service:min-w-[200%] service:-mr-[3.5rem] service:ml-0 sm:ml-32 sm:mt-0 sm:mb-0 md:ml-0 md:mr-0 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-32 sm:min-w-[100%] md:min-w-[145%] 2xl:min-w-[130%]",
    "w-full min-w-[152%] -ml-[3.4rem] service:min-w-[147%] service:-ml-[0.8rem] sm:mr-28 sm:-mb-16 md:mr-0 md:ml-0 md:!-mb-20 lg:!-mb-28 md:mt-2 lg:mt-0 xl:!-mb-32 2xl:!-mb-40 md:min-w-[150%] 2xl:min-w-[135%] sm:min-w-[100%]",
    "w-full min-w-[185%] -ml-[5.7rem] service:min-w-[170%] service:-ml-[3.25rem] sm:ml-28 sm:-mb-16 md:-ml-2 lg:-ml-3 2xl:-ml-4 md:mt-2 lg:mt-0 md:-mb-16 lg:-mb-24 xl:-mb-28 2xl:-mb-36 md:min-w-[152%] 2xl:min-w-[130%] sm:min-w-[100%]",
  ];

  useEffect(() => {
    isDark ? setCurrentMode("") : setCurrentMode("-light");
  }, [isDark]);
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-9 lg:gap-10 xl:gap-11 2xl:gap-12 items-center justify-between !bg-transparent w-full">
      {services.map((service, index) => (
        <ServiceCard
          windowWidth={windowWidth}
          title={service.title}
          index={service.index}
          key={service.index}
          svg={
            currentScreen ? (
              <div className={serviceClasses[index]}>
                <Image
                  src={
                    service.baseSrc + "-" + currentScreen + currentMode + ".svg"
                  }
                  className={imageClasses[index]}
                  alt={service.title}
                  height={500}
                  width={500}
                  quality={75}
                  loading="eager"
                />
              </div>
            ) : (
              <div className={loaderClasses[index]}>
                <div className="flex justify-center items-center ">
                  <div className="rounded-full h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10 w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 bg-secondary animate-ping"></div>
                </div>
              </div>
            )
          }
        />
      ))}
    </div>
  );
};

export default Services;
