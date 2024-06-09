import React, { FC, useEffect, useRef, useState } from "react";
import Typography from "@/components/Typography";
import { breakpoints } from "@/helpers/constants";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  useDiagonalInvertMovement,
  useDiagonalMovement,
  usePreferredColorScheme,
  useReverseDiagonalInvertMovement,
  useReverseDiagonalMovement,
  useSideInvertMovement,
  useSideMovement,
  useStraightInvertMovement,
  useStraightMovement,
} from "@/helpers";
import { TextTypes, WeightTypes } from "@/helpers/enums";
import {
  AppMobile,
  AppTab,
  BlenderDesktop,
  BlenderMobile,
  BlenderTab,
  LogoDesktop,
  LogoMobile,
  LogoTab,
  ProductDesktop,
  ProductMobile,
  ProductTab,
  VideoEditingDesktop,
  VideoMobile,
  VideoTab,
  WebDesktop,
  WebMobile,
  WebTab,
} from "@/components/illustrations-op";
import AppDesktop from "@/components/illustrations-op/AppDesktop";

interface ServiceCardProps {
  title: string;
  index: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  onClick?: () => void;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  index,
  className,
  onClick,
}) => {
  const [hoverAngles, setHoverAngles] = useState({
    0: useReverseDiagonalInvertMovement,
    1: useStraightMovement,
    2: useDiagonalMovement,
    3: useDiagonalInvertMovement,
    4: useStraightInvertMovement,
    5: useReverseDiagonalMovement,
  });
  const [angleClasses, setAngleClasses] = useState({
    0: "-45deg",
    1: "0deg",
    2: "45deg",
    3: "225deg",
    4: "180deg",
    5: "135deg",
  });
  const [windowWidth, setWindowWidth] = useState(1200);
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [5, -5]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-5, 5]); // Reversed values
  const cardRef = useRef<HTMLDivElement>(null);
  const preferredScheme = usePreferredColorScheme();
  let isMouseMoving = false;

  const handleMouseMove =
    (cardRef: React.RefObject<HTMLDivElement>) => (event: MouseEvent) => {
      if (!isMouseMoving && cardRef.current) {
        isMouseMoving = true;
        requestAnimationFrame(() => {
          const cardRect = cardRef.current!.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;
          const offsetX = event.clientX - cardCenterX;
          const offsetY = event.clientY - cardCenterY;
          cardX.set(offsetX);
          cardY.set(offsetY);
          isMouseMoving = false;
        });
      }
    };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  const indexClasses = {
    0: "justify-center sm:justify-end items-start sm:items-end text-left sm:text-right",
    1: "justify-center sm:justify-end items-start md:items-center text-left md:text-center",
    2: "justify-center md:justify-end items-start sm:items-end md:items-start text-left sm:text-right md:text-left",
    3: "justify-center md:justify-start items-end sm:items-start md:items-end text-right sm:text-left md:text-right",
    4: "justify-center sm:justify-start items-end md:items-center text-right md:text-center",
    5: "justify-center sm:justify-start items-end sm:items-start text-right sm:text-left sm:text-left",
  };

  useEffect(() => {
    const onMouseMove = handleMouseMove(cardRef);

    if (cardRef.current) {
      cardRef.current.addEventListener("mousemove", onMouseMove, {
        passive: true,
      });
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [cardRef]);

  useEffect(() => {
    setAngleClasses({
      0: windowWidth >= breakpoints.sm ? "-45deg" : "90deg",
      1:
        windowWidth >= breakpoints.md
          ? "0deg"
          : windowWidth >= breakpoints.sm
            ? "45deg"
            : "90deg",
      2:
        windowWidth >= breakpoints.md
          ? "45deg"
          : windowWidth >= breakpoints.sm
            ? "270deg"
            : "90deg",
      3:
        windowWidth >= breakpoints.md
          ? "225deg"
          : windowWidth >= breakpoints.sm
            ? "90deg"
            : "270deg",
      4:
        windowWidth >= breakpoints.md
          ? "180deg"
          : windowWidth >= breakpoints.sm
            ? "225deg"
            : "270deg",
      5: windowWidth >= breakpoints.sm ? "135deg" : "270deg",
    });
    setHoverAngles({
      0:
        windowWidth >= breakpoints.sm
          ? useReverseDiagonalInvertMovement
          : useSideMovement,
      1:
        windowWidth >= breakpoints.md
          ? useStraightMovement
          : windowWidth >= breakpoints.sm
            ? useDiagonalMovement
            : useSideMovement,
      2:
        windowWidth >= breakpoints.md
          ? useDiagonalMovement
          : windowWidth >= breakpoints.sm
            ? useSideInvertMovement
            : useSideMovement,
      3:
        windowWidth >= breakpoints.md
          ? useDiagonalInvertMovement
          : windowWidth >= breakpoints.sm
            ? useSideMovement
            : useSideInvertMovement,
      4:
        windowWidth >= breakpoints.md
          ? useStraightInvertMovement
          : windowWidth >= breakpoints.sm
            ? useDiagonalInvertMovement
            : useSideInvertMovement,
      5:
        windowWidth >= breakpoints.sm
          ? useReverseDiagonalMovement
          : useSideInvertMovement,
    });
  }, [cardRef, windowWidth]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sheenPosition = useTransform(
    hoverAngles[index](rotateX, rotateY),
    [-12, 8],
    [-80, 140],
  );

  const sheenOpacity = useTransform(
    sheenPosition,
    [-100, 0, 200],
    [0.1, 0.3, 0.1],
  );

  const sheenGradient =
    preferredScheme === "dark"
      ? useMotionTemplate`linear-gradient(
    ${angleClasses[index]},
    ${"#0C1427"},
    ${"#070D1D"},
    ${sheenPosition}%,
    ${"#000714"}
    )
    padding-box,
    linear-gradient(
    ${angleClasses[index]},
    ${"#4264A8"},
    rgba(${"66 100 178"}  / ${sheenOpacity})
    ${sheenPosition}%)
    border-box`
      : useMotionTemplate`linear-gradient(
    ${angleClasses[index]},
    ${"#F4F6FE"},
    ${"#F9FAFF"},
    ${sheenPosition}%,
    ${"#FFFFFF"}
    )
    padding-box,
    linear-gradient(
    ${angleClasses[index]},
    ${"#B4C4E4"},
    rgba(${"180 196 228"}  / ${sheenOpacity})
    ${sheenPosition}%)
    border-box`;

  const dynamicClasses = [
    indexClasses[index],
    "flex flex-col p-8 md:p-6 lg:p-10 xl:p-11 2xl:p-12 transition-none transition-shadow duration-500 shadow-services group-hover:shadow-services-hover rounded-xl md:rounded-2xl lg:rounded-3xl sm:aspect-video md:aspect-square w-full h-fit",
    onClick ? "cursor-pointer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={
        "sm:aspect-video md:aspect-square w-full !transition-none flex justify-center lg:align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden perspective-600 group"
      }
      // onMouseEnter={handleMouseEnter}
      // onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={
          "transition-transform relative transition-none-firefox duration-[75ms] sm:aspect-video md:aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden perspective-600 transform-style-3d group"
        }
        style={{
          rotateX,
          rotateY,
        }}
        // transition={{ velocity: 0}}
      >
        {index === 0 ? (
          <div
            className={
              "absolute right-0 pointer-events-none z-10 flex justify-end items-center md:items-start w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4"
            }
          >
            {windowWidth >= breakpoints.md ? (
              <WebDesktop />
            ) : windowWidth >= breakpoints.sm ? (
              <WebTab />
            ) : (
              <WebMobile />
            )}
          </div>
        ) : index === 1 ? (
          <div
            className={
              "absolute right-0 pointer-events-none z-10 flex justify-start md:justify-center items-center md:items-start w-fit sm:w-full h-full -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4"
            }
          >
            {windowWidth >= breakpoints.md ? (
              <ProductDesktop />
            ) : windowWidth >= breakpoints.sm ? (
              <ProductTab />
            ) : (
              <ProductMobile />
            )}
          </div>
        ) : index === 2 ? (
          <div
            className={
              "absolute right-0 pointer-events-none z-10 flex justify-end md:justify-start items-center md:items-start w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4"
            }
          >
            {windowWidth >= breakpoints.md ? (
              <AppDesktop />
            ) : windowWidth >= breakpoints.sm ? (
              <AppTab />
            ) : (
              <AppMobile />
            )}
          </div>
        ) : index === 3 ? (
          <div
            className={
              "absolute left-0 pointer-events-none z-10 flex justify-end sm:justify-start md:justify-end items-center md:items-end w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4"
            }
          >
            {windowWidth >= breakpoints.md ? (
              <VideoEditingDesktop />
            ) : windowWidth >= breakpoints.sm ? (
              <VideoTab />
            ) : (
              <VideoMobile />
            )}
          </div>
        ) : index === 4 ? (
          <div
            className={
              "absolute left-0 pointer-events-none z-10 flex justify-end md:justify-center items-center md:items-end w-fit sm:w-full h-full mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4"
            }
          >
            {windowWidth >= breakpoints.md ? (
              <LogoDesktop />
            ) : windowWidth >= breakpoints.sm ? (
              <LogoTab />
            ) : (
              <LogoMobile />
            )}
          </div>
        ) : (
          <div
            className={
              "absolute left-0 pointer-events-none z-10 flex  justify-end sm:justify-start items-center md:items-end w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4"
            }
          >
            {windowWidth >= breakpoints.md ? (
              <BlenderDesktop />
            ) : windowWidth >= breakpoints.sm ? (
              <BlenderTab />
            ) : (
              <BlenderMobile />
            )}
          </div>
        )}

        <motion.div
          ref={cardRef}
          className={`relative border border-transparent bg-clip-content outline outline-1 outline-transparent backface-hidden perspective-600 transform-style-3d ${dynamicClasses}`}
          style={{
            background: sheenGradient,
          }}

          // transition={{ velocity: 0 }}
        >
          <Typography type={TextTypes["4xl"]} weight={WeightTypes.bold}>
            {title}
          </Typography>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
