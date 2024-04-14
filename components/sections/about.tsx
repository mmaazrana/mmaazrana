import React, { useState } from "react";
import AboutCard from "@/components/cards/aboutCard";
import { aboutSections } from "@/helpers/constants";
import { archivo } from "@/helpers/fonts";
import { AnimatePresence, motion } from "framer-motion";
import Typography from "@/components/Typography";
import { ColorTypes, TextTypes, WeightTypes } from "@/helpers/enums";
import Image from "next/image";
import pfp from "../../public/images/pfp.webp";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiBlender,
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const iconComponents = [
    SiFigma,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiAdobexd,
    SiBlender,
    SiFlutter,
    SiDart,
    SiFirebase,
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiTailwindcss,
    SiFramer,
    SiJavascript,
    SiTypescript,
  ];
  const clientIconComponents = [
    SiFigma,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiAdobexd,
    SiBlender,
    SiFlutter,
    SiDart,
    SiFirebase,
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiTailwindcss,
    SiFramer,
    SiJavascript,
    SiTypescript,
  ];
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
        <div className={"relative h-fit"}>
          <AboutCard
            className={"h-fit"}
            onMouseEnter={() => {
              setIsActive(true);
              setActiveCardIndex(0);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
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
            className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 -translate-x-3 left-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${isActive ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[0]}
          </span>
        </div>
        <div className={"relative"}>
          <AboutCard
            className={""}
            onMouseEnter={() => {
              setIsActive(true);
              setActiveCardIndex(1);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
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
              <div className={"flex flex-col gap-1 md:gap-2"}>
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
            className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 translate-x-3 right-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${isActive ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[1]}
          </span>
        </div>
        <div className={"md:hidden flex relative"}>
          <AboutCard
            className={"flex flex-auto grow shrink h-fit"}
            onMouseEnter={() => {
              setIsActive(true);
              setActiveCardIndex(4);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
          >
            <div className={"flex flex-col gap-6 sm:gap-7 md:gap-8"}>
              <div className={"flex flex-col gap-2 sm:gap-3 md:gap-4"}>
                <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                  Development
                </Typography>
                <div
                  className={"flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4"}
                >
                  {iconComponents.splice(0, 6).map((Icon, index) => (
                    <div key={index}>
                      <Icon size={30} />{" "}
                      {/* Adjust the size as per your requirement */}
                    </div>
                  ))}
                </div>
              </div>
              <div className={"flex flex-col gap-2 sm:gap-3 md:gap-4"}>
                <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                  Design
                </Typography>
                <div
                  className={"flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4"}
                >
                  {iconComponents.splice(0, 6).map((Icon, index) => (
                    <div key={index}>
                      <Icon size={30} />{" "}
                      {/* Adjust the size as per your requirement */}
                    </div>
                  ))}
                </div>
              </div>
              <div className={"flex flex-col gap-1 sm:gap-3 md:gap-4"}>
                <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                  Management
                </Typography>
                <div
                  className={"flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4"}
                >
                  {iconComponents.splice(0, 6).map((Icon, index) => (
                    <div key={index}>
                      <Icon size={30} />{" "}
                      {/* Adjust the size as per your requirement */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AboutCard>
          <span
            className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 -translate-x-3 left-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${isActive ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[2]}
          </span>
        </div>
        <div className={"relative h-fit"}>
          <AboutCard
            className={"h-fit"}
            onMouseEnter={() => {
              setIsActive(true);
              setActiveCardIndex(2);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
          >
            <div className={"flex flex-col gap-2 sm:gap-3 md:gap-4"}>
              <div
                className={"flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4"}
              >
                {clientIconComponents.map((Icon, index) => (
                  <div key={index}>
                    <Icon size={30} />{" "}
                    {/* Adjust the size as per your requirement */}
                  </div>
                ))}
              </div>
            </div>
          </AboutCard>
          <span
            className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 translate-x-3 right-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${isActive ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[4]}
          </span>
        </div>
      </div>
      {/*<div*/}
      {/*  className={*/}
      {/*    "flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"*/}
      {/*  }*/}
      {/*>*/}
      <div className={"relative h-fit order-2"}>
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
        >
          <Image
            src={pfp}
            alt={"Maaz Rana"}
            fill
            className={
              "!aspect-square object-cover !max-h-fit !h-fit !relative opacity-50 group-hover:opacity-100"
            }
          />
        </AboutCard>
        <span
          className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 -translate-x-3 left-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${isActive ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
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
            <div className={"flex flex-col gap-4"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Development
              </Typography>
              <div className={"flex flex-row flex-wrap gap-4"}>
                {clientIconComponents.splice(0, 6).map((Icon, index) => (
                  <div key={index}>
                    <Icon size={30} />{" "}
                    {/* Adjust the size as per your requirement */}
                  </div>
                ))}
              </div>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Design
              </Typography>
              <div className={"flex flex-row flex-wrap gap-4"}>
                {clientIconComponents.splice(0, 6).map((Icon, index) => (
                  <div key={index}>
                    <Icon size={30} />{" "}
                    {/* Adjust the size as per your requirement */}
                  </div>
                ))}
              </div>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Management
              </Typography>
              <div className={"flex flex-row flex-wrap gap-4"}>
                {clientIconComponents.splice(0, 6).map((Icon, index) => (
                  <div key={index}>
                    <Icon size={30} />{" "}
                    {/* Adjust the size as per your requirement */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AboutCard>
        <span
          className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 translate-x-3 right-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${isActive ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
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
      <div className={"h-full order-4 sm:row-span-3 md:row-span-4"}>
        <AboutCard
          className={"h-full min-h-fit max-h-fit "}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(5);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div className={"flex flex-col gap-4 sm:gap-5 md:gap-6"}>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Alfabolt
              </Typography>
              <Typography
                type={TextTypes.xl}
                color={ColorTypes.primaryHover}
                className={"opacity-75"}
              >
                Frontend Developer - Product Designer - Design Lead
              </Typography>
              <Typography
                type={TextTypes.lg}
                weight={WeightTypes.semiBold}
                color={ColorTypes.secondary}
              >
                2022 - Present
              </Typography>
            </div>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Alfabolt
              </Typography>
              <Typography
                type={TextTypes.xl}
                color={ColorTypes.primaryHover}
                className={"opacity-75"}
              >
                Frontend Developer - Product Designer - Design Lead
              </Typography>
              <Typography
                type={TextTypes.lg}
                weight={WeightTypes.semiBold}
                color={ColorTypes.secondary}
              >
                2022 - Present
              </Typography>
            </div>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Alfabolt
              </Typography>
              <Typography
                type={TextTypes.xl}
                color={ColorTypes.primaryHover}
                className={"opacity-75"}
              >
                Frontend Developer - Product Designer - Design Lead
              </Typography>
              <Typography
                type={TextTypes.lg}
                weight={WeightTypes.semiBold}
                color={ColorTypes.secondary}
              >
                2022 - Present
              </Typography>
            </div>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Alfabolt
              </Typography>
              <Typography
                type={TextTypes.xl}
                color={ColorTypes.primaryHover}
                className={"opacity-75"}
              >
                Frontend Developer - Product Designer - Design Lead
              </Typography>
              <Typography
                type={TextTypes.lg}
                weight={WeightTypes.semiBold}
                color={ColorTypes.secondary}
              >
                2022 - Present
              </Typography>
            </div>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Alfabolt
              </Typography>
              <Typography
                type={TextTypes.xl}
                color={ColorTypes.primaryHover}
                className={"opacity-75"}
              >
                Frontend Developer - Product Designer - Design Lead
              </Typography>
              <Typography
                type={TextTypes.lg}
                weight={WeightTypes.semiBold}
                color={ColorTypes.secondary}
              >
                2022 - Present
              </Typography>
            </div>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Alfabolt
              </Typography>
              <Typography
                type={TextTypes.xl}
                color={ColorTypes.primaryHover}
                className={"opacity-75"}
              >
                Frontend Developer - Product Designer - Design Lead
              </Typography>
              <Typography
                type={TextTypes.lg}
                weight={WeightTypes.semiBold}
                color={ColorTypes.secondary}
              >
                2022 - Present
              </Typography>
            </div>
          </div>
        </AboutCard>
        <span
          className={`about:hidden inline-block absolute bottom-0 translate-y-1/2 translate-x-3 right-0 -z-10 transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[9vw] leading-[1] text-start ${isActive ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
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
        <AnimatePresence mode={"wait"}>
          <motion.span
            key={activeCardIndex}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`transition-filter duration-200 text-primary-accent uppercase stroke font-black text-[12.5vw] leading-[1] ${isActive ? "custom-text-stroke-active" : "custom-text-stroke"} ${archivo.className}`}
          >
            {aboutSections[activeCardIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;
