'use client'

import React, { FC, useCallback, useEffect } from 'react'
import { stagger, useAnimate } from 'motion/react'
import { footerButtons, projectCategories } from '@/helpers/constants'
import FooterSection from './footer-section'
import { BottomNavProvider, useBottomNav } from './bottom-nav-context'
import DesktopCategoryNav from './desktop-category-nav'
import MobileCategoryNav from './mobile-category-nav'
import LogoSection from './logo-section'
import FooterCTA from './footer-cta'

// Types
interface ProjectBottomNavProps {
  activeTab: string
  pathName: string
}

// Main Component
const ProjectBottomNavContent: FC<ProjectBottomNavProps> = ({ activeTab, pathName }) => {
  const { isEndOfPage, isInView } = useBottomNav()
  const [scope, animate] = useAnimate()

  const currentIndex = projectCategories.findIndex(category => category.key === activeTab)
  const SelectedComponent = projectCategories[currentIndex].key

  // Reusable animation configurations
  const animationConfig = { duration: 0.25, delay: stagger(0.1, { startDelay: 0 }) }

  // Memoized animation handlers
  const handleAnimations = useCallback(() => {
    animate(
      '#sections',
      isEndOfPage ? { opacity: 0, scale: 0.3, y: 50 } : { opacity: 1, scale: 1, y: 0 },
      { duration: isEndOfPage ? 0.25 : 0.15, delay: animationConfig.delay },
    )
    animate(
      '#pages',
      isEndOfPage ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: isEndOfPage ? 0.25 : 0,
        delay: isEndOfPage ? stagger(0.05, { startDelay: 0.25 }) : 0,
      },
    )
  }, [isEndOfPage, animate])

  // Call handleAnimations when isEndOfPage changes
  useEffect(() => {
    handleAnimations()
  }, [handleAnimations])

  return (
    <div
      ref={scope}
      id='work-bottom-navbar'
      className={`${isInView ? 'translate-y-0' : 'translate-y-32'} z-10 fixed nav-bg right-0 bottom-0 max-w-screen w-full transition-all duration-300`}
    >
      <div
        className={`${isEndOfPage ? 'h-[675px] about:h-[650px] sm:h-[470px] lg:h-[358px]' : 'h-[68px]'} absolute bg-primary-accent bottom-0 right-0 w-full blur-2xl -z-10 transition-all duration-300`}
      />
      <div
        className={`${isEndOfPage ? 'h-[675px] about:h-[650px] sm:h-[470px] lg:h-[358px]' : 'h-[149px] md:h-[150px] lg:h-[159px] xl:h-[162px]'} px-8 sm:px-9 md:px-10 lg:px-11 xl:px-8 pb-6 sm:pb-7 lg:pb-8 pt-20 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-24 justify-between items-start sm:items-end z-30 transition-all duration-300`}
      >
        <div className='flex flex-col lg:flex-row gap-1 sm:gap-2 lg:gap-10 xl:gap-24 w-full h-full'>
          <LogoSection isEndOfPage={isEndOfPage} />
          <FooterSection footerButtons={footerButtons} isEndOfPage={isEndOfPage} />
          <DesktopCategoryNav
            pathName={pathName}
            categories={projectCategories}
            activeTab={SelectedComponent}
          />
          <MobileCategoryNav
            pathName={pathName}
            currentIndex={currentIndex}
            categories={projectCategories}
            activeTab={activeTab}
            isEndOfPage={isEndOfPage}
          />
        </div>
        <FooterCTA isEndOfPage={isEndOfPage} />
      </div>
      <span
        className={`pointer-events-none w-[25vw] h-[25vw] left-0 bottom-0 -translate-x-1/4 translate-y-1/4 aspect-square rounded-full bg-secondary-hover blur-[100px] absolute -z-10 ${isEndOfPage ? 'opacity-50' : 'opacity-0'} transition-all duration-300`}
      />
    </div>
  )
}

const ProjectBottomNav: FC<ProjectBottomNavProps> = ({ activeTab, pathName }) => {
  return (
    <BottomNavProvider>
      <ProjectBottomNavContent pathName={pathName} activeTab={activeTab} />
    </BottomNavProvider>
  )
}

export default ProjectBottomNav
