import React, { FC, ReactElement } from "react";
import Typography from "@/components/Typography";
import { TextTypes, WeightTypes } from "@/helpers/enums";

interface ServiceCardProps {
  title: string;
  index: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  onClick?: () => void;
  svg: ReactElement;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  index,
  className,
  onClick,
  svg,
}) => {
  const indexClasses = {
    0: "justify-end items-end text-right top-right-desktop-gradient",
    1: "justify-end items-center text-center top-center-desktop-gradient",
    2: "justify-end items-start text-left top-left-desktop-gradient",
    3: "justify-start items-end text-right bottom-right-desktop-gradient",
    4: "justify-start items-center text-center bottom-center-desktop-gradient",
    5: "justify-start items-start text-left bottom-left-desktop-gradient",
  };

  const hoverRotationClasses = {
    0: "hover:rotate-y-6 hover:-rotate-x-6",
    1: "hover:-rotate-x-12",
    2: "hover:-rotate-y-6 hover:-rotate-x-6",
    3: "hover:rotate-y-6 hover:rotate-x-6",
    4: "hover:rotate-x-12",
    5: "hover:-rotate-y-6 hover:rotate-x-6",
  };

  const dynamicClasses = [
    indexClasses[index],
    "flex flex-col p-6 lg:p-10 xl:p-11 2xl:p-12 transition-none shadow-services rounded-2xl lg:rounded-3xl aspect-square w-full h-fit",
    onClick ? "cursor-pointer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={
        "cursor-pointer service aspect-square w-full !transition-none flex justify-center lg:align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden perspective-[1000px] group"
      }
    >
      <div
        className={`relative aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden transform-style-3d transition-transform rotate-x-0 rotate-y-0  group ${hoverRotationClasses[index]}`}
      >
        {svg && svg}
        <div
          className={`relative border border-transparent bg-clip-content outline outline-1 outline-transparent ${dynamicClasses}`}
          // style={{
          //   background: staticGradients[index],
          // }}
        >
          <Typography type={TextTypes["4xl"]} weight={WeightTypes.bold}>
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
