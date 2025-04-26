'use client'

import React from 'react'
import TitleBar from '@/components/sections/work/title-bar'
import { useWorkContext } from '@/app/context/work-provider'
import { workBottomNavCategories } from '@/helpers/constants'

export default function MyWorkSection() {
  const { ActiveComponent, handleTabChange, activeTab } = useWorkContext()

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
          categories={workBottomNavCategories}
        />
        {ActiveComponent}
      </section>
    </>
  )
}
