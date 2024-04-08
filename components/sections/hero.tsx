"use client";
import React, { FC, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Typography from "@/components/Typography";
import { archivo } from "@/helpers/fonts";
import Button from "@/components/button";
import { HeroDescriptions, HeroHeadings } from "@/helpers/constants";
import { ButtonTypes, Sections, TextTypes, WeightTypes } from "@/helpers/enums";
import { AnimatePresence, motion } from "framer-motion";
import Linkedin from "@/components/icons/linkedin";
import Link from "next/link";

interface HeroProps {
  setActiveSection: (section: Sections) => void;
}

const Hero: FC<HeroProps> = ({ setActiveSection }) => {
  // const durations: number[] = [5100, 4850, 5550, 4350, 4450];
  const durations: number[] = [5110, 4900, 5530, 4300, 4300];

  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % HeroDescriptions.length;
      });
    }, durations[index]);
    return () => clearInterval(intervalId);
  }, [durations]);

  return (
    <section
      id={Sections.hero}
      className={
        "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
      }
    >
      <div
        className={
          "w-full flex flex-col my-20 sm:my-28 md:my-36 xl:my-40 gap-3 md:gap-4 xl:gap-5"
        }
      >
        <TypeAnimation
          wrapper={"h1"}
          sequence={HeroHeadings}
          speed={50}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-extrabold ${archivo.className}`}
          repeat={Infinity}
        />
        <AnimatePresence mode={"wait"}>
          <motion.div
            className={"sm:w-2/3 !transition-none"}
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Typography type={TextTypes["3xl"]}>
              {HeroDescriptions[index % HeroDescriptions.length]}
            </Typography>
          </motion.div>
        </AnimatePresence>

        <div className={"flex gap-2 items-center justify-start flex-wrap"}>
          <div className={"pt-3 pb-3 pr-3"}>
            <Link href={""}>
              <Button
                leftIcon={<Linkedin />}
                textWeight={WeightTypes.medium}
                type={ButtonTypes.primary}
                text={"Linkedin"}
              />
            </Link>
          </div>
          <Button type={ButtonTypes.tertiary} text={"awaismaaz@gmail.com"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
