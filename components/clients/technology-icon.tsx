import React from 'react'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'

interface TechnologyIconProps {
  technology: {
    title: string
    Icon: { Icon: React.ComponentType<{ className?: string }>; props: { fill: string } }
  }
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ technology }) => {
  return (
    <div
      className={
        'relative flex flex-row justify-center items-center ml-1 px-s py-xs gap-2xs rounded-full group cursor-default'
      }
    >
      <span
        style={{ filter: `drop-shadow(0px 0px 50px ${technology.Icon.props.fill})` }}
        className={
          '-z-1 bg-primary-accent/15 absolute top-0 left-0 w-full h-full rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300'
        }
      />
      <span
        style={{ backgroundColor: technology.Icon.props.fill }}
        className={
          '-z-1 absolute top-0 left-0 w-full h-full rounded-full opacity-5 group-hover:opacity-30 transition-opacity duration-300'
        }
      />
      <span
        style={{ outlineColor: technology.Icon.props.fill }}
        className={
          '-z-1 absolute top-0 left-0 w-full h-full rounded-full outline outline-1 opacity-35 group-hover:opacity-70 transition-opacity duration-300'
        }
      />
      <technology.Icon.Icon {...technology.Icon.props} className='h-m w-m' />
      <Typography type='lg' weight='regular' leading='flat' className='mt-[0.05em]'>
        {technology.title}
      </Typography>
    </div>
  )
}

export default TechnologyIcon
