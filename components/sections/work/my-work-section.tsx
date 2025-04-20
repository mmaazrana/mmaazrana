'use client';

import React from 'react';
import WorkBottomNav from '@/components/navs/bottom-nav/work-bottom-nav';
import TitleBar from '@/components/sections/work/title-bar';
import { useWorkContext } from '@/app/context/WorkProvider';

export default function MyWorkSection() {
  const { activeTab, setActiveTab, ActiveComponent } = useWorkContext();

  return (
    <>
      <WorkBottomNav setActiveTab={setActiveTab} />
      <section
        className={
          'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-20 lg:gap-18 md:gap:16 sm:gap-14 gap-12 flex items-start justify-center flex-col w-full'
        }
      >
        <TitleBar activeTab={activeTab} />
        {ActiveComponent}
      </section>
    </>
  );
}
