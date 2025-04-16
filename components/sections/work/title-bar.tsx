// app/components/sections/WorkSection.tsx
import React from 'react';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { workBottomNavCategories } from '@/helpers/constants';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';

interface TitleBarProps {
  activeTab: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ activeTab }) => {
  const currentIndex = workBottomNavCategories.findIndex(category => category.key === activeTab);
  const currentCategory = workBottomNavCategories[currentIndex];

  return (
    <div className={'w-full overflow-x-hidden'}>
      <div className={'relative justify-center flex w-full '}>
        <span
          className={
            'absolute left-1/2 flex -translate-x-1/2 top-1/2 -translate-y-1/2 h-full w-[100vw] self-center work-gradient w-full max-w-8xl z-[5]'
          }
        />
        <span
          className={`absolute left-0 transition-all duration-300 top-1/2 -translate-y-1/2 h-0.5 rounded-full w-full bg-secondary opacity-75 z-[3]`}
        />

        <AnimatePresence mode="wait">
          {currentIndex > 0 && (
            <m.div
              className={
                'hidden about:block absolute left-0 -translate-x-3/5 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 bg-primary-accent whitespace-nowrap z-[4]'
              }
            >
              <m.div
                initial={{ opacity: 0, width: 0, translateX: -400 }} // Initial state
                animate={{ opacity: 1, width: 'auto', translateX: 0 }} // Animate to this state
                exit={{ opacity: 0, width: 0, translateX: -400 }} // Exit state
                transition={{
                  opacity: { duration: 0.3, delay: 0.2 },
                  width: { duration: 0.5 },
                  translateX: { duration: 0.5 },
                }}
                key={workBottomNavCategories[currentIndex - 1].key} // Unique key for each tab
              >
                <Typography
                  type={TextTypes['4xl']}
                  weight={WeightTypes.extraBold}
                  className="opacity-50"
                >
                  {workBottomNavCategories[currentIndex - 1].text}
                </Typography>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
        {currentCategory && (
          <div
            className={
              'outline-0 border-0 flex flex-row justify-center items-center w-full min-w-full px-0 about:px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10'
            }
          >
            <div
              className={
                'relative self-center align-center origin-center transform-origin-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 whitespace-nowrap z-10 overflow-hidden'
              }
            >
              <span
                className={`absolute left-0 transition-all duration-300 top-1/2 -translate-y-1/2 h-0.5 w-full bg-primary-accent -z-1`}
              />
              <AnimatePresence mode="wait">
                <m.div
                  initial={{ opacity: 0, width: 0, translateX: -100 }} // Initial state
                  animate={{ opacity: 1, width: 'auto', translateX: 0 }} // Animate to this state
                  exit={{ opacity: 0, width: 0, translateX: -100 }} // Exit state
                  transition={{
                    opacity: { duration: 0.35, delay: 0.1 },
                    width: { duration: 0.25 },
                    translateX: { duration: 0.25 },
                  }}
                  key={currentCategory.key} // Unique key for each tab
                >
                  <Typography type={TextTypes['4xl']} weight={WeightTypes.extraBold}>
                    {currentCategory.text}
                  </Typography>
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        )}
        <AnimatePresence mode="wait">
          {currentIndex < workBottomNavCategories.length - 1 && (
            <m.div
              className={
                'hidden about:block absolute right-0 translate-x-3/5 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 bg-primary-accent whitespace-nowrap z-[4]'
              }
            >
              <m.div
                initial={{ opacity: 0, width: 0, translateX: 500 }} // Initial state
                animate={{ opacity: 1, width: 'auto', translateX: 0 }} // Animate to this state
                exit={{ opacity: 0, width: 0, translateX: 500 }} // Exit state
                transition={{
                  opacity: { duration: 0.3, delay: 0.2 },
                  width: { duration: 0.5 },
                  translateX: { duration: 0.5 },
                }}
                key={workBottomNavCategories[currentIndex + 1].key} // Unique key for each tab
              >
                <Typography
                  type={TextTypes['4xl']}
                  weight={WeightTypes.extraBold}
                  className="opacity-50"
                >
                  {workBottomNavCategories[currentIndex + 1].text}
                </Typography>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TitleBar;
