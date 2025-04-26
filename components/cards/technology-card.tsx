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
      className={`relative overflow-visible flex flex-col items-center justify-center rounded-xl sm:rounded-2xl md:rounded-3xl about:aspect-square hover:-translate-y-4 transition-all duration-300 group ${cardIsInView && isMobile && '-translate-y-4'}`}
    >
      <div className='absolute -z-10 w-full h-full overflow-visible group'>
        <span
          style={{
            background: tech.icon.props.fill,
            filter: `drop-shadow(0px 50px 50px ${tech.icon.props.fill})`,
          }}
          className={`absolute -z-10 overflow-visible w-full h-full min-w-full min-h-full !transition-opacity rounded-3xl opacity-0 group-hover:opacity-25 -z-1 ${cardIsInView && isMobile && 'opacity-25'}`}
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
      <div className='flex flex-col self-center items-center justify-center gap-5 xs:gap-6 md:gap-7 xl:gap-8  py-12 about:py-4 px-4'>
        {tech.icon && (
          <tech.icon.Icon
            className='w-8 xs:w-10 sm:w-12 md:w-14 lg:w-16 xl:w-18 2xl:w-20 h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-20'
            {...tech.icon.props}
          />
        )}
        <div className='flex flex-col items-center justify-center gap-1 sm:gap-1.5 lg:gap-2'>
          <Typography type='2xl' weight='bold' className='text-center'>
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
