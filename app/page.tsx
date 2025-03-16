"use client";
import Nav from "@/components/navs/nav";
import BottomNav from "@/components/navs/bottomNav";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Typography from "@/components/Typography";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import Hero from "@/components/sections/hero";
import { ButtonTypes, Sections, TextTypes, WeightTypes } from "@/helpers/enums";
import Testimonials from "@/components/sections/testimonials";
import About from "@/components/sections/about";
import { breakpoints } from "@/helpers/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
// Import with next's dynamic import
import Button from "@/components/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
        <GoogleAnalytics gaId="G-PNNJWR7KVB" />
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
          <div className={"flex justify-between items-center w-full"}>
            <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
              My Work
            </Typography>
            <Link href={"/work"}>
              <Button
                type={ButtonTypes.secondary}
                text={"Explore"}
                className={"!gap-1"}
                rightIcon={<ChevronRight />}
              />
            </Link>
          </div>
          <Work windowWidth={windowWidth} />
        </section>
        <section
          id={Sections.services}
          ref={servicesRef}
          className={
            "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
          }
        >
          <div className={"flex justify-between items-center w-full"}>
            <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
              Services
            </Typography>
            <Link href={"/services"}>
              <Button
                type={ButtonTypes.secondary}
                text={"All Services"}
                className={"!gap-1"}
                rightIcon={<ChevronRight />}
              />
            </Link>
          </div>
          <Services currentScreen={currentScreen} />
        </section>
        <section
          id={Sections.testimonials}
          ref={testimonialsRef}
          className={
            "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
          }
        >
          <div className={"flex justify-between items-center w-full"}>
            <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
              Testimonials
            </Typography>
            <Link href={"/clients"}>
              <Button
                type={ButtonTypes.secondary}
                text={"Clients"}
                className={"!gap-1"}
                rightIcon={<ChevronRight />}
              />
            </Link>
          </div>
          <Testimonials windowWidth={windowWidth} />
        </section>
        <section
          id={Sections.aboutMe}
          ref={aboutRef}
          className={
            "xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-start justify-center flex-col w-full"
          }
        >
          <div className={"flex justify-between items-center w-full"}>
            <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
              About Me
            </Typography>
            <Link href={"/about"}>
              <Button
                type={ButtonTypes.secondary}
                text={"Read More"}
                className={"!gap-1"}
                rightIcon={<ChevronRight />}
              />
            </Link>
          </div>
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
