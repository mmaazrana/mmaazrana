'use client';

import React, { useEffect, useState } from 'react';
import Nav from '@/components/navs/nav';
import WorkBottomNav from '@/components/navs/bottomNav/work-bottom-nav';
import { WorkCategories } from '@/helpers/enums';
import ProductDesignProjects from '@/components/sections/work/product-design-projects';
import ProductDevelopmentProjects from '@/components/sections/work/product-development-projects';
import BlenderProjects from '@/components/sections/work/blender-projects';
import VideoEditingProjects from '@/components/sections/work/video-editing-projects';
import GraphicDesignProjects from '@/components/sections/work/graphic-design-projects';
import WorkHero from '@/components/sections/hero/work-hero';
import TitleBar from '@/components/sections/work/title-bar';

function Work() {
  const [activeTab, setActiveTab] = useState<WorkCategories>(WorkCategories.productDesign);
  const [ActiveComponent, setActiveComponent] = useState<React.ReactNode>(
    <ProductDesignProjects />
  );

  useEffect(() => {
    switch (activeTab) {
      case WorkCategories.productDesign:
        setActiveComponent(<ProductDesignProjects />);
        break;
      case WorkCategories.productDevelopment:
        setActiveComponent(<ProductDevelopmentProjects />);
        break;
      case WorkCategories.blender:
        setActiveComponent(<BlenderProjects />);
        break;
      case WorkCategories.videoEditing:
        setActiveComponent(<VideoEditingProjects />);
        break;
      case WorkCategories.illustration:
        setActiveComponent(<GraphicDesignProjects />);
        break;
      default:
        setActiveComponent(<ProductDesignProjects />);
        break;
    }
  }, [activeTab]); // Dependency array to trigger effect on activeTab change

  return (
    <div className={'overflow-x-hidden max-w-[100vw]'}>
      <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col">
        <Nav />
        <WorkBottomNav setActiveTab={setActiveTab} />
        <section
          className={
            'xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
          }
        >
          <WorkHero />
        </section>
        <section
          className={
            'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-20 lg:gap-18 md:gap:16 sm:gap-14 gap-12 flex items-start justify-center flex-col w-full'
          }
        >
          <TitleBar activeTab={activeTab} />
          {ActiveComponent}
        </section>
      </main>
    </div>
  );
}

export default Work;
