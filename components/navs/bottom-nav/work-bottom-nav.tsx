'use client';

import React, { FC, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, stagger, useAnimate } from 'motion/react';
import * as m from 'motion/react-m';
import Typography from '@/components/Typography';
import { footerButtons, workBottomNavCategories } from '@/helpers/constants';
import Linkedin from '@/components/icons/linkedin';
import Behance from '@/components/icons/behance';
import Github from '@/components/icons/github';
import Dribbble from '@/components/icons/dribbble';
import Logo from './logo';
import ContactButton from './contact-button';
import SocialLink from './social-link';
import FooterSection from './footer-section';
import { ColorTypes, TextTypes, WeightTypes, WorkCategories } from '@/helpers/enums';
import { BottomNavProvider, useBottomNav } from './bottom-nav-context';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Types
interface WorkBottomNavProps {
  setActiveTab: (tab: WorkCategories) => void;
}

// Main Component
const WorkBottomNavContent: FC<WorkBottomNavProps> = ({ setActiveTab }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isEndOfPage, isInView } = useBottomNav();
  const [scope, animate] = useAnimate();

  const selectedTabInit = searchParams.get('tab') || workBottomNavCategories[0].key;

  const [selectedTabId, setSelectedTabId] = useState(selectedTabInit);

  const currentIndex = workBottomNavCategories.findIndex(
    category => category.key === selectedTabId
  );
  const currentCategory = workBottomNavCategories[currentIndex];

  const SelectedComponent = workBottomNavCategories.find(
    button => button.key === selectedTabId
  )?.key;

  const handleTabChange = (id: string) => {
    setSelectedTabId(id);
    router.push(`${pathname}?tab=${id}`, { scroll: false });
  };

  useEffect(() => {
    setSelectedTabId(selectedTabInit);
    if (SelectedComponent) setActiveTab(SelectedComponent);
  }, [selectedTabInit]);

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
              'my-9 px-40 w-full left-1/2 -translate-x-1/2 bottom-0 absolute justify-center gap-2 hidden lg:flex'
            }
          >
            {workBottomNavCategories.map((button, index) => (
              <div id="sections" key={index} className={'transition-colors'}>
                <button
                  onClick={() => handleTabChange(button.key)}
                  aria-label={button.key}
                  className={`rounded-full px-6 py-3 whitespace-nowrap cursor-pointer transition-all duration-300 group ${button.key === SelectedComponent ? 'bg-secondary/25' : 'bg-none hover:bg-secondary/10'}`}
                >
                  <Typography
                    type={TextTypes.base}
                    color={ColorTypes.primary}
                    className={`${button.key === SelectedComponent ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'} transition-opacity duration-300 rounded-full`}
                  >
                    {button.text}
                  </Typography>
                </button>
              </div>
            ))}
          </div>
          <div
            className={
              'my-6 px-8 sm:px-28 md:px-32 w-full left-1/2 -translate-x-1/2 bottom-0 absolute justify-center gap-2 flex justify-between items-center lg:hidden'
            }
          >
            <span
              className={`absolute left-1/2 flex -translate-x-1/2 top-1/2 -translate-y-1/2 h-full self-center w-full z-10 ${isEndOfPage ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
            >
              <span className="mx-8 sm:mx-28 md:mx-32 left-0 top-0 h-full w-full work-nav-gradient rounded-full" />
            </span>
            <m.button
              initial={{ opacity: 0, transform: 'translateY(100px)' }}
              animate={{
                opacity: isEndOfPage ? 0 : 1,
                transform: `translateY(${isEndOfPage ? 100 : 0}px)`,
              }}
              transition={{
                duration: 0.25,
                delay: 0.1,
              }}
              onClick={() =>
                handleTabChange(
                  workBottomNavCategories[
                    (workBottomNavCategories.findIndex(button => button.key === selectedTabId) -
                      1 +
                      workBottomNavCategories.length) %
                      workBottomNavCategories.length
                  ].key
                )
              }
              className="h-12 w-12 aspect-square flex justify-center items-center rounded-full bg-secondary/30 backdrop-blur-sm shadow-xl z-[20]"
              aria-label="Previous Tab"
            >
              <ChevronLeft className="w-6 h-6 stroke-primary" />
            </m.button>
            <div
              className={
                'relative flex justify-between w-full items-center overflow-hidden justify-center gap-2'
              }
            >
              <AnimatePresence mode="wait">
                {currentIndex > 0 && (
                  <m.div
                    initial={{ opacity: 0, transform: 'translateY(100px)' }}
                    animate={{
                      opacity: isEndOfPage ? 0 : 1,
                      transform: `translateY(${isEndOfPage ? 100 : 0}px)`,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: 0.2,
                    }}
                    className={
                      'absolute left-0 about:block hidden -translate-x-1/3 px-10 py-4 whitespace-nowrap'
                    }
                  >
                    <m.div
                      initial={{ opacity: 0, width: 0, translateX: -200 }} // Initial state
                      animate={{
                        opacity: 1,
                        width: 'auto',
                        translateX: 0,
                      }} // Animate to this state
                      exit={{ opacity: 0, width: 0, translateX: -200 }} // Exit state
                      transition={{
                        opacity: { duration: 0.3, delay: 0.2 },
                        width: { duration: 0.5 },
                        translateX: { duration: 0.5 },
                      }}
                      key={workBottomNavCategories[currentIndex - 1].key} // Unique key for each tab
                    >
                      <Typography type={TextTypes.base} color={ColorTypes.primary}>
                        {workBottomNavCategories[currentIndex - 1].text}
                      </Typography>
                    </m.div>
                  </m.div>
                )}
              </AnimatePresence>
              {currentCategory && (
                <div
                  className={
                    'outline-0 border-0 flex flex-row justify-center items-center w-full min-w-full px-12'
                  }
                >
                  <AnimatePresence mode="wait">
                    <m.div
                      initial={{ opacity: 0, transform: 'translateY(100px)' }}
                      animate={{
                        opacity: isEndOfPage ? 0 : 1,
                        transform: `translateY(${isEndOfPage ? 100 : 1}px)`,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: 0.3,
                      }}
                      className={
                        'self-center align-center origin-center transform-origin-center px-10 py-4 whitespace-nowrap z-10 overflow-hidden'
                      }
                    >
                      <m.div
                        initial={{ opacity: 0, width: 0, translateX: -40 }} // Initial state
                        animate={{
                          opacity: 1,
                          width: 'auto',
                          translateX: 0,
                        }} // Animate to this state
                        exit={{ opacity: 0, width: 0, translateX: -40 }} // Exit state
                        transition={{
                          opacity: { duration: 0.35, delay: 0.1 },
                          width: { duration: 0.25 },
                          translateX: { duration: 0.25 },
                        }}
                        key={currentCategory.key} // Unique key for each tab
                      >
                        <Typography type={TextTypes.base} color={ColorTypes.primary}>
                          {currentCategory.text}
                        </Typography>
                      </m.div>
                    </m.div>
                  </AnimatePresence>
                </div>
              )}
              <AnimatePresence mode="wait">
                {currentIndex < workBottomNavCategories.length - 1 && (
                  <m.div
                    initial={{ opacity: 0, transform: 'translateY(100px)' }}
                    animate={{
                      opacity: isEndOfPage ? 0 : 1,
                      transform: `translateY(${isEndOfPage ? 100 : 1}px)`,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: 0.4,
                    }}
                    className={
                      'absolute about:block hidden right-0 translate-x-1/3 px-10 py-4 whitespace-nowrap'
                    }
                  >
                    <m.div
                      initial={{ opacity: 0, width: 0, translateX: 250 }} // Initial state
                      animate={{
                        opacity: 1,
                        width: 'auto',
                        translateX: 0,
                      }} // Animate to this state
                      exit={{ opacity: 0, width: 0, translateX: 250 }} // Exit state
                      transition={{
                        opacity: { duration: 0.3, delay: 0.2 },
                        width: { duration: 0.5 },
                        translateX: { duration: 0.5 },
                      }}
                      key={workBottomNavCategories[currentIndex + 1].key} // Unique key for each tab
                    >
                      <Typography type={TextTypes.base} color={ColorTypes.primary}>
                        {workBottomNavCategories[currentIndex + 1].text}
                      </Typography>
                    </m.div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
            <m.button
              initial={{ opacity: 0, transform: 'translateY(100px)' }}
              animate={{
                opacity: isEndOfPage ? 0 : 1,
                transform: `translateY(${isEndOfPage ? 100 : 0}px)`,
              }}
              transition={{
                duration: 0.25,
                delay: 0.5,
              }}
              onClick={() =>
                handleTabChange(
                  workBottomNavCategories[
                    (workBottomNavCategories.findIndex(button => button.key === selectedTabId) +
                      1) %
                      workBottomNavCategories.length
                  ].key
                )
              }
              className="h-12 w-12 aspect-square flex justify-center items-center rounded-full bg-secondary/30 backdrop-blur-sm shadow-xl z-[20]"
              aria-label="Next Tab"
            >
              <ChevronRight className="w-6 h-6 stroke-primary" />
            </m.button>
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

const WorkBottomNav: FC<WorkBottomNavProps> = ({ setActiveTab }) => {
  return (
    <BottomNavProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <WorkBottomNavContent setActiveTab={setActiveTab} />
      </Suspense>
    </BottomNavProvider>
  );
};

export default WorkBottomNav;
