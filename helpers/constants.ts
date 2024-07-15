import { ButtonTypes, Sections } from "@/helpers/enums";
import {
  BottomNavButtonT,
  FooterButtonT,
  NavButtonT,
  ProjectT,
  ServiceT,
  TestimonialT,
  WorkExperienceT,
} from "@/helpers/types";
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
  SiGithub,
  SiJavascript,
  SiJira,
  SiJirasoftware,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPython,
  SiReact,
  SiSlack,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import Alfabolt from "@/components/icons/alfabolt";
import TSS from "@/components/icons/tss";
import Deepreel from "@/components/icons/deepreel";
import Athleton from "@/components/icons/athleton";
import Edwiz from "@/components/icons/edwiz";
import Rivanna from "@/components/icons/rivanna";
import BeaconTutors from "@/components/icons/beaconTutors";
import Lyfiti from "@/components/icons/lyfiti";
import FiveOneFivePools from "@/components/icons/515pools";
import MenuHub from "@/components/icons/menuHub";

export const HeroHeadings: string[] = [
  "Product Designer",
  "Web Developer",
  "App Developer",
  "3D Artist",
  "Animator",
];

export const LottiePaths: string[] = [
  "/lotties/product.lottie",
  "/lotties/web.lottie",
  "/lotties/mobile.lottie",
  "/lotties/blender.lottie",
  "/lotties/video.lottie",
];

export const LottieLightPaths: string[] = [
  "/lotties/product-light.lottie",
  "/lotties/web-light.lottie",
  "/lotties/mobile-light.lottie",
  "/lotties/blender-light.lottie",
  "/lotties/video-light.lottie",
];

export const HeroDescriptions: string[] = [
  "Crafting user-centric digital experiences that blend creativity and functionality for impactful, seamless design.",
  "Transforming ideas into interactive web solutions, I specialize in coding elegant websites with a focus on user experience.",
  "Building the future of mobile experiences, I bring innovative app ideas to life with user-centric design and robust functionality.",
  "Sculpting immersive worlds and captivating visuals, I leverage three-dimensional design to bring ideas to life with depth and realism.",
  "Breathing life into static elements, I create visually stunning and emotionally resonant digital narratives through animation.",
];

export const navButtons: NavButtonT[] = [
  { text: "Work", href: `/#${Sections.work}`, type: ButtonTypes.secondary },
  {
    text: "Services",
    href: `/#${Sections.services}`,
    type: ButtonTypes.secondary,
  },
  {
    text: "Testimonials",
    href: `/#${Sections.testimonials}`,
    type: ButtonTypes.secondary,
  },
  { text: "About", href: `/#${Sections.aboutMe}`, type: ButtonTypes.secondary },
  {
    text: "Get in Touch",
    href: "mailto:awaismaaz@gmail.com",
    type: ButtonTypes.primary,
  },
];

export const bottomNavButtons: BottomNavButtonT[] = [
  { text: "Work", href: `/#${Sections.work}`, section: Sections.work },
  {
    text: "Services",
    href: `/#${Sections.services}`,
    section: Sections.services,
  },
  {
    text: "Testimonials",
    href: `/#${Sections.testimonials}`,
    section: Sections.testimonials,
  },
  {
    text: "About Me",
    href: `/#${Sections.aboutMe}`,
    section: Sections.aboutMe,
  },
];

export const footerButtons: FooterButtonT[][] = [
  [
    { text: "Overview", href: "" },
    { text: "Work", href: `/#${Sections.work}` },
    { text: "Services", href: `/#${Sections.services}` },
    { text: "Testimonials", href: `/#${Sections.testimonials}` },
    { text: "About Me", href: `/#${Sections.aboutMe}` },
  ],
  [
    { text: "More Work", href: "" },
    { text: "Case Studies", href: "" },
    { text: "Web Apps", href: "" },
    { text: "Mobile Apps", href: "" },
    { text: "Art Works", href: "" },
  ],
  [
    { text: "Top Projects", href: "" },
    { text: "DeepReel AI Videos", href: "" },
    { text: "Athelton+", href: "" },
    { text: "Markdown Editor", href: "" },
    { text: "Jawline Fitness", href: "" },
  ],
];

