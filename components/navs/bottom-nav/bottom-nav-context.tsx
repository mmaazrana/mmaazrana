'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Sections, WorkCategories } from '@/helpers/enums';

interface BottomNavContextType {
  isEndOfPage: boolean;
  isInView: boolean;
  activeSection: Sections | WorkCategories;
  setIsEndOfPage: (value: boolean) => void;
  setIsInView: (value: boolean) => void;
  setActiveSection: (section: Sections | WorkCategories) => void;
}

const BottomNavContext = createContext<BottomNavContextType | undefined>(undefined);

export const useBottomNav = () => {
  const context = useContext(BottomNavContext);
  if (!context) {
    throw new Error('useBottomNav must be used within a BottomNavProvider');
  }
  return context;
};

interface BottomNavProviderProps {
  children: React.ReactNode;
}

export const BottomNavProvider: React.FC<BottomNavProviderProps> = ({ children }) => {
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [activeSection, setActiveSection] = useState<Sections | WorkCategories>(Sections.hero);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const navbar = document.querySelector('#navbar');
    if (!navbar) return;

    const navbarHeight = navbar.getBoundingClientRect().height;

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0);

    setIsInView(scrollTop > navbarHeight);
    setIsEndOfPage(windowHeight + scrollTop >= documentHeight - 180);

    const hero = document.getElementById(Sections.hero);
    if (!hero) return;

    let currentSection = Sections.hero;

    Object.values(Sections).forEach(id => {
      const ele = document.getElementById(id);
      if (ele) {
        const rect = ele.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        const offsetBottom = rect.bottom + window.scrollY;

        if (scrollTop >= offsetTop - navbarHeight && scrollTop < offsetBottom) {
          currentSection = id;
        }
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [activeSection]);

  useEffect(() => {
    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const scrollHandler = throttledScroll();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  return (
    <BottomNavContext.Provider
      value={{
        isEndOfPage,
        isInView,
        activeSection,
        setIsEndOfPage,
        setIsInView,
        setActiveSection,
      }}
    >
      {children}
    </BottomNavContext.Provider>
  );
};
