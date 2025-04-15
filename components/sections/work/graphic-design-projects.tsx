// app/components/projects/BlenderProjects.tsx
import React from 'react';

interface GraphicDesignProjectsProps {}

const GraphicDesignProjects: React.FC<GraphicDesignProjectsProps> = () => {
  return (
    <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
      <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
        Graphic Design Projects to be added here
      </div>
    </div>
  );
};

export default GraphicDesignProjects;
