// import React, {
//   FC,
//   ReactElement,
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
// } from "react";
// import Typography from "@/components/Typography";
// import { breakpoints } from "@/helpers/constants";
// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
// import {
//   useDiagonalInvertMovement,
//   useDiagonalMovement,
//   usePreferredColorScheme,
//   useReverseDiagonalInvertMovement,
//   useReverseDiagonalMovement,
//   useSideInvertMovement,
//   useSideMovement,
//   useStraightInvertMovement,
//   useStraightMovement,
// } from "@/helpers";
// import { TextTypes, WeightTypes } from "@/helpers/enums";
//
// interface ServiceCardProps {
//   title: string;
//   windowWidth: number;
//   index: 0 | 1 | 2 | 3 | 4 | 5;
//   className?: string;
//   onClick?: () => void;
//   svg: ReactElement;
// }
//
// const ServiceCard: FC<ServiceCardProps> = ({
//   title,
//   windowWidth,
//   index,
//   className,
//   onClick,
//   svg,
// }) => {
//   const cardX = useMotionValue(0);
//   const cardY = useMotionValue(0);
//   const rotateX = useTransform(cardY, [-300, 300], [5, -5]); // Reversed values
//   const rotateY = useTransform(cardX, [-300, 300], [-5, 5]); // Reversed values
//   const cardRef = useRef<HTMLDivElement>(null);
//   const preferredScheme = usePreferredColorScheme();
//   const isMouseMoving = useRef(false);
//
//   const handleMouseMove =
//     (cardRef: React.RefObject<HTMLDivElement>) => (event: MouseEvent) => {
//       if (!isMouseMoving.current && cardRef.current) {
//         isMouseMoving.current = true;
//         window.requestAnimationFrame(() => {
//           const { left, top, width, height } =
//             cardRef.current!.getBoundingClientRect();
//           cardX.set(event.clientX - (left + width / 2));
//           cardY.set(event.clientY - (top + height / 2));
//           isMouseMoving.current = false;
//         });
//       }
//     };
//
//   const handleMouseLeave = useCallback(() => {
//     cardX.set(0);
//     cardY.set(0);
//   }, [cardX, cardY]);
//
//   useEffect(() => {
//     const onMouseMove = handleMouseMove(cardRef);
//     cardRef.current?.addEventListener("mousemove", onMouseMove, {
//       passive: true,
//     });
//     return () => cardRef.current?.removeEventListener("mousemove", onMouseMove);
//   }, []);
//
//   const indexClasses = {
//     0: "justify-center sm:justify-end items-start sm:items-end text-left sm:text-right",
//     1: "justify-center sm:justify-end items-start md:items-center text-left md:text-center",
//     2: "justify-center md:justify-end items-start sm:items-end md:items-start text-left sm:text-right md:text-left",
//     3: "justify-center md:justify-start items-end sm:items-start md:items-end text-right sm:text-left md:text-right",
//     4: "justify-center sm:justify-start items-end md:items-center text-right md:text-center",
//     5: "justify-center sm:justify-start items-end sm:items-start text-right sm:text-left sm:text-left",
//   };
//
//   useEffect(() => {
//     const onMouseMove = handleMouseMove(cardRef);
//     const cardElement = cardRef.current;
//     if (cardElement) {
//       cardElement.addEventListener("mousemove", onMouseMove, {
//         passive: true,
//       });
//     }
//
//     return () => {
//       if (cardElement) {
//         cardElement.removeEventListener("mousemove", onMouseMove);
//       }
//     };
//   }, [cardRef]);
//
//   const angleClasses = useMemo(
//     () => ({
//       0: windowWidth >= breakpoints.sm ? "-45deg" : "90deg",
//       1:
//         windowWidth >= breakpoints.md
//           ? "0deg"
//           : windowWidth >= breakpoints.sm
//             ? "45deg"
//             : "90deg",
//       2:
//         windowWidth >= breakpoints.md
//           ? "45deg"
//           : windowWidth >= breakpoints.sm
//             ? "270deg"
//             : "90deg",
//       3:
//         windowWidth >= breakpoints.md
//           ? "225deg"
//           : windowWidth >= breakpoints.sm
//             ? "90deg"
//             : "270deg",
//       4:
//         windowWidth >= breakpoints.md
//           ? "180deg"
//           : windowWidth >= breakpoints.sm
//             ? "225deg"
//             : "270deg",
//       5: windowWidth >= breakpoints.sm ? "135deg" : "270deg",
//     }),
//     [windowWidth],
//   );
//
//   const hoverAngles = useMemo(
//     () => ({
//       0:
//         windowWidth >= breakpoints.sm
//           ? useReverseDiagonalInvertMovement
//           : useSideMovement,
//       1:
//         windowWidth >= breakpoints.md
//           ? useStraightMovement
//           : windowWidth >= breakpoints.sm
//             ? useDiagonalMovement
//             : useSideMovement,
//       2:
//         windowWidth >= breakpoints.md
//           ? useDiagonalMovement
//           : windowWidth >= breakpoints.sm
//             ? useSideInvertMovement
//             : useSideMovement,
//       3:
//         windowWidth >= breakpoints.md
//           ? useDiagonalInvertMovement
//           : windowWidth >= breakpoints.sm
//             ? useSideMovement
//             : useSideInvertMovement,
//       4:
//         windowWidth >= breakpoints.md
//           ? useStraightInvertMovement
//           : windowWidth >= breakpoints.sm
//             ? useDiagonalInvertMovement
//             : useSideInvertMovement,
//       5:
//         windowWidth >= breakpoints.sm
//           ? useReverseDiagonalMovement
//           : useSideInvertMovement,
//     }),
//     [windowWidth],
//   );
//
//   const sheenPosition = useTransform(
//     hoverAngles[index](rotateX, rotateY),
//     [-12, 8],
//     [-80, 140],
//   );
//
//   const sheenOpacity = useTransform(
//     sheenPosition,
//     [-100, 0, 200],
//     [0.1, 0.3, 0.1],
//   );
//
//   const sheenGradient =
//     preferredScheme === "dark"
//       ? useMotionTemplate`linear-gradient(
//     ${angleClasses[index]},
//     #0C1427,
//     #070D1D,
//     ${sheenPosition}%,
//     #000714
//     )
//     padding-box,
//     linear-gradient(
//     ${angleClasses[index]},
//     #4264A8,
//     rgba(66 100 178 / ${sheenOpacity})
//     ${sheenPosition}%)
//     border-box`
//       : useMotionTemplate`linear-gradient(
//     ${angleClasses[index]},
//     #F4F6FE,
//     #F9FAFF,
//     ${sheenPosition}%,
//     #FFFFFF
//     )
//     padding-box,
//     linear-gradient(
//     ${angleClasses[index]},
//     #B4C4E4,
//     rgba(180 196 228 / ${sheenOpacity})
//     ${sheenPosition}%)
//     border-box`;
//
//   const dynamicClasses = [
//     indexClasses[index],
//     "flex flex-col p-8 md:p-6 lg:p-10 xl:p-11 2xl:p-12 transition-none shadow-services rounded-xl md:rounded-2xl lg:rounded-3xl sm:aspect-video md:aspect-square w-full h-fit",
//     onClick ? "cursor-pointer" : "",
//     className,
//   ]
//     .filter(Boolean)
//     .join(" ");
//
//   return (
//     <div
//       className={
//         "cursor-pointer  service sm:aspect-video md:aspect-square w-full !transition-none flex justify-center lg:align-middle bg-clip-content outline outline-1 outline-transparent group"
//       }
//       onMouseLeave={handleMouseLeave}
//     >
//       <motion.div className="relative sm:aspect-video md:aspect-square w-full origin-center flex justify-center align-middle bg-clip-content outline outline-1 outline-transparent group">
//         {svg && svg}
//         <motion.div
//           ref={cardRef}
//           className={`relative border border-transparent bg-clip-content outline outline-1 outline-transparent ${dynamicClasses}`}
//           style={{
//             background: sheenGradient,
//           }}
//         >
//           <Typography type={TextTypes["4xl"]} weight={WeightTypes.bold}>
//             {title}
//           </Typography>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };
//
// export default ServiceCard;
