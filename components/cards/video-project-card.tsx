import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { PlayIcon } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface VideoProjectCardProps {
  fileName: string
  thumbnail: StaticImageData
}

export default function VideoProjectCard({ fileName, thumbnail }: VideoProjectCardProps) {
  return (
    <div className='relative w-full h-fit mb-1 lg:mb-1.5 rounded-lg hover:-translate-y-2 transition-transform duration-300 overflow-hidden'>
      <ReactPlayer
        url={`${process.env.NEXT_PUBLIC_CDN_BASE_URL}/${fileName}`}
        light={
          <Image
            src={thumbnail}
            placeholder='blur'
            alt='Thumbnail'
            loading='lazy'
            className='relative w-full h-fit -z-1 object-cover'
          />
        }
        controls
        volume={0.25}
        playsinline
        playing
        fallback={
          <div className='w-full aspect-video bg-secondary/5 rounded-lg overflow-hidden flex items-center justify-center animate-pulse'>
            <div
              className='flex flex-col items-center justify-center gap-2'
              style={{ animation: 'fadeIn 1s ease-in-out infinite alternate' }}
            >
              <div className='w-12 h-12 border-4 border-secondary-hover border-t-secondary rounded-full animate-spin' />
            </div>
          </div>
        }
        playIcon={
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 about:p-3 md:p-4 flex items-center justify-center rounded-full bg-white/25 backdrop-blur-sm shadow-xl z-1'>
            <PlayIcon className='w-8 about:w-10 md:w-12 h-8 about:h-10 md:h-12 fill-white/50 stroke-white/50 stroke-[0.5px]' />
          </div>
        }
        width='100%'
        height='100%'
      />
    </div>
  )
}
