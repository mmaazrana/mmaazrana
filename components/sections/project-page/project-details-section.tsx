import React from 'react'
import { projectCategories } from '@/helpers/constants'
import TitleBar from '@/components/work/title-bar'
import ProjectOverview from '@/components/projects/overview'
import ProjectKeyFeatures from '@/components/projects/key-features'
import ProjectChallengesAndSolutions from '@/components/projects/challenges-and-solutions'
import ProjectTechStack from '@/components/projects/tech-stack'
import { ProjectCategories } from '@/helpers/enums'
import { ProjectAnalysisT } from '@/helpers/project-analytics'

export default async function ProjectDetailsSection({
  projectData,
  project,
  activeTab,
}: {
  projectData: ProjectAnalysisT
  project: string
  activeTab: string
}) {
  return (
    <>
      <section className={'px-4xl gap-4xl flex items-start justify-center flex-col w-full'}>
        <TitleBar pathName={project} activeTab={String(activeTab)} categories={projectCategories} />
        {activeTab === ProjectCategories.overview && (
          <ProjectOverview
            categories={projectData.categories}
            title={projectData.title}
            overview={projectData.detailedAnalysis.overview}
            completeOn={projectData.detailedAnalysis.completeOn}
            screenshots={projectData.images.screenshots}
            isMobile={projectData.isMobile || false}
            liveUrl={projectData.liveUrl || ''}
            figmaUrl={projectData.figmaUrl || ''}
            requirements={projectData.detailedAnalysis.requirements}
          />
        )}
        {activeTab === ProjectCategories.keyFeatures && (
          <ProjectKeyFeatures projectData={projectData} />
        )}
        {activeTab === ProjectCategories.techStack && (
          <ProjectTechStack projectData={projectData} />
        )}
        {activeTab === ProjectCategories.challengesAndSolutions && (
          <ProjectChallengesAndSolutions
            challenges={projectData.detailedAnalysis.challenges}
            solutions={projectData.detailedAnalysis.solutions}
          />
        )}
      </section>
    </>
  )
}
