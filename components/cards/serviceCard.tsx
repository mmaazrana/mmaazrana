import React, { FC, useEffect, useRef, useState } from "react";
import Typography from "@/components/Typography";
import { breakpoints } from "@/helpers/constants";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useWillChange,
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
  const willChange = useWillChange();
  // const cardX = useSpring(useMotionValue(0));
  // const cardY = useSpring(useMotionValue(0));
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [5, -5]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-5, 5]); // Reversed values
  // const cardRotateX = useTransform(cardY, [-300, 300], [10, -10]); // Adjusted rotation values
  // const cardRotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Adjusted rotation values
  const cardRef = useRef<HTMLDivElement>(null);
  const preferredScheme = usePreferredColorScheme();
  // const [isInitialDelayOver, setIsInitialDelayOver] = useState(false);
  // let initialDelayTimeout: NodeJS.Timeout | null = null;
  // let offsetX: number;
  // let offsetY: number;
  // const handleMouseMove = (event: { clientX: number; clientY: number }) => {
  //   // if (isInitialDelayOver) {
  //   if (cardRef.current) {
  //     const cardRect = cardRef.current.getBoundingClientRect();
  //     // Calculate the center of the card
  //     const cardCenterX = cardRect.left + cardRect.width / 2;
  //     const cardCenterY = cardRect.top + cardRect.height / 2;
  //     // Calculate offsets from the center of the card
  //     const offsetX = event.clientX - cardCenterX;
  //     const offsetY = event.clientY - cardCenterY;
  //     cardX.set(offsetX);
  //     cardY.set(offsetY);
  //   }
  //   // }
  // };

  let isMouseMoving = false;

  // const handleMouseMove = (event: { clientX: number; clientY: number }) => {
  //   if (!isMouseMoving && cardRef.current) {
  //     isMouseMoving = true;
  //     requestAnimationFrame(() => {
  //       const cardRect = cardRef.current!.getBoundingClientRect();
  //       const cardCenterX = cardRect.left + cardRect.width / 2;
  //       const cardCenterY = cardRect.top + cardRect.height / 2;
  //       const offsetX = event.clientX - cardCenterX;
  //       const offsetY = event.clientY - cardCenterY;
  //       cardX.set(offsetX);
  //       cardY.set(offsetY);
  //       isMouseMoving = false;
  //     });
  //   }
  // };
  //
  // useEffect(() => {
  //   const onMouseMove = (event: MouseEvent) => {
  //     handleMouseMove({ clientX: event.clientX, clientY: event.clientY });
  //   };
  //
  //   document.addEventListener("mousemove", onMouseMove, { passive: true });
  //
  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, [handleMouseMove]);

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

  // const interpolateValues = (
  //   startValue: number,
  //   endValue: number,
  //   duration: number,
  //   setValueCallback: (value: number) => void,
  // ) => {
  //   const startTime = performance.now();
  //   const update = () => {
  //     const currentTime = performance.now();
  //     const elapsedTime = currentTime - startTime;
  //     const progress = Math.min(1, elapsedTime / duration);
  //     const interpolatedValue = startValue + (endValue - startValue) * progress;
  //     setValueCallback(interpolatedValue);
  //     if (progress < 1) {
  //       setTimeout(update, 0);
  //     }
  //   };
  //   update();
  // };

  // function handleMouseEnter(event: { clientX: number; clientY: number }) {
  //   if (!isInitialDelayOver) {
  //     initialDelayTimeout = setTimeout(() => {
  //       if (cardRef.current) {
  //         const cardRect = cardRef.current.getBoundingClientRect();
  //
  //         // Calculate the center of the card
  //         const cardCenterX = cardRect.left + cardRect.width / 2;
  //         const cardCenterY = cardRect.top + cardRect.height / 2;
  //
  //         // Calculate offsets from the center of the window
  //         offsetX = event.clientX - cardCenterX;
  //         offsetY = event.clientY - cardCenterY;
  //         // Interpolate and set offsetX and offsetY
  //       }
  //       setIsInitialDelayOver(true);
  //       if (cardRef.current) {
  //         cardX.set(offsetX);
  //         cardY.set(offsetY);
  //       }
  //     }, 150); // Set initial delay to 1 second
  //   }
  // }

  const handleMouseLeave = () => {
    // setIsInitialDelayOver(false);
    // if (initialDelayTimeout) {
    //   clearTimeout(initialDelayTimeout);
    // }
    // initialDelayTimeout = null;
    // interpolateValues(offsetX, 0, 100, (value) => {
    //   cardX.set(value);
    // });
    // interpolateValues(offsetY, 0, 100, (value) => {
    //   cardY.set(value);
    // });
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
    0: "justify-center sm:justify-end items-start sm:items-end text-left sm:text-right",
    1: "justify-center sm:justify-end items-start md:items-center text-left sm:text-right md:text-center",
    2: "justify-center md:justify-end items-start sm:items-end md:items-start text-left sm:text-right md:text-left",
    3: "justify-center md:justify-start items-end sm:items-start md:items-end text-right md:text-right",
    4: "justify-center sm:justify-start items-end md:items-center text-right sm:text-left md:text-center",
    5: "justify-center sm:justify-start items-end sm:items-start text-right sm:text-left sm:text-left",
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

  const sheenPosition = useTransform(
    hoverAngles[index](rotateX, rotateY),
    [-12, 8],
    [-80, 140],
  );
  // const sheenOpacity = useTransform(
  //   sheenPosition,
  //   [-100, 0, 25, 50, 150, 175, 200],
  //   [0.1, 0.2, 0.3, 0.3, 0.3, 0.2, 0.1],
  // );
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
    "flex flex-col p-8 md:p-9 lg:p-10 xl:p-11 2xl:p-12 transition-none transition-shadow duration-500 shadow-services group-hover:shadow-services-hover rounded-xl md:rounded-2xl lg:rounded-3xl sm:aspect-video md:aspect-square w-full h-fit",
    onClick ? "cursor-pointer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={
        "sm:aspect-video md:aspect-square w-full !transition-none flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden perspective-600 group"
      }
      // onMouseEnter={handleMouseEnter}
      // onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={
          "transition-transform transition-none-firefox duration-[75ms] sm:aspect-video md:aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent backface-hidden perspective-600 transform-style-3d group"
        }
        style={{
          rotateX,
          rotateY,
          willChange,
        }}
        // transition={{ velocity: 0}}
      >
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