export const projects: ProjectT[] = [
  {
    title: "DeepReel AI Videos",
    description:
      "Short description about the app mentioned above, should be limited to two lines",
    imagePath: "/images/deepreel.webp",
    placeholderPath: "/images/placeholders/deepreel.webp",
  },
  {
    title: "Nutrigram",
    description: "Short description about the app mentioned above",
    imagePath: "/images/nutrigram.webp",
    placeholderPath: "/images/placeholders/nutrigram.webp",
    altImagePath: "/images/nutrigram-alt.webp",
    altPlaceholderPath: "/images/placeholders/nutrigram-alt.webp",
  },
  {
    title: "Markdown Editor",
    description: "Short description about the app mentioned above",
    imagePath: "/images/markdown.webp",
    placeholderPath: "/images/placeholders/markdown.webp",
    altImagePath: "/images/markdown-alt.webp",
    altPlaceholderPath: "/images/placeholders/markdown-alt.webp",
  },
  {
    title: "Athleton+",
    description:
      "Short description about the app mentioned above, should be limited to two lines",
    imagePath: "/images/athleton.webp",
    placeholderPath: "/images/placeholders/athleton.webp",
  },
];

export const services: ServiceT[] = [
  {
    title: "Web App \n Development",
    index: 0,
    className:
      "absolute right-0 origin-right pointer-events-none z-10 flex justify-end items-center md:items-start w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4",
    baseSrc: "/svgs/web",
    placeholderSrc: "/placeholders/web",
  },
  {
    title: "Product \n Design",
    index: 1,
    className:
      "absolute right-0 pointer-events-none z-10 flex justify-start md:justify-center items-center md:items-start w-fit sm:w-full h-full -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4",
    baseSrc: "/svgs/product",
    placeholderSrc: "/placeholders/product",
  },
  {
    title: "Mobile App \n Development",
    index: 2,
    className:
      "absolute right-0 pointer-events-none z-10 flex justify-end md:justify-start items-center md:items-start w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4",
    baseSrc: "/svgs/app",
    placeholderSrc: "/placeholders/app",
  },
  {
    title: "Video \n Editing",
    index: 3,
    className:
      "absolute left-0 pointer-events-none z-10 flex justify-end sm:justify-start md:justify-end items-center md:items-end w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4",
    baseSrc: "/svgs/video",
    placeholderSrc: "/placeholders/video",
  },
  {
    title: "Logo \n Design",
    index: 4,
    className:
      "absolute left-0 pointer-events-none z-10 flex justify-end md:justify-center items-center md:items-end w-fit sm:w-full h-full mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4",
    baseSrc: "/svgs/logo",
    placeholderSrc: "/placeholders/logo",
  },
  {
    title: "3D Design \n & Animation",
    index: 5,
    className:
      "absolute left-0 pointer-events-none z-10 flex  justify-end sm:justify-start items-center md:items-end w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4",
    baseSrc: "/svgs/blender",
    placeholderSrc: "/placeholders/blender",
  },
];

export const breakpoints = {
  "2xl": 1536,
  lg: 1024,
  md: 768,
  sm: 640,
  xl: 1280,
  xs: 365,
};

export const testimonials: TestimonialT[] = [
  {
    testimonial:
      "Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.",
    client: "John Doe",
    designation: "CEO Inventrios",
  },
  {
    testimonial:
      "Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.",
    client: "John Doe",
    designation: "CEO Inventrios",
  },
  {
    testimonial:
      "Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.",
    client: "John Doe",
    designation: "CEO Inventrios",
  },
  {
    testimonial:
      "Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.",
    client: "John Doe",
    designation: "CEO Inventrios",
  },
  {
    testimonial:
      "Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.",
    client: "John Doe",
    designation: "CEO Inventrios",
  },
  {
    testimonial:
      "Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.",
    client: "John Doe",
    designation: "CEO Inventrios",
  },
];

export const aboutSections = [
  "Maaz Rana",
  "Education",
  "Past Clients",
  "Socials",
  "Tech Stack",
  "Work Experience",
];

export const WorkExperiences: WorkExperienceT[] = [
  {
    company: "Alfabolt",
    roles: "Frontend Developer - Product Designer - Design Lead",
    tenure: "2022 - Present",
  },
  {
    company: "Total School Solutions",
    roles: "IT Manager - Graphics Lead",
    tenure: "2022 - 2024",
  },
  {
    company: "Nustac Technologies",
    roles: "Mobile App Developer - UI/UX Designer",
    tenure: "2021 - 2024",
  },
  {
    company: "20Four7 VA",
    roles: "Specialist Art Director",
    tenure: "2022 - 2023",
  },
  {
    company: "Beacon Tutors Pakistan",
    roles: "Web Developer - UI/UX Designer",
    tenure: "2021 - 2022",
  },
  {
    company: "Edwiz Solutions",
    roles: "Illustration Designer",
    tenure: "2021 - 2022",
  },
];

