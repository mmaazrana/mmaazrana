import React, { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { usePreferredColorScheme } from "@/helpers";

interface AboutCardProps {
  children: ReactElement;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
}

const AboutCard: FC<AboutCardProps> = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  isActive,
}) => {
  const preferredScheme = usePreferredColorScheme();
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group bg-secondary-hover-10 hover:bg-primary-invert-25 overflow-hidden relative about:shadow-frosted backdrop-blur-[2px] about:backdrop-blur-[4px] md:backdrop-blur-sm about:hover:backdrop-blur-[5px] md:hover:backdrop-blur-[6px] rounded-3xl gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 ${isActive && "backdrop-blur-[3px] !bg-primary-invert-25"}  ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={"absolute w-full h-full opacity-texture top-0 left-0"}
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.2"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="14"
              specularConstant="3"
              specularExponent="20"
              lighting-color="var(--primary-hover)"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="185"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="#ff0000"
          y={0}
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>
      <svg
        width="100"
        height="100"
        className={
          "absolute w-full h-full -top-2.5 -left-2.5 overflow-visible !transition-all duration-[100s]"
        }
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientTransform="rotate(45)"
          >
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="10%" />
            <stop
              offset="100%"
              stopColor="var(--secondary)"
              stopOpacity="100%"
            />
          </linearGradient>
        </defs>
        <motion.rect
          x="10"
          y="10"
          rx={24}
          ry={24}
          width="100%"
          height="100%"
          fill="none"
          stroke="url(#linear-gradient)"
          strokeWidth={2}
          className={`w-full h-full min-w-full min-h-full !transition-all rounded-xl sm:rounded-2xl md:rounded-3xl opacity-25 group-hover:opacity-50 ${isActive && "opacity-50"}`}
        />
      </svg>
      {/*<Image*/}
      {/*  src={preferredScheme === "light" ? textureLight : texture}*/}
      {/*  alt={""}*/}
      {/*  fill*/}
      {/*  className={`w-full h-full bg-repeat ${preferredScheme === "light" ? "opacity-100" : "opacity-5"}`}*/}
      {/*/>*/}
      {children}
    </div>
  );
};

export default AboutCard;
