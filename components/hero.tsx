import React from 'react';
import PrimaryButton from "@/components/buttons/primaryButton";
import TertiaryButton from "@/components/buttons/tertiaryButton";

const Hero = () => {
    return (
        <div className={"w-full m-20 sm:m-28 md:m-36 xl:m-40 space-y-3  md:space-y-4 xl:space-y-5"}>
            <h1 className={"text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"} >Product Designer</h1>
            <p className={"text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-4xl"} >Detail obsessed Product Designer, creating timeless and aesthetic products, helping you stand out over various platforms</p>
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