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
      <div className="justify-between items-center mx-auto md:items-center md:flex">
        <div>
          <div className=" flex items-center justify-between md:block  ">
            <Link href="/" aria-label="Home">
              <MaazRanaLogo />
            </Link>

            <div className=" md:hidden ">
              <MenuButton onClick={() => setShowNavbar(!showNavbar)} showNavbar={showNavbar} />
            </div>
          </div>
        </div>
        <div
          className={
            'absolute right-4 top-14 z-50 items-end justify-end text-left md:rounded-none md:pl-4 md:relative md:flex md:right-0 md:top-0 md:z-0 '
          }
        >
          <div
            className={`md:opacity-100 md:pointer-events-auto rounded-2xl flex-1 justify-self-center max-w-fit shadow-lg py-4 px-4 mt-4 md:block md:p-0 md:mt-0 md:w-auto md:shadow-none  ${
              showNavbar
                ? 'bg-primary-accent pointer-events-auto block opacity-100'
                : 'opacity-0 pointer-events-none'
            } `}
          >
            <ul className="items-end justify-end gap-3 xl:gap-3 md:flex md:gap-2">
              {navButtons.map((button, index) => (
                <li
                  key={index}
                  className={`${button.type === ButtonTypes.primary && 'xs:ml-1 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-5 2xl:ml-6'}`}
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
