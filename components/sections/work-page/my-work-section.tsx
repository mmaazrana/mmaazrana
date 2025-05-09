import React from 'react'
import { workBottomNavCategories } from '@/helpers/constants'
import TitleBar from '@/components/work/title-bar'
import ProductDesignProjects from '@/components/work/product-design-projects'
import ProductDevelopmentProjects from '@/components/work/product-development-projects'
import VideoEditingProjects from '@/components/work/video-editing-projects'
import GraphicDesignProjects from '@/components/work/graphic-design-projects'
import BlenderProjects from '@/components/work/blender-projects'
import { WorkCategories } from '@/helpers/enums'

export default function MyWorkSection({ activeTab }: { activeTab: string }) {
  return (
    <section
      className={
        'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-20 lg:gap-18 md:gap:16 sm:gap-14 gap-12 flex items-start justify-center flex-col w-full'
      }
    >
      <TitleBar
        pathName={'portfolio'}
        activeTab={String(activeTab)}
        categories={workBottomNavCategories}
      />
      <div className={activeTab !== WorkCategories.productDesign ? 'sr-only' : 'w-full'}>
        <ProductDesignProjects />
      </div>
      <div className={activeTab !== WorkCategories.productDevelopment ? 'sr-only' : 'w-full'}>
        <ProductDevelopmentProjects />
      </div>
      <div className={activeTab !== WorkCategories.videoEditing ? 'sr-only' : 'w-full'}>
        <VideoEditingProjects />
      </div>
      <div className={activeTab !== WorkCategories.illustration ? 'sr-only' : 'w-full'}>
        <GraphicDesignProjects />
      </div>
      <div className={activeTab !== WorkCategories.blender ? 'sr-only' : 'w-full'}>
        <BlenderProjects />
      </div>
    </section>
  )
}
