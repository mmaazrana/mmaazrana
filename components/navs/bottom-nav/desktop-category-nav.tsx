'use client'

import React, { FC } from 'react'
import CategoryButton from './category-button'
import { workBottomNavCategories } from '@/helpers/constants'

interface DesktopCategoryNavProps {
  categories: typeof workBottomNavCategories
  activeTab: string
  handleTabChange: (key: string) => void
}

const DesktopCategoryNav: FC<DesktopCategoryNavProps> = ({
  categories,
  activeTab,
  handleTabChange,
}) => (
  <div className='my-9 px-40 w-full left-1/2 -translate-x-1/2 bottom-0 absolute justify-center gap-2 hidden lg:flex z-[50]'>
    {categories.map((button, index) => (
      <CategoryButton
        key={index}
        category={button}
        isActive={button.key === activeTab}
        onClick={() => handleTabChange(button.key)}
      />
    ))}
  </div>
)

export default DesktopCategoryNav
