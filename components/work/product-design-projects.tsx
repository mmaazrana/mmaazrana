// app/components/projects/ProductDesignProjects.tsx
import React from 'react'
import ProjectCard from '@/components/cards/project-card'
import ProjectCardMobile from '@/components/cards/mobile/project-card-mobile'
import { productDesignProjects } from '@/helpers/constants'

interface ProductDesignProjectsProps {}

export default function ProductDesignProjects({}: ProductDesignProjectsProps) {
  return (
    <div className='w-full flex flex-col gap-2xl'>
      <div className='w-full flex flex-col gap-2xl '>
        {/* Desktop Layout */}
        {Array.from({ length: Math.ceil(productDesignProjects.length / 2) }).map(
          (_, groupIndex) => (
            <div key={groupIndex} className='hidden sm:flex flex-row gap-2xl '>
              {productDesignProjects.slice(groupIndex * 2, groupIndex * 2 + 2).map((project, i) => (
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
          ),
        )}

        {/* Mobile Layout */}
        <div className='flex sm:hidden flex-col gap-2xl'>
          {productDesignProjects.map((project, i) => (
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
    </div>
  )
}
