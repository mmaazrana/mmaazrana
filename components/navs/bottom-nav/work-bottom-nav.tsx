'use client'

import React, { FC, useCallback, useEffect, useMemo } from 'react'
import { stagger, useAnimate } from 'motion/react'
import { workBottomNavCategories, footerButtons } from '@/helpers/constants'
import { BottomNavProvider, useBottomNav } from './bottom-nav-context'
import FooterCTA from './footer-cta'
import LogoSection from './logo-section'
import FooterSection from './footer-section'
import DesktopCategoryNav from './desktop-category-nav'
import MobileCategoryNav from './mobile-category-nav'

// Types
interface WorkBottomNavProps {
  activeTab: string
}

// Main Component
const WorkBottomNavContent: FC<WorkBottomNavProps> = ({ activeTab }) => {
  const { isEndOfPage, isInView } = useBottomNav()
  const [scope, animate] = useAnimate()

  // Memoize the current index and selected component
  const { currentIndex, SelectedComponent } = useMemo(() => {
    const index = workBottomNavCategories.findIndex(category => category.key === activeTab)
    return { currentIndex: index, SelectedComponent: workBottomNavCategories[index].key }
  }, [activeTab])

  // Memoize animation configurations
  const animationConfig = useMemo(
    () => ({ duration: 0.25, delay: stagger(0.1, { startDelay: 0 }) }),
    [],
  )

  // Optimized animation handler
  const handleAnimations = useCallback(() => {
    const animations = [
      {
        selector: '#sections',
        properties:
          isEndOfPage ? { opacity: 0, scale: 0.3, y: 50 } : { opacity: 1, scale: 1, y: 0 },
        config: { duration: isEndOfPage ? 0.25 : 0.15, delay: animationConfig.delay },
      },
      {
        selector: '#pages',
        properties:
          isEndOfPage ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 },
        config: {
          duration: isEndOfPage ? 0.25 : 0,
          delay: isEndOfPage ? stagger(0.05, { startDelay: 0.25 }) : 0,
        },
      },
    ]

    animations.forEach(({ selector, properties, config }) => {
      animate(selector, properties, config)
    })
  }, [isEndOfPage, animate, animationConfig])

  useEffect(() => {
    handleAnimations()
  }, [handleAnimations])

  // Memoize className strings
  const navClassName = useMemo(
    () =>
      `${isInView ? 'translate-y-0' : 'translate-y-32'} z-10 fixed nav-bg right-0 bottom-0 max-w-screen w-full transition-all duration-300`,
    [isInView],
  )

  const backgroundClassName = useMemo(
    () =>
      `${isEndOfPage ? 'h-[675px] about:h-[650px] sm:h-[470px] lg:h-[358px]' : 'h-[68px]'} absolute bg-primary-accent bottom-0 right-0 w-full blur-2xl -z-10 transition-all duration-300`,
    [isEndOfPage],
  )

  const containerClassName = useMemo(
    () =>
      `${isEndOfPage ? 'h-[675px] about:h-[650px] sm:h-[470px] lg:h-[358px]' : 'h-[149px] md:h-[150px] lg:h-[159px] xl:h-[162px]'} px-8 sm:px-9 md:px-10 lg:px-11 xl:px-8 pb-6 sm:pb-7 lg:pb-8 pt-20 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-24 justify-between items-start sm:items-end z-30 transition-all duration-300`,
    [isEndOfPage],
  )

  return (
    <div ref={scope} id='work-bottom-navbar' className={navClassName}>
      <div className={backgroundClassName} />
      <div className={containerClassName}>
        <div className='flex flex-col lg:flex-row gap-1 sm:gap-2 lg:gap-10 xl:gap-24 w-full h-full'>
          <LogoSection isEndOfPage={isEndOfPage} />
          <FooterSection footerButtons={footerButtons} isEndOfPage={isEndOfPage} />
          <DesktopCategoryNav
            pathName='portfolio'
            categories={workBottomNavCategories}
            activeTab={SelectedComponent}
          />
          <MobileCategoryNav
            pathName='portfolio'
            currentIndex={currentIndex}
            categories={workBottomNavCategories}
            activeTab={activeTab}
            isEndOfPage={isEndOfPage}
          />
        </div>
        <FooterCTA isEndOfPage={isEndOfPage} />
      </div>
      <span
        className={`pointer-events-none w-[25vw] h-[25vw] left-0 bottom-0 -translate-x-1/4 translate-y-1/4 aspect-square rounded-full bg-secondary-hover blur-[100px] absolute -z-10 ${
          isEndOfPage ? 'opacity-50' : 'opacity-0'
        } transition-all duration-300`}
      />
    </div>
  )
}

const WorkBottomNav: FC<WorkBottomNavProps> = ({ activeTab }) => {
  return (
    <BottomNavProvider>
      <WorkBottomNavContent activeTab={activeTab} />
    </BottomNavProvider>
  )
}

export default WorkBottomNav
