'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ProjectCategories } from '@/helpers/enums';
import { projectCategories } from '@/helpers/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ProjectKeyFeatures from '@/components/sections/project/key-features';
import ProjectTechStack from '@/components/sections/project/tech-stack';
import ProjectChallengesAndSolutions from '@/components/sections/project/challenges-and-solutions';
import ProjectOverview from '@/components/sections/project/overview';
import { ProjectAnalysisT, projectsAnalysis } from '@/helpers/project-analytics';
import { getPageSlug } from '@/helpers/parsers';

interface ProjectContextType {
  activeTab: string;
  handleTabChange: (id: string) => void;
  ActiveComponent: React.ReactNode;
  projectData: ProjectAnalysisT;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
}

interface ProjectProviderProps {
  children: ReactNode;
}

export function ProjectProvider({ children }: ProjectProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const activeTab = searchParam.get('tab') || projectCategories[0].key;
  const projectData =
    projectsAnalysis.find(p => getPageSlug(p.title) === pathname.split('/').pop()) ||
    projectsAnalysis[0];
  const handleTabChange = (id: string) => {
    router.push(`${pathname}?tab=${id}`, { scroll: false });
  };
  const [ActiveComponent, setActiveComponent] = useState<React.ReactNode>(
    <ProjectOverview projectData={projectData} />
  );

  useEffect(() => {
    switch (activeTab) {
      case ProjectCategories.overview:
        setActiveComponent(<ProjectOverview projectData={projectData} />);
        break;
      case ProjectCategories.keyFeatures:
        setActiveComponent(<ProjectKeyFeatures projectData={projectData} />);
        break;
      case ProjectCategories.techStack:
        setActiveComponent(<ProjectTechStack projectData={projectData} />);
        break;
      case ProjectCategories.challengesAndSolutions:
        setActiveComponent(<ProjectChallengesAndSolutions projectData={projectData} />);
        break;
      default:
        setActiveComponent(<ProjectOverview projectData={projectData} />);
        break;
    }
  }, [activeTab]);

  return (
    <ProjectContext.Provider value={{ activeTab, handleTabChange, ActiveComponent, projectData }}>
      {children}
    </ProjectContext.Provider>
  );
}
