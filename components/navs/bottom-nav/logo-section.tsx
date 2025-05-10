import React, { FC } from 'react'
import * as m from 'motion/react-m'
import Typography from '@/components/Typography'
import Logo from './logo'
import Link from 'next/link'
import { WorkCategories } from '@/helpers/enums'
import ThemeToggleButton from '@/components/button/theme-toggle-button'

interface LogoSectionProps {
  isEndOfPage: boolean
}

const LogoSection: FC<LogoSectionProps> = ({ isEndOfPage }) => {
  return (
    <div
      className={
        'flex flex-col items-start justify-between w-full lg:w-fit lg:max-w-fit overflow-hidden h-full gap-xl overflow-visible'
      }
    >
      <div
        className={
          'flex flex-col items-start justify-start w-full lg:w-fit lg:max-w-fit overflow-hidden min-h-fit h-fit gap-xs'
        }
      >
        <Logo />
        <m.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isEndOfPage ? 1 : 0, y: isEndOfPage ? 0 : 100 }}
          transition={{ duration: 0.25, delay: isEndOfPage ? 0.25 : 0 }}
          className={`transition-none w-full min-w-full max-w-[32.5rem] inline-block ${isEndOfPage ? 'inline-block' : 'hidden'}`}
        >
          <Link href={`/portfolio?tab=${WorkCategories.productDesign}`}>
            <Typography
              type='lg'
              weight='light'
              leading='prose'
              className={`inline opacity-75 shrink hover:opacity-100 transition-opacity duration-200`}
            >
              Product Designer
            </Typography>
          </Link>
          <Typography
            type='lg'
            weight='light'
            leading='prose'
            className={`inline opacity-75 shrink`}
          >
            &nbsp; - &nbsp;
          </Typography>
          <Link href={`/portfolio?tab=${WorkCategories.productDevelopment}`}>
            <Typography
              type='lg'
              weight='light'
              leading='prose'
              className={`inline opacity-75 shrink hover:opacity-100 transition-opacity duration-200`}
            >
              Web Developer
            </Typography>
          </Link>
          <Typography
            type='lg'
            weight='light'
            leading='prose'
            className={`inline opacity-75 shrink`}
          >
            &nbsp; - &nbsp;
          </Typography>
          <Link href={`/portfolio?tab=${WorkCategories.productDevelopment}`}>
            <Typography
              type='lg'
              weight='light'
              leading='prose'
              className={`inline opacity-75 shrink hover:opacity-100 transition-opacity duration-200`}
            >
              Mobile App Developer
            </Typography>
          </Link>
          <Typography
            type='lg'
            weight='light'
            leading='prose'
            className={`inline opacity-75 shrink`}
          >
            &nbsp; - &nbsp;
          </Typography>
          <Link href={`/portfolio?tab=${WorkCategories.videoEditing}`}>
            <Typography
              type='lg'
              weight='light'
              leading='prose'
              className={`inline opacity-75 shrink hover:opacity-100 transition-opacity duration-200`}
            >
              Animator
            </Typography>
          </Link>
          <Typography
            type='lg'
            weight='light'
            leading='prose'
            className={`inline opacity-75 shrink`}
          >
            &nbsp; - &nbsp;
          </Typography>
          <Link href={`/portfolio?tab=${WorkCategories.videoEditing}`}>
            <Typography
              type='lg'
              weight='light'
              leading='prose'
              className={`inline opacity-75 shrink hover:opacity-100 transition-opacity duration-200`}
            >
              Video Editor
            </Typography>
          </Link>
          <Typography
            type='lg'
            weight='light'
            leading='prose'
            className={`inline opacity-75 shrink`}
          >
            &nbsp; - &nbsp;
          </Typography>
          <Link href={`/portfolio?tab=${WorkCategories.illustration}`}>
            <Typography
              type='lg'
              weight='light'
              leading='prose'
              className={`inline opacity-75 shrink hover:opacity-100 transition-opacity duration-200`}
            >
              Graphics Designer
            </Typography>
          </Link>
          <Typography
            type='lg'
            weight='light'
            leading='prose'
            className={`inline opacity-75 shrink`}
          >
            &nbsp; - &nbsp;
          </Typography>
          <Link href={`/portfolio?tab=${WorkCategories.blender}`}>
            <Typography
              type='lg'
              weight='light'
              leading='prose'
              className={`inline opacity-75 shrink hover:opacity-100 transition-opacity duration-200`}
            >
              3D Artist
            </Typography>
          </Link>
        </m.div>
      </div>
      <div className='flex flex-row items-center w-full justify-start gap-m'>
        <ThemeToggleButton showActiveState={true} tooltipPosition='top' />
        <Typography type='lg' leading='flat' className='whitespace-nowrap text-primary-hover/50'>
          Current Theme
        </Typography>
      </div>
    </div>
  )
}

export default LogoSection
