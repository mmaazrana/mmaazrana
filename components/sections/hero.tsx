"use client";
import React, { FC, useEffect, useState } from "react";
import Typography from "@/components/Typography";
import Button from "@/components/button";
import {
  HeroDescriptions,
  HeroHeadings,
  LottieLightPaths,
  LottiePaths,
} from "@/helpers/constants";
import { ButtonTypes, TextTypes, WeightTypes } from "@/helpers/enums";
import { AnimatePresence, motion } from "motion/react";
import Linkedin from "@/components/icons/linkedin";
import Link from "next/link";
import { useTheme } from "next-themes";
import LottieWorkerAnimation from "@/components/utils/lottie";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const [index, setIndex] = React.useState(0);
  const { resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HeroDescriptions.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const currentAnimation =
    resolvedTheme === "dark" ? LottiePaths[index] : LottieLightPaths[index];

  return (
    <div
      className={
        "w-full flex flex-col-reverse md:flex-row justify-center md:items-center gap-2 sm:gap-8 md:gap-4 xl:gap-5 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] 2xl:min-h-[750px]"
      }
    >
      <div
        className={
          "flex basis-full md:basis-[55%] flex-col gap-2 sm:gap-3 md:gap-4"
        }
      >
        {/*<TypeAnimation*/}
        {/*  wrapper={"h1"}*/}
        {/*  sequence={HeroHeadings}*/}
        {/*  speed={50}*/}
        {/*  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-extrabold ${archivo.className}`}*/}
        {/*  repeat={Infinity}*/}
        {/*/>*/}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className={"!transition-none"}
            key={"heading" + index}
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-20px)" }}
            transition={{ duration: 0.35 }}
          >
            <Typography type={TextTypes["8xl"]} weight={WeightTypes.bold}>
              {HeroHeadings[index % HeroHeadings.length]}
            </Typography>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className={"!transition-none"}
            key={"description" + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Typography
              type={TextTypes["3xl"]}
              weight={WeightTypes.light}
              className={"!transition-none !opacity-75"}
            >
              {HeroDescriptions[index % HeroDescriptions.length]}
            </Typography>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2 items-center justify-start flex-wrap">
          <div className={"pt-3 pb-3 pr-3"}>
            <Link
              href={"https://www.linkedin.com/in/mmaazrana/"}
              target={"_blank"}
            >
              <Button
                leftIcon={<Linkedin />}
                textWeight={WeightTypes.medium}
                type={ButtonTypes.primary}
                text={"Linkedin"}
              />
            </Link>
          </div>
          <Link
            href={"mailto:awaismaaz@gmail.com"}
            className={"cursor-pointer"}
            target={"_blank"}
          >
            <Button type={ButtonTypes.tertiary} text={"awaismaaz@gmail.com"} />
          </Link>
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {loading ? (
          <div className="max-w-[100%] md:max-w-full md:h-auto md:basis-[65%] lg:basis-[55%] xl:basis-[45%] flex justify-center items-center ">
            <div className="rounded-full h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10 w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 bg-secondary animate-ping"></div>
          </div>
        ) : (
          <motion.div
            key={"lottie" + index}
            className={
              "flex -mr-6 md:mr-6 max-w-[100%] h-[250px] md:max-w-full md:h-auto md:basis-[65%] lg:basis-[55%] xl:basis-[45%] transition-none self-end md:self-center items-center justify-center origin-left md:scale-[110%] lg:scale-[105%] 2xl:scale-[120%]"
            }
          >
            <LottieWorkerAnimation src={currentAnimation} />
          </motion.div>
        )}
      </AnimatePresence>
      <span
        className={
          "w-[60vw] h-[60vw] left-0 bottom-0 -translate-x-1/2 translate-y-1/2 aspect-square rounded-full bg-secondary-hover blur-[300px] absolute -z-10 opacity-50"
        }
      ></span>
    </div>
  );
};

export default Hero;
