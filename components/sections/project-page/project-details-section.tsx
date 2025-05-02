import React from 'react'
import { projectCategories } from '@/helpers/constants'
import TitleBar from '@/components/work/title-bar'
import ProjectOverview from '@/components/projects/overview'
import ProjectKeyFeatures from '@/components/projects/key-features'
import ProjectChallengesAndSolutions from '@/components/projects/challenges-and-solutions'
import ProjectTechStack from '@/components/projects/tech-stack'
import { ProjectCategories } from '@/helpers/enums'

export default async function ProjectDetailsSection({
  project,
  activeTab,
}: {
  project: string
  activeTab: string
}) {
  return (
    <>
      <section
        className={
          'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-20 lg:gap-18 md:gap:16 sm:gap-14 gap-12 flex items-start justify-center flex-col w-full'
        }
      >
        <TitleBar pathName={project} activeTab={String(activeTab)} categories={projectCategories} />
        <div className={activeTab !== ProjectCategories.overview ? 'sr-only' : ' w-full'}>
          <ProjectOverview project={project} />
        </div>
        <div className={activeTab !== ProjectCategories.keyFeatures ? 'sr-only' : ' w-full'}>
          <ProjectKeyFeatures project={project} />
        </div>
        <div className={activeTab !== ProjectCategories.techStack ? 'sr-only' : ' w-full'}>
          <ProjectTechStack project={project} />
        </div>
        <div
          className={activeTab !== ProjectCategories.challengesAndSolutions ? 'sr-only' : ' w-full'}
        >
          <ProjectChallengesAndSolutions project={project} />
        </div>
      </section>
    </>
  )
}
