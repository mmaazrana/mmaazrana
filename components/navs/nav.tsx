'use client';

import React, { FC, useState } from 'react';
import { navButtons } from '@/helpers/constants';
import Link from 'next/link';
import MaazRanaLogo from '../icons/maazRanaLogo';
import MenuButton from '@/components/button/menu-button';
import Button from '@/components/button';
import { ButtonTypes } from '@/helpers/enums';

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav id={'navbar'} className="w-full xl:px-12 lg:px-11 md:px-10 sm:px-9 px-8 xl:gap-12">
      <div className="justify-between items-center mx-auto nav:items-center nav:flex">
        <div>
          <div className=" flex items-center justify-between nav:block  ">
            <Link href="/" aria-label="Home">
              <MaazRanaLogo />
            </Link>

            <div className="nav:hidden z-100 pointer-events-auto">
              <MenuButton onClick={() => setShowNavbar(!showNavbar)} showNavbar={showNavbar} />
            </div>
          </div>
        </div>
        <div
          className={
            'absolute right-8 top-18 z-50 items-end justify-end text-left nav:rounded-none nav:pl-4 nav:relative nav:flex nav:right-0 nav:top-0 nav:z-0 '
          }
        >
          <div
            className={`${
              showNavbar
                ? 'bg-secondary-hover/25 backdrop-blur-md outline outline-secondary-hover/75 pointer-events-auto block opacity-100'
                : 'opacity-0 pointer-events-none'
            } nav:bg-transparent nav:outline-transparent nav:opacity-100 nav:pointer-events-auto rounded-2xl flex-1 justify-self-center max-w-fit shadow-lg p-4 mt-4 nav:block nav:p-0 nav:mt-0 nav:w-auto nav:shadow-none transition-opacity duration-300`}
          >
            <ul className="items-end justify-end nav:gap-2 lg:gap-3 xl:gap-3 nav:flex ">
              {navButtons.map((button, index) => (
                <li
                  key={index}
                  className={`${button.type === ButtonTypes.primary ? 'w-40 nav:w-fit mt-3 nav:ml-3 lg:ml-4 xl:ml-5 2xl:ml-6' : 'mt-1 nav:mt-0'}`}
                >
                  <Link href={button.href} aria-label={button.text}>
                    <Button type={button.type} text={button.text} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
