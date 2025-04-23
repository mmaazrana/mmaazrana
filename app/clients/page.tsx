import Nav from '@/components/navs/nav';
import BottomNav from '@/components/navs/bottom-nav';
import React from 'react';
import StackedTestimonials from '@/components/sections/stacked-testimonials';
import EsteemedClients from '@/components/sections/esteemed-clients';
import WorkDetails from '@/components/sections/work-details';

export default function Home() {
  return (
    <div className={'overflow-x-hidden max-w-[100vw]'}>
      <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 flex justify-center items-center flex-col">
        <Nav />
        <BottomNav />
        <section
          className={
            '2xl:py-20 xl:py-18 lg:py-16 md:py-14 sm:py-12 xs:py-10 py-8 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
          }
        >
          <StackedTestimonials />
        </section>
        <section
          className={
            'xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
          }
        >
          <EsteemedClients />
        </section>
        <section
          className={'2xl:p-20 xl:p-18 lg:p-16 md:p-14 sm:p-12 xs:p-10 p-8  center flex-col w-full'}
        >
          <WorkDetails />
        </section>
      </main>
    </div>
  );
}
