"use client";
import React, {useState} from 'react';
import Image from "next/image";
import logo from "../public/logo.svg"
import {motion} from "framer-motion"
import PrimaryButton from "@/components/buttons/primaryButton";
import SecondaryButton from "@/components/buttons/secondaryButton";

const Nav = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full">
            <div className="justify-between items-center mx-auto md:items-center md:flex">

                <div>
                    <div className=" flex items-center justify-between md:block  ">
                        <a href="#"  >
                            <svg className="h-6 sm:h-7 md:h-8 lg:h-10" height="40" viewBox="0 0 275 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_56_5)">
                                    <path d="M37.9168 11.7766C38.119 12.2045 38.119 12.703 37.9168 13.1309L31.747 26.3592L26.7153 37.1516C26.1416 38.3837 24.3875 38.3837 23.8138 37.1516L20.2304 29.4723C19.6567 28.2402 17.9027 28.2402 17.329 29.4723L12.7252 39.3383C12.4618 39.9026 11.8975 40.2647 11.2721 40.2647H1.83872C0.667785 40.2647 -0.108138 39.0467 0.385631 37.9887L5.80769 26.3592L12.2925 12.4537L17.329 1.66136C17.9027 0.429287 19.6567 0.429287 20.2304 1.66136L23.8138 9.34064C24.3875 10.5727 26.1416 10.5727 26.7153 9.34064L30.2986 1.66136C30.8723 0.429287 32.6264 0.429287 33.2001 1.66136L37.9168 11.7766Z" fill="var(--primary)"/>
                                    <path d="M48.6904 40.2648H40.7477C39.5768 40.2648 38.8009 39.0468 39.2946 37.9887L43.2636 29.4724C43.8373 28.2403 45.5914 28.2403 46.1651 29.4724L50.134 37.9887C50.6278 39.0515 49.8519 40.2648 48.6809 40.2648H48.6904Z" fill="var(--secondary)"/>
                                </g>
                                <path d="M93.0479 13.21V28.5H90.5399V18.028L85.8759 28.5H84.1379L79.4519 18.028V28.5H76.9439V13.21H79.6499L85.0179 25.2L90.3639 13.21H93.0479ZM114.362 25.376H107.96L106.86 28.5H104.242L109.72 13.188H112.624L118.102 28.5H115.462L114.362 25.376ZM113.658 23.33L111.172 16.224L108.664 23.33H113.658ZM138.502 25.376H132.1L131 28.5H128.382L133.86 13.188H136.764L142.242 28.5H139.602L138.502 25.376ZM137.798 23.33L135.312 16.224L132.804 23.33H137.798ZM155.844 26.322H162.95V28.5H152.874V26.542L159.958 15.388H152.874V13.21H162.95V15.168L155.844 26.322ZM196.948 28.5L193.428 22.384H191.514V28.5H189.006V13.21H194.286C195.46 13.21 196.45 13.4153 197.256 13.826C198.078 14.2367 198.686 14.7867 199.082 15.476C199.493 16.1653 199.698 16.9353 199.698 17.786C199.698 18.7833 199.405 19.6927 198.818 20.514C198.246 21.3207 197.359 21.8707 196.156 22.164L199.94 28.5H196.948ZM191.514 20.382H194.286C195.225 20.382 195.929 20.1473 196.398 19.678C196.882 19.2087 197.124 18.578 197.124 17.786C197.124 16.994 196.89 16.378 196.42 15.938C195.951 15.4833 195.24 15.256 194.286 15.256H191.514V20.382ZM220.925 25.376H214.523L213.423 28.5H210.805L216.283 13.188H219.187L224.665 28.5H222.025L220.925 25.376ZM220.221 23.33L217.735 16.224L215.227 23.33H220.221ZM248.409 28.5H245.901L238.355 17.082V28.5H235.847V13.188H238.355L245.901 24.584V13.188H248.409V28.5ZM269.72 25.376H263.318L262.218 28.5H259.6L265.078 13.188H267.982L273.46 28.5H270.82L269.72 25.376ZM269.016 23.33L266.53 16.224L264.022 23.33H269.016Z" fill="var(--primary)"/>
                                <defs>
                                    <clipPath id="clip0_56_5">
                                        <rect width="50.2939" height="40" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            {/*<Image priority height={40} src={logo} alt={"M MAAZ RANA"}/>*/}
                        </a>

                        <div className="md:hidden">
                            <button onClick={() => setNavbar(!navbar)}
                                    className=" flex flex-col justify-center items-end outline-0 p-2 ${navbar ? 'items-start' : 'items-end'}`}">
                                <span
                                    className={`block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${navbar ? 'bg-error rotate-45 translate-y-1 w-3   ' : 'bg-primary -translate-y-0.5 w-5'}`}></span>
                                <span
                                    className={`bg-primary transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${navbar ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span
                                    className={` block transition-all duration-300 ease-out h-0.5 w-3 rounded-sm ${navbar ? 'bg-error -rotate-45 -translate-y-1 w-5  ' : 'bg-primary translate-y-0.5 w-3'}`}></span>
                            </button>

                        </div>
                    </div>
                </div>
                <div className={"bg-primary-accent rounded-2xl absolute right-4 top-14 z-50 items-end justify-end text-left  md:rounded-none md:pl-4 md:relative md:flex md:right-0 md:top-0 md:z-0 " }>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        className={` flex-1 justify-self-center max-w-fit shadow-lg py-4 px-4 mt-4 md:block md:p-0 md:mt-0 md:w-auto md:shadow-none  ${
                            navbar ? ' block' : 'hidden  '
                        }`}
                    >
                        <ul className="items-end justify-end space-y-3 xl:space-x-3 md:flex md:space-x-2 md:space-y-0">
                            <li>
                                <SecondaryButton href={""} text={"Work"}/>
                            </li>
                            <li>
                                <SecondaryButton href={""} text={"Process"}/>
                            </li>
                            <li>
                                <SecondaryButton href={""} text={"About"}/>
                            </li>
                            <li>
                                <SecondaryButton href={""} text={"Resume"}/>
                            </li>
                            <li >
                                <PrimaryButton href={""} text={"Contact"}/>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </nav>
    );


}

export default Nav;