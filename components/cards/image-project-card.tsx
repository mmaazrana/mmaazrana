// app/components/projects/BlenderProjects.tsx
import React, { useState, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { GraphicDesignProjectT } from '@/helpers/types'

interface ImageProjectCardProps {
  project: GraphicDesignProjectT
}

const ImageProjectCard: React.FC<ImageProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const isDragging = useRef<boolean>(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const direction = useRef<'left' | 'right'>('left')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '15% 0% 0% 0%', amount: 1 })

  const handleStart = (clientX: number) => {
    touchStartX.current = clientX
    isDragging.current = true
  }

  const handleMove = (clientX: number) => {
    if (!isDragging.current) return
    touchEndX.current = clientX
  }

  const handleEnd = () => {
    if (!isDragging.current) return

    if (!touchStartX.current || !touchEndX.current) {
      isDragging.current = false
      return
    }

    const diff = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50 // minimum distance for a swipe

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swiped left
        direction.current = 'left'
        setCurrentImageIndex(prev => (prev === project.image.length - 1 ? 0 : prev + 1))
      } else {
        // Swiped right
        direction.current = 'right'
        setCurrentImageIndex(prev => (prev === 0 ? project.image.length - 1 : prev - 1))
      }
    }

    // Reset values
    touchStartX.current = 0
    touchEndX.current = 0
    isDragging.current = false
  }

  return (
    <div
      ref={ref}
      className='break-inside-avoid mb-1 lg:mb-1.5 group transition-shadow duration-300 relative'
    >
      <div
        className={`relative w-full overflow-hidden bg-white rounded-xl select-none ${project.image.length > 1 ? 'touch-none cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
        onTouchStart={e => handleStart(e.touches[0].clientX)}
        onTouchMove={e => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={e => handleStart(e.clientX)}
        onMouseMove={e => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            layout
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              layout: { type: 'spring', stiffness: 400, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className='relative w-full'
          >
            <Image
              src={project.image[currentImageIndex]}
              alt={project.title}
              className={`w-full h-auto transition-transform duration-300  select-none 
                        ${isMobile && isInView ? 'scale-105' : 'pointer-events-none touch-none group-hover:scale-105'}
                        `}
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1535px) 33vw, 400px'
              loading='lazy'
              placeholder='blur'
            />
          </motion.div>
        </AnimatePresence>
        {project.image.length > 1 && (
          <div className='absolute bottom-2 right-2 flex items-center gap-1'>
            <div className='bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full'>
              <Typography type='sm' className='text-white'>
                {`${currentImageIndex + 1} / ${project.image.length}`}
              </Typography>
            </div>
          </div>
        )}
      </div>
      {project.image.length > 1 && (
        <div className='mt-1 overflow-x-auto no-scrollbar'>
          <div className='flex gap-1 w-full'>
            {project.image.map((img: StaticImageData, imgIndex: number) => (
              <button
                key={imgIndex}
                onClick={() => {
                  direction.current = imgIndex > currentImageIndex ? 'left' : 'right'
                  setCurrentImageIndex(imgIndex)
                }}
                className={`relative w-full h-16 flex-grow rounded-md overflow-hidden transition-opacity ${
                  currentImageIndex === imgIndex ? '' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${imgIndex + 1}`}
                  className='object-cover'
                  fill
                  sizes='200px'
                  loading='lazy'
                  placeholder='blur'
                />
              </button>
            ))}
          </div>
        </div>
      )}
      <div
        className={`py-3 sm:py-4 z-2 pointer-events-none absolute flex flex-col justify-center items-center top-0 -translate-y-[100%] w-full h-fit !transition-opacity !duration-300 ${
          isMobile ?
            isInView ? 'opacity-100'
            : 'opacity-0'
          : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <span className='absolute bottom-0 w-full h-[500%] bg-linear-to-t from-primary-accent to-primary-accent/0' />
        <Typography type='xl' weight='bold'>
          {project.title}
        </Typography>
      </div>
      <div
        className={`py-4 sm:py-6 z-2 pointer-events-none absolute flex flex-col justify-center items-center bottom-0 translate-y-[100%] w-full h-fit !transition-opacity !duration-300 ${
          isMobile ?
            isInView ? 'opacity-100'
            : 'opacity-0'
          : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <span className='absolute top-0 w-full h-[500%] bg-linear-to-b from-primary-accent to-primary-accent/0' />
        <Typography type='base' className='mx-6 text-center'>
          {project.description}
        </Typography>
      </div>
    </div>
  )
}

export default ImageProjectCard
