// app/components/projects/BlenderProjects.tsx
import React from 'react';

interface VideoEditingProjectsProps {}

const VideoEditingProjects: React.FC<VideoEditingProjectsProps> = () => {
  return (
    <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
      <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
        Video Editing Projects to be added here
      </div>
    </div>
  );
};

export default VideoEditingProjects;
