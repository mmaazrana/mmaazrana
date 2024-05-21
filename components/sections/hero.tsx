"use client";
import React, { FC, useEffect } from "react";
import Typography from "@/components/Typography";
import Button from "@/components/button";
import {
  HeroDescriptions,
  HeroHeadings,
  LottiePaths,
} from "@/helpers/constants";
import { ButtonTypes, TextTypes, WeightTypes } from "@/helpers/enums";
import { AnimatePresence, motion } from "framer-motion";
import Linkedin from "@/components/icons/linkedin";
import Link from "next/link";
import { DotLottiePlayer } from "@dotlottie/react-player";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  // const durations: number[] = [5100, 4850, 5550, 4350, 4450];
  // const durations: number[] = [5110, 4900, 5530, 4300, 4300];

  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % HeroDescriptions.length;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  });

  // const options = {
  //   animationData: product,
  //   loop: false,
  // };
  //
  // const { View } = useLottie(options);

  return (
    <div
      className={
        " w-full flex flex-row justify-center items-center my-10 sm:my-12 md:my-16 xl:my-20 gap-3 md:gap-4 xl:gap-5 min-h-[600px]"
      }
    >
      <div className={"flex basis-[55%] flex-col gap-2 sm:gap-3 md:gap-4"}>
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
            key={index}
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-50px)" }}
            transition={{ duration: 0.25 }}
          >
            <Typography type={TextTypes["8xl"]} weight={WeightTypes.bold}>
              {HeroHeadings[index % HeroHeadings.length]}
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
          "flex basis-[45%] transition-none self-center items-center justify-center origin-left scale-[120%]"
        }
        src={LottiePaths[index]}
        autoplay
      ></DotLottiePlayer>
    </div>
  );
};

export default Hero;
