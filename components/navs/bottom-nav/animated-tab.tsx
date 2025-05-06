import React, { FC } from 'react'
import * as m from 'motion/react-m'

interface AnimatedTabProps {
  isEndOfPage: boolean
  delay: number
  className: string
  children: React.ReactNode
}

const AnimatedTab: FC<AnimatedTabProps> = ({ isEndOfPage, delay, className, children }) => (
  <m.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: isEndOfPage ? 0 : 1, y: isEndOfPage ? 100 : 0 }}
    transition={{ duration: 0.25, delay }}
    className={className}
  >
    {children}
  </m.div>
)

export default AnimatedTab
