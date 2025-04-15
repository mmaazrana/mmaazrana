'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface AboutContextType {
  activeCard: string;
  isActive: boolean;
  setActiveCard: (title: string) => void;
  setIsActive: (isActive: boolean) => void;
}

const AboutContext = createContext<AboutContextType | undefined>(undefined);

export const useAboutContext = () => {
  const context = useContext(AboutContext);
  if (!context) {
    throw new Error('useAboutContext must be used within an AboutProvider');
  }
  return context;
};

interface AboutProviderProps {
  children: ReactNode;
}

export const AboutProvider: React.FC<AboutProviderProps> = ({ children }) => {
  const [activeCard, setActiveCard] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSetActiveCard = useCallback((title: string) => {
    setActiveCard(title);
  }, []);

  const handleSetIsActive = useCallback((active: boolean) => {
    setIsActive(active);
  }, []);

  return (
    <AboutContext.Provider
      value={{
        activeCard,
        isActive,
        setActiveCard: handleSetActiveCard,
        setIsActive: handleSetIsActive,
      }}
    >
      {children}
    </AboutContext.Provider>
  );
};
