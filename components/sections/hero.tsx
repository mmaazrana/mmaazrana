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
import { AnimatePresence, motion } from "framer-motion";
import Linkedin from "@/components/icons/linkedin";
import Link from "next/link";
import { useColorScheme } from "@/components/utils/hooks";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const [index, setIndex] = React.useState(0);
  const { isDark } = useColorScheme();
  const [animationCache, setAnimationCache] = useState<{
    [key: string]: string;
  }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HeroDescriptions.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Pre-fetch all animations once on component mount
  useEffect(() => {
    const pathsToCache = isDark ? LottiePaths : LottieLightPaths;
    const fetchAnimations = async () => {
      const cache: { [key: string]: string } = {};

      await Promise.all(
        pathsToCache.map((path) =>
          fetch(path)
            .then((response) => response.blob())
            .then((blob) => {
              cache[path] = URL.createObjectURL(blob);
            })
            .catch((error) =>
              console.error("Failed to fetch animation:", error),
            ),
        ),
      );

      setAnimationCache(cache);
      setLoading(false); // Set loading to false once all animations are cached
    };

    fetchAnimations();
  }, [isDark]);

  const currentAnimation = isDark
    ? LottiePaths[index]
    : LottieLightPaths[index];
  const cachedAnimation = animationCache[currentAnimation] || currentAnimation;

  return (
    <div
      className={
        "w-full flex flex-col-reverse md:flex-row justify-center md:items-center my-10 sm:my-12 md:my-16 xl:my-20 gap-2 sm:gap-8 md:gap-4 xl:gap-5 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]"
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
          <DotLottieReact
            key={"lottie" + index}
            className={
              "flex -mr-6 md:mr-6 max-w-[100%] h-[250px] md:max-w-full md:h-auto md:basis-[65%] lg:basis-[55%] xl:basis-[45%] transition-none self-end md:self-center items-center justify-center origin-left md:scale-[110%] lg:scale-[105%] 2xl:scale-[120%]"
            }
            useFrameInterpolation={false}
            src={cachedAnimation}
            autoplay
          />
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
