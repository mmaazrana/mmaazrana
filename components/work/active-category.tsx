import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import * as m from 'motion/react-m'
import { BottomNavCategoryT } from '@/helpers/types'
import { AnimatePresence } from 'motion/react'

interface ActiveCategoryProps {
  currentCategory: BottomNavCategoryT
}

export default function ActiveCategory({ currentCategory }: ActiveCategoryProps) {
  return (
    <div
      className={
        'outline-0 border-0 flex flex-row justify-center items-center w-full min-w-full px-0 about:px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10'
      }
    >
      <div
        className={
          'relative self-center align-center origin-center transform-origin-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 whitespace-nowrap z-10 overflow-hidden'
        }
      >
        <span
          className={`absolute left-0 transition-all duration-300 top-1/2 -translate-y-1/2 h-0.5 w-full bg-primary-accent -z-1`}
        />
        <AnimatePresence mode='wait'>
          <m.div
            initial={{ opacity: 0, width: 0, translateX: -100 }}
            animate={{ opacity: 1, width: 'auto', translateX: 0 }}
            exit={{ opacity: 0, width: 0, translateX: -100 }}
            transition={{
              opacity: { duration: 0.35, delay: 0.1 },
              width: { duration: 0.25 },
              translateX: { duration: 0.25 },
            }}
            key={currentCategory.key}
          >
            <Typography tag='h2' type='4xl' weight='extra-bold'>
              {currentCategory.text}
            </Typography>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
