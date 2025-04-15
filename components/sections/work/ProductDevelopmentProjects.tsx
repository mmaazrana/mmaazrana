// app/components/projects/ProductDesignProjects.tsx
import React from 'react';
import ProjectCard from '@/components/cards/ProjectCard';
import ProjectCardMobile from '@/components/cards/mobile/ProjectCardMobile';
import { productDevelopmentProjects } from '@/helpers/constants';

interface ProductDesignProjectsProps {}

const ProductDesignProjects: React.FC<ProductDesignProjectsProps> = () => {
  return (
    <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
      <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
        {/* Desktop Layout */}
        {Array.from({ length: Math.ceil(productDevelopmentProjects.length / 2) }).map(
          (_, groupIndex) => (
            <div
              key={groupIndex}
              className={'hidden sm:flex flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 '}
            >
              {productDevelopmentProjects
                .slice(groupIndex * 2, groupIndex * 2 + 2)
                .map((project, i) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.shortDescription}
                    image={project.images.main}
                    altImage={project.images.screenshots[0]}
                    alt={groupIndex % 2 === 0 ? i % 2 === 1 : i % 2 !== 1}
                  />
                ))}
            </div>
          )
        )}

        {/* Mobile Layout */}
        <div className={'flex sm:hidden flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
          {productDevelopmentProjects.map((project, i) => (
            <ProjectCardMobile
              key={i}
              title={project.title}
              description={project.shortDescription}
              image={project.images.main}
              altImage={project.images.screenshots[0]}
              alt={i > 0 && Math.floor((i - 1) / 2) % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDesignProjects;
