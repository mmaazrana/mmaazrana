import Nav from '@/components/navs/nav';
import BottomNav from '@/components/navs/bottomNav';
import React from 'react';
import Head from 'next/head';
import Typography from '@/components/Typography';
import Services from '@/components/sections/services';
import Work from '@/components/sections/work';
import Hero from '@/components/sections/hero';
import { ButtonTypes, Sections, TextTypes, WeightTypes } from '@/helpers/enums';
import Testimonials from '@/components/sections/testimonials';
import { GoogleAnalytics } from '@next/third-parties/google';
import Button from '@/components/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import AboutSection from '@/components/sections/aboutSection';

export default function Home() {
  // const [windowWidth, setWindowWidth] = useState(0);
  // const [currentScreen, setCurrentScreen] = useState("");
  //
  // const getDimensions = (ele: any) => {
  //   const { height } = ele.getBoundingClientRect();
  //   const offsetTop = ele.offsetTop;
  //   const offsetBottom = offsetTop + height;
  //   return {
  //     height,
  //     offsetTop,
  //     offsetBottom,
  //   };
  // };
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //     windowWidth >= breakpoints.md
  //       ? setCurrentScreen("desktop")
  //       : windowWidth >= breakpoints.sm
  //         ? setCurrentScreen("tab")
  //         : setCurrentScreen("mobile");
  //   };
  //
  //   window.addEventListener("resize", handleResize);
  //
  //   handleResize();
  //
  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [windowWidth]);

  return (
    <div className={'overflow-x-hidden max-w-[100vw]'}>
      <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col">
        <Nav />
        <BottomNav />
        <section
          id={Sections.hero}
          className={
            'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
          }
        >
          <Hero />
        </section>
        <section
          id={Sections.work}
          className={
            'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
          }
        >
          <div className={'flex justify-between items-center w-full'}>
            <Typography type={TextTypes['4xl']} weight={WeightTypes.extraBold}>
              My Work
            </Typography>
            <Link href={'/work'} aria-label="Explore Work">
              <Button
                type={ButtonTypes.secondary}
                text={'Explore'}
                className={'!gap-1'}
                rightIcon={<ChevronRight />}
              />
            </Link>
          </div>
          <Work />
        </section>
        <section
          id={Sections.services}
          className={
            'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
          }
        >
          <div className={'flex justify-between items-center w-full'}>
            <Typography type={TextTypes['4xl']} weight={WeightTypes.extraBold}>
              Services
            </Typography>
            <Link href={'/services'} aria-label="All Services">
              <Button
                type={ButtonTypes.secondary}
                text={'All Services'}
                className={'!gap-1'}
                rightIcon={<ChevronRight />}
              />
            </Link>
          </div>
          <Services />
        </section>
        <section
          id={Sections.testimonials}
          className={
            'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
          }
        >
          <div className={'flex justify-between items-center w-full'}>
            <Typography type={TextTypes['4xl']} weight={WeightTypes.extraBold}>
              Testimonials
            </Typography>
            <Link href={'/clients'} aria-label="Clients">
              <Button
                type={ButtonTypes.secondary}
                text={'Clients'}
                className={'!gap-1'}
                rightIcon={<ChevronRight />}
              />
            </Link>
          </div>
          <Testimonials />
        </section>
        <section
          id={Sections.aboutMe}
          className={
            'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
          }
        >
          <div className={'flex justify-between items-center w-full'}>
            <Typography type={TextTypes['4xl']} weight={WeightTypes.extraBold}>
              About Me
            </Typography>
            <Link href={'/about'} aria-label="Read More">
              <Button
                type={ButtonTypes.secondary}
                text={'Read More'}
                className={'!gap-1'}
                rightIcon={<ChevronRight />}
              />
            </Link>
          </div>
          <AboutSection />
        </section>
        {/*<section*/}
        {/*  className={*/}
        {/*    "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"*/}
        {/*  }*/}
        {/*>*/}
        {/*  <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>*/}
        {/*    Get in Touch*/}
        {/*  </Typography>*/}
        {/*</section>*/}
      </main>
    </div>
  );
}
