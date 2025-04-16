// app/components/projects/BlenderProjects.tsx
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { graphicDesignProjects } from '@/helpers/constants';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface GraphicDesignProjectsProps {}

const GraphicDesignProjects: React.FC<GraphicDesignProjectsProps> = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="w-full">
      <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-0.5 sm:gap-1 lg:gap-1.5 2xl:gap-2">
        {graphicDesignProjects.map((project, index) => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);
          const touchStartX = useRef<number>(0);
          const touchEndX = useRef<number>(0);
          const isDragging = useRef<boolean>(false);
          const direction = useRef<'left' | 'right'>('left');
          const ref = useRef<HTMLDivElement>(null);
          const isInView = useInView(ref, {
            once: false,
            margin: '15% 0% 0% 0%',
            amount: 1,
          });

          const handleStart = (clientX: number) => {
            touchStartX.current = clientX;
            isDragging.current = true;
          };

          const handleMove = (clientX: number) => {
            if (!isDragging.current) return;
            touchEndX.current = clientX;
          };

          const handleEnd = () => {
            if (!isDragging.current) return;

            if (!touchStartX.current || !touchEndX.current) {
              isDragging.current = false;
              return;
            }

            const diff = touchStartX.current - touchEndX.current;
            const minSwipeDistance = 50; // minimum distance for a swipe

            if (Math.abs(diff) > minSwipeDistance) {
              if (diff > 0) {
                // Swiped left
                direction.current = 'left';
                setCurrentImageIndex(prev => (prev === project.image.length - 1 ? 0 : prev + 1));
              } else {
                // Swiped right
                direction.current = 'right';
                setCurrentImageIndex(prev => (prev === 0 ? project.image.length - 1 : prev - 1));
              }
            }

            // Reset values
            touchStartX.current = 0;
            touchEndX.current = 0;
            isDragging.current = false;
          };

          return (
            <div
              key={index}
              ref={ref}
              className="break-inside-avoid mb-1 lg:mb-1.5 group transition-shadow duration-300 relative"
            >
              <div
                className={`relative w-full overflow-hidden bg-white rounded-xl select-none ${project.image.length > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
                onTouchStart={e => handleStart(e.touches[0].clientX)}
                onTouchMove={e => handleMove(e.touches[0].clientX)}
                onTouchEnd={handleEnd}
                onMouseDown={e => handleStart(e.clientX)}
                onMouseMove={e => handleMove(e.clientX)}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    layout
                    key={currentImageIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      layout: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 },
                    }}
                    className="relative w-full"
                  >
                    <Image
                      src={project.image[currentImageIndex]}
                      alt={project.title}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105 select-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1535px) 33vw, 400px"
                      loading="lazy"
                      placeholder="blur"
                    />
                  </motion.div>
                </AnimatePresence>
                {/* {project.image.length > 1 && (
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <div className="flex flex-row gap-2 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                      <Layers2 className="w-4 h-4 stroke-1.5 mt-0.5" />
                      <Typography type={TextTypes['sm']} className="text-white">
                        {project.image.length + ' images'}
                      </Typography>
                    </div>
                  </div>
                )} */}
                {project.image.length > 1 && (
                  <div className="absolute bottom-2 right-2 flex items-center gap-1">
                    <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                      <Typography type={TextTypes['sm']} className="text-white">
                        {`${currentImageIndex + 1} / ${project.image.length}`}
                      </Typography>
                    </div>
                  </div>
                )}
              </div>
              {project.image.length > 1 && (
                <div className="mt-1 overflow-x-auto no-scrollbar">
                  <div className="flex gap-1 w-full">
                    {project.image.map((img, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => {
                          direction.current = imgIndex > currentImageIndex ? 'left' : 'right';
                          setCurrentImageIndex(imgIndex);
                        }}
                        className={`relative w-full h-16 flex-grow rounded-md overflow-hidden transition-opacity ${
                          currentImageIndex === imgIndex ? '' : 'opacity-50 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="object-cover"
                          fill
                          sizes="200px"
                          loading="lazy"
                          placeholder="blur"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div
                className={`py-6 z-2 pointer-events-none absolute flex flex-col justify-center items-center top-0 -translate-y-[100%] left-0 right-0 w-full h-fit transition-opacity duration-300 ${
                  isMobile
                    ? isInView
                      ? 'opacity-100'
                      : 'opacity-0'
                    : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <span className="absolute bottom-0 w-full h-[500%] bg-linear-to-t from-primary-accent to-primary-accent/0" />
                <Typography type={TextTypes['xl']} weight={WeightTypes.bold}>
                  {project.title}
                </Typography>
              </div>
              <div
                className={`py-6 z-2 pointer-events-none absolute flex flex-col justify-center items-end bottom-0 translate-y-[100%] right-0 w-full h-fit transition-opacity duration-300 ${
                  isMobile
                    ? isInView
                      ? 'opacity-100'
                      : 'opacity-0'
                    : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <span className="absolute top-0 w-full h-[500%] bg-linear-to-b from-primary-accent to-primary-accent/0" />
                <Typography type={TextTypes['sm']} className="mx-6 text-center">
                  {project.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GraphicDesignProjects;
