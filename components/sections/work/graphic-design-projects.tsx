// app/components/projects/BlenderProjects.tsx
import React from 'react';
import { graphicDesignProjects } from '@/helpers/constants';
import ImageProjectCard from '@/components/cards/image-project-card';

interface GraphicDesignProjectsProps {}

const GraphicDesignProjects: React.FC<GraphicDesignProjectsProps> = () => {
  return (
    <div className="w-full">
      <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-0.5 sm:gap-1 lg:gap-1.5 2xl:gap-2">
        {graphicDesignProjects.map((project, index) => {
          return <ImageProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default GraphicDesignProjects;
