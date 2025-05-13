'use client'
import Typography from '@/components/Typography'
// @ts-ignore
import React, { FC, useEffect, useState } from 'react'
import * as m from 'motion/react-m'
import {} from '@/helpers/enums'
import Link from 'next/link'

interface AccordionProps {
  heading: string
  content?: React.ReactElement
  className?: string
  isOpen: boolean
  queryString: string
  id?: string
}

const Accordion: FC<AccordionProps> = ({
  heading,
  content,
  className,
  isOpen, // Added back
  queryString, // Added
  id, // Added
}) => {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    setIsClicked(true)
    const timer = setTimeout(() => {
      setIsClicked(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [isOpen])

  return (
    <div id={id} className={`flex flex-col w-full max-w-full ${className}`}>
      <div className='relative flex w-full'>
        <div
          className={`absolute transition-all duration-300 top-1/2 -translate-y-1/2 h-(--fluid-1-2) rounded-full w-full bg-secondary ${isClicked ? 'opacity-100 scale-x-[0.985]' : 'opacity-75'}`}
        />
        <Link
          href={`/clients${queryString}`}
          scroll={false}
          className={'outline-0 border-0 flex flex-row justify-between items-center w-full px-l'}
        >
          <Typography
            tag='h3'
            type='4xl'
            weight='bold'
            className={'flex-0 sm:flex-initial px-m py-l bg-primary-accent text-left self-start'}
          >
            {heading}
          </Typography>
          <div className={'group relative p-s flex flex-row w-fit bg-primary-accent'}>
            <div className='group relative justify-center items-end outline-0 h-m w-m'>
              <span
                className={`bg-primary group-hover:bg-primary-hover absolute top-1/2 -translate-y-1/2 left-0 transition-all duration-300 ease-out h-(--fluid-2-4) w-m rounded-sm`}
              ></span>
              <span
                className={`bg-primary group-hover:bg-primary-hover absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out w-(--fluid-2-4) rounded-sm ${isOpen ? 'h-(--fluid-2-4)' : 'h-m'}`}
              ></span>
            </div>
          </div>
        </Link>
      </div>
      {content && (
        <m.div
          layout
          initial={{ maxHeight: '0px', opacity: 0 }}
          animate={{ maxHeight: isOpen ? '250rem' : '0px', opacity: isOpen ? 1 : 0 }}
          exit={{ maxHeight: '0px', opacity: 0 }}
          transition={{
            opacity: { duration: 0.25, ease: 'linear' },
            maxHeight: { duration: 0.5, ease: 'linear' },
          }}
          className={`h-auto overflow-hidden`}
        >
          {content}
        </m.div>
      )}
    </div>
  )
}

export default Accordion
