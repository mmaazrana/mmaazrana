"use client"
import Nav from "@/components/navs/nav";
import Hero from "@/components/hero";
import Work from "@/components/work";
import BottomNav from "@/components/navs/bottomNav";
import {useDraggable} from "react-use-draggable-scroll";
import React, {useState} from "react";
import AnimatedCursor from "react-animated-cursor";
import Head from "next/head";


export default function Home() {

    const [inView, setInView] = useState(true);

    return (
        <div>
            <Head>
                <meta name='viewport'
                      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
                <meta name="pwa-demo" content="pwa-demo"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
                <meta name="apple-mobile-web-app-title" content="pwa-demo"/>
                <meta name="description" content="pwa-demo"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="msapplication-TileColor" content="#2B5797"/>
                <meta name="msapplication-tap-highlight" content="no"/>
                <meta name="theme-color" content="#000000"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
                <meta name="theme-color" content="#FFFFFF"/>
            </Head>
            <main
                className=" overflow-x-scroll scrollbar-hide xl:max-w-8xl xl:mx-auto xl:p-12 xl:gap-12 lg:p-11 mb-80 lg:gap-11 md:p-10 md:gap:10 sm:p-9 sm:gap-9 p-8 gap-8 grid ">
                <AnimatedCursor innerSize={12}
                                outerSize={8}
                                color='66, 100, 168'
                                outerAlpha={0.2}
                                innerScale={0.7}
                                outerScale={5}
                                clickables={[
                                    'a',
                                    'input[type="text"]',
                                    'input[type="email"]',
                                    'input[type="number"]',
                                    'input[type="submit"]',
                                    'input[type="image"]',
                                    'label[for]',
                                    'select',
                                    'textarea',
                                    'button',
                                    '.link',
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
            <BottomNav inView={inView}/>
            <Hero/>

            <h4 className={"w-full font-body text-lg xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold"}>My
                Work</h4>
            <Work/>
        </main>
        </div>
    )
}
