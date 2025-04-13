'use client';

import React, { FC, useRef, useEffect } from 'react';

import Image, { StaticImageData } from 'next/image';
import Typography from '@/components/Typography';

import { TextTypes, WeightTypes } from '@/helpers/enums';

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  alt: boolean;
  altImage?: StaticImageData;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, alt, altImage }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);
  const lastY = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startY.current = e.pageY;
    scrollTop.current = e.currentTarget.scrollTop;
    lastY.current = e.pageY;
    lastTime.current = performance.now();
    velocity.current = 0;
    cancelAnimationFrame(animationFrame.current!);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const currentTime = performance.now();
    const deltaTime = currentTime - lastTime.current;
    const deltaY = e.pageY - lastY.current;

    // Calculate velocity (pixels per millisecond)
    velocity.current = deltaY / deltaTime;

    // Apply scroll with velocity
    e.currentTarget.scrollTop = scrollTop.current - (e.pageY - startY.current);

    lastY.current = e.pageY;
    lastTime.current = currentTime;
  };

  const handleMouseUp = () => {
    isDragging.current = false;

    // Apply momentum scrolling
    const applyMomentum = () => {
      if (!cardRef.current || Math.abs(velocity.current) < 0.01) return;

      cardRef.current.scrollTop -= velocity.current * 16; // 16ms is roughly one frame
      velocity.current *= 0.95; // Decay factor

      animationFrame.current = requestAnimationFrame(applyMomentum);
    };

    animationFrame.current = requestAnimationFrame(applyMomentum);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    velocity.current = 0;
    cancelAnimationFrame(animationFrame.current!);
    if (cardRef.current) {
      cardRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationFrame.current!);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      id={'project'}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer group work overflow-hidden scroll-smooth no-scrollbar h-[320px] sm:h-[384px] md:h-[448px] lg:h-[512px] xl:h-[576px] items-start bg-secondary-hover rounded-3xl grid gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 ${alt ? 'sm:basis-60 md:basis-2/5 lg:basis-1/3' : 'flex-1 md:basis-3/5 lg:basis-2/3 hover:overflow-y-scroll'} transition-all duration-300 scroll-smooth hover:scroll-auto select-none`}
    >
      <div className={'flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 sticky top-0'}>
        <Typography type={TextTypes['4xl']} weight={WeightTypes.bold}>
          {title}
        </Typography>
        <Typography type={TextTypes.xl}>{description}</Typography>
      </div>
      <Image
        priority
        className={`pointer-events-none border-none overflow-hidden shadow-2xl ${alt ? `border-2 w-full rounded-3xl sm:rounded-lg lg:rounded-xl xl:rounded-2xl group-hover:scale-[0.55]` : `border-[1.3px] rounded-xs sm:rounded-md lg:rounded-lg xl:rounded-xl overflow-hidden pb-10 md:pb-0 align-top min-w-full scale-150 group-hover:scale-100 transition-all duration-[400ms]`} origin-top-left transition-transform duration-[400ms]`}
        src={image}
        alt={'Project Banner'}
      />
      {alt && altImage && (
        <Image
          priority
          className={`pointer-events-none border-none overflow-hidden shadow-2xl border-2 w-full rounded-3xl sm:rounded-lg lg:rounded-xl xl:rounded-2xl scale-[0.55] translate-y-[100%] translate-x-[45%] group-hover:-translate-y-[10%] sm:group-hover:-translate-y-[18%] origin-top-left transition-transform duration-500`}
          src={altImage}
          alt={'Project Banner'}
        />
      )}
    </div>
  );
};

export default ProjectCard;
