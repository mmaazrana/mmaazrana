import React, { FC, useEffect, useRef, useState } from "react";
import Typography from "@/components/Typography";
import { breakpoints } from "@/helpers/constants";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
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
  const cardX = useSpring(useMotionValue(0), { stiffness: 2000, damping: 50 });
  const cardY = useSpring(useMotionValue(0), { stiffness: 2000, damping: 50 });
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [10, -10]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Adjusted rotation values
  const cardRef = useRef<HTMLDivElement>(null);
  const preferredScheme = usePreferredColorScheme();
  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    if (cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();

      // Calculate the center of the card
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      // Calculate offsets from the center of the window
      const offsetX = event.clientX - cardCenterX;
      const offsetY = event.clientY - cardCenterY;

      cardX.set(offsetX);
      cardY.set(offsetY);
    }
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  // const angleClasses = {
  //   0: "-45deg",
  //   1: "0deg",
  //   2: "45deg",
  //   3: "225deg",
  //   4: "180deg",
  //   5: "135deg",
  // };

  const indexClasses = {
    0: "justify-center sm:justify-end items-start sm:items-end text-right",
    1: "justify-center sm:justify-end items-start md:items-center text-right sm:text-left md:text-center",
    2: "justify-center md:justify-end items-start sm:items-end md:items-start text-right md:text-left",
    3: "justify-center md:justify-start items-end sm:items-start md:items-end text-left md:text-right",
    4: "justify-center sm:justify-start items-end md:items-center text-left sm:text-right md:text-center",
    5: "justify-center sm:justify-start items-end sm:items-start text-left sm:text-right sm:text-left",
  };

  useEffect(() => {
    setAngleClasses({
      0: window.innerWidth >= breakpoints.sm ? "-45deg" : "90deg",
      1:
        window.innerWidth >= breakpoints.md
          ? "0deg"
          : window.innerWidth >= breakpoints.sm
            ? "45deg"
            : "90deg",
      2:
        window.innerWidth >= breakpoints.md
          ? "45deg"
          : window.innerWidth >= breakpoints.sm
            ? "270deg"
            : "90deg",
      3:
        window.innerWidth >= breakpoints.md
          ? "225deg"
          : window.innerWidth >= breakpoints.sm
            ? "90deg"
            : "270deg",
      4:
        window.innerWidth >= breakpoints.md
          ? "180deg"
          : window.innerWidth >= breakpoints.sm
            ? "225deg"
            : "270deg",
      5: window.innerWidth >= breakpoints.sm ? "135deg" : "270deg",
    });
    setHoverAngles({
      0:
        window.innerWidth >= breakpoints.sm
          ? useReverseDiagonalInvertMovement
          : useSideMovement,
      1:
        window.innerWidth >= breakpoints.md
          ? useStraightMovement
          : window.innerWidth >= breakpoints.sm
            ? useDiagonalMovement
            : useSideMovement,
      2:
        window.innerWidth >= breakpoints.md
          ? useDiagonalMovement
          : window.innerWidth >= breakpoints.sm
            ? useSideInvertMovement
            : useSideMovement,
      3:
        window.innerWidth >= breakpoints.md
          ? useDiagonalInvertMovement
          : window.innerWidth >= breakpoints.sm
            ? useSideMovement
            : useSideInvertMovement,
      4:
        window.innerWidth >= breakpoints.md
          ? useStraightInvertMovement
          : window.innerWidth >= breakpoints.sm
            ? useDiagonalInvertMovement
            : useSideInvertMovement,
      5:
        window.innerWidth >= breakpoints.sm
          ? useReverseDiagonalMovement
          : useSideInvertMovement,
    });
  }, [cardRef]);

  // if (window.innerWidth >= breakpoints.lg) {
  //
  // } else if (window.innerWidth >= breakpoints.md) {
  //   setAngleClasses({
  //     0: "-45deg",
  //     1: "0deg",
  //     2: "45deg",
  //     3: "225deg",
  //     4: "180deg",
  //     5: "135deg",
  //   });
  //   setHoverAngles({
  //     0: useReverseDiagonalInvertMovement,
  //     1: useStraightMovement,
  //     2: useDiagonalMovement,
  //     3: useDiagonalInvertMovement,
  //     4: useStraightInvertMovement,
  //     5: useReverseDiagonalMovement,
  //   });
  // } else {
  //   setAngleClasses({
  //     0: "90deg",
  //     1: "90deg",
  //     2: "90deg",
  //     3: "270deg",
  //     4: "270deg",
  //     5: "270deg",
  //   });
  //   setHoverAngles({
  //     0: useSideMovement,
  //     1: useSideMovement,
  //     2: useSideMovement,
  //     3: useSideInvertMovement,
  //     4: useSideInvertMovement,
  //     5: useSideInvertMovement,
  //   });
  // }

  const sheenPosition = useTransform(
    hoverAngles[index](rotateX, rotateY),
    [-12, 8],
    [-80, 140],
  );
  const sheenOpacity = useTransform(
    sheenPosition,
    [-100, 0, 25, 50, 150, 175, 200],
    [0.1, 0.2, 0.3, 0.3, 0.3, 0.2, 0.1],
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
    ${angleClasses[index]},
    ${preferredScheme === "dark" ? "#0C1427" : "#F4F6FE"},
    ${preferredScheme === "dark" ? "#070D1D" : "#F9FAFF"},
    ${sheenPosition}%,
    ${preferredScheme === "dark" ? "#000714" : "#FFFFFF"}
    ) 
    padding-box, 
    linear-gradient(
    ${angleClasses[index]},
    ${preferredScheme === "dark" ? "#4264A8" : "#B4C4E4"},
    rgba(${preferredScheme === "dark" ? "66 100 178" : "180 196 228"}  / ${sheenOpacity}) 
    ${sheenPosition}%) 
    border-box`;

  const dynamicClasses = [
    indexClasses[index],
    "flex flex-col p-8 md:p-9 lg:p-10 xl:p-11 2xl:p-12 transition-none transition-shadow !duration-500 shadow-services hover:shadow-services-hover rounded-xl md:rounded-2xl lg:rounded-3xl sm:aspect-video md:aspect-square w-full h-fit",
    onClick ? "cursor-pointer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <motion.div
      className={"sm:aspect-video md:aspect-square w-full !transition-none"}
      style={{
        perspective: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backfaceVisibility: "hidden",
        backgroundClip: "content-box",
        outline: "1px solid transparent",
      }}
      transition={{ velocity: 0 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={"sm:aspect-video md:aspect-square w-full !transition-none"}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          perspective: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backfaceVisibility: "hidden",
          backgroundClip: "content-box",
          outline: "1px solid transparent",
          rotateX,
          rotateY,
        }}
        transition={{ velocity: 0 }}
      >
        <motion.div
          ref={cardRef}
          className={dynamicClasses}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
            position: "relative",
            background: sheenGradient,
            border: "1px solid transparent",
            backfaceVisibility: "hidden",
            backgroundClip: "content-box",
            outline: "1px solid transparent",
          }}
          transition={{ velocity: 0 }}
        >
          <Typography type={TextTypes["4xl"]} weight={WeightTypes.bold}>
            {title}
          </Typography>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
