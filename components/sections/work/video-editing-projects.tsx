// app/components/projects/BlenderProjects.tsx
import VideoProjectCard from '@/components/cards/video-project-card'
import { videoProjects } from '@/helpers/constants'
import React from 'react'

interface VideoEditingProjectsProps {}

const VideoEditingProjects: React.FC<VideoEditingProjectsProps> = () => {
  return (
    <div className='w-full'>
      <div className='columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-0.5 sm:gap-1 lg:gap-1.5 2xl:gap-2'>
        {videoProjects.map((project, index) => {
          return (
            <VideoProjectCard
              key={index}
              fileName={project.fileName}
              thumbnail={project.thumbnail}
            />
          )
        })}
      </div>
    </div>
  )
}

export default VideoEditingProjects