export const iconComponents = [
  { Icon: SiFigma, props: { fill: "#F24E1E" } },
  { Icon: SiAdobeillustrator, props: { fill: "#FF9A00" } },
  { Icon: SiAdobephotoshop, props: { fill: "#31A8FF" } },
  { Icon: SiAdobeaftereffects, props: { fill: "#9999FF" } },
  { Icon: SiAdobepremierepro, props: { fill: "#9999FF" } },
  { Icon: SiAdobexd, props: { fill: "#FF61F6" } },
  { Icon: SiBlender, props: { fill: "#E87D0D" } },
  { Icon: SiFlutter, props: { fill: "#02569B" } },
  { Icon: SiDart, props: { fill: "#0175C2" } },
  { Icon: SiFirebase, props: { fill: "#FFCA28" } },
  { Icon: SiNextdotjs, props: { fill: "var(--primary)" } },
  { Icon: SiReact, props: { fill: "#61DAFB" } },
  { Icon: SiNodedotjs, props: { fill: "#339933" } },
  { Icon: SiPython, props: { fill: "#3776AB" } },
  { Icon: SiTailwindcss, props: { fill: "#06B6D4" } },
  { Icon: SiFramer, props: { fill: "#0055FF" } },
  { Icon: SiJavascript, props: { fill: "#F7DF1E" } },
  { Icon: SiTypescript, props: { fill: "#3178C6" } },
  { Icon: SiSlack, props: { fill: "#4A154B" } },
  { Icon: SiNotion, props: { fill: "var(--primary)" } },
  { Icon: SiTrello, props: { fill: "#0052CC" } },
  { Icon: SiJira, props: { fill: "#0052CC" } },
  { Icon: SiJirasoftware, props: { fill: "#0052CC" } },
  { Icon: SiGithub, props: { fill: "var(--primary)" } },
];

export const designIconComponents = [
  { Icon: SiFigma, props: { fill: "#F24E1E" } },
  { Icon: SiAdobeillustrator, props: { fill: "#FF9A00" } },
  { Icon: SiAdobephotoshop, props: { fill: "#31A8FF" } },
  { Icon: SiAdobeaftereffects, props: { fill: "#9999FF" } },
  { Icon: SiAdobepremierepro, props: { fill: "#9999FF" } },
  { Icon: SiAdobexd, props: { fill: "#FF61F6" } },
  { Icon: SiBlender, props: { fill: "#E87D0D" } },
];

export const devIconComponents = [
  { Icon: SiNextdotjs, props: { fill: "var(--primary)" } },
  { Icon: SiReact, props: { fill: "#61DAFB" } },
  { Icon: SiFlutter, props: { fill: "#02569B" } },
  { Icon: SiDart, props: { fill: "#0175C2" } },
  { Icon: SiFirebase, props: { fill: "#FFCA28" } },
  { Icon: SiNodedotjs, props: { fill: "#339933" } },
  { Icon: SiPython, props: { fill: "#3776AB" } },
  { Icon: SiJavascript, props: { fill: "#F7DF1E" } },
  { Icon: SiTypescript, props: { fill: "#3178C6" } },
  { Icon: SiTailwindcss, props: { fill: "#06B6D4" } },
  { Icon: SiFramer, props: { fill: "#0055FF" } },
];

export const managementIconComponents = [
  { Icon: SiSlack, props: { fill: "#4A154B" } },
  { Icon: SiNotion, props: { fill: "var(--primary)" } },
  { Icon: SiTrello, props: { fill: "#0052CC" } },
  { Icon: SiJira, props: { fill: "#0052CC" } },
  { Icon: SiJirasoftware, props: { fill: "#0052CC" } },
  { Icon: SiGithub, props: { fill: "var(--primary)" } },
];

export const clientIconComponents = [
  { Icon: Alfabolt, props: { fill: "var(--primary-hover)" } },
  { Icon: TSS, props: { fill: "var(--primary-hover)" } },
  { Icon: Deepreel, props: { fill: "var(--primary-hover)" } },
  { Icon: Athleton, props: { fill: "var(--primary-hover)" } },
  { Icon: Rivanna, props: { fill: "var(--primary-hover)" } },
  { Icon: Edwiz, props: { fill: "var(--primary-hover)" } },
  { Icon: BeaconTutors, props: { fill: "var(--primary-hover)" } },
  {
    Icon: MenuHub,
    props: { fill: "var(--primary-hover)" },
  },
  { Icon: Lyfiti, props: { fill: "var(--primary-hover)" } },
  { Icon: FiveOneFivePools, props: { fill: "var(--primary-hover)" } },
];
