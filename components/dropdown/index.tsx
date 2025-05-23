import React, { FC, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { DropdownItemT } from '@/helpers/types'
import Typography from '../Typography'

interface DropdownProps {
  title: string
  items: DropdownItemT[]
}

const Dropdown: FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const [closeTimeoutId, setCloseTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const toggleOpen = (): void => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = (): void => {
    if (window.innerWidth >= 1024) {
      if (closeTimeoutId) {
        clearTimeout(closeTimeoutId)
        setCloseTimeoutId(null)
      }
      setIsOpen(true)
    }
  }

  const handleMouseLeave = (): void => {
    if (window.innerWidth >= 1024) {
      const timeoutId = setTimeout(() => {
        setIsOpen(false)
      }, 200) // 200ms delay before closing
      setCloseTimeoutId(timeoutId)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (window.innerWidth >= 1024) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <li
      ref={dropdownRef}
      className='relative self-center mt-3xs mb-2xs nav:mb-0 nav:mt-0 border-b border-secondary/50 nav:border-none'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type='button'
        onClick={toggleOpen} // Click toggles state, relevant for mobile accordion
        aria-haspopup='true'
        aria-expanded={isOpen}
        aria-label={`${title} Dropdown`}
        className='flex items-center pt-xs pb-s nav:pb-xs px-m gap-2xs rounded-full hover:bg-secondary-hover justify-between nav:justify-center items-center w-full nav:w-auto !transition-colors duration-200 font-light group'
      >
        <Typography type='xl' weight='light'>
          {title}
        </Typography>
        <ChevronDown
          className={`h-s w-s stroke-secondary transform transition-all duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'} nav:group-hover:stroke-primary-hover`}
        />
      </button>

      <div
        className={`
            nav:hidden
            overflow-hidden !transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100 mb-xs mt-2xs' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className='flex flex-col gap-2xs px-3xs'>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                aria-label={item.text}
                className='flex flex-row justify-start items-center gap-2xs px-s py-2xs rounded-full'
                onClick={() => setIsOpen(false)} // Close accordion on item click
              >
                <Typography type='lg' weight='light' color='primary-hover' className='opacity-90'>
                  {item.text}
                </Typography>
                {item.rightIcon && <div>{item.rightIcon}</div>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`
            hidden nav:block absolute left-0 top-full mt-xs z-10 w-fit rounded-xl shadow-lg bg-secondary-hover/50 backdrop-blur-sm ring-1 ring-secondary/25 focus:outline-none
            transition-opacity duration-200 ease-out
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
         `}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='options-menu'
      >
        <ul className='p-xs space-y-3xs' role='none'>
          {items.map((item, index) => (
            <li key={index} role='none'>
              <Link
                href={item.href}
                aria-label={item.text}
                className='flex flex-row justify-start items-center gap-2xs px-s py-xs rounded-full hover:bg-secondary/30 !transition-colors duration-200'
                role='menuitem'
                onClick={() => setIsOpen(false)}
              >
                <Typography
                  type='lg'
                  weight='regular'
                  color='primary-hover'
                  className='whitespace-nowrap'
                >
                  {item.text}
                </Typography>
                {item.rightIcon && <div>{item.rightIcon}</div>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Dropdown
