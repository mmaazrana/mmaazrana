import React from 'react'
import { projectCategories } from '@/helpers/constants'
import TitleBar from '@/components/work/title-bar'
import { BottomNavCategoryT } from '@/helpers/types'

export default async function ProjectDetailsSection({
  project,
  activeTab,
}: {
  project: string
  activeTab: string
}) {
  console.log(activeTab)
  const ActiveComponent = projectCategories.find(
    (project: BottomNavCategoryT) => project.key === activeTab,
  )?.Component
  return (
    <>
      <section
        className={
          'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-20 lg:gap-18 md:gap:16 sm:gap-14 gap-12 flex items-start justify-center flex-col w-full'
        }
      >
        <TitleBar pathName={project} activeTab={String(activeTab)} categories={projectCategories} />
        {ActiveComponent && <ActiveComponent project={project} />}
      </section>
    </>
  )
}
