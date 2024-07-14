import React, { FC, useEffect, useState } from "react";
import Typography from "@/components/Typography";
import { useInView } from "react-intersection-observer";
import { TextTypes, WeightTypes } from "@/helpers/enums";
import { motion } from "framer-motion";
import { getActiveBreakpoint } from "@/helpers";

interface TestimonialCardProps {
  testimonial: string;
  windowWidth: number;
  client: string;
  designation: string;
  isActive: boolean;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial,
  windowWidth,
  client,
  designation,
  isActive,
}) => {
  const [ref, inView] = useInView();
  const [activeBreakpoint, setActiveBreakpoint] = useState("2xl");

  useEffect(() => {
    setActiveBreakpoint(getActiveBreakpoint(window.innerWidth));
  }, [windowWidth]);

  return (
    <div
      ref={ref}
      className={`${isActive && "shadow-testimonial hover:shadow-testimonial-hover"} relative h-[270px] sm:h-[232px] md:h-[240px] lg:h-[256px] xl:h-[300px] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[650px] xl:w-[750px] items-start flex flex-col justify-between bg-primary-accent rounded-2xl md:rounded-3xl gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 !transition-all !duration-300`}
    >
      <svg
        width="100"
        height="100"
        className={
          "absolute w-full h-full -top-2.5 -left-2.5 overflow-visible !transition-all duration-[100s]"
        }
      >
        <motion.rect
          x="10"
          y="10"
          width="80"
          height="80"
          fill="none"
          animate={{
            strokeDashoffset:
              activeBreakpoint === "2xl"
                ? 2025
                : activeBreakpoint === "xl"
                  ? 2147
                  : activeBreakpoint === "lg"
                    ? 2240
                    : activeBreakpoint === "md"
                      ? 2315
                      : 2410,
            strokeDasharray: `1400,${inView && isActive ? (activeBreakpoint === "2xl" ? 104 : activeBreakpoint === "xl" ? 94 : activeBreakpoint === "lg" ? 84 : activeBreakpoint === "md" ? 74 : 64) : 3000}`,
          }}
          transition={{
            duration: !isActive ? 1 : inView ? 1 : 0,
            delay: !isActive ? 0.85 : 0,
          }}
          // strokeDashoffset={`${activeBreakpoint === "2xl" ? 2025 : activeBreakpoint === "xl" ? 2147 : activeBreakpoint === "lg" ? 2240 : activeBreakpoint === "md" ? 2315 : 2410}`}
          strokeLinecap={"round"}
          // strokeDasharray={`1400,${inView && isActive ? (activeBreakpoint === "2xl" ? 104 : activeBreakpoint === "xl" ? 94 : activeBreakpoint === "lg" ? 84 : activeBreakpoint === "md" ? 74 : 64) : 3000}`}
          rx={activeBreakpoint === "md" || activeBreakpoint === "sm" ? 16 : 24}
          className={`${isActive ? "stroke-secondary" : "stroke-secondary-hover"} stroke-[3px] md:stroke-[3.25px] lg:stroke-[3.5px] xl:stroke-[3.75px] 2xl:stroke-[4px] w-full h-full !transition-colors !duration-[2s]`}
          // className={`${isActive ? "stroke-secondary" : "stroke-secondary-hover"} stroke-[3px] md:stroke-[3.25px] lg:stroke-[3.5px] xl:stroke-[3.75px] 2xl:stroke-[4px] w-full h-full !transition-all ${!isActive ? "!duration-[1500ms] delay-[850ms]" : inView ? "!duration-[1500ms]" : "!duration-0"}`}
        />
      </svg>
      <svg
        fill={"none"}
        className={
          "absolute z-1 overflow-visible h-[45px] md:h-[52px] lg:h-[60px] xl:h-[68px] 2xl:h-[79px] w-[50px] md:w-[58px] lg:w-[67px] xl:w-[76px] 2xl:w-[88px] right-0 translate-x-1/2 bottom-4 2xl:bottom-1.5 -translate-y-1/2"
        }
      >
        <motion.path
          className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? "stroke-secondary" : "stroke-secondary-hover"} !transition-colors !duration-[2s]`}
          // className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? "stroke-secondary" : "stroke-secondary-hover"} !transition-all ${!isActive ? "!duration-1000" : inView ? "!duration-[1500ms] delay-[850ms]" : "!duration-0"}`}
          fill={"none"}
          height={24}
          animate={{
            strokeDasharray: `200,${inView && isActive ? 25 : 300}`,
          }}
          transition={{
            duration: !isActive ? 0.5 : inView ? 1 : 0,
            delay: inView ? 0.75 : 0,
          }}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeDashoffset="245"
          // strokeDasharray={`200,${inView && isActive ? 25 : 300}`}
          d="m35.33,10.33c0-5.21-3.15-8.4-8.33-8.33H10.33C5.12,2,2,5.13,2,10.22v25.12c0,5.21,3.12,8.33,8.33,8.33q4.17,0,4.17,4.17v4.17c0,4.17-4.17,8.33-8.33,8.33s-4.17.03-4.17,4.3v8.2q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z"
        />
        <motion.path
          className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? "stroke-secondary" : "stroke-secondary-hover"} !transition-colors !duration-[2s]`}
          // className={`scale-[57%] md:scale-[66%] lg:scale-[76%] xl:scale-[88%] 2xl:scale-100 stroke-[5px] md:stroke-[4.75px] lg:stroke-[4.5px] xl:stroke-[4.25px] 2xl:stroke-[4px] ${isActive ? "stroke-secondary" : "stroke-secondary-hover"} !transition-all ${!isActive ? "!duration-1000 delay-[450ms]" : inView ? "!duration-[1500ms] delay-[1250ms]" : "!duration-0"}`}
          fill={"none"}
          animate={{
            strokeDasharray: `200,${inView && isActive ? 25 : 300}`,
          }}
          transition={{
            duration: !isActive ? 0.5 : inView ? 1 : 0,
            delay: !isActive ? 0.5 : inView ? 1 : 0,
          }}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeDashoffset="245"
          // strokeDasharray={`200,${inView && isActive ? 25 : 300}`}
          d="m85.33,10.33c0-5.21-3.15-8.4-8.33-8.33h-16.67c-5.21,0-8.33,3.12-8.33,8.22v25.12c0,5.21,3.12,8.33,8.33,8.33h3.12c0,9.38,1.04,16.67-11.46,16.67v12.5q0,4.17,4.17,4.17c12.5,0,29.17-4.17,29.17-33.33V10.33Z"
        />
      </svg>
      <div
        className={`flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 !transition-all !duration-500 ${isActive ? "opacity-100" : "opacity-25"}`}
      >
        <Typography type={TextTypes["2xl"]}>{testimonial}</Typography>
      </div>
      <div
        className={`flex flex-row w-full gap-2 !transition-all !duration-500 !delay-200 ${isActive ? "opacity-100" : "opacity-25"}`}
      >
        <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
          {client}
        </Typography>
        <Typography type={TextTypes.xl}>-</Typography>
        <Typography type={TextTypes.xl}>{designation}</Typography>
      </div>
    </div>
  );
};

export default TestimonialCard;
