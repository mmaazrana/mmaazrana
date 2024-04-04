import { ButtonTypes, Sections } from "@/helpers/enums";
import {
  BottomNavButtonT,
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
  { text: "Work", href: "", type: ButtonTypes.secondary },
  { text: "Services", href: "", type: ButtonTypes.secondary },
  { text: "Process", href: "", type: ButtonTypes.secondary },
  { text: "Testimonials", href: "", type: ButtonTypes.secondary },
  { text: "Get in Touch", href: "", type: ButtonTypes.primary },
];

export const bottomNavButtons: BottomNavButtonT[] = [
  { text: "Work", href: "", section: Sections.work },
  { text: "Services", href: "", section: Sections.services },
  { text: "Process", href: "", section: Sections.processes },
  { text: "Testimonials", href: "", section: Sections.testimonials },
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
