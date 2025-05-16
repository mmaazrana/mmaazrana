import TechnologyCard from '../cards/technology-card'
import { ProjectAnalysisT } from '@/helpers/project-analytics'

interface TechStackProps {
  projectData: ProjectAnalysisT
}

export default function ProjectTechStack({ projectData }: TechStackProps) {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 about:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-10 sm:mb-4 gap-s'>
        {projectData.techStack.map((tech, index) => (
          <TechnologyCard
            key={index}
            title={tech.title}
            usage={tech.usage}
            fill={tech.icon.props.fill}
          >
            <tech.icon.Icon className='w-8xl h-8xl' {...tech.icon.props} />
          </TechnologyCard>
        ))}
      </div>
    </div>
  )
}
