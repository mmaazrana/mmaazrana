'use client';
import React from 'react';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import Nav from '@/components/navs/nav';
import BottomNav from '@/components/navs/bottomNav';
import ProjectCard from '@/components/cards/projectCard';
import ProjectCardMobile from '@/components/cards/mobile/projectCardMobile';
import { projectsAnalysis } from '@/helpers/projectAnalytics';

function Work() {
  return (
    <div className={'overflow-x-hidden max-w-[100vw]'}>
      <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col">
        <Nav />
        <BottomNav />
        <section
          className={
            'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
          }
        >
          <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
            <div className={'w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}>
              {/* Desktop Layout */}
              {Array.from({ length: Math.ceil(projectsAnalysis.length / 2) }).map(
                (_, groupIndex) => (
                  <div
                    key={groupIndex}
                    className={
                      'hidden sm:flex flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 '
                    }
                  >
                    {projectsAnalysis
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
              <div
                className={'flex sm:hidden flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'}
              >
                {projectsAnalysis.map((project, i) => (
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
        </section>
      </main>
    </div>
  );
}

export default Work;
