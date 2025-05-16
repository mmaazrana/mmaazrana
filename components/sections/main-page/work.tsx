import React, { FC } from 'react'
import ProjectCard from '@/components/cards/project-card'
import { featuredProjects } from '@/helpers/constants'
import ProjectCardMobile from '@/components/cards/mobile/project-card-mobile'
import { Sections } from '@/helpers/enums'
import MainSectionTitle from '@/components/main-section-title'
import { ProjectAnalysisT } from '@/helpers/project-analytics'

interface WorkProps {
  title?: string
  projects?: ProjectAnalysisT[]
}

const Work: FC<WorkProps> = ({
  title = 'Featured Work',
  projects = featuredProjects.slice(0, 4),
}) => {
  return (
    <section
      id={Sections.work}
      className={'px-4xl gap-4xl flex items-start justify-center flex-col w-full'}
    >
      <MainSectionTitle title={title} buttonText='View Portfolio' href='/portfolio' />
      <div className='w-full flex flex-col gap-2xl'>
        {/* Desktop Layout */}
        {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, groupIndex) => (
          <div key={groupIndex} className='hidden sm:flex flex-row gap-2xl '>
            {projects.slice(groupIndex * 2, groupIndex * 2 + 2).map((project, i) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.shortDescription}
                image={project.images.main}
                altImage={project.images.screenshots[0]}
                alt={groupIndex % 2 === 0 ? i % 2 === 1 : i % 2 !== 1}
                testimonialKey={project.affiliateWith}
              />
            ))}
          </div>
        ))}
        {/* Mobile Layout */}
        <div className='flex sm:hidden flex-col gap-2xl'>
          {projects.map((project, i) => (
            <ProjectCardMobile
              key={i}
              title={project.title}
              description={project.shortDescription}
              image={project.images.main}
              altImage={project.images.screenshots[0]}
              alt={i > 0 && Math.floor((i - 1) / 2) % 2 === 0}
              testimonialKey={project.affiliateWith}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
