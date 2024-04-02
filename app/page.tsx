"use client";
import Nav from "@/components/navs/nav";
import BottomNav from "@/components/navs/bottomNav";
import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Head from "next/head";
import { Sections, TextTypes, WeightTypes } from "@/app/constants";
import Typography from "@/components/Typography";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import Hero from "@/components/sections/hero";

export default function Home() {
  const [inView, setInView] = useState(true);
  const [activeSection, setActiveSection] = useState<Sections>(Sections.hero);
  return (
    <div>
      <Head>
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
      <main className=" overflow-x-visible scrollbar-hide xl:max-w-8xl xl:mx-auto xl:p-12 xl:gap-12 lg:p-11 mb-80 lg:gap-11 md:p-10 md:gap:10 sm:p-9 sm:gap-9 p-8 gap-8 grid ">
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
        <Nav setInView={setInView} />
        <BottomNav inView={inView} activeSection={activeSection} />
        <Hero setActiveSection={setActiveSection} />
        <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
          My Work
        </Typography>
        <Work setActiveSection={setActiveSection} />
        <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
          Services
        </Typography>
        <Services setActiveSection={setActiveSection} />
        <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
          Processes
        </Typography>
        <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
          Testimonials
        </Typography>
        <Typography type={TextTypes["4xl"]} weight={WeightTypes.extraBold}>
          Get in Touch
        </Typography>
      </main>
    </div>
  );
}
