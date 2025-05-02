import React, { FC } from 'react'
import CategoryButton from './category-button'
import { workBottomNavCategories } from '@/helpers/constants'

interface DesktopCategoryNavProps {
  pathName: string
  categories: typeof workBottomNavCategories
  activeTab: string
}

const DesktopCategoryNav: FC<DesktopCategoryNavProps> = ({ pathName, categories, activeTab }) => (
  <div className='my-9 px-40 w-full left-1/2 -translate-x-1/2 bottom-0 absolute justify-center gap-2 hidden lg:flex z-[50]'>
    {categories.map((button, index) => (
      <CategoryButton
        pathName={pathName}
        key={index}
        category={button}
        isActive={button.key === activeTab}
      />
    ))}
  </div>
)

export default DesktopCategoryNav
