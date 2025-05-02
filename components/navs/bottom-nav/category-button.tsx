import React, { FC } from 'react'
import Typography from '@/components/typography'
import Link from 'next/link'

interface CategoryButtonProps {
  pathName: string
  category: { key: string; text: string }
  isActive: boolean
}

const CategoryButton: FC<CategoryButtonProps> = ({ pathName, category, isActive }) => (
  <div id='sections' className='transition-colors'>
    <Link
      href={`${pathName}?tab=${category.key}`}
      scroll={false}
      aria-label={category.key}
      className={`rounded-full flex justify-center items-center px-6 py-3 whitespace-nowrap cursor-pointer transition-all duration-300 group ${isActive ? 'bg-secondary/25' : 'bg-none hover:bg-secondary/10'}`}
    >
      <Typography
        type='base'
        color='primary'
        className={`${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'} transition-opacity duration-300 rounded-full`}
      >
        {category.text}
      </Typography>
    </Link>
  </div>
)

export default CategoryButton
