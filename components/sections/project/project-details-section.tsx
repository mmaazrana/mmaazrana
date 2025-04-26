'use client'

import React from 'react'
import { useProjectContext } from '@/app/context/project-provider'
import { projectCategories } from '@/helpers/constants'
import TitleBar from '../work/title-bar'

export default function ProjectDetailsSection() {
  const { ActiveComponent, handleTabChange, activeTab } = useProjectContext()

  return (
    <>
      <section
        className={
          'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-20 lg:gap-18 md:gap:16 sm:gap-14 gap-12 flex items-start justify-center flex-col w-full'
        }
      >
        <TitleBar
          handleTabChange={handleTabChange}
          activeTab={activeTab}
          categories={projectCategories}
        />
        {ActiveComponent}
      </section>
    </>
  )
}
