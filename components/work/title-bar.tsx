// app/components/sections/WorkSection.tsx
import React from 'react'
import { AnimatePresence } from 'motion/react'
import InActiveCategory from './inactive-category'
import ActiveCategory from './active-category'
import { BottomNavCategoryT } from '@/helpers/types'

interface TitleBarProps {
  activeTab: string
  categories: BottomNavCategoryT[]
  pathName: string
}

const TitleBar: React.FC<TitleBarProps> = ({ activeTab, categories, pathName }) => {
  const currentIndex = categories.findIndex(category => category.key === activeTab)
  const currentCategory = categories[currentIndex]
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='relative justify-center flex w-full '>
        <span
          className={
            'absolute left-1/2 flex -translate-x-1/2 top-1/2 -translate-y-1/2 h-full w-[100vw] self-center work-gradient w-full max-w-8xl z-[5] pointer-events-none'
          }
        />
        <span
          className={`absolute left-0 transition-all duration-300 top-1/2 -translate-y-1/2 h-0.5 rounded-full w-full bg-secondary opacity-75 z-[3] pointer-events-none`}
        />
        <AnimatePresence mode='wait'>
          {currentIndex > 0 && (
            <InActiveCategory
              pathName={pathName}
              category={categories[currentIndex - 1]}
              position='left'
            />
          )}
        </AnimatePresence>
        {currentCategory && <ActiveCategory currentCategory={currentCategory} />}
        <AnimatePresence mode='wait'>
          {currentIndex < categories.length - 1 && (
            <InActiveCategory
              pathName={pathName}
              category={categories[currentIndex + 1]}
              position='right'
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TitleBar
