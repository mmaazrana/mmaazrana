import { BottomNavCategoryT } from '@/helpers/types'
import * as m from 'motion/react-m'
import {} from '@/helpers/enums'
import Typography from '@/components/Typography'

interface InActiveCategoryProps {
  category: BottomNavCategoryT
  position: 'left' | 'right'
  onClick: () => void
}

export default function InActiveCategory({ category, position, onClick }: InActiveCategoryProps) {
  const isLeft = position === 'left'

  return (
    <m.button
      onClick={onClick}
      aria-label={isLeft ? 'Previous Tab' : 'Next Tab'}
      className={`
        hidden about:block absolute cursor-pointer 
        ${isLeft ? 'left-0 -translate-x-3/5' : 'right-0 translate-x-3/5'} 
        px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 
        py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 
        bg-primary-accent whitespace-nowrap z-[4]
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
        <Typography tag='h2' type='4xl' weight='extra-bold' className='opacity-50'>
          {category.text}
        </Typography>
      </m.div>
    </m.button>
  )
}
