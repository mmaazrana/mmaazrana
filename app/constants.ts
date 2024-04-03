import { MotionValue, useTransform } from "framer-motion";

export const enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export const enum TextTypes {
  "9xl" = "9xl",
  "8xl" = "8xl",
  "7xl" = "7xl",
  "6xl" = "6xl",
  "5xl" = "5xl",
  "4xl" = "4xl",
  "3xl" = "3xl",
  "2xl" = "2xl",
  xl = "xl",
  lg = "lg",
  base = "base",
  sm = "sm",
  xs = "xs",
}

export const enum WeightTypes {
  black = "black",
  extraBold = "extra-bold",
  bold = "bold",
  semiBold = "semi-bold",
  medium = "medium",
  regular = "regular",
  light = "light",
  extraLight = "extra-light",
}

export const enum ColorTypes {
  primary = "primary",
  primaryAccent = "primary-accent",
  primaryHover = "primary-hover",
  secondary = "secondary",
  secondaryHover = "secondary-hover",
  error = "error",
  transparent = "transparent",
}

export const enum Sections {
  hero = "hero",
  work = "work",
  services = "services",
  processes = "processes",
  testimonials = "testimonials",
}

export interface NavButtonT {
  text: string;
  href: string;
  type: ButtonTypes;
}

export const HeroHeadings = [
  "Product Designer",
  3500,
  "Web Developer",
  3500,
  "Mobile App Developer",
  3500,
  "Animator",
  3500,
  "3D Artist",
  3500,
];

export const HeroDescriptions: string[] = [
  "Crafting user-centric digital experiences that blend creativity and functionality for impactful, seamless design.",
  "Transforming ideas into interactive web solutions, I specialize in coding elegant websites with a focus on user experience.",
  "Building the future of mobile experiences, I bring innovative app ideas to life with user-centric design and robust functionality.",
  "Breathing life into static elements, I create visually stunning and emotionally resonant digital narratives through animation.",
  "Sculpting immersive worlds and captivating visuals, I leverage three-dimensional design to bring ideas to life with depth and realism.",
];

export const navButtons: NavButtonT[] = [
  { text: "Work", href: "", type: ButtonTypes.secondary },
  { text: "Services", href: "", type: ButtonTypes.secondary },
  { text: "Process", href: "", type: ButtonTypes.secondary },
  { text: "Testimonials", href: "", type: ButtonTypes.secondary },
  { text: "Get in Touch", href: "", type: ButtonTypes.primary },
];

export interface BottomNavButtonT {
  text: string;
  href: string;
  section: Sections;
}

export const bottomNavButtons: BottomNavButtonT[] = [
  { text: "Work", href: "", section: Sections.work },
  { text: "Services", href: "", section: Sections.services },
  { text: "Process", href: "", section: Sections.processes },
  { text: "Testimonials", href: "", section: Sections.testimonials },
];

export interface ServiceT {
  title: string;
  index: 0 | 1 | 2 | 3 | 4 | 5;
}

export const services: ServiceT[] = [
  { title: "Web Application Development", index: 0 },
  { title: "Product Design", index: 1 },
  { title: "Mobile Application Development", index: 2 },
  { title: "Video Editing", index: 3 },
  { title: "Logo Design", index: 4 },
  { title: "3D Design & Animation", index: 5 },
];

export const breakpoints = {
  "2xl": 1536,
  lg: 1024,
  md: 768,
  sm: 640,
  xl: 1280,
  xs: 365,
};

export function getActiveBreakpoint(value: number) {
  // Convert the breakpoints object into an array of [key, value] pairs
  const breakpointEntries = Object.entries(breakpoints);

  // Sort the breakpoints based on their values, from smallest to largest
  breakpointEntries.sort((a, b) => a[1] - b[1]);

  // Iterate through the sorted breakpoints and find the active one
  for (let i = 0; i < breakpointEntries.length; i++) {
    const [key, breakpointValue] = breakpointEntries[i];
    if (value <= breakpointValue) {
      return key;
    }
  }

  // If no active breakpoint is found, return the largest breakpoint
  return breakpointEntries[breakpointEntries.length - 1][0];
}

export const useDiagonalMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>,
) =>
  useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return newRotateX + newRotateY;
    },
  );

export const useReverseDiagonalMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>,
) =>
  useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return 1 - newRotateX + newRotateY;
    },
  );

export const useDiagonalInvertMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>,
) =>
  useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return 1 - newRotateX - newRotateY;
    },
  );

export const useReverseDiagonalInvertMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>,
) =>
  useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return newRotateX - newRotateY;
    },
  );

export const useStraightMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>,
) =>
  useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return newRotateX;
    },
  );

export const useStraightInvertMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>,
) =>
  useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return 1 - newRotateX;
    },
  );

export const useSideMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>,
) =>
  useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return newRotateY;
    },
  );

export const useSideInvertMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>,
) =>
  useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      return 1 - newRotateY;
    },
  );
