import { BottomNavCategoryT } from '@/helpers/types'
import * as m from 'motion/react-m'
import { } from '@/helpers/enums'
import Typography from '@/components/Typography'
import Link from 'next/link'

interface InActiveCategoryProps {
  category: BottomNavCategoryT
  position: 'left' | 'right'
  pathName: string
}

export default function InActiveCategory({ pathName, category, position }: InActiveCategoryProps) {
  const isLeft = position === 'left'

  return (
    <Link
      href={`/${pathName}/${category.key}`}
      scroll={false}
      aria-label={isLeft ? 'Previous Tab' : 'Next Tab'}
      className='z-4'
    >
      <m.button
        className={`
        hidden about:block absolute cursor-pointer top-1/2 -translate-y-1/2 group
        ${isLeft ? 'left-0 -translate-x-3/5 hover:-translate-x-1/5' : 'right-0 translate-x-3/5 hover:translate-x-1/5'} 
        bg-primary-accent transition-transform duration-300 whitespace-nowrap px-xl 
      `}
      >
        <m.div
          initial={{ opacity: 0, width: 0, translateX: isLeft ? -400 : 500 }}
          animate={{ opacity: 1, width: 'auto', translateX: 0 }}
          exit={{ opacity: 0, width: 0, translateX: isLeft ? -400 : 500 }}
          transition={{
            opacity: { duration: 0.3, delay: 0.2 },
            width: { duration: 0.5 },
            translateX: { duration: 0.5 },
          }}
          key={category.key}
        >
          <Typography
            tag='h2'
            type='4xl'
            weight='extra-bold'
            className='opacity-50 group-hover:opacity-100 !transition-opacity duration-300'
          >
            {category.text}
          </Typography>
        </m.div>
      </m.button>
    </Link>
  )
}
