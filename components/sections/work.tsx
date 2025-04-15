import React, { FC } from 'react';
import ProjectCard from '@/components/cards/project-card';
import { projects } from '@/helpers/constants';
import ProjectCardMobile from '@/components/cards/mobile/project-card-mobile';

interface WorkProps {}

const Work: FC<WorkProps> = () => {
  return (
    <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
      {/* Desktop Layout */}
      {[projects.slice(0, 2), projects.slice(2, 4)].map((projectGroup, groupIndex) => (
        <div
          key={groupIndex}
          className={'hidden sm:flex flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}
        >
          {projectGroup.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              image={project.image}
              altImage={project.altImage}
              alt={groupIndex === 0 ? i % 2 === 1 : i % 2 !== 1}
            />
          ))}
        </div>
      ))}
      {/* Mobile Layout */}
      <div className={'flex sm:hidden flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
        {projects.map((project, i) => (
          <ProjectCardMobile
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            altImage={project.altImage}
            alt={i > 0 && Math.floor((i - 1) / 2) % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
