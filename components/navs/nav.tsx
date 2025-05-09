'use client'

import React, { FC, useState } from 'react'
import { navButtons } from '@/helpers/constants'
import Link from 'next/link'
import MaazRanaLogo from '../icons/maaz-rana-logo'
import MenuButton from '@/components/button/menu-button'
import Button from '@/components/button'

interface NavProps {
  isSticky?: boolean
}

const Nav: FC<NavProps> = ({ isSticky = true }) => {
  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <nav
      id='navbar'
      className={`relative w-full xl:gap-12 w-[100vw]  ${isSticky ? 'sticky -top-2xs nav:-top-m z-50 ' : ''}`}
    >
      <div className='absolute top-0 left-0 z-100 w-full h-full bg-primary-accent/75 backdrop-blur-sm' />
      <div
        className={`relative z-1000 justify-between items-center mx-auto nav:items-center nav:flex max-w-8xl  px-2xl ${isSticky && 'pt-3xl pb-l nav:pb-m'}`}
      >
        <div>
          <div className=' flex items-center justify-between nav:block  '>
            <Link href='/' aria-label='Home'>
              <MaazRanaLogo />
            </Link>

            <div className='nav:hidden z-100 pointer-events-auto'>
              <MenuButton onClick={() => setShowNavbar(!showNavbar)} showNavbar={showNavbar} />
            </div>
          </div>
        </div>
        <div
          className={`absolute right-l top-10xl z-50 items-end justify-end text-left nav:rounded-none nav:pl-4 nav:relative nav:flex nav:right-0 nav:top-0 nav:z-0 ${
            showNavbar ? 'pointer-events-auto' : 'pointer-events-none nav:pointer-events-auto'
          }`}
        >
          <div
            className={`
              nav:bg-transparent nav:outline-transparent nav:opacity-100
              ${
                showNavbar ?
                  'bg-secondary-hover/50 backdrop-blur-sm outline outline-secondary-hover/75 pointer-events-auto block opacity-100 '
                : 'opacity-0 pointer-events-none nav:pointer-events-auto'
              }  rounded-2xl flex-1 justify-self-center max-w-fit shadow-lg p-4 mt-4 nav:block nav:p-0 nav:mt-0 nav:w-auto nav:shadow-none transition-opacity duration-300`}
          >
            <ul className='items-end justify-end nav:gap-2 lg:gap-3 xl:gap-3 nav:flex '>
              {navButtons.map((button, index) => (
                <li
                  key={index}
                  className={`${button.type === 'primary' ? 'w-40 nav:w-fit mt-3 nav:mt-0 nav:ml-3 lg:ml-4 xl:ml-5 2xl:ml-6' : 'mt-1 nav:mt-0'} self-center`}
                >
                  <Link href={button.href} aria-label={button.text} className='self-center'>
                    <Button
                      type={button.type}
                      text={button.text}
                      textWeight={button.type === 'primary' ? 'medium' : 'light'}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
