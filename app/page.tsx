"use client"
import Nav from "@/components/navs/nav";
import Hero from "@/components/hero";
import Work from "@/components/work";
import BottomNav from "@/components/navs/bottomNav";
import {useDraggable} from "react-use-draggable-scroll";
import React, {useState} from "react";
import AnimatedCursor from "react-animated-cursor";


export default function Home() {

    const [inView, setInView] = useState(true);

    return (
        <main
            className="overflow-x-scroll scrollbar-hide xl:max-w-8xl xl:mx-auto xl:p-12 xl:gap-12 lg:p-11 mb-80 lg:gap-11 md:p-10 md:gap:10 sm:p-9 sm:gap-9 p-8 gap-8 grid ">
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
    )
}
