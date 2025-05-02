'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import Typography from '@/components/Typography'
import { ColorTypes, TextTypes } from '@/helpers/enums'

interface NavLinkProps {
  href: string
  text: string
  isActive?: boolean
  type?: TextTypes
  color?: ColorTypes
}

const NavLink: FC<NavLinkProps> = ({ href, text, isActive, type = 'xl', color }) => (
  <div className='transition-colors'>
    <Link href={href} aria-label={text}>
      <Typography
        type={type}
        color={color}
        className={`${isActive ? 'opacity-100' : 'opacity-30 hover:opacity-50'} transition-opacity duration-300 whitespace-nowrap`}
      >
        {text}
      </Typography>
    </Link>
  </div>
)

export default NavLink
