'use client';
import Typography from '@/components/Typography';
import React, { FC, useEffect, useState } from 'react';

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
    <div className={`w-full ${className}`} onClick={() => onClick && onClick()}>
      <div className={'relative flex w-full'}>
        <div
          className={`absolute transition-all duration-300 top-1/2 -translate-y-1/2 h-0.5 rounded-full w-full bg-secondary ${isClicked ? 'opacity-100 scale-x-[0.985]' : 'opacity-75'}`}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={'outline-0 border-0 flex flex-row justify-between items-center w-full px-12'}
        >
          <Typography
            type={TextTypes['4xl']}
            weight={WeightTypes.extraBold}
            className={'px-10 py-8 bg-primary-accent'}
          >
            {heading}
          </Typography>
          <div className={'group relative p-4 flex flex-row w-fit bg-primary-accent'}>
            <div className="group relative justify-center items-end outline-0 h-6 w-6">
              <span
                className={`bg-primary group-hover:bg-primary-hover absolute top-1/2 -translate-y-1/2 left-0 transition-all duration-300 ease-out h-1 w-6 rounded-sm`}
              ></span>
              <span
                className={`bg-primary group-hover:bg-primary-hover absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out w-1 rounded-sm ${isOpen ? 'h-1' : 'h-6'}`}
              ></span>
            </div>
          </div>
        </button>
      </div>
      {content && (
        <div
          className={`h-auto overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-[1000px]' : 'max-h-[0px]'}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
