import React, { useState } from "react";
import AboutCard from "@/components/cards/aboutCard";
import { aboutSections } from "@/helpers/constants";
import { archivo } from "@/helpers/fonts";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={"relative grid grid-cols-3 gap-12"}>
      <div className={"flex flex-col h-full min-h-full gap-12"}>
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
          <div>
            User-centric Product Designer & Developer with 5+ Years of
            experience, focused on developing visually stunning and intuitive
            products
          </div>
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
          <div>
            2.User-centric Product Designer & Developer with 5+ Years of
            experience, focused on developing visually stunning and intuitive
            products
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
          <div>
            3.User-centric Product Designer & Developer with 5+ Years of
            experience, focused on developing visually stunning and intuitive
            products
          </div>
        </AboutCard>
      </div>
      <div className={"flex flex-col h-full min-h-full gap-12"}>
        <AboutCard
          className={"h-fit aspect-square"}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(3);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div className={"w-full h-fit aspect-square"}>
            4.User-centric Product Designer & Developer with 5+ Years of
            experience, focused on developing visually stunning and intuitive
            products
          </div>
        </AboutCard>
        <AboutCard
          className={"h-full"}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(4);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div>
            5.User-centric Product Designer & Developer with 5+ Years of
            experience, focused on developing visually stunning and intuitive
            products
          </div>
        </AboutCard>
      </div>
      <div className={"flex flex-col h-full min-h-full gap-12"}>
        <AboutCard
          className={"h-full"}
          onMouseEnter={() => {
            setIsActive(true);
            setActiveCardIndex(5);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <div>
            6.User-centric Product Designer & Developer with 5+ Years of
            experience, focused on developing visually stunning and intuitive
            products
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
