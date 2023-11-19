'use client';
import React from 'react';
import PrimaryButton from "@/components/buttons/primaryButton";
import TertiaryButton from "@/components/buttons/tertiaryButton";
import {TypeAnimation} from "react-type-animation";
import TextTransition, { presets } from 'react-text-transition';

const Hero = () => {

    const TEXTS:string[] = ['Crafting user-centric digital experiences that blend creativity and functionality for impactful, seamless design.',
        'Transforming ideas into interactive web solutions, I specialize in coding elegant websites with a focus on user experience.',
        'Building the future of mobile experiences, I bring innovative app ideas to life with user-centric design and robust functionality.',
        'Breathing life into static elements, I create visually stunning and emotionally resonant digital narratives through animation.',
        'Sculpting immersive worlds and captivating visuals, I leverage three-dimensional design to bring ideas to life with depth and realism.'
    ];
    const durations: number[] = [5000, 5000, 5000, 5000, 5000];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => {
                return (prevIndex + 1) % TEXTS.length;
            });
        }, durations[index]);
        return () => clearInterval(intervalId);
    }, [durations]);

    return (
        <div className={"w-full m-20 sm:m-28 md:m-36 xl:m-40 space-y-3  md:space-y-4 xl:space-y-5"}>
            <TypeAnimation
                wrapper={"h1"}
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Product Designer',
                    4000,
                    'Web Developer',
                    4000,
                    'Mobile App Developer',
                    4000,
                    'Animator',
                    4000,
                    '3D Artist',
                    4000,
                ]}
                speed={50}
                className={"text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"}
                repeat={Infinity}
            />

                <TextTransition springConfig={
                    {duration:400, mass:1, velocity:5, friction:10, tension:10,}
                }>
                    <p className={"font-body text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-4xl"} >
                        {TEXTS[index % TEXTS.length]}
                    </p>
                </TextTransition>

            {/*<p className={"text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-4xl"} >Detail obsessed Product Designer, creating timeless and aesthetic products, helping you stand out over various platforms</p>*/}
            <div className={"flex items-center justify-start flex-wrap"} >
                <div className={"pt-3 pb-3 pr-3"}>
                    <PrimaryButton href={""} text={"Linkedin"}/>
                </div>
                <TertiaryButton href={""} text={"awaismaaz@gmail.com"}/>
            </div>
        </div>
    );
};

export default Hero;