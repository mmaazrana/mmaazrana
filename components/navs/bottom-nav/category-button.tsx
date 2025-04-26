'use client'

import React, { FC } from 'react'
import Typography from '@/components/Typography'

interface CategoryButtonProps {
  category: { key: string; text: string }
  isActive: boolean
  onClick: () => void
}

const CategoryButton: FC<CategoryButtonProps> = ({ category, isActive, onClick }) => (
  <div id='sections' className='transition-colors'>
    <button
      onClick={onClick}
      aria-label={category.key}
      className={`rounded-full px-6 py-3 whitespace-nowrap cursor-pointer transition-all duration-300 group ${isActive ? 'bg-secondary/25' : 'bg-none hover:bg-secondary/10'}`}
    >
      <Typography
        type='base'
        color='primary'
        className={`${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'} transition-opacity duration-300 rounded-full`}
      >
        {category.text}
      </Typography>
    </button>
  </div>
)

export default CategoryButton
