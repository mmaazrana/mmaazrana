import { ButtonTypes, Sections } from "@/helpers/enums";
import {
  BottomNavButtonT,
  FooterButtonT,
  NavButtonT,
  ServiceT,
  TestimonialT,
} from "@/helpers/types";

export const HeroHeadings = [
  "Product Designer",
  3500,
  "Web Developer",
  3500,
  "App Developer",
  3500,
  "3D Artist",
  3500,
  "Animator",
  3500,
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

export const services: ServiceT[] = [
  { title: "Web Application Development", index: 0 },
  { title: "Product Design", index: 1 },
  { title: "Mobile Application Development", index: 2 },
  { title: "Video Editing", index: 3 },
  { title: "Logo Design", index: 4 },
  { title: "3D Design & Animation", index: 5 },
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
