'use client';

import React, { FC, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { stagger, useAnimate } from 'motion/react';
import * as m from 'motion/react-m';
import Typography from '@/components/Typography';
import { bottomNavButtons, footerButtons } from '@/helpers/constants';
import Linkedin from '@/components/icons/linkedin';
import Behance from '@/components/icons/behance';
import Github from '@/components/icons/github';
import Dribbble from '@/components/icons/dribbble';
import Logo from './logo';
import ContactButton from './contact-button';
import SocialLink from './social-link';
import FooterSection from './footer-section';
import { TextTypes, ColorTypes, WeightTypes } from '@/helpers/enums';
import { BottomNavProvider, useBottomNav } from './bottom-nav-context';

// Types
interface BottomNavProps {}

// Main Component
const BottomNavContent: FC = () => {
  const { isEndOfPage, activeSection, isInView } = useBottomNav();
  const [scope, animate] = useAnimate();

  // Reusable animation configurations
  const animationConfig = {
    duration: 0.25,
    delay: stagger(0.1, { startDelay: 0 }),
  };

  // Memoized animation handlers
  const handleAnimations = useCallback(() => {
    animate(
      '#sections',
      isEndOfPage
        ? { opacity: 0, scale: 0.3, transform: 'translateY(50px)' }
        : { opacity: 1, scale: 1, transform: 'translateY(0px)' },
      {
        duration: isEndOfPage ? 0.25 : 0.15,
        delay: animationConfig.delay,
      }
    );
    animate(
      '#pages',
      isEndOfPage
        ? { opacity: 1, scale: 1, transform: 'translateX(0px)' }
        : { opacity: 0, scale: 0.3, transform: 'translateX(-50px)' },
      {
        duration: isEndOfPage ? 0.25 : 0,
        delay: isEndOfPage ? stagger(0.05, { startDelay: 0.25 }) : 0,
      }
    );
  }, [isEndOfPage, animate]);

  // Call handleAnimations when isEndOfPage changes
  useEffect(() => {
    handleAnimations();
  }, [handleAnimations]);

  // Memoized social links component
  const SocialLinks = useMemo(
    () => (
      <div
        className={`${isEndOfPage ? 'w-full sm:w-fit' : 'w-0'} overflow-hidden duration-1000 flex flex-row flex-wrap justify-between sm:grid-cols-2 sm:grid gap-3`}
      >
        {[
          { icon: <Linkedin />, text: 'Linkedin', href: 'https://www.linkedin.com/in/mmaazrana/' },
          { icon: <Behance />, text: 'Behance', href: 'https://www.behance.net/maazrana3' },
          { icon: <Github />, text: 'Github', href: 'https://github.com/mmaazrana' },
          { icon: <Dribbble />, text: 'Dribbble', href: 'https://dribbble.com/mmaazrana' },
        ].map((link, index) => (
          <SocialLink
            key={index}
            icon={link.icon}
            text={link.text}
            href={link.href}
            index={index}
          />
        ))}
      </div>
    ),
    [isEndOfPage]
  );

  return (
    <div
      ref={scope}
      id={'bottom-navbar'}
      className={`${isInView ? 'translate-y-0' : 'translate-y-32'} z-10 fixed nav-bg right-0 bottom-0 max-w-screen w-full transition-all duration-300`}
    >
      <div
        className={`${isEndOfPage ? 'h-[541px] about:h-[426px] sm:h-[366px] lg:h-[324px]' : 'h-[68px]'} absolute bg-primary-accent bottom-0 right-0 w-full blur-2xl -z-10 transition-all duration-300`}
      />
      <div
        className={`${isEndOfPage ? 'h-[575px] about:h-[470px] sm:h-[400px] lg:h-[358px]' : 'h-[149px] md:h-[150px] lg:h-[159px] xl:h-[162px]'} px-8 sm:px-9 md:px-10 lg:px-11 xl:px-8 pb-6 sm:pb-7 lg:pb-8 pt-20 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-24 justify-between items-start sm:items-end z-30 transition-all duration-300`}
      >
        <div
          className={'flex flex-col lg:flex-row gap-1 sm:gap-2 lg:gap-10 xl:gap-24 w-full h-full'}
        >
          <div
            className={
              'flex flex-col items-start justify-start w-full lg:w-fit lg:max-w-fit overflow-hidden min-h-fit h-fit gap-1'
            }
          >
            <Logo />
            <m.div
              initial={{ opacity: 0, transform: 'translateY(100px)' }}
              animate={{
                opacity: isEndOfPage ? 1 : 0,
                transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
              }}
              transition={{
                duration: 0.25,
                delay: isEndOfPage ? 0.25 : 0,
              }}
              className={'transition-none flex w-full min-w-full'}
            >
              <Typography
                type={TextTypes.lg}
                className={`${isEndOfPage ? 'inline-block' : 'hidden'} opacity-50 shrink`}
              >
                Product Designer - Web Developer - Mobile App Developer - Animator - 3D Artist
              </Typography>
            </m.div>
          </div>
          <div
            className={`${isEndOfPage ? 'flex' : 'hidden'} w-full flex-row flex-auto gap-8 justify-between`}
          >
            {footerButtons.map((section, index) => (
              <FooterSection key={index} section={section} />
            ))}
          </div>
          <div
            className={
              'transition-colors my-8 px-8 min-w-[80vw] w-full max-w-[450px] sm:min-w-[404px] md:min-w-[458px] lg:min-w-[537px] xl:min-w-[625px] left-1/2 -translate-x-1/2 bottom-0 absolute flex justify-between gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12'
            }
          >
            {bottomNavButtons.map((button, index) => (
              <div id="sections" key={index} className={'transition-colors'}>
                <Link href={button.href} aria-label={button.text}>
                  <Typography
                    type={TextTypes.xl}
                    color={ColorTypes.primary}
                    className={`${button.section === activeSection ? 'opacity-100' : 'opacity-30 hover:opacity-50'} transition-opacity duration-300`}
                  >
                    {button.text}
                  </Typography>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${isEndOfPage ? 'w-full sm:max-w-[202px] md:max-w-[217px] lg:max-w-[232px] xl:max-w-[280px]' : 'max-w-[40px] sm:max-w-[34px] md:max-w-[40px] lg:max-w-[46px] xl:max-w-[52px]'} w-full grow shrink relative delay-100 duration-500 flex flex-col justify-end items-center sm:items-end flex-wrap gap-6`}
        >
          <div className={'flex flex-row justify-between items-center gap-6 w-full'}>
            <m.div
              initial={{ opacity: 0, transform: 'translateY(100px)' }}
              animate={{
                opacity: isEndOfPage ? 1 : 0,
                transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
              }}
              transition={{
                duration: 0.25,
                delay: isEndOfPage ? 0.35 : 0.25,
              }}
              className={'transition-none flex sm:w-full sm:min-w-full'}
            >
              <Typography
                type={TextTypes['3xl']}
                weight={WeightTypes.bold}
                className={`w-full overflow-hidden ${isEndOfPage ? 'inline-block' : 'hidden'}`}
              >
                Ready to create something awesome?
              </Typography>
            </m.div>
            <m.div
              initial={{ opacity: 0, transform: 'translateX(50px)' }}
              animate={{
                opacity: isEndOfPage ? 1 : 0,
                transform: `translateX(${isEndOfPage ? 0 : 50}px)`,
              }}
              transition={{
                duration: 0.25,
                delay: isEndOfPage ? 0.35 : 0.25,
              }}
              className={'transition-none'}
            >
              <ContactButton isMobile />
            </m.div>
          </div>
          {SocialLinks}
          <ContactButton />
        </div>
      </div>
      <span
        className={`w-[25vw] h-[25vw] left-0 bottom-0 -translate-x-1/4 translate-y-1/4 aspect-square rounded-full bg-secondary-hover blur-[100px] absolute -z-10 ${isEndOfPage ? 'opacity-50' : 'opacity-0'} transition-all duration-300`}
      />
    </div>
  );
};

const BottomNav: FC<BottomNavProps> = () => {
  return (
    <BottomNavProvider>
      <BottomNavContent />
    </BottomNavProvider>
  );
};

export default BottomNav;
