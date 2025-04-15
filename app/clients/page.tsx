import Nav from '@/components/navs/Nav';
import BottomNav from '@/components/navs/bottomNav/BottomNav';
import React from 'react';
import Head from 'next/head';
import GoogleAnalytics from '@/app/GoogleAnalytics';
import StackedTestimonials from '@/components/sections/StackedTestimonials';
import EsteemedClients from '@/components/sections/EsteemedClients';
import WorkDetails from '@/components/sections/WorkDetails';

export default function Home() {
  return (
    <div className={'overflow-x-hidden max-w-[100vw]'}>
      <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col">
        <Nav />
        <BottomNav />
        <section
          className={
            'xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
          }
        >
          <StackedTestimonials />
        </section>
        <section
          className={
            'xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex justify-center items-center flex-col w-full'
          }
        >
          <EsteemedClients />
        </section>
        <section className={'xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10  center flex-col w-full'}>
          <WorkDetails />
        </section>
      </main>
    </div>
  );
}
