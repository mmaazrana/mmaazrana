'use client';
import React, {FC, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {Mail, Text} from "lucide-react";
import {AnimatePresence, AnimateSharedLayout, motion, useIsPresent, usePresence} from 'framer-motion';
import {FiFigma} from "react-icons/fi";
import {DiIllustrator, DiPhotoshop} from "react-icons/di";
import {
    SiAdobeaftereffects,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobexd,
    SiBlender,
    SiDart,
    SiFigma,
    SiFirebase,
    SiFlutter, SiFramer,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import SecondaryButton from "@/components/buttons/secondaryButton";
interface BottomNavProps {
    inView: boolean
}

const BottomNav: FC<BottomNavProps> = (props) => {
    const [isEndOfPage, setIsEndOfPage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

            if (windowHeight + scrollTop >= documentHeight - 180) {
                setIsEndOfPage(true);
            } else {
                setIsEndOfPage(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isColumn, setIsColumn] = React.useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Optionally calculate and set dynamic styles or classes here
        // based on isColumn state or container dimensions
    }, [isColumn]); // Dependency array ensures effect runs when isColumn changes

    const toggleLayout = () => {
        setIsColumn(!isColumn);
    };

    const container = {
        hidden: {height: "0px"},

        visible: {
            height: "100px",

            transition: {
                delayChildren: 0,
                staggerChildren: 0.01
            }
        },
        exit: {scale: 0, maxHeight: "0px", maxWidth: "0px",},
    };

    const item = {
        hidden: {scale: 0, y: 20},
        visible: {
            scale: 1,
            y: 0,
        },
        exit: {scale: 0, maxHeight: "0px", maxWidth: "0px",},
    };

    const iconComponents = [
        SiFigma,
        SiAdobeillustrator,
        SiAdobephotoshop,
        SiAdobeaftereffects,
        SiAdobepremierepro,
        SiAdobexd,
        SiBlender,
        SiFlutter,
        SiDart,
        SiFirebase,
        SiNextdotjs,
        SiReact,
        SiNodedotjs,
        SiPython,
        SiTailwindcss,
        SiFramer,
        SiJavascript,
        SiTypescript
    ];

    const isPresent = useIsPresent()

    return (
        <div
            className={` ${props.inView ? "translate-y-32" : "translate-y-0 "} z-10 fixed nav-bg right-0 bottom-0 max-w-screen w-full`}>
            <div
                className={`absolute bg-primary-accent bottom-0 right-0 w-full blur-2xl ${isEndOfPage ? "h-[324px]" : "h-[68px]"} -z-10`}></div>
            <motion.div
                className={`${isEndOfPage ? "h-[388px]" : "h-[149px] md:h-[150px] lg:h-[159px] xl:h-[162px]"} px-8 sm:px-9 md:px-10 lg:px-11 xl:px-8 pb-6 sm:pb-7 lg:pb-8 pt-20 flex flex-row justify-between items-end  z-30`}>
                {/*<svg className={"hidden sm:block hover:scale-90 hover:translate-x-1 hover:translate-y-0.5"} width="62"*/}
                {/*     height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <mask id="mask0_479_34518" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="48">*/}
                {/*        <path d="M61.6365 0H0V48H61.6365V0Z" fill="white"/>*/}
                {/*    </mask>*/}
                {/*    <g mask="url(#mask0_479_34518)">*/}
                {/*        <path*/}
                {/*            className={"hover:fill-primary-hover"}*/}
                {/*            d="M46.4674 13.5318C46.7152 14.0453 46.7152 14.6435 46.4674 15.157L38.9061 31.0309L32.7396 43.9818C32.0366 45.4603 29.8869 45.4603 29.1838 43.9818L24.7922 34.7667C24.0891 33.2881 21.9396 33.2881 21.2365 34.7667L15.5944 46.6059C15.2716 47.283 14.58 47.7175 13.8136 47.7175H2.25272C0.817702 47.7175 -0.133212 46.2559 0.471915 44.9863L7.1168 31.0309L15.0641 14.3443L21.2365 1.39353C21.9396 -0.0849538 24.0891 -0.0849538 24.7922 1.39353L29.1838 10.6087C29.8869 12.0871 32.0366 12.0871 32.7396 10.6087L37.1311 1.39353C37.8342 -0.0849538 39.9839 -0.0849538 40.6869 1.39353L46.4674 13.5318Z"*/}
                {/*            fill="#CEDDFA"/>*/}
                {/*        <path*/}
                {/*            className={"hover:fill-primary-hover"}*/}
                {/*            d="M59.6713 47.7177H49.9373C48.5023 47.7177 47.5514 46.2561 48.1564 44.9864L53.0206 34.7668C53.7236 33.2883 55.8733 33.2883 56.5764 34.7668L61.4404 44.9864C62.0456 46.2618 61.0947 47.7177 59.6596 47.7177H59.6713Z"*/}
                {/*            fill="#4264A8"/>*/}

                {/*    </g>*/}
                {/*</svg>*/}
                <motion.div
                    className={`${isEndOfPage ? "" : ""} w-[268px] min-h-[178px] overflow-hidden mt-auto h-fit gap-8`}>
                    <svg
                        className={`hidden sm:block ${isEndOfPage ? "h-[36px] md:h-[40px] lg:h-[28px] xl:h-[40px] mb-6" : "h-[40px] lg:h-[44px] xl:h-[48px]"} object-cover`}
                        viewBox="0 0 275 41" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_56_5)"
                           className={"hover:scale-90 hover:translate-x-1 hover:translate-y-0.5"}>
                            <path
                                d="M37.9168 11.7766C38.119 12.2045 38.119 12.703 37.9168 13.1309L31.747 26.3592L26.7153 37.1516C26.1416 38.3837 24.3875 38.3837 23.8138 37.1516L20.2304 29.4723C19.6567 28.2402 17.9027 28.2402 17.329 29.4723L12.7252 39.3383C12.4618 39.9026 11.8975 40.2647 11.2721 40.2647H1.83872C0.667785 40.2647 -0.108138 39.0467 0.385631 37.9887L5.80769 26.3592L12.2925 12.4537L17.329 1.66136C17.9027 0.429287 19.6567 0.429287 20.2304 1.66136L23.8138 9.34064C24.3875 10.5727 26.1416 10.5727 26.7153 9.34064L30.2986 1.66136C30.8723 0.429287 32.6264 0.429287 33.2001 1.66136L37.9168 11.7766Z"
                                fill="var(--primary)" className={"hover:fill-primary-hover"}/>
                            <path
                                d="M48.6904 40.2648H40.7477C39.5768 40.2648 38.8009 39.0468 39.2946 37.9887L43.2636 29.4724C43.8373 28.2403 45.5914 28.2403 46.1651 29.4724L50.134 37.9887C50.6278 39.0515 49.8519 40.2648 48.6809 40.2648H48.6904Z"
                                fill="var(--secondary)" className={"hover:fill-primary-hover"}/>
                        </g>

                        <path
                            className={`${isEndOfPage ? "opacity-0 lg:opacity-100" : "opacity-0"}`}
                            d="M93.0479 13.21V28.5H90.5399V18.028L85.8759 28.5H84.1379L79.4519 18.028V28.5H76.9439V13.21H79.6499L85.0179 25.2L90.3639 13.21H93.0479ZM114.362 25.376H107.96L106.86 28.5H104.242L109.72 13.188H112.624L118.102 28.5H115.462L114.362 25.376ZM113.658 23.33L111.172 16.224L108.664 23.33H113.658ZM138.502 25.376H132.1L131 28.5H128.382L133.86 13.188H136.764L142.242 28.5H139.602L138.502 25.376ZM137.798 23.33L135.312 16.224L132.804 23.33H137.798ZM155.844 26.322H162.95V28.5H152.874V26.542L159.958 15.388H152.874V13.21H162.95V15.168L155.844 26.322ZM196.948 28.5L193.428 22.384H191.514V28.5H189.006V13.21H194.286C195.46 13.21 196.45 13.4153 197.256 13.826C198.078 14.2367 198.686 14.7867 199.082 15.476C199.493 16.1653 199.698 16.9353 199.698 17.786C199.698 18.7833 199.405 19.6927 198.818 20.514C198.246 21.3207 197.359 21.8707 196.156 22.164L199.94 28.5H196.948ZM191.514 20.382H194.286C195.225 20.382 195.929 20.1473 196.398 19.678C196.882 19.2087 197.124 18.578 197.124 17.786C197.124 16.994 196.89 16.378 196.42 15.938C195.951 15.4833 195.24 15.256 194.286 15.256H191.514V20.382ZM220.925 25.376H214.523L213.423 28.5H210.805L216.283 13.188H219.187L224.665 28.5H222.025L220.925 25.376ZM220.221 23.33L217.735 16.224L215.227 23.33H220.221ZM248.409 28.5H245.901L238.355 17.082V28.5H235.847V13.188H238.355L245.901 24.584V13.188H248.409V28.5ZM269.72 25.376H263.318L262.218 28.5H259.6L265.078 13.188H267.982L273.46 28.5H270.82L269.72 25.376ZM269.016 23.33L266.53 16.224L264.022 23.33H269.016Z"
                            fill={"var(--primary)"}/>
                        <defs>
                            <clipPath id="clip0_56_5">
                                <rect width="50.2939" height="40" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    {/*<AnimatePresence mode="wait" initial={false}>*/}
                    {/*    {*/}
                    {/*        isEndOfPage ?*/}
                    {/*            <motion.div*/}

                    {/*                key="icons"*/}
                    {/*                initial="hidden"*/}
                    {/*                animate="visible"*/}
                    {/*                exit="exit"*/}
                    {/*                variants={container}*/}
                    {/*                className={`${isPresent ? "animate-fadeIn" : "animate-fadeOut"}  overflow-hidden min-h-fit grid grid-cols-7 w-full gap-4`}*/}
                    {/*            >*/}
                    {/*                {iconComponents.map((Icon, index) => (*/}
                    {/*                    <motion.div key={index} variants={item}*/}

                    {/*                    >*/}
                    {/*                        {*/}
                    {/*                            isEndOfPage ?*/}
                    {/*                                <Icon size={24}/>*/}
                    {/*                                : null}*/}
                    {/*                    </motion.div>*/}
                    {/*                ))}*/}
                    {/*            </motion.div> : null*/}
                    {/*    }*/}
                    {/*</AnimatePresence>*/}
                </motion.div>
                {/*<div*/}
                {/*    className={`font-sans flex flex-row gap-8 sm:9 md:10 lg:11 xl:12`}>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4  font-bold ${isEndOfPage && "-translate-y-[143px] sm:-translate-y-[156px] md:-translate-y-[167px] lg:-translate-y-[178px] xl:-translate-y-[179px]"} `}*/}
                {/*        href={""}>*/}
                {/*        Work*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25 ${isEndOfPage && "-translate-y-[96px] sm:-translate-y-[104px] md:-translate-y-[112px] lg:-translate-y-[119px] xl:-translate-y-[119px] -translate-x-[66px] sm:-translate-x-[79px] md:-translate-x-[93px] lg:-translate-x-[106px] xl:-translate-x-[119px]"}`}*/}
                {/*        href={""}>*/}
                {/*        Process*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4  opacity-25 ${isEndOfPage && "-translate-y-[47px] sm:-translate-y-[51px] md:-translate-y-[55px] lg:-translate-y-[60px] xl:-translate-y-[60px] -translate-x-[144px] sm:-translate-x-[173px] md:-translate-x-[202px] lg:-translate-x-[232px] xl:-translate-x-[260px]"}`}*/}
                {/*        href={""}>*/}
                {/*        About*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4  opacity-25 ${isEndOfPage && "-translate-x-[212px] sm:-translate-x-[255px] md:-translate-x-[298px] lg:-translate-x-[341px] xl:-translate-x-[384px]"}`}*/}
                {/*        href={""}>*/}
                {/*        Resume*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className={`font-sans flex flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12`}>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  font-bold ${isEndOfPage ? "-translate-y-[9rem] sm:-translate-y-[9.75rem] md:-translate-y-[10.5rem] lg:-translate-y-[11.25rem] xl:-translate-y-[11.25rem]" : "px-0 sm:px-0.25 md:px-0.5 lg:px-0.75 xl:px-1"}`}*/}
                {/*        href={""}>*/}
                {/*        Work*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  opacity-25 ${isEndOfPage ? "-translate-y-[6rem] sm:-translate-y-[6.5rem] md:-translate-y-[7rem] lg:-translate-y-[7.5rem] xl:-translate-y-[7.5rem] -translate-x-[4.05rem] sm:-translate-x-[4.675rem] md:-translate-x-[5.24rem] lg:-translate-x-[5.855rem] xl:-translate-x-[6.455rem]" : "px-0 sm:px-0.25 md:px-0.5 lg:px-0.75 xl:px-1"}`}*/}
                {/*        href={""}>*/}
                {/*        Process*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  opacity-25 ${isEndOfPage ? "-translate-y-[3rem] sm:-translate-y-[3.2rem] md:-translate-y-[3.45rem] lg:-translate-y-[3.75rem] xl:-translate-y-[3.75rem] -translate-x-[8.97rem] sm:-translate-x-[10.3rem] md:-translate-x-[11.61rem] lg:-translate-x-[12.95rem] xl:-translate-x-[14.28rem]" : "px-0 sm:px-0.25 md:px-0.5 lg:px-0.75 xl:px-1"}`}*/}
                {/*        href={""}>*/}
                {/*        About*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={` text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  opacity-25 ${isEndOfPage ? "-translate-x-[13.21em] sm:-translate-x-[15.18rem] md:-translate-x-[17.14rem] lg:-translate-x-[19.05rem] xl:-translate-x-[21.04rem]" : "px-0 sm:px-0.25 md:px-0.5 lg:px-0.75 xl:px-1"}`}*/}
                {/*        href={""}>*/}
                {/*        Resume*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className={"relative w-[543px] whitespace-nowrap"}>*/}
                <div
                    className={`left-1/2 -translate-x-1/2 my-8 min-w-[367px] sm:min-w-[404px] md:min-w-[458px] lg:min-w-[537px] xl:min-w-[615px] absolute flex justify-between bottom-0 font-sans gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12`}>
                    <Link
                        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 font-bold ${isEndOfPage && "opacity-0"}`}
                        href={""}>
                        Work
                    </Link>
                    <Link
                        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 ${isEndOfPage && "opacity-0"}`}
                        href={""}>
                        Services
                    </Link>
                    <Link
                        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 ${isEndOfPage && "opacity-0"}`}
                        href={""}>
                        Process
                    </Link>
                    <Link
                        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 ${isEndOfPage && "opacity-0"}`}
                        href={""}>
                        Testimonials
                    </Link>
                </div>
                <div
                    className={`${isEndOfPage ? "opacity-100" : "opacity-0"} left-1/2 -translate-x-1/2 my-8 min-h-[124px] sm:min-h-[136px] lg:min-h-[148px] xl:min-h-[160px] min-w-[367px] sm:min-w-[404px] md:min-w-[458px] lg:min-w-[537px] xl:min-w-[615px] absolute bottom-0 font-sans gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12`}>
                    <div
                        className={`absolute text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 font-bold ${isEndOfPage ? "-top-1/3 opacity-100" : "top-0 opacity-0"}`}>Overview
                    </div>
                    <Link
                        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 font-bold   ${isEndOfPage ? "left-0 bottom-3/4 font-normal opacity-25" : "left-0 bottom-0"}`}
                        href={""}>
                        Work
                    </Link>
                    <Link
                        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25  ${isEndOfPage ? "left-0 bottom-1/2 " : "left-1/4 bottom-0"}`}
                        href={""}>
                        Services
                    </Link>
                    <Link
                        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25  ${isEndOfPage ? "left-0 bottom-1/4 " : "left-1/2 bottom-0"}`}
                        href={""}>
                        Process
                    </Link>
                    <Link
                        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25  ${isEndOfPage ? "left-0 bottom-0" : "left-3/4 bottom-0"}`}
                        href={""}>
                        Testimonials
                    </Link>
                </div>
                <div
                    className={`${isEndOfPage ? "opacity-100" : "opacity-0"} -translate-x-[10%] xl:translate-x-0 left-1/2 my-8 min-h-[124px] sm:min-h-[136px] lg:min-h-[148px] xl:min-h-[160px] min-w-[367px] sm:min-w-[454px] md:min-w-[458px] lg:min-w-[537px] xl:min-w-[615px] absolute bottom-0 font-sans gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12`}>
                    <div
                        className={`absolute text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 font-bold ${isEndOfPage ? "-top-1/3 opacity-100" : "top-0 opacity-0"}`}>More
                        Work
                    </div>
                    <Link
                        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 font-bold   ${isEndOfPage ? "left-0 bottom-3/4 font-normal opacity-25" : "left-0 bottom-0"}`}
                        href={""}>
                        Case Studies
                    </Link>
                    <Link
                        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25  ${isEndOfPage ? "left-0 bottom-1/2" : "left-1/4 bottom-0"}`}
                        href={""}>
                        Mobile Apps
                    </Link>
                    <Link
                        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25  ${isEndOfPage ? "left-0 bottom-1/4" : "left-1/2 bottom-0"}`}
                        href={""}>
                        Web Apps
                    </Link>
                    <Link
                        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25  ${isEndOfPage ? "left-0 bottom-0" : "left-3/4 bottom-0"}`}
                        href={""}>
                        Resume
                    </Link>
                </div>
                {/*</div>*/}
                {/*<div className={`font-sans flex flex-col gap-8 sm:9 md:10 lg:11 xl:12`}>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 font-bold  `}*/}
                {/*        href={""}>*/}
                {/*        Work*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25 `}*/}
                {/*        href={""}>*/}
                {/*        Process*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25  `}*/}
                {/*        href={""}>*/}
                {/*        About*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 opacity-25 `}*/}
                {/*        href={""}>*/}
                {/*        Resume*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <motion.div
                    className={`${isEndOfPage ? "sm:w-[180px] md:w-[202px] lg:w-[225px] xl:w-[271px]" : "w-[40px] sm:w-[42px] md:w-[44px] lg:w-[46px] xl:w-[48px]"}  relative delay-100 duration-500 flex flex-col justify-end items-end flex-wrap gap-6`}>
                    <p className={`${isEndOfPage ? "opacity-100 w-fit -top-1/2" : "opacity-0 top-1/2 w-0"}  absolute overflow-hidden font-sans whitespace-nowrap text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>Ready
                        to create<br/>something <b>Awesome?</b></p>
                    <motion.div
                        className={`${isEndOfPage ? "w-fit" : "w-0"}  overflow-hidden duration-1000 grid-cols-2 grid gap-3`}>
                        <SecondaryButton href={""} text={"Linkedin"}
                                         className={`${isEndOfPage ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-y-10"}  delay-[125ms] !transition-all  w-full items-start !justify-start`}/>
                        <SecondaryButton href={""} text={"Behance"}
                                         className={`${isEndOfPage ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-y-10"}  delay-[175ms] !transition-all  w-full items-start !justify-start`}/>
                        <SecondaryButton href={""} text={"Github"}
                                         className={`${isEndOfPage ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-y-10"}  delay-[225ms] !transition-all  w-full items-start !justify-start`}/>
                        <SecondaryButton href={""} text={"Dribbble"}
                                         className={`${isEndOfPage ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-y-10"}  delay-[275ms] !transition-all  w-full items-start !justify-start`}/>
                    </motion.div>
                    <Link
                        className={`${isEndOfPage ? " w-full  px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 p-2" : "w-0 sm:w-[42px] md:w-[44px] lg:w-[46px] xl:w-[48px] p-0"} overflow-hidden duration-1000 transition-[width]  sm:block text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl !flex justify-center items-center  sm:p-[9px] md:p-[10px] lg:p-[11px] xl:p-3 rounded-lg bg-primary text-primary-accent font-medium hover:bg-primary-hover `}
                        href={""}
                    >
                        <Mail strokeWidth={2.5}
                              className={"sm:min-w-[21px] md:min-w-[22px] lg:min-w-[23px] xl:min-w-[24px] "}/>
                        <p className={`${isEndOfPage ? "opacity-100 w-fit ml-2 sm:ml-3" : "w-0 opacity-0"}  overflow-hidden whitespace-nowrap font-sans text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl`}>
                            Get in Touch
                        </p>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BottomNav;