'use client'

import React, { FC } from 'react'
import * as m from 'motion/react-m'
import Typography from '@/components/Typography'
import { TextTypes } from '@/helpers/enums'

interface TabContentProps {
  initialTranslateX: number
  type: TextTypes
  exitTranslateX: number
  delay: number
  text: string
  textOpacity?: string
  categoryKey: string
}

const TabContent: FC<TabContentProps> = ({
  initialTranslateX,
  exitTranslateX,
  type,
  delay,
  text,
  textOpacity = '',
  categoryKey,
}) => (
  <m.div
    initial={{ opacity: 0, width: 0, translateX: initialTranslateX }}
    animate={{ opacity: 1, width: 'auto', translateX: 0 }}
    exit={{ opacity: 0, width: 0, translateX: exitTranslateX }}
    transition={{
      opacity: { duration: 0.3, delay },
      width: { duration: 0.5 },
      translateX: { duration: 0.5 },
    }}
    key={categoryKey}
  >
    <Typography type={type} color='primary' className={textOpacity}>
      {text}
    </Typography>
  </m.div>
)

export default TabContent
