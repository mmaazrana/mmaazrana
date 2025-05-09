'use client'

import Typography from '@/components/Typography'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

interface TechnologyCardProps {
  tech: {
    icon: { Icon: React.ComponentType<any>; props: { fill: string } }
    title: string
    usage: string
  }
}

export default function TechnologyCard({ tech }: TechnologyCardProps) {
  const isMobile = useMediaQuery({ maxWidth: 640 })
  const cardRef = useRef(null)
  const cardIsInView = useInView(cardRef, { margin: `-45% 0px -45% 0px`, amount: 0.2 })
  return (
    <div
      ref={cardRef}
      className={`relative overflow-visible flex flex-col items-center justify-center rounded-rect about:aspect-square hover:-translate-y-4 transition-all duration-300 group ${cardIsInView && isMobile && '-translate-y-4'}`}
    >
      <div className='absolute -z-10 w-full h-full overflow-visible group'>
        <span
          style={{
            background: tech.icon.props.fill,
            filter: `drop-shadow(0px 50px 50px ${tech.icon.props.fill})`,
          }}
          className={`absolute -z-10 overflow-visible w-full h-full min-w-full min-h-full !transition-opacity rounded-rect opacity-0 group-hover:opacity-25 -z-1 ${cardIsInView && isMobile && 'opacity-25'}`}
        />
        <svg width='100' height='100' className='absolute w-full h-full overflow-visible group'>
          <rect
            x='0'
            y='0'
            width='100%'
            height='100%'
            fill={tech.icon.props.fill}
            fillOpacity={0.15}
            stroke={tech.icon.props.fill}
            strokeOpacity={0.85}
            strokeWidth={1}
            className={`w-full h-full min-w-full min-h-full !transition-all rounded-rect opacity-25 group-hover:opacity-50 ${cardIsInView && isMobile && 'opacity-50'}`}
          />
          <rect
            x='0'
            y='0'
            fill={tech.icon.props.fill}
            fillOpacity={0.05}
            stroke={tech.icon.props.fill}
            strokeOpacity={0.85}
            strokeWidth={1}
            width='100%'
            height='100%'
            className={`w-full h-full min-w-full min-h-full !transition-all rounded-rect opacity-0 group-hover:opacity-50 -z-1 ${cardIsInView && isMobile && 'opacity-50'}`}
          />
        </svg>
      </div>
      <div className='flex flex-col self-center items-center justify-center gap-l py-4xl about:p-2xl'>
        {tech.icon && <tech.icon.Icon className='w-8xl h-8xl' {...tech.icon.props} />}
        <div className='flex flex-col items-center justify-center gap-3xs'>
          <Typography tag='h3' type='2xl' weight='bold' className='text-center'>
            {tech.title}
          </Typography>
          <Typography type='lg' weight='light' className='text-center opacity-75'>
            {tech.usage}
          </Typography>
        </div>
      </div>
    </div>
  )
}
