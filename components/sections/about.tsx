import React, { FC, memo, useEffect, useState } from "react";
import AboutCard from "@/components/cards/aboutCard";
import {
  aboutSections,
  clientIconComponents,
  designIconComponents,
  devIconComponents,
  managementIconComponents,
  WorkExperiences,
} from "@/helpers/constants";
import { archivo } from "@/helpers/fonts";
import Typography from "@/components/Typography";
import { ColorTypes, TextTypes, WeightTypes } from "@/helpers/enums";
import Image from "next/image";
import pfp from "../../public/images/memoji-pfp.webp";
import { useInView } from "react-intersection-observer";
import { getActiveBreakpoint } from "@/helpers";
import { AnimatePresence, motion } from "framer-motion";
import Medal from "@/components/icons/medal";

interface AboutProps {
  windowWidth: number;
}

const About: FC<AboutProps> = ({ windowWidth }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [activeBreakpoint, setActiveBreakpoint] = useState("2xl");
  useEffect(() => {
    setActiveBreakpoint(getActiveBreakpoint(window.innerWidth));
  }, [windowWidth]);
  const options = {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0.2,
    triggerOnce: false,
    skip: activeBreakpoint !== "sm",
  };
  const [introRef, introInView] = useInView(options);
  const [educationRef, educationInView] = useInView(options);
  const [clientsRef, clientsInView] = useInView(options);
  const [socialsRef, socialsInView] = useInView(options);
  const [toolsRef, toolsInView] = useInView(options);
  const [workRef, workInView] = useInView({
    rootMargin: "-35% 0px -30% 0px",
    threshold: 0.2,
    triggerOnce: false,
    skip: activeBreakpoint !== "sm",
  });

  return (
    <div
      className={
        "relative flex flex-col about:grid h-auto content-start grid-rows-none grid-cols-2 md:grid-cols-3 grid-flow-col-dense gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
      }
    >
      <div
        className={
          "flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 order-1 row-span-4"
        }
      >
        <div className={"relative h-fit"} ref={introRef} id={aboutSections[0]}>
          <AboutCard
            className={"h-fit"}
            onMouseEnter={() => {
              setIsActive(true);
              setActiveCardIndex(0);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
            isActive={introInView}
          >
            <Typography
              type={TextTypes.xl}
              color={ColorTypes.primaryHover}
              className={"opacity-75"}
            >
              User-centric Product Designer & Developer with 5+ Years of
              experience, focused on developing visually stunning and intuitive
              products
            </Typography>
          </AboutCard>
          <span
            className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 -translate-x-3 left-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${introInView ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[0]}
          </span>
        </div>
        <div className={"relative"} ref={educationRef} id={aboutSections[1]}>
          <AboutCard
            className={""}
            onMouseEnter={() => {
              setIsActive(true);
              setActiveCardIndex(1);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
            isActive={educationInView}
          >
            <div className={"flex flex-col gap-2 sm:gap-3 md:gap-4"}>
              <div className={"flex flex-col gap-1 md:gap-2"}>
                <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                  Software Engineering
                </Typography>
                <Typography
                  type={TextTypes.xl}
                  color={ColorTypes.primaryHover}
                  className={"opacity-75"}
                >
                  Bachelors of Engineering - National University of Sciences and
                  Technology
                </Typography>
                <Typography
                  type={TextTypes.lg}
                  weight={WeightTypes.semiBold}
                  color={ColorTypes.secondary}
                >
                  CGPA - 3.61
                </Typography>
              </div>
              <div
                className={
                  "flex flex-row gap-2 sm:gap-3 md:gap-4 items-center justify-start"
                }
              >
                <Medal
                  fill={"var(--golden)"}
                  className={
                    "h-[24px] sm:h-[25px] md:h-[26px] lg:h-[27px] xl:h-[28px]"
                  }
                />

                <Typography
                  type={TextTypes.xl}
                  weight={WeightTypes.medium}
                  color={ColorTypes.golden}
                >
                  President’s Gold Medalist
                </Typography>
              </div>
            </div>
          </AboutCard>
          <span
            className={` about:hidden inline-block absolute bottom-0 translate-y-1/2 translate-x-3 right-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${educationInView ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[1]}
          </span>
        </div>
        <div
          className={"md:hidden flex relative"}
          ref={toolsRef}
          id={aboutSections[4]}
        >
          <AboutCard
            className={"flex flex-auto grow shrink h-fit"}
            onMouseEnter={() => {
              setIsActive(true);
              setActiveCardIndex(4);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
            isActive={toolsInView}
          >
            <div className={"flex flex-col gap-6 sm:gap-7 md:gap-8"}>
              <div className={"flex flex-col gap-4 sm:gap-5 md:gap-6"}>
                <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                  Development
                </Typography>
                <div className={"flex flex-row flex-wrap gap-3 md:gap-4"}>
                  {Object.values(devIconComponents).map(
                    ({ Icon, props }, index) => (
                      <div key={index}>
                        <Icon
                          className={
                            "w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px]"
                          }
                          {...props}
                        />{" "}
                        {/* Adjust the size as per your requirement */}
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className={"flex flex-col gap-4 sm:gap-5 md:gap-6"}>
                <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                  Design
                </Typography>
                <div className={"flex flex-row flex-wrap gap-3 md:gap-4"}>
                  {Object.values(designIconComponents).map(
                    ({ Icon, props }, index) => (
                      <div key={index}>
                        <Icon
                          className={
                            "w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px]"
                          }
                          {...props}
                        />{" "}
                        {/* Adjust the size as per your requirement */}
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className={"flex flex-col gap-4 sm:gap-5 md:gap-6"}>
                <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                  Management
                </Typography>
                <div className={"flex flex-row flex-wrap gap-3 md:gap-4"}>
                  {Object.values(managementIconComponents).map(
                    ({ Icon, props }, index) => (
                      <div key={index}>
                        <Icon
                          className={
                            "w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px]"
                          }
                          {...props}
                        />{" "}
                        {/* Adjust the size as per your requirement */}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </AboutCard>
          <span
            className={` about:hidden inline-block absolute bottom-0 translate-y-1/2 -translate-x-3 left-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${toolsInView ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[4]}
          </span>
        </div>
        <div
          className={"relative h-fit"}
          ref={clientsRef}
          id={aboutSections[2]}
        >
          <AboutCard
            className={"h-fit"}
            onMouseEnter={() => {
              setIsActive(true);
              setActiveCardIndex(2);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
            isActive={clientsInView}
          >
            <div className={"flex flex-col gap-2 sm:gap-3 md:gap-4"}>
              <div className={"flex flex-row flex-wrap gap-3 md:gap-4"}>
                {clientIconComponents.map(({ Icon, props }, index) => (
                  <div key={index}>
                    <Icon
                      {...props}
                      className={
                        "h-[24px] sm:h-[26px] md:h-[28px] lg:h-[30px] xl:h-[32px]"
                      }
                    />{" "}
                    {/* Adjust the size as per your requirement */}
                  </div>
                ))}
              </div>
            </div>
          </AboutCard>
          <span
            className={` about:hidden inline-block absolute bottom-0 translate-y-1/2 translate-x-3 right-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${clientsInView ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[2]}
          </span>
        </div>
      </div>
      {/*<div*/}
      {/*  className={*/}
      {/*    "flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"*/}
      {/*  }*/}
      {/*>*/}
      <div
        className={"relative h-fit order-2"}
        ref={socialsRef}
        id={aboutSections[3]}
      >
        <AboutCard
          className={
            "h-fit aspect-square max-h-fit min-h-fit !gap-0 !p-0 !overflow-clip group"
          }
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(3);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
          isActive={socialsInView}
        >
          <Image
            src={pfp}
            alt={"Maaz Rana"}
            fill
            className={`!aspect-square object-cover !max-h-fit !h-fit !relative opacity-50 saturate-0 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-300 ${socialsInView && "!opacity-100 !saturate-100"}`}
            placeholder="blur"
          />
        </AboutCard>
        <span
          className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 -translate-x-3 left-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${socialsInView ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
        >
          {aboutSections[3]}
        </span>
      </div>

      <div className={"relative md:flex hidden order-3 sm:row-span-2"}>
        <AboutCard
          className={"flex flex-auto grow shrink"}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(4);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div className={"flex flex-col gap-8"}>
            <div className={"flex flex-col gap-6"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Development
              </Typography>
              <div className={"flex flex-row flex-wrap gap-4"}>
                {Object.values(devIconComponents).map(
                  ({ Icon, props }, index) => (
                    <div key={index}>
                      <Icon
                        className={
                          "w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px]"
                        }
                        {...props}
                      />{" "}
                      {/* Adjust the size as per your requirement */}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className={"flex flex-col gap-6"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Design
              </Typography>
              <div className={"flex flex-row flex-wrap gap-4"}>
                {Object.values(designIconComponents).map(
                  ({ Icon, props }, index) => (
                    <div key={index}>
                      <Icon
                        className={
                          "w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px]"
                        }
                        {...props}
                      />{" "}
                      {/* Adjust the size as per your requirement */}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className={"flex flex-col gap-6"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Management
              </Typography>
              <div className={"flex flex-row flex-wrap gap-4"}>
                {Object.values(managementIconComponents).map(
                  ({ Icon, props }, index) => (
                    <div key={index}>
                      <Icon
                        className={
                          "w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] h-[22px] sm:h-[24px] md:h-[26px] lg:h-[28px] xl:h-[30px]"
                        }
                        {...props}
                      />{" "}
                      {/* Adjust the size as per your requirement */}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </AboutCard>
        <span
          className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 translate-x-3 right-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${archivo.className}`}
        >
          {aboutSections[3]}
        </span>
      </div>
      {/*</div>*/}
      {/*<div*/}
      {/*  className={*/}
      {/*    "flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"*/}
      {/*  }*/}
      {/*>*/}
      <div
        className={"h-fit order-4 sm:row-span-3 md:row-span-4"}
        ref={workRef}
        id={aboutSections[5]}
      >
        <AboutCard
          className={"h-full min-h-fit max-h-fit "}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(5);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
          isActive={workInView}
        >
          <div className={"flex flex-col gap-4 sm:gap-5 md:gap-6"}>
            {WorkExperiences.map((workExperience, index) => {
              return (
                <div className={"flex flex-col gap-1 md:gap-2"} key={index}>
                  <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                    {workExperience.company}
                  </Typography>
                  <Typography
                    type={TextTypes.xl}
                    color={ColorTypes.primaryHover}
                    className={"opacity-75"}
                  >
                    {workExperience.roles}
                  </Typography>
                  <Typography
                    type={TextTypes.lg}
                    weight={WeightTypes.semiBold}
                    color={ColorTypes.secondary}
                  >
                    {workExperience.tenure}
                  </Typography>
                </div>
              );
            })}
          </div>
        </AboutCard>
        <span
          className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 translate-x-3 right-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${workInView ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
        >
          {aboutSections[4]}
        </span>
      </div>
      {/*</div>*/}
      <div
        className={
          "hidden about:flex absolute w-full h-full top-0 left-0 text-center justify-center items-center -z-10"
        }
      >
        <AnimatePresence mode="wait">
          <AnimatedText
            key={activeCardIndex}
            text={aboutSections[activeCardIndex]}
            isActive={isActive} // Pass appropriate state
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;

interface AnimatedTextProps {
  text: string;
  isActive: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = memo(({ text, isActive }) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    style={{ willChange: "opacity, transform" }} // Only animate opacity and transform
    className={`transition-none duration-200 text-primary-accent uppercase font-black text-[10.5vw] 2xl:text-[180px] leading-[1] ${
      isActive ? "custom-text-stroke-active" : "custom-text-stroke"
    } ${archivo.className}`}
  >
    {text}
  </motion.span>
));
