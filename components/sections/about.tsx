import React, { useState } from "react";
import AboutCard from "@/components/cards/aboutCard";
import { aboutSections } from "@/helpers/constants";
import { archivo } from "@/helpers/fonts";
import { AnimatePresence, motion } from "framer-motion";
import Typography from "@/components/Typography";
import { ColorTypes, TextTypes, WeightTypes } from "@/helpers/enums";
import Image from "next/image";
import pfp from "../../public/images/pfp.webp";

const About = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={
        "relative grid grid-cols-3 gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
      }
    >
      <div
        className={
          "flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
        }
      >
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
        <AboutCard
          className={"h-fit"}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(1);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div className={"flex flex-col gap-1 md:gap-4"}>
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
        <AboutCard
          className={"grow flex-auto"}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(2);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div className={"flex flex-col gap-1 md:gap-4"}>
            <div className={"flex flex-col gap-1 md:gap-2"}></div>
          </div>
        </AboutCard>
      </div>
      <div
        className={
          "flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
        }
      >
        <AboutCard
          className={
            "h-fit aspect-square max-h-fit min-h-fit !gap-0 !p-0 !overflow-clip"
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
            alt={"cute pic here"}
            fill
            className={
              "!aspect-square object-cover !max-h-fit !h-fit !relative"
            }
          />
        </AboutCard>
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
          <div className={"flex flex-col gap-1 md:gap-4"}>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Development
              </Typography>
            </div>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Design
              </Typography>
            </div>
            <div className={"flex flex-col gap-1 md:gap-2"}>
              <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                Management
              </Typography>
            </div>
          </div>
        </AboutCard>
      </div>
      <div
        className={
          "flex flex-col h-full min-h-full gap-9 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
        }
      >
        <AboutCard
          className={"h-full min-h-fit max-h-fit"}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(5);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div className={"flex flex-col gap-1 md:gap-6"}>
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
      </div>
      <div
        className={
          "flex absolute w-full h-full top-0 left-0 text-center justify-center items-center -z-10"
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
