import React, { useMemo } from 'react'
import { workBottomNavCategories } from '@/helpers/constants'
import TitleBar from '@/components/work/title-bar'
import dynamic from 'next/dynamic'
import { WorkCategories } from '@/helpers/enums'
import Loader from '@/components/loader'

// Dynamically import project components
const ProductDesignProjects = dynamic(() => import('@/components/work/product-design-projects'), {
  loading: () => <Loader />,
})
const ProductDevelopmentProjects = dynamic(
  () => import('@/components/work/product-development-projects'),
  { loading: () => <Loader /> },
)
const VideoEditingProjects = dynamic(() => import('@/components/work/video-editing-projects'), {
  loading: () => <Loader />,
})
const GraphicDesignProjects = dynamic(() => import('@/components/work/graphic-design-projects'), {
  loading: () => <Loader />,
})
const BlenderProjects = dynamic(() => import('@/components/work/blender-projects'), {
  loading: () => <Loader />,
})

export default function MyWorkSection({ activeTab }: { activeTab: string }) {
  // Memoize the active tab to prevent unnecessary re-renders
  const memoizedActiveTab = useMemo(() => activeTab, [activeTab])

  return (
    <section className='xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-20 lg:gap-18 md:gap:16 sm:gap-14 gap-12 flex items-start justify-center flex-col w-full'>
      <TitleBar
        pathName='portfolio'
        activeTab={String(memoizedActiveTab)}
        categories={workBottomNavCategories}
      />
      {memoizedActiveTab === WorkCategories.productDesign && <ProductDesignProjects />}
      {memoizedActiveTab === WorkCategories.productDevelopment && <ProductDevelopmentProjects />}
      {memoizedActiveTab === WorkCategories.videoEditing && <VideoEditingProjects />}
      {memoizedActiveTab === WorkCategories.illustration && <GraphicDesignProjects />}
      {memoizedActiveTab === WorkCategories.blender && <BlenderProjects />}
    </section>
  )
}
