"use client";

import React, { FC, useEffect, useState } from "react";
import Typography from "@/components/Typography";
import { TextTypes, WeightTypes } from "@/helpers/enums";
import { useTheme } from "next-themes";
import Image from "next/image";
import webTablet from "@/public/svgs/web-tab.svg";
import productTablet from "@/public/svgs/product-tab.svg";
import appTablet from "@/public/svgs/app-tab.svg";
import videoTablet from "@/public/svgs/video-tab.svg";
import logoTablet from "@/public/svgs/logo-tab.svg";
import blenderTablet from "@/public/svgs/blender-tab.svg";
import webTabletLight from "@/public/svgs/web-tab-light.svg";
import productTabletLight from "@/public/svgs/product-tab-light.svg";
import appTabletLight from "@/public/svgs/app-tab-light.svg";
import videoTabletLight from "@/public/svgs/video-tab-light.svg";
import logoTabletLight from "@/public/svgs/logo-tab-light.svg";
import blenderTabletLight from "@/public/svgs/blender-tab-light.svg";

interface ServiceCardTabletProps {
  title: string;
  index: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  onClick?: () => void;
}

const ServiceCardTablet: FC<ServiceCardTabletProps> = ({
  title,
  index,
  className,
  onClick,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  const darkSVGs = [
    webTablet,
    productTablet,
    appTablet,
    videoTablet,
    logoTablet,
    blenderTablet,
  ];

  const lightSVGs = [
    webTabletLight,
    productTabletLight,
    appTabletLight,
    videoTabletLight,
    logoTabletLight,
    blenderTabletLight,
  ];

  const hoverRotationClasses = {
    0: "hover:rotate-y-6 hover:-rotate-x-6",
    1: "hover:-rotate-x-12",
    2: "hover:-rotate-y-6 hover:-rotate-x-6",
    3: "hover:rotate-y-6 hover:rotate-x-6",
    4: "hover:rotate-x-12",
    5: "hover:-rotate-y-6 hover:rotate-x-6",
  };

  const indexClasses = {
    0: "justify-end items-end text-right top-right-desktop-gradient",
    1: "justify-end items-start text-left top-center-desktop-gradient",
    2: "justify-center items-end text-right top-left-desktop-gradient",
    3: "justify-center items-start md:items-end text-left bottom-right-desktop-gradient",
    4: "justify-start items-end text-right bottom-center-desktop-gradient",
    5: "justify-start items-start text-left bottom-left-desktop-gradient",
  };

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

  const dynamicClasses = [
    indexClasses[index],
    "flex flex-col p-8 md:p-6 lg:p-10 xl:p-11 2xl:p-12 transition-none shadow-services rounded-xl md:rounded-2xl lg:rounded-3xl sm:aspect-video md:aspect-square w-full h-fit",
    onClick ? "cursor-pointer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={
        "cursor-pointer service sm:aspect-video md:aspect-square w-full !transition-none flex justify-center lg:align-middle bg-clip-content outline outline-1 outline-transparent group"
      }
    >
      <div className="relative sm:aspect-video md:aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent group">
        <div className={serviceClasses[index]}>
          <Image
            src={isDarkMode ? darkSVGs[index] : lightSVGs[index]}
            className={imageClasses[index]}
            alt={title}
            quality={75}
          />
        </div>
        <div
          className={`relative border border-transparent bg-clip-content outline outline-1 outline-transparent ${dynamicClasses}`}
        >
          <Typography type={TextTypes["4xl"]} weight={WeightTypes.bold}>
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardTablet;
