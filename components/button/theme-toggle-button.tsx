'use client'

import React, { FC, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Tooltip from '../tooltip'
import Typography from '../Typography'

// Define a type for the component props if any are needed in the future
interface ThemeToggleButtonProps {
  showActiveState?: boolean
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
}

/**
 * Renders a button that toggles between system, light, and dark themes.
 * Displays an icon representing the theme that will be activated on click.
 * A tooltip shows the next theme state on hover.
 */
const ThemeToggleButton: FC<ThemeToggleButtonProps> = ({
  showActiveState = false,
  tooltipPosition = 'bottom',
}) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder or null to avoid server-client mismatch
    return <div style={{ width: '24px', height: '24px' }} /> // Placeholder to prevent layout shift
  }

  /**
   * Toggles the theme between "system", "light", and "dark".
   */
  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  let buttonAriaLabel: string
  let tooltipText: string
  let icon: React.ReactNode

  // Determine the icon and title based on the current theme
  // The icon represents the theme that will be set on click
  if (theme === 'system') {
    buttonAriaLabel = 'Switch to Light Mode'
    tooltipText = 'Switch to Light Mode'
    // Sun icon for switching to light mode
    icon = (
      <svg
        id='a'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 399.4 399.4'
        className='min-w-m min-h-m fill-primary-hover'
      >
        <g id='b'>
          <path d='m0,195.39c3.12-7.27,8.58-10.46,16.53-10.18,8.6.31,17.21.02,25.82.09,8.8.08,15.03,6.28,14.96,14.75-.08,8.28-6.21,14.25-14.89,14.34-8.61.08-17.22-.22-25.82.09-7.97.29-13.35-3.07-16.6-10.18v-8.91Z' />
          <path d='m195.1,399.4c-7.5-3.44-10.64-9.19-10.2-17.48.43-8.29.04-16.62.12-24.93.09-8.96,6.1-14.97,14.74-14.9,8.26.07,14.26,6.25,14.34,14.92.08,8.61-.24,17.23.1,25.82.31,8-3.04,13.35-10.19,16.56h-8.91Z' />
          <path d='m70.96,199.96c-.79-70.66,58.11-128.69,128.25-128.86,70.96-.17,129.26,58.45,129.09,129.08-.17,70.2-58.21,128.73-128.86,128.34-71.24-.39-128.45-57.32-128.48-128.56Zm70-79.54c-26.24,17.26-46.73,55.66-39.03,97.93,7.53,41.38,43.43,75.17,84.95,80.07,41.96,4.95,77.43-16.88,91.91-39.93-42.38,12.71-80.78,5.81-112.26-25.71-31.47-31.51-38.35-69.91-25.56-112.36Z' />
          <path d='m69.31,54.3c3.42-.19,6.98,1.46,9.94,4.38,6.53,6.45,13.12,12.84,19.44,19.5,6.27,6.61,6.31,15.21.47,21.14-5.83,5.92-14.57,6.02-21.13-.19-6.88-6.51-13.55-13.25-20.09-20.1-4.4-4.61-5.25-10.33-2.79-16.09,2.4-5.64,6.97-8.66,14.15-8.63Z' />
          <path d='m330.06,54.31c6.5-.1,10.88,2.65,13.5,7.79,2.7,5.3,2.54,10.96-1.34,15.46-7.14,8.3-14.82,16.17-23.24,23.17-5.73,4.76-13.92,3.76-19.02-1.4-5.12-5.18-6.02-13.33-1.2-19.04,7.06-8.37,15.01-15.94,23.16-23.26,2.38-2.14,5.47-2.86,8.15-2.72Z' />
          <path d='m69.1,345.4c-6.51.09-10.91-2.63-13.53-7.78-2.7-5.29-2.58-10.96,1.29-15.47,7.13-8.3,14.84-16.15,23.23-23.18,5.71-4.78,13.9-3.8,19.03,1.35,5.13,5.16,6.06,13.31,1.25,19.03-7.04,8.39-15,15.95-23.15,23.27-2.38,2.13-5.47,2.88-8.12,2.76Z' />
          <path d='m345.1,330.27c.08,6.54-2.63,10.93-7.78,13.57-5.3,2.71-10.95,2.57-15.46-1.3-8.31-7.13-16.16-14.83-23.17-23.23-4.78-5.72-3.8-13.9,1.36-19.03,5.16-5.13,13.32-6.05,19.03-1.25,8.38,7.04,15.95,15,23.27,23.15,2.13,2.38,2.88,5.47,2.76,8.09Z' />
          <path d='m185.01,28.63c0-4.89-.12-9.79.03-14.68C185.27,5.73,191.51-.09,199.79,0c7.83.08,14.15,6.14,14.27,14.05.15,9.79.15,19.58,0,29.36-.12,8.25-6.37,14.2-14.55,14.19-8.06-.01-14.32-6.12-14.5-14.29-.11-4.89-.02-9.79-.01-14.68Z' />
          <path d='m370.63,185.3c4.89,0,9.79-.1,14.68.02,8.1.21,14.15,6.59,14.09,14.69-.06,7.99-5.92,14.2-13.94,14.34-9.93.17-19.87.18-29.81,0-7.85-.14-13.84-6.59-13.85-14.46-.01-8.07,5.73-14.27,13.7-14.55,5.04-.17,10.08-.03,15.13-.04Z' />
        </g>
      </svg>
    )
  } else if (theme === 'light') {
    buttonAriaLabel = 'Switch to Dark Mode'
    tooltipText = 'Switch to Dark Mode'
    // Moon icon for switching to dark mode
    icon = (
      <svg
        id='a'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 399.65 399.48'
        className='min-w-m min-h-m fill-golden'
      >
        <g id='b'>
          <path d='m195.36,399.48c-10.04-3.57-14.21-10.96-14.1-21.31.12-10.64-.1-21.28.07-31.91.2-12.3,8.37-20.06,20.27-19.55,8.81.37,16.15,7.05,16.83,16.86.9,13.05.79,26.19,0,39.27-.52,8.64-5.89,13.78-13.72,16.65h-9.36Z' />
          <path d='m399.65,204.55c-3.56,10.05-10.96,14.21-21.31,14.1-10.38-.11-20.76.03-31.13-.05-6.03-.05-11.61-1.5-15.73-6.31-5.02-5.86-6.11-12.54-3.26-19.62,3.04-7.56,9.22-11.21,17.07-11.42,11.93-.32,23.87-.27,35.8-.02,9.35.2,15.46,5.21,18.57,13.97v9.36Z' />
          <path d='m200.04,98.89c56.52-.45,101.21,46.85,101.07,101.16-.14,55.21-45.9,100.88-101.07,100.88-55.13,0-101.18-45.82-101.08-101.27.1-54.45,45.02-101.21,101.08-100.78Z' />
          <path d='m218.87,36.49c-.4,7,.53,14.03-.59,21.01-1.47,9.16-8.63,15.44-17.69,15.57-9.47.13-16.93-5.78-18.73-14.85-.1-.51-.24-1.02-.26-1.54-.4-13.76-1.09-27.55.32-41.25C182.87,6.22,190.77,0,200.07,0c9.28,0,16.7,6.3,18.2,15.47,1.14,6.98.2,14.01.6,21.01Z' />
          <path d='m37,181.15c5.85,0,11.7-.19,17.54.04,9.33.37,16.33,5.93,18.34,14.2,1.95,8.03-1.8,16.66-8.97,20.68-3.27,1.83-6.86,2.47-10.51,2.5-11.17.09-22.35.14-33.52,0-8-.1-14.49-3.22-17.98-10.79-3.15-6.82-2.36-13.45,2.21-19.45,4.03-5.3,9.75-7.09,16.13-7.19,5.59-.08,11.17-.02,16.76-.02,0,0,0,.01,0,.02Z' />
          <path d='m301.55,283.16c5.47.23,9.98,2,13.64,5.63,8.66,8.58,17.37,17.12,25.84,25.89,7.4,7.66,7.24,19.02-.03,26.24-7.26,7.22-18.58,7.3-26.25-.13-8.75-8.48-17.4-17.09-25.85-25.88-5.62-5.84-7.26-12.86-3.86-20.44,3.2-7.16,9.08-10.72,16.51-11.31Z' />
          <path d='m72.09,53.32c5.1.31,9.63,1.98,13.3,5.64,8.54,8.52,17.16,16.96,25.56,25.61,7.58,7.79,7.62,18.81.38,26.21-7.41,7.58-18.55,7.77-26.47.11-8.76-8.47-17.39-17.09-25.85-25.87-5.65-5.86-7.09-12.9-3.79-20.46,3.16-7.26,9.15-10.63,16.87-11.23Z' />
          <path d='m302.06,116.57c-7.59-.45-13.57-3.86-16.87-10.99-3.39-7.33-2.09-14.26,3.24-20.22,3.62-4.06,7.63-7.77,11.48-11.62,4.86-4.86,9.65-9.79,14.6-14.56,5.6-5.4,12.19-7.29,19.66-4.58,7.28,2.64,11.29,8.08,12.2,15.68.67,5.6-1.2,10.58-5.1,14.56-8.71,8.9-17.54,17.67-26.4,26.42-3.46,3.41-7.8,5.02-12.81,5.32Z' />
          <path d='m72.11,346.42c-7.38-.56-13.24-3.69-16.55-10.51-3.38-6.94-2.94-14.03,2.25-19.64,9.15-9.9,18.67-19.48,28.57-28.62,7.2-6.65,17.78-5.77,24.67,1.03,6.89,6.79,7.97,17.42,1.37,24.64-9.18,10.04-19.07,19.43-28.81,28.93-3.08,3-7.27,3.84-11.49,4.17Z' />
        </g>
      </svg>
    )
  } else {
    // theme === "dark"
    buttonAriaLabel = 'Switch to System Default'
    tooltipText = 'Switch to System Default'
    // System/Desktop icon for switching to system mode
    icon = (
      <svg
        id='a'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 400 400'
        className='min-w-m min-h-m fill-secondary'
      >
        <g id='b'>
          <path d='m204.26,349.98c-42.72-.54-79.59-15.48-109.77-45.81-24.38-24.51-38.78-54.22-43.2-88.59-9.07-70.44,30.67-137.62,96.55-163.39,1.06-.42,2.14-.8,3.21-1.2,4.33-1.61,8.43-1.42,11.89,1.91,3.5,3.36,3.71,7.54,2.23,11.85-5.2,15.08-7.83,30.59-7.37,46.53.93,32.47,11.85,61.19,33.38,85.6,21.53,24.41,48.62,38.93,80.74,43.88,20.67,3.19,41.01,1.28,60.91-5.18.99-.32,1.97-.66,2.96-.97,4.19-1.3,8.08-.87,11.24,2.39,3.15,3.24,3.62,7.16,2.14,11.29-6.17,17.2-15.08,32.85-26.92,46.77-21.83,25.66-49.1,42.64-81.85,50.65-11.84,2.9-23.88,4.49-36.15,4.27Z' />
        </g>
        <rect width='400' height='400' fill='none' />
      </svg>
    )
  }

  return (
    <Tooltip text={tooltipText} position={tooltipPosition}>
      <button
        aria-label={buttonAriaLabel} // Keep aria-label for accessibility
        onClick={toggleTheme}
        className={`flex flex-row items-center justify-center hover:bg-golden/25 dark:hover:bg-secondary/40 transition-colors duration-200 ${theme === 'light' && 'hover:!bg-golden/25'} ${theme === 'dark' && 'hover:!bg-secondary/40'} ${
          showActiveState ?
            theme === 'light' ?
              'outline outline-golden/50 py-2xs px-s gap-xs rounded-full'
            : 'outline outline-golden/50 dark:outline-secondary/50 py-2xs px-s gap-xs rounded-full'
          : 'p-2xs rounded-md'
        }`}
        // Removed title attribute as Tooltip component handles this
      >
        {icon}
        {showActiveState && (
          <Typography type='lg' leading='flat' className='whitespace-nowrap'>
            {theme === 'light' && 'Light Mode'}
            {theme === 'dark' && 'Dark Mode'}
            {theme === 'system' && 'System Default'}
          </Typography>
        )}
      </button>
    </Tooltip>
  )
}

export default ThemeToggleButton
