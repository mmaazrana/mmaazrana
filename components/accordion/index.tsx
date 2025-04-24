'use client';
import Typography from '@/components/Typography';
import React, { FC, useEffect, useState } from 'react';
import * as m from 'motion/react-m';
import { TextTypes, WeightTypes } from '@/helpers/enums';

interface AccordionProps {
  heading: string;
  isExpanded: boolean;
  content?: React.ReactElement;
  onClick?: () => void;
  className?: string;
}

const Accordion: FC<AccordionProps> = ({
  heading,
  isExpanded = false,
  content,
  onClick,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(isExpanded);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setIsClicked(true);
    const timer = setTimeout(() => {
      setIsClicked(false);
    }, 300);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, [isOpen]);

  return (
    <div
      className={`flex flex-col w-full max-w-full ${className}`}
      onClick={() => onClick && onClick()}
    >
      <div className={'relative flex w-full'}>
        <div
          className={`absolute transition-all duration-300 top-1/2 -translate-y-1/2 h-0.5 rounded-full w-full bg-secondary ${isClicked ? 'opacity-100 scale-x-[0.985]' : 'opacity-75'}`}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={
            'outline-0 border-0 flex flex-row justify-between items-center w-full px-6 xs:px-7 sm:px-8 md:px-9 lg:px-10 xl:px-11 2xl:px-12'
          }
        >
          <Typography
            type={TextTypes['4xl']}
            weight={WeightTypes.bold}
            className={
              'px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 py-5 xs:py-6 sm:py-7 md:py-8 xl:py-9 2xl:py-10 bg-primary-accent text-left self-start'
            }
          >
            {heading}
          </Typography>
          <div
            className={
              'group relative p-1 xs:p-2 md:p-3 xl:p-4 flex flex-row w-fit bg-primary-accent'
            }
          >
            <div className="group relative justify-center items-end outline-0 h-3 xs:h-4 md:h-5 xl:h-6 w-3 xs:w-4 md:w-5 xl:w-6">
              <span
                className={`bg-primary group-hover:bg-primary-hover absolute top-1/2 -translate-y-1/2 left-0 transition-all duration-300 ease-out h-1 w-3 xs:w-4 md:w-5 xl:w-6 rounded-sm`}
              ></span>
              <span
                className={`bg-primary group-hover:bg-primary-hover absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out w-1 rounded-sm ${isOpen ? 'h-1' : 'h-3 xs:h-4 md:h-5 xl:h-6'}`}
              ></span>
            </div>
          </div>
        </button>
      </div>
      {content && (
        <m.div
          layout
          initial={{ maxHeight: '0px', opacity: 0 }}
          animate={{ maxHeight: isOpen ? '250rem' : '0px', opacity: isOpen ? 1 : 0 }}
          exit={{ maxHeight: '0px', opacity: 0 }}
          transition={{
            opacity: { duration: 0.25, ease: 'linear' },
            maxHeight: { duration: 0.5, ease: 'linear' },
          }}
          className={`h-auto overflow-hidden`}
        >
          {content}
        </m.div>
      )}
    </div>
  );
};

export default Accordion;
