import React, { FC, useRef } from "react";
import Typography from "@/components/Typography";
import { TextTypes, WeightTypes } from "@/app/constants";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePreferredColorScheme } from "@/helpers";

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

  const angleClasses = {
    0: "-45deg",
    1: "0deg",
    2: "45deg",
    3: "225deg",
    4: "180deg",
    5: "135deg",
  };

  const indexClasses = {
    0: "justify-end bg-primary items-end text-right",
    1: "justify-end items-center text-center",
    2: "justify-end items-start text-left",
    3: "justify-start items-end text-right",
    4: "justify-start items-center text-center",
    5: "justify-start items-start text-left",
  };

  const diagonalMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return newRotateX + newRotateY;
    },
  );

  const reverseDiagonalMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return 1 - newRotateX + newRotateY;
    },
  );

  const diagonalInvertMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return 1 - newRotateX - newRotateY;
    },
  );

  const reverseDiagonalInvertMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return newRotateX - newRotateY;
    },
  );

  const straightMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return newRotateX;
    },
  );

  const straightInvertMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return 1 - newRotateX;
    },
  );

  const hoverAngleClasses = {
    0: reverseDiagonalInvertMovement,
    1: straightMovement,
    2: diagonalMovement,
    3: diagonalInvertMovement,
    4: straightInvertMovement,
    5: reverseDiagonalMovement,
  };

  const sheenPosition = useTransform(
    hoverAngleClasses[index],
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
    "flex flex-col p-12 transition-none transition-shadow !duration-500 shadow-services hover:shadow-services-hover rounded-3xl aspect-square w-full h-fit",
    onClick ? "cursor-pointer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <motion.div
      className={"aspect-square w-full !transition-none"}
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
        className={"aspect-square w-full !transition-none"}
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
            borderRadius: "24px",
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
