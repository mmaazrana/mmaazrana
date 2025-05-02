'use client'
import TechnologyCard from '../cards/technology-card'
import { getProjectData } from '@/helpers/parsers'

interface TechStackProps {
  project: string
}

export default function ProjectTechStack({ project }: TechStackProps) {
  const projectData = getProjectData(project)
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 about:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-10 sm:mb-4 gap-s'>
        {projectData.techStack.map((tech, index) => (
          <TechnologyCard key={index} tech={tech} />
        ))}
      </div>
    </div>
  )
}
