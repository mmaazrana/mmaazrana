"use client";
import Nav from "@/components/navs/nav";
import BottomNav from "@/components/navs/bottomNav";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Typography from "@/components/Typography";
import { Sections, TextTypes, WeightTypes } from "@/helpers/enums";
import Testimonials from "@/components/sections/testimonials";
import {
  breakpoints,
  clientData,
  clientIconComponents,
} from "@/helpers/constants";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Accordion from "@/components/accordion";

export default function Home() {
  const [inView, setInView] = useState(true);
  const [activeSection, setActiveSection] = useState<Sections>(Sections.hero);
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("");
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutRef = useRef(null);
  const sectionRefs = [
    { section: Sections.hero, ref: heroRef },
    { section: Sections.work, ref: workRef },
    { section: Sections.services, ref: servicesRef },
    { section: Sections.testimonials, ref: testimonialsRef },
    { section: Sections.aboutMe, ref: aboutRef },
  ];
  const getDimensions = (ele: any) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      windowWidth >= breakpoints.md
        ? setCurrentScreen("desktop")
        : windowWidth >= breakpoints.sm
          ? setCurrentScreen("tab")
          : setCurrentScreen("mobile");
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(testimonialsRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      if (selected && selected.section !== activeSection) {
        setActiveSection(selected.section);
      } else if (!selected && activeSection) {
        setActiveSection(Sections.hero);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
  return (
    <div className={"overflow-x-hidden max-w-[100vw]"}>
      <Head>
        <GoogleAnalytics />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="pwa-demo" content="pwa-demo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="pwa-demo" />
        <meta name="description" content="pwa-demo" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#22365E" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, width=device-width"
        ></meta>
      </Head>
      <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-center justify-center flex-col">
        <Nav setInView={setInView} />
        <BottomNav inView={inView} activeSection={activeSection} />
        <section
          id={Sections.testimonials}
          ref={testimonialsRef}
          className={
            "xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex items-center justify-center flex-col w-full"
          }
        >
          <div className={"ml-80"}>
            <Testimonials windowWidth={windowWidth} />
          </div>
          <div
            className={"flex flex-col justify-center items-center w-full gap-2"}
          >
            <Typography
              type={TextTypes["8xl"]}
              weight={WeightTypes.extraBold}
              className={"text-center"}
            >
              Testimonials
            </Typography>
            <Typography
              type={TextTypes["2xl"]}
              weight={WeightTypes.regular}
              className={"text-center"}
            >
              Don’t just take my word for it
            </Typography>
          </div>
          <div className={"mr-80"}>
            <Testimonials windowWidth={windowWidth} />
          </div>
        </section>
        <section
          id={Sections.testimonials}
          ref={testimonialsRef}
          className={
            "xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10 flex items-center justify-center flex-col w-full"
          }
        >
          <div
            className={
              "flex flex-row gap-3 md:gap-4 w-full justify-between h-32 opacity-50"
            }
          >
            {clientIconComponents.slice(0, 7).map(({ Icon, props }, index) => (
              <div key={index}>
                <Icon {...props} className={"fill-secondary w-full h-full"} />{" "}
                {/* Adjust the size as per your requirement */}
              </div>
            ))}
          </div>
          <div
            className={"flex flex-col justify-center items-center w-full gap-2"}
          >
            <Typography
              type={TextTypes["6xl"]}
              weight={WeightTypes.extraBold}
              className={"text-center"}
            >
              Esteemed Clients
            </Typography>
            <Typography
              type={TextTypes["2xl"]}
              weight={WeightTypes.regular}
              className={"text-center max-w-3xl"}
            >
              Detail obsessed Product Designer, creating timeless and aesthetic
              products, helping you stand out over various platforms
            </Typography>
          </div>
          <div
            className={
              "flex flex-row gap-3 md:gap-4 w-full justify-between h-24 opacity-50"
            }
          >
            {clientIconComponents.slice(7).map(({ Icon, props }, index) => (
              <div key={index}>
                <Icon {...props} className={"fill-secondary w-full h-full"} />{" "}
                {/* Adjust the size as per your requirement */}
              </div>
            ))}
          </div>
        </section>
        <section
          id={Sections.testimonials}
          ref={testimonialsRef}
          className={
            "xl:p-20 lg:p-16 md:p-14 sm:p-12 p-10  flex items-center justify-center flex-col w-full"
          }
        >
          {clientData.map((data, index) => {
            return (
              <Accordion
                heading={data.heading}
                isExpanded
                content={
                  <div className={"flex flex-col gap-6"}>
                    <div className={"flex flex-col gap-8"}>
                      <Typography type={TextTypes["2xl"]}>
                        {data.testimonial}
                      </Typography>
                      <div className={"flex justify-end items-center gap-2"}>
                        <Typography
                          type={TextTypes.xl}
                          weight={WeightTypes.bold}
                        >
                          {data.clientName}
                        </Typography>
                        <Typography type={TextTypes.xl}>-</Typography>
                        <Typography type={TextTypes.xl}>
                          {data.companyName}
                        </Typography>
                      </div>
                    </div>
                    <div className={"flex flex-col gap-12"}>
                      <div className={"flex flex-col gap-10"}>
                        <div className={"flex flex-row gap-6 items-center"}>
                          <div
                            className={`h-0.5 w-6 bg-secondary opacity-75`}
                          />
                          <Typography
                            type={TextTypes["3xl"]}
                            weight={WeightTypes.bold}
                          >
                            Products Involved
                          </Typography>
                        </div>
                        {data.productsInvolved.map((product, index) => (
                          <div
                            className={
                              "flex justify-between items-center ml-12"
                            }
                          >
                            <div className={"flex items-center gap-3"}>
                              <product.logo className="h-8 fill-primary-hover" />
                              <Typography
                                type={TextTypes["2xl"]}
                                weight={WeightTypes.semiBold}
                              >
                                {product.name}
                              </Typography>
                            </div>
                            <div
                              className={
                                "flex flex-row justify-end items-center gap-2 "
                              }
                            >
                              {product.services.map((service, index) => (
                                <div
                                  key={index}
                                  className={
                                    "flex px-5 py-2 rounded-full bg-secondary-hover"
                                  }
                                >
                                  <Typography type={TextTypes.lg}>
                                    {service}
                                  </Typography>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className={"flex flex-col gap-10"}>
                        <div className={"flex flex-row gap-6 items-center"}>
                          <div
                            className={`h-0.5 w-6 bg-secondary opacity-75`}
                          />
                          <Typography
                            type={TextTypes["3xl"]}
                            weight={WeightTypes.bold}
                          >
                            Technologies
                          </Typography>
                        </div>
                        <div
                          className={
                            "flex flex-row justify-start items-center gap-8 ml-12"
                          }
                        >
                          {data.technologiesInvolved.map(
                            (Technology, index) => (
                              <Technology key={index} />
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}
