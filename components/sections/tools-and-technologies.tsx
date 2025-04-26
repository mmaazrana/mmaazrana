import React from 'react'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import { FlaskRound } from 'lucide-react'
import TechnologyIcon from './technology-icon'

interface ToolsAndTechnologiesProps {
  technologies: Array<{
    title: string
    Icon: { Icon: React.ComponentType<{ className?: string }>; props: { fill: string } }
  }>
}

const ToolsAndTechnologies: React.FC<ToolsAndTechnologiesProps> = ({ technologies }) => {
  return (
    <div className='flex flex-col gap-xl'>
      <div className='flex flex-row gap-2xs items-center'>
        <div className={`h-(--fluid-1-2) w-m bg-secondary opacity-75`} />
        <FlaskRound className={'ml-3xs h-5xl w-5xl stroke-secondary stroke-1'} />
        <Typography type='3xl' weight='bold' className='flat'>
          Tools & Technologies
        </Typography>
      </div>
      <div className={'flex flex-wrap gap-x-xs gap-y-s ml-0 md:ml-3xl mb-xl'}>
        {technologies.map((technology, index) => (
          <TechnologyIcon key={index} technology={technology} />
        ))}
      </div>
    </div>
  )
}

export default ToolsAndTechnologies
