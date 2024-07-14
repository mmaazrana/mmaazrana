"use client";
import Nav from "@/components/navs/nav";
import BottomNav from "@/components/navs/bottomNav";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Typography from "@/components/Typography";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import Hero from "@/components/sections/hero";
import { Sections, TextTypes, WeightTypes } from "@/helpers/enums";
import Testimonials from "@/components/sections/testimonials";
import About from "@/components/sections/about";
import { breakpoints } from "@/helpers/constants";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import { isBrowser } from "react-device-detect";

// Import with next's dynamic import
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: true,
});

export default function Home() {
  const [inView, setInView] = useState(true);
  const [activeSection, setActiveSection] = useState<Sections>(Sections.hero);
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("");
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutRef = useRef(null);
  const sectionRefs = [
    { section: Sections.hero, ref: heroRef },
    { section: Sections.work, ref: workRef },
    { section: Sections.services, ref: servicesRef },
    { section: Sections.testimonials, ref: testimonialsRef },
    { section: Sections.aboutMe, ref: aboutRef },
  ];
  const getDimensions = (ele: any) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      windowWidth >= breakpoints.md
        ? setCurrentScreen("desktop")
        : windowWidth >= breakpoints.sm
          ? setCurrentScreen("tab")
          : setCurrentScreen("mobile");
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(heroRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      if (selected && selected.section !== activeSection) {
        setActiveSection(selected.section);
      } else if (!selected && activeSection) {
        setActiveSection(Sections.hero);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
  return (
    <div className={"overflow-x-hidden max-w-[100vw]"}>
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
      <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-center justify-center flex-col">
        {isBrowser && (
          <AnimatedCursor
            innerSize={12}
            outerSize={8}
            color="66, 100, 168"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              ".about",
              ".testimonial",
              ".service",
              ".work",
              // {
              //     target: '.custom',
              //     options: {
              //         innerSize: 12,
              //         outerSize: 12,
              //         color: '255, 255, 255',
              //         outerAlpha: 0.3,
              //         innerScale: 0.7,
              //         outerScale: 5
              //     }
              // }
            ]}
          />
        )}
        <Nav setInView={setInView} />
        <BottomNav inView={inView} activeSection={activeSection} />
        <section
          id={Sections.hero}
          ref={heroRef}
          className={
            "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
          }
        >
          <Hero />
        </section>
        <section
          id={Sections.work}
          ref={workRef}
          className={
            "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
          }
        >
          <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
            My Work
          </Typography>
          <Work />
        </section>
        <section
          id={Sections.services}
          ref={servicesRef}
          className={
            "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
          }
        >
          <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
            Services
          </Typography>
          <Services windowWidth={windowWidth} currentScreen={currentScreen} />
        </section>
        <section
          id={Sections.testimonials}
          ref={testimonialsRef}
          className={
            "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
          }
        >
          <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
            Testimonials
          </Typography>
          <Testimonials windowWidth={windowWidth} />
        </section>
        <section
          id={Sections.aboutMe}
          ref={aboutRef}
          className={
            "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
          }
        >
          <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
            About Me
          </Typography>
          <About windowWidth={windowWidth} />
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
