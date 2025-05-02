import Nav from '@/components/navs/nav'
import BottomNav from '@/components/navs/bottom-nav'
import React from 'react'
import Typography from '@/components/typography'
import Services from '@/components/sections/main-page/services'
import Work from '@/components/sections/main-page/work'
import Hero from '@/components/sections/main-page/main-hero'
import { Sections } from '@/helpers/enums'
import Testimonials from '@/components/sections/main-page/testimonials'
import Button from '@/components/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import AboutSection from '@/components/sections/main-page/about-section'

// No specific metadata needed here, it will inherit from layout.tsx
// If you wanted to override:
// export const metadata = {
//   title: 'Custom Home Title',
//   description: 'Custom home description.',
// };

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
    <div className='overflow-x-hidden max-w-[100vw]'>
      <main className='overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex justify-center items-center flex-col'>
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
          <div className='flex justify-between items-center w-full'>
            <Typography tag='h2' type='5xl' weight='extra-bold'>
              Featured Work
            </Typography>
            <Link href='/work' aria-label='Explore Work'>
              <Button
                type='secondary'
                text='Explore'
                className='!gap-1'
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
          <div className='flex justify-start items-center w-full'>
            <Typography tag='h2' type='5xl' weight='extra-bold'>
              Services
            </Typography>
          </div>
          <Services />
        </section>
        <section
          id={Sections.testimonials}
          className={
            'xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full'
          }
        >
          <div className='flex justify-between items-center w-full'>
            <Typography tag='h2' type='5xl' weight='extra-bold'>
              Testimonials
            </Typography>
            <Link href='/clients' aria-label='Clients'>
              <Button
                type='secondary'
                text='Clients'
                className='!gap-1'
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
          <div className='flex justify-start items-center w-full'>
            <Typography tag='h2' type='5xl' weight='extra-bold'>
              Profile
            </Typography>
          </div>
          <AboutSection />
        </section>
        {/*<section*/}
        {/*  className={*/}
        {/*    "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"*/}
        {/*  }*/}
        {/*>*/}
        {/*  <Typography type={["4xl"]} weight='extra-bold'>*/}
        {/*    Get in Touch*/}
        {/*  </Typography>*/}
        {/*</section>*/}
      </main>
    </div>
  )
}
