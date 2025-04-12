import Nav from '@/components/navs/nav';
import BottomNav from '@/components/navs/bottomNav';
import React from 'react';
import Head from 'next/head';
import GoogleAnalytics from '@/app/GoogleAnalytics';
import StackedTestimonials from '@/components/sections/stackedTestimonials';
import EsteemedClients from '@/components/sections/esteemedClients';
import WorkDetails from '@/components/sections/workDetails';

export default function Home() {
  return (
    <div className={'overflow-x-hidden max-w-[100vw]'}>
      <Head>
        <GoogleAnalytics />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="pwa-demo" content="pwa-demo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="pwa-demo" />
        <meta name="description" content="pwa-demo" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#22365E" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, width=device-width"
        ></meta>
      </Head>
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
