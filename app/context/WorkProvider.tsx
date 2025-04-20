'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { WorkCategories } from '@/helpers/enums';
import ProductDesignProjects from '@/components/sections/work/product-design-projects';
import ProductDevelopmentProjects from '@/components/sections/work/product-development-projects';
import BlenderProjects from '@/components/sections/work/blender-projects';
import VideoEditingProjects from '@/components/sections/work/video-editing-projects';
import GraphicDesignProjects from '@/components/sections/work/graphic-design-projects';

interface WorkContextType {
  activeTab: WorkCategories;
  setActiveTab: React.Dispatch<React.SetStateAction<WorkCategories>>;
  ActiveComponent: React.ReactNode;
}

const WorkContext = createContext<WorkContextType | undefined>(undefined);

export function useWorkContext() {
  const context = useContext(WorkContext);
  if (!context) {
    throw new Error('useWorkContext must be used within a WorkProvider');
  }
  return context;
}

interface WorkProviderProps {
  children: ReactNode;
}

export function WorkProvider({ children }: WorkProviderProps) {
  const [activeTab, setActiveTab] = useState<WorkCategories>(WorkCategories.productDesign);
  const [ActiveComponent, setActiveComponent] = useState<React.ReactNode>(
    <ProductDesignProjects />
  );

  useEffect(() => {
    switch (activeTab) {
      case WorkCategories.productDesign:
        setActiveComponent(<ProductDesignProjects />);
        break;
      case WorkCategories.productDevelopment:
        setActiveComponent(<ProductDevelopmentProjects />);
        break;
      case WorkCategories.blender:
        setActiveComponent(<BlenderProjects />);
        break;
      case WorkCategories.videoEditing:
        setActiveComponent(<VideoEditingProjects />);
        break;
      case WorkCategories.illustration:
        setActiveComponent(<GraphicDesignProjects />);
        break;
      default:
        setActiveComponent(<ProductDesignProjects />);
        break;
    }
  }, [activeTab]);

  return (
    <WorkContext.Provider value={{ activeTab, setActiveTab, ActiveComponent }}>
      {children}
    </WorkContext.Provider>
  );
}
