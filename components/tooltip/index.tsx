'use client'

import React, { FC, useState, ReactNode } from 'react'

interface TooltipProps {
  text: string
  children: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right' // Optional position prop
}

/**
 * Renders a tooltip around a child element.
 * The tooltip text is displayed when the child element is hovered.
 */
const Tooltip: FC<TooltipProps> = ({ text, children, position = 'bottom' }) => {
  const [isVisible, setIsVisible] = useState(false)

  // Base styles for the tooltip text itself
  const tooltipTextStyles: React.CSSProperties = {
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? 1 : 0,
  }

  // Adjust styles based on position prop
  switch (position) {
    case 'top':
      tooltipTextStyles.bottom = '125%' // Position above the element
      tooltipTextStyles.left = '50%'
      tooltipTextStyles.transform = 'translateX(-50%)'
      break
    case 'bottom':
      tooltipTextStyles.top = '125%' // Position below the element
      tooltipTextStyles.left = '50%'
      tooltipTextStyles.transform = 'translateX(-50%)'
      break
    case 'left':
      tooltipTextStyles.right = '105%' // Position to the left
      tooltipTextStyles.top = '50%'
      tooltipTextStyles.transform = 'translateY(-50%)'
      break
    case 'right':
      tooltipTextStyles.left = '105%' // Position to the right
      tooltipTextStyles.top = '50%'
      tooltipTextStyles.transform = 'translateY(-50%)'
      break
  }

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {text && (
        <span
          className='bg-primary-invert/35 text-primary text-center font-light whitespace-nowrap text-xs rounded-full py-3xs px-2xs absolute z-10000 transition-all duration-300'
          style={tooltipTextStyles}
          role='tooltip'
        >
          {text}
        </span>
      )}
    </div>
  )
}

export default Tooltip
