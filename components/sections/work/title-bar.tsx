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
    <div className={'w-full overflow-hidden'}>
      <div className={'relative justify-center flex w-full '}>
        <span
          className={
            'absolute left-1/2 flex -translate-x-1/2 top-1/2 -translate-y-1/2 h-full w-[100vw] self-center work-gradient bg-blue-500 w-full max-w-8xl z-10'
          }
        />
        <span
          className={`absolute left-0 transition-all duration-300 top-1/2 -translate-y-1/2 h-0.5 rounded-full w-full bg-secondary opacity-75`}
        />

        <AnimatePresence mode="wait">
          {currentIndex > 0 && (
            <m.div
              className={
                'absolute left-0 -translate-x-3/5 px-10 py-8 bg-primary-accent whitespace-nowrap'
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
                <Typography type={TextTypes['4xl']} weight={WeightTypes.extraBold}>
                  {workBottomNavCategories[currentIndex - 1].text}
                </Typography>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
        {currentCategory && (
          <div
            className={
              'outline-0 border-0 flex flex-row justify-center items-center w-full min-w-full px-12'
            }
          >
            <div
              className={
                'self-center align-center origin-center transform-origin-center px-10 py-8 bg-primary-accent whitespace-nowrap z-10 overflow-hidden'
              }
            >
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
                'absolute right-0 translate-x-3/5 px-10 py-8 bg-primary-accent whitespace-nowrap'
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
                <Typography type={TextTypes['4xl']} weight={WeightTypes.extraBold}>
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
