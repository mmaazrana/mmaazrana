import React from 'react';
import Link from "next/link";
import {Mail} from "lucide-react";

const BottomNav = () => {
    return (
        <div className={"z-10 fixed nav-bg right-0 bottom-0 w-screen  "}>
            <div className={" absolute bg-primary-accent bottom-0 right-0 w-full blur-2xl h-[68px] -z-10"}></div>
            <div className={"p-12 pt-20 flex justify-between items-end w-full z-30"}>
                <svg  className={"hover:scale-90 hover:translate-x-1 hover:translate-y-0.5"} width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_479_34518" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="48">
                        <path d="M61.6365 0H0V48H61.6365V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_479_34518)">
                        <path
                            className={"hover:fill-primary-hover"}
                            d="M46.4674 13.5318C46.7152 14.0453 46.7152 14.6435 46.4674 15.157L38.9061 31.0309L32.7396 43.9818C32.0366 45.4603 29.8869 45.4603 29.1838 43.9818L24.7922 34.7667C24.0891 33.2881 21.9396 33.2881 21.2365 34.7667L15.5944 46.6059C15.2716 47.283 14.58 47.7175 13.8136 47.7175H2.25272C0.817702 47.7175 -0.133212 46.2559 0.471915 44.9863L7.1168 31.0309L15.0641 14.3443L21.2365 1.39353C21.9396 -0.0849538 24.0891 -0.0849538 24.7922 1.39353L29.1838 10.6087C29.8869 12.0871 32.0366 12.0871 32.7396 10.6087L37.1311 1.39353C37.8342 -0.0849538 39.9839 -0.0849538 40.6869 1.39353L46.4674 13.5318Z"
                            fill="#CEDDFA"/>
                        <path
                            className={"hover:fill-primary-hover"}
                            d="M59.6713 47.7177H49.9373C48.5023 47.7177 47.5514 46.2561 48.1564 44.9864L53.0206 34.7668C53.7236 33.2883 55.8733 33.2883 56.5764 34.7668L61.4404 44.9864C62.0456 46.2618 61.0947 47.7177 59.6596 47.7177H59.6713Z"
                            fill="#4264A8"/>
                    </g>
                </svg>
                <div className={"font-sans flex gap-16"} >
                    <div className={"font-bold"} >Work</div>
                    <div className={"opacity-25"} >Process</div>
                    <div className={"opacity-25"} >About</div>
                    <div className={"opacity-25"} >Resume</div>
                </div>
                <Link
                    className={"text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl flex justify-end  p-2  xl:p-3 md:p-4 rounded-lg bg-primary text-primary-accent font-medium hover:bg-primary-hover "}
                    href={""}>
                    <Mail strokeWidth={2} />
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;