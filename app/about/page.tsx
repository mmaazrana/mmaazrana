import React from 'react'
import Typography from '@/components/typography'
import {} from '@/helpers/enums'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me (Under Construction)',
  description:
    "Learn more about Maaz Rana's background, skills, and experience in product design and development. Page currently under construction.",
  robots: { index: false, follow: false }, // Tell search engines not to index this page yet
}

function AboutPage() {
  return (
    <div className='flex w-full h-[100dvh] justify-center items-center m-auto'>
      <Typography weight='black' type='9xl'>
        Under Construction
      </Typography>
    </div>
  )
}

export default AboutPage
