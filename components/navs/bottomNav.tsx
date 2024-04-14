"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
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
  SiFlutter,
  SiFramer,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Typography from "@/components/Typography";
import { bottomNavButtons, footerButtons } from "@/helpers/constants";
import Button from "@/components/button";
import {
  ButtonTypes,
  ColorTypes,
  Sections,
  TextTypes,
  WeightTypes,
} from "@/helpers/enums";
import Linkedin from "@/components/icons/linkedin";
import Behance from "@/components/icons/behance";
import Github from "@/components/icons/github";
import Dribbble from "@/components/icons/dribbble";

interface BottomNavProps {
  inView: boolean;
  activeSection: Sections;
}

const BottomNav: FC<BottomNavProps> = ({ inView, activeSection }) => {
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0 });
  const staggerListTwo = stagger(0.05, { startDelay: 0.25 });
  useEffect(() => {
    animate(
      "#sections",
      isEndOfPage
        ? { opacity: 0, scale: 0.3, transform: "translateY(50px)" }
        : { opacity: 1, scale: 1, transform: "translateY(0px)" },
      {
        duration: isEndOfPage ? 0.25 : 0.15,
        delay: staggerList,
      },
    );
    animate(
      "#pages",
      isEndOfPage
        ? { opacity: 1, scale: 1, transform: "translateX(0px)" }
        : { opacity: 0, scale: 0.3, transform: "translateX(-50px)" },
      {
        duration: isEndOfPage ? 0.25 : 0,
        delay: isEndOfPage ? staggerListTwo : 0,
      },
    );
  }, [isEndOfPage, animate, staggerList]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);

      if (windowHeight + scrollTop >= documentHeight - 180) {
        setIsEndOfPage(true);
      } else {
        setIsEndOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    SiTypescript,
  ];
  return (
    <div
      ref={scope}
      className={` ${inView ? "translate-y-32" : "translate-y-0 "} z-10 fixed nav-bg right-0 bottom-0 max-w-screen w-full`}
    >
      <motion.div
        className={`${isEndOfPage ? "h-[541px] about:h-[426px] sm:h-[366px] lg:h-[324px]" : "h-[68px]"} absolute bg-primary-accent bottom-0 right-0 w-full blur-2xl -z-10`}
      ></motion.div>
      <motion.div
        className={`${isEndOfPage ? "h-[575px] about:h-[470px] sm:h-[400px] lg:h-[358px]" : "h-[149px] md:h-[150px] lg:h-[159px] xl:h-[162px]"} px-8 sm:px-9 md:px-10 lg:px-11 xl:px-8 pb-6 sm:pb-7 lg:pb-8 pt-20 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-24 justify-between items-start sm:items-end z-30`}
      >
        <div
          className={
            "flex flex-col lg:flex-row gap-1 sm:gap-2 lg:gap-10 xl:gap-24 w-full h-full"
          }
        >
          <div
            className={`flex flex-col items-start justify-start w-full lg:w-fit lg:max-w-fit overflow-hidden min-h-fit h-fit gap-1`}
          >
            <Link href={"/"}>
              <svg
                className={`${isEndOfPage ? "block h-[36px] md:h-[34px] lg:h-[36px] xl:h-[40px] lg:w-auto mb-2 lg:mb-4 xl:mb-6" : "hidden sm:block h-[40px] lg:h-[44px] xl:h-[48px]"} object-cover`}
                viewBox="0 0 275 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  clipPath="url(#clip0_56_5)"
                  className={
                    "hover:scale-90 hover:translate-x-1 hover:translate-y-0.5"
                  }
                >
                  <path
                    d="M37.9168 11.7766C38.119 12.2045 38.119 12.703 37.9168 13.1309L31.747 26.3592L26.7153 37.1516C26.1416 38.3837 24.3875 38.3837 23.8138 37.1516L20.2304 29.4723C19.6567 28.2402 17.9027 28.2402 17.329 29.4723L12.7252 39.3383C12.4618 39.9026 11.8975 40.2647 11.2721 40.2647H1.83872C0.667785 40.2647 -0.108138 39.0467 0.385631 37.9887L5.80769 26.3592L12.2925 12.4537L17.329 1.66136C17.9027 0.429287 19.6567 0.429287 20.2304 1.66136L23.8138 9.34064C24.3875 10.5727 26.1416 10.5727 26.7153 9.34064L30.2986 1.66136C30.8723 0.429287 32.6264 0.429287 33.2001 1.66136L37.9168 11.7766Z"
                    fill="var(--primary)"
                    className={"hover:fill-primary-hover"}
                  />
                  <path
                    d="M48.6904 40.2648H40.7477C39.5768 40.2648 38.8009 39.0468 39.2946 37.9887L43.2636 29.4724C43.8373 28.2403 45.5914 28.2403 46.1651 29.4724L50.134 37.9887C50.6278 39.0515 49.8519 40.2648 48.6809 40.2648H48.6904Z"
                    fill="var(--secondary)"
                    className={"hover:fill-primary-hover"}
                  />
                </g>

                <path
                  className={`${isEndOfPage ? "opacity-100" : "opacity-0"}`}
                  d="M93.0479 13.21V28.5H90.5399V18.028L85.8759 28.5H84.1379L79.4519 18.028V28.5H76.9439V13.21H79.6499L85.0179 25.2L90.3639 13.21H93.0479ZM114.362 25.376H107.96L106.86 28.5H104.242L109.72 13.188H112.624L118.102 28.5H115.462L114.362 25.376ZM113.658 23.33L111.172 16.224L108.664 23.33H113.658ZM138.502 25.376H132.1L131 28.5H128.382L133.86 13.188H136.764L142.242 28.5H139.602L138.502 25.376ZM137.798 23.33L135.312 16.224L132.804 23.33H137.798ZM155.844 26.322H162.95V28.5H152.874V26.542L159.958 15.388H152.874V13.21H162.95V15.168L155.844 26.322ZM196.948 28.5L193.428 22.384H191.514V28.5H189.006V13.21H194.286C195.46 13.21 196.45 13.4153 197.256 13.826C198.078 14.2367 198.686 14.7867 199.082 15.476C199.493 16.1653 199.698 16.9353 199.698 17.786C199.698 18.7833 199.405 19.6927 198.818 20.514C198.246 21.3207 197.359 21.8707 196.156 22.164L199.94 28.5H196.948ZM191.514 20.382H194.286C195.225 20.382 195.929 20.1473 196.398 19.678C196.882 19.2087 197.124 18.578 197.124 17.786C197.124 16.994 196.89 16.378 196.42 15.938C195.951 15.4833 195.24 15.256 194.286 15.256H191.514V20.382ZM220.925 25.376H214.523L213.423 28.5H210.805L216.283 13.188H219.187L224.665 28.5H222.025L220.925 25.376ZM220.221 23.33L217.735 16.224L215.227 23.33H220.221ZM248.409 28.5H245.901L238.355 17.082V28.5H235.847V13.188H238.355L245.901 24.584V13.188H248.409V28.5ZM269.72 25.376H263.318L262.218 28.5H259.6L265.078 13.188H267.982L273.46 28.5H270.82L269.72 25.376ZM269.016 23.33L266.53 16.224L264.022 23.33H269.016Z"
                  fill={"var(--primary)"}
                />
                <defs>
                  <clipPath id="clip0_56_5">
                    <rect
                      width="50.2939"
                      height="40"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <AnimatePresence mode={"wait"}>
              <motion.div
                initial={{ opacity: 0, transform: "translateY(100px)" }}
                animate={{
                  opacity: isEndOfPage ? 1 : 0,
                  transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
                }}
                transition={{
                  duration: 0.25,
                  delay: isEndOfPage ? 0.25 : 0,
                }}
                className={"transition-none flex w-full min-w-full"}
              >
                <Typography
                  type={TextTypes.lg}
                  className={`${isEndOfPage ? "inline-block" : "hidden"} opacity-50 shrink`}
                >
                  Product Designer - Web Developer - Mobile App Developer -
                  Animator - 3D Artist
                </Typography>
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode={"wait"}>
            <motion.div
              className={` ${isEndOfPage ? "flex" : "hidden"} w-full  flex-row flex-auto gap-8 justify-between`}
            >
              {footerButtons.map((section, index) => (
                <motion.div
                  initial={{ opacity: 0, transform: "translateY(150px)" }}
                  animate={{
                    opacity: isEndOfPage ? 1 : 0,
                    transform: `translateY(${isEndOfPage ? 0 : 150}px)`,
                  }}
                  transition={{
                    duration: isEndOfPage ? 0.25 : 0,
                    delay: isEndOfPage ? 0.1 : 0,
                  }}
                  key={index}
                  className={`transition-colors grow flex flex-auto items-stretch w-full flex-col mt-6 lg:my-8 gap-1 md:gap-2 xl:gap-3`}
                >
                  <Typography
                    type={TextTypes["2xl"]}
                    weight={WeightTypes.bold}
                    className={"mb-4 whitespace-nowrap"}
                  >
                    {section[0].text}
                  </Typography>
                  {section.slice(1, section.length).map((button, index) => (
                    <motion.div
                      id={"pages"}
                      key={index}
                      className={"transition-colors"}
                    >
                      <Link href={button.href}>
                        <Typography
                          type={TextTypes.xl}
                          className={"opacity-50 whitespace-nowrap"}
                        >
                          {button.text}
                        </Typography>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode={"wait"}>
            <div
              className={`transition-colors my-8 px-8 min-w-[80vw] w-full max-w-[450px] sm:min-w-[404px] md:min-w-[458px] lg:min-w-[537px] xl:min-w-[615px] left-1/2 -translate-x-1/2 bottom-0 absolute flex justify-between gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12`}
            >
              {bottomNavButtons.map((button, index) => (
                <motion.div
                  id={"sections"}
                  key={index}
                  className={"transition-colors"}
                >
                  <Link href={button.href}>
                    <Typography
                      type={TextTypes.xl}
                      color={ColorTypes.primary}
                      className={`${button.section === activeSection ? "opacity-100" : "opacity-30"}`}
                    >
                      {button.text}
                    </Typography>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
        <motion.div
          className={`${isEndOfPage ? "w-full sm:max-w-[202px] md:max-w-[217px] lg:max-w-[232px] xl:max-w-[271px]" : "max-w-[40px] sm:max-w-[34px] md:max-w-[40px] lg:max-w-[46px] xl:max-w-[52px]"} w-full grow shrink relative delay-100 duration-500 flex flex-col justify-end items-center sm:items-end flex-wrap gap-6`}
        >
          <div
            className={
              "flex flex-row justify-between items-center gap-6 w-full"
            }
          >
            <AnimatePresence mode={"wait"}>
              <motion.div
                initial={{ opacity: 0, transform: "translateY(100px)" }}
                animate={{
                  opacity: isEndOfPage ? 1 : 0,
                  transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
                }}
                transition={{
                  duration: 0.25,
                  delay: isEndOfPage ? 0.35 : 0.25,
                }}
                className={"transition-none flex sm:w-full sm:min-w-full"}
              >
                <Typography
                  type={TextTypes["3xl"]}
                  weight={WeightTypes.bold}
                  className={`w-full overflow-hidden ${isEndOfPage ? "inline-block" : "hidden"}`}
                >
                  Ready to create something awesome?
                </Typography>
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, transform: "translateX(50px)" }}
              animate={{
                opacity: isEndOfPage ? 1 : 0,
                transform: `translateX(${isEndOfPage ? 0 : 50}px)`,
              }}
              transition={{
                duration: 0.25,
                delay: isEndOfPage ? 0.35 : 0.25,
              }}
              className={"transition-none"}
            >
              <Link
                href={""}
                className={`${isEndOfPage ? "block sm:hidden" : "hidden"}`}
              >
                <Button
                  leftIcon={
                    <Mail className={"!fill-none stroke-primary-accent"} />
                  }
                  type={ButtonTypes.primary}
                  textWeight={WeightTypes.semiBold}
                  className={`w-fit !justify-center !items-center !px-4 sm:!p-[9px] md:!p-[10px] lg:!p-[11px] xl:!p-3 !overflow-hidden !whitespace-nowrap`}
                  text={"Get in Touch"}
                />
              </Link>
            </motion.div>
          </div>
          <div
            className={`${isEndOfPage ? "w-full sm:w-fit" : "w-0"} overflow-hidden duration-1000 flex flex-row flex-wrap justify-between sm:grid-cols-2 sm:grid gap-3`}
          >
            <motion.div
              animate={{
                opacity: isEndOfPage ? 1 : 0,
                transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
              }}
              transition={{
                duration: isEndOfPage ? 0.25 : 0.15,
                delay: isEndOfPage ? 0.25 : 0,
              }}
              className={"transition-none"}
            >
              <Link
                href={"https://www.linkedin.com/in/mmaazrana/"}
                target={"_blank"}
              >
                <Button
                  leftIcon={<Linkedin />}
                  text={"Linkedin"}
                  type={ButtonTypes.secondary}
                />
              </Link>
            </motion.div>
            <motion.div
              animate={{
                opacity: isEndOfPage ? 1 : 0,
                transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
              }}
              transition={{
                duration: isEndOfPage ? 0.25 : 0.15,
                delay: isEndOfPage ? 0.3 : 0,
              }}
              className={"transition-none"}
            >
              <Link
                href={"https://www.behance.net/maazrana3"}
                target={"_blank"}
              >
                <Button
                  leftIcon={<Behance />}
                  text={"Behance"}
                  type={ButtonTypes.secondary}
                />
              </Link>
            </motion.div>
            <motion.div
              animate={{
                opacity: isEndOfPage ? 1 : 0,
                transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
              }}
              transition={{
                duration: isEndOfPage ? 0.25 : 0.15,
                delay: isEndOfPage ? 0.35 : 0,
              }}
              className={"transition-none"}
            >
              <Link href={"https://github.com/mmaazrana"} target={"_blank"}>
                <Button
                  leftIcon={<Github />}
                  text={"Github"}
                  type={ButtonTypes.secondary}
                />
              </Link>
            </motion.div>
            <motion.div
              animate={{
                opacity: isEndOfPage ? 1 : 0,
                transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
              }}
              transition={{
                duration: isEndOfPage ? 0.25 : 0.15,
                delay: isEndOfPage ? 0.4 : 0,
              }}
              className={"transition-none"}
            >
              <Link href={"https://dribbble.com/mmaazrana"} target={"_blank"}>
                <Button
                  leftIcon={<Dribbble />}
                  text={"Dribbble"}
                  type={ButtonTypes.secondary}
                />
              </Link>
            </motion.div>
          </div>
          <Link
            href={"mailto:awaismaaz@gmail.com"}
            className={"w-full hidden sm:block"}
          >
            <Button
              leftIcon={<Mail className={"!fill-none stroke-primary-accent"} />}
              type={ButtonTypes.primary}
              textWeight={WeightTypes.semiBold}
              textClassName={`${isEndOfPage ? "opacity-100" : "opacity-0"}`}
              className={`justify-start !items-center !px-[8px] md:!px-[11px] lg:!px-[14px] xl:!px-[15px] !p-2 sm:!p-[9px] md:!p-[10px] lg:!p-[11px] xl:!p-3 !overflow-hidden !whitespace-nowrap`}
              text={"awaismaaz@gmail.com"}
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BottomNav;
