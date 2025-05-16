import React from 'react'

interface MenuButtonProps {
  onClick: () => void
  showNavbar: boolean
}

export default function MenuButton(props: MenuButtonProps) {
  return (
    <button
      aria-label='Navigation Menu Button'
      onClick={props.onClick}
      className={`grid justify-center items-end outline-0 p-2 cursor-pointer ${props.showNavbar ? 'items-start' : 'items-end'}`}
    >
      <span
        className={`block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${props.showNavbar ? 'bg-error rotate-45 translate-y-1 w-3   ' : 'bg-primary -translate-y-0.5 w-5'}`}
      ></span>
      <span
        className={`bg-primary transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${props.showNavbar ? 'opacity-0' : 'opacity-100'}`}
      ></span>
      <span
        className={` block transition-all duration-300 ease-out h-0.5 w-3 rounded-sm ${props.showNavbar ? 'bg-error -rotate-45 -translate-y-1 w-5  ' : 'bg-primary translate-y-0.5 w-3'}`}
      ></span>
    </button>
  )
}
