'use client';

import React, { FC } from 'react';
import * as m from 'motion/react-m';

interface AnimatedTabProps {
  isEndOfPage: boolean;
  delay: number;
  className: string;
  children: React.ReactNode;
}

const AnimatedTab: FC<AnimatedTabProps> = ({ isEndOfPage, delay, className, children }) => (
  <m.div
    initial={{ opacity: 0, transform: 'translateY(100px)' }}
    animate={{
      opacity: isEndOfPage ? 0 : 1,
      transform: `translateY(${isEndOfPage ? 100 : 0}px)`,
    }}
    transition={{
      duration: 0.25,
      delay,
    }}
    className={className}
  >
    {children}
  </m.div>
);

export default AnimatedTab;
