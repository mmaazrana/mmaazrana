'use client';

import React, { FC } from 'react';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { workBottomNavCategories } from '@/helpers/constants';
import AnimatedTab from './animated-tab';
import TabButton from './tab-button';
import TabContent from './tab-content';

interface MobileCategoryNavProps {
  currentIndex: number;
  categories: typeof workBottomNavCategories;
  activeTab: string;
  handleTabChange: (key: string) => void;
  isEndOfPage: boolean;
}

const MobileCategoryNav: FC<MobileCategoryNavProps> = ({
  currentIndex,
  categories,
  activeTab,
  handleTabChange,
  isEndOfPage,
}) => {
  const currentCategory = categories[currentIndex];

  const handlePrevClick = () => {
    handleTabChange(
      categories[
        (categories.findIndex(button => button.key === activeTab) - 1 + categories.length) %
          categories.length
      ].key
    );
  };

  const handleNextClick = () => {
    handleTabChange(
      categories[(categories.findIndex(button => button.key === activeTab) + 1) % categories.length]
        .key
    );
  };

  return (
    <div className="my-7 about:my-6 px-6 xs:px-8 sm:px-28 md:px-32 w-full left-1/2 -translate-x-1/2 bottom-0 absolute justify-center gap-2 flex justify-between items-center lg:hidden z-[50]">
      <span
        className={`pointer-events-none absolute left-1/2 flex -translate-x-1/2 top-1/2 -translate-y-1/2 h-full self-center w-full z-[60] ${isEndOfPage ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
      >
        <span className="pointer-events-none mx-8 sm:mx-28 md:mx-32 left-0 top-0 h-full w-full work-nav-gradient rounded-full blur-sm" />
      </span>

      <TabButton
        onClick={handlePrevClick}
        ariaLabel="Previous Tab"
        isEndOfPage={isEndOfPage}
        delay={0.1}
        icon={<ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 stroke-primary" />}
      />

      <div className="relative flex justify-between w-full items-center overflow-hidden justify-center gap-2">
        <AnimatePresence mode="wait">
          {currentIndex > 0 && (
            <AnimatedTab
              isEndOfPage={isEndOfPage}
              delay={0.2}
              className="absolute left-0 about:block hidden -translate-x-1/3 px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-18 py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4 whitespace-nowrap"
            >
              <TabContent
                initialTranslateX={-200}
                exitTranslateX={-200}
                delay={0.2}
                text={categories[currentIndex - 1].text}
                textOpacity="opacity-40"
                categoryKey={categories[currentIndex - 1].key}
              />
            </AnimatedTab>
          )}
        </AnimatePresence>

        {currentCategory && (
          <div className="outline-0 border-0 flex flex-row justify-center items-center w-full min-w-full px-0 about:px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-18">
            <AnimatePresence mode="wait">
              <AnimatedTab
                isEndOfPage={isEndOfPage}
                delay={0.3}
                className="self-center align-center origin-center transform-origin-center px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-18 py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4 whitespace-nowrap z-100 overflow-hidden"
              >
                <TabContent
                  initialTranslateX={-40}
                  exitTranslateX={-40}
                  delay={0.1}
                  text={currentCategory.text}
                  categoryKey={currentCategory.key}
                />
              </AnimatedTab>
            </AnimatePresence>
          </div>
        )}

        <AnimatePresence mode="wait">
          {currentIndex < categories.length - 1 && (
            <AnimatedTab
              isEndOfPage={isEndOfPage}
              delay={0.4}
              className="absolute about:block hidden right-0 translate-x-1/3 px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-18 py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4 whitespace-nowrap"
            >
              <TabContent
                initialTranslateX={250}
                exitTranslateX={250}
                delay={0.2}
                text={categories[currentIndex + 1].text}
                textOpacity="opacity-40"
                categoryKey={categories[currentIndex + 1].key}
              />
            </AnimatedTab>
          )}
        </AnimatePresence>
      </div>

      <TabButton
        onClick={handleNextClick}
        ariaLabel="Next Tab"
        isEndOfPage={isEndOfPage}
        delay={0.5}
        icon={<ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 stroke-primary" />}
      />
    </div>
  );
};

export default MobileCategoryNav;
