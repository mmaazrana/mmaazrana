"use client";
import React, { FC, useEffect } from "react";
import Typography from "@/components/Typography";
import Button from "@/components/button";
import {
  HeroDescriptions,
  HeroHeadings,
  LottieLightPaths,
  LottiePaths,
} from "@/helpers/constants";
import { ButtonTypes, TextTypes, WeightTypes } from "@/helpers/enums";
import { AnimatePresence, motion } from "framer-motion";
import Linkedin from "@/components/icons/linkedin";
import Link from "next/link";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useColorScheme } from "@/components/utils/hooks";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const [index, setIndex] = React.useState(0);
  const { isDark } = useColorScheme();
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % HeroDescriptions.length;
      });
    }, 5000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div
      className={
        " w-full flex flex-col-reverse md:flex-row justify-center md:items-center my-10 sm:my-12 md:my-16 xl:my-20 gap-2 sm:gap-8 md:gap-4 xl:gap-5 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]"
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
        <AnimatePresence mode="wait">
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
        <AnimatePresence mode="wait">
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
              weight={WeightTypes.regular}
              className={"!transition-none !opacity-75"}
            >
              {HeroDescriptions[index % HeroDescriptions.length]}
            </Typography>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2 items-center justify-start flex-wrap">
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
      <DotLottiePlayer
        className={
          "flex -mr-6 md:mr-6 max-w-[100%] h-[250px] md:max-w-full md:h-auto md:basis-[65%] lg:basis-[55%] xl:basis-[45%] transition-none self-end md:self-center items-center justify-center origin-left md:scale-[110%] lg:scale-[105%] 2xl:scale-[120%]"
        }
        src={isDark ? LottiePaths[index] : LottieLightPaths[index]}
        autoplay
      ></DotLottiePlayer>
    </div>
  );
};

export default Hero;
