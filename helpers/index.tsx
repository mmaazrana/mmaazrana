import { useEffect, useState } from 'react';
import { MotionValue, useTransform } from 'motion/react';
import { breakpoints } from '@/helpers/constants';
export const usePreferredColorScheme = () => {
  const [preferredScheme, setPreferredScheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');

    const updateScheme = (e: MediaQueryListEvent) => {
      setPreferredScheme(e.matches ? 'dark' : 'light');
    };

    // Initial check
    setPreferredScheme(query.matches ? 'dark' : 'light');

    // Listen for changes
    query.addListener(updateScheme);

    // Cleanup
    return () => query.removeListener(updateScheme);
  }, []);

  return preferredScheme;
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

export const useDiagonalMovement = (rotateX: MotionValue<number>, rotateY: MotionValue<number>) =>
  useTransform<number, number>([rotateX, rotateY], ([newRotateX, newRotateY]) => {
    return newRotateX + newRotateY;
  });
export const useReverseDiagonalMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>
) =>
  useTransform<number, number>([rotateX, rotateY], ([newRotateX, newRotateY]) => {
    return 1 - newRotateX + newRotateY;
  });
export const useDiagonalInvertMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>
) =>
  useTransform<number, number>([rotateX, rotateY], ([newRotateX, newRotateY]) => {
    return 1 - newRotateX - newRotateY;
  });
export const useReverseDiagonalInvertMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>
) =>
  useTransform<number, number>([rotateX, rotateY], ([newRotateX, newRotateY]) => {
    return newRotateX - newRotateY;
  });
export const useStraightMovement = (rotateX: MotionValue<number>, rotateY: MotionValue<number>) =>
  useTransform<number, number>([rotateX, rotateY], ([newRotateX]) => {
    return newRotateX;
  });
export const useStraightInvertMovement = (
  rotateX: MotionValue<number>,
  rotateY: MotionValue<number>
) =>
  useTransform<number, number>([rotateX, rotateY], ([newRotateX]) => {
    return 1 - newRotateX;
  });
export const useSideMovement = (rotateX: MotionValue<number>, rotateY: MotionValue<number>) =>
  useTransform<number, number>([rotateX, rotateY], ([newRotateY]) => {
    return newRotateY;
  });
export const useSideInvertMovement = (rotateX: MotionValue<number>, rotateY: MotionValue<number>) =>
  useTransform<number, number>([rotateX, rotateY], ([newRotateY]) => {
    return 1 - newRotateY;
  });
