import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Work from "@/components/work";
import React from "react";

export default function Home() {
    return (
        <main
            className="xl:max-w-8xl xl:mx-auto xl:p-12 xl:gap-12 lg:p-11 lg:gap-11 md:p-10 md:gap:10 sm:p-9 sm:gap-9 p-8 gap-8 grid ">
            <Nav/>
            <Hero/>
            <h4 className={"w-full font-body text-lg xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold"}>My
                Work</h4>
            <Work/>
        </main>
    )
}
