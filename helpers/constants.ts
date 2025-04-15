import { ButtonTypes, Sections, WorkCategories } from '@/helpers/enums';
import {
  BottomNavButtonT,
  BottomNavCategoryT,
  ClientDataT,
  FooterButtonT,
  NavButtonT,
  ProjectT,
  ServiceT,
  TestimonialT,
  WorkExperienceT,
} from '@/helpers/types';
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
} from 'react-icons/si';
import Alfabolt from '@/components/icons/alfabolt';
import TSS from '@/components/icons/tss';
import Deepreel from '@/components/icons/deepreel';
import Athleton from '@/components/icons/athleton';
import Edwiz from '@/components/icons/edwiz';
import Rivanna from '@/components/icons/rivanna';
import BeaconTutors from '@/components/icons/beaconTutors';
import Lyfiti from '@/components/icons/lyfiti';
import FiveOneFivePools from '@/components/icons/pools515';
import MenuHub from '@/components/icons/menuHub';
import deepReelProject from '../public/images/projects/deepreel.webp';
import nutrigramProject from '../public/images/projects/nutrigram-main.webp';
import nutrigramAltProject from '../public/images/projects/nutrigram-alt.webp';
import markdownProject from '../public/images/projects/markdown-main.webp';
import markdownAltProject from '../public/images/projects/markdown-alt.webp';
import athletonProject from '../public/images/projects/athleton.webp';
import {
  alfabolt,
  athletonPlus,
  aylaAI,
  beaconTutors,
  beaconTutorsAdmin,
  beaconTutorsCRM,
  codingInterviewPrep,
  deepReelAI,
  deepReelCanva,
  deepReelWebsite,
  elBrezal,
  equanimity,
  humanizarTexto,
  inventrios,
  jawlineFitness,
  markdownEditor,
  menuHub,
  nutrigram,
  pools515,
  ProjectAnalysisT,
  rivanna,
  robinBeauty,
  smartCatch,
  superDuperStudio,
  tutorania,
} from './project-analytics';

export const HeroHeadings: string[] = [
  'Product Designer',
  'Web Developer',
  'App Developer',
  '3D Artist',
  'Animator',
];

export const LottiePaths: string[] = [
  'https://lottie.host/f4163d11-af03-4689-b1b0-757862066f91/JuFMA6eW3b.lottie',
  'https://lottie.host/5f1f32ed-787f-4ce4-8605-e51fc38fd3ad/NTHxB2bgaF.lottie',
  'https://lottie.host/c1faf8ba-20de-49cb-bdbb-b5f9e5f9d233/FAkp9DRzBn.lottie',
  'https://lottie.host/36c7490a-3f67-41f4-89a5-003578a3058d/QTRT5TzYBD.lottie',
  'https://lottie.host/1b3beeb7-e069-499d-8a1f-7276f7220d87/mUkVw9uBCL.lottie',
];

export const LottieLightPaths: string[] = [
  '/lotties/product-light.lottie',
  '/lotties/web-light.lottie',
  '/lotties/mobile-light.lottie',
  '/lotties/blender-light.lottie',
  '/lotties/video-light.lottie',
];

export const HeroDescriptions: string[] = [
  'Crafting user-centric digital experiences that blend creativity and functionality for impactful, seamless design.',
  'Transforming ideas into interactive web solutions, I specialize in coding elegant websites with a focus on user experience.',
  'Building the future of mobile experiences, I bring innovative app ideas to life with user-centric design and robust functionality.',
  'Sculpting immersive worlds and captivating visuals, I leverage three-dimensional design to bring ideas to life with depth and realism.',
  'Breathing life into static elements, I create visually stunning and emotionally resonant digital narratives through animation.',
];

export const navButtons: NavButtonT[] = [
  { text: 'Work', href: `/#${Sections.work}`, type: ButtonTypes.secondary },
  {
    text: 'Services',
    href: `/#${Sections.services}`,
    type: ButtonTypes.secondary,
  },
  {
    text: 'Testimonials',
    href: `/#${Sections.testimonials}`,
    type: ButtonTypes.secondary,
  },
  { text: 'About', href: `/#${Sections.aboutMe}`, type: ButtonTypes.secondary },
  {
    text: 'Get in Touch',
    href: 'mailto:awaismaaz@gmail.com',
    type: ButtonTypes.primary,
  },
];

export const bottomNavButtons: BottomNavButtonT[] = [
  { text: 'Work', href: `/#${Sections.work}`, section: Sections.work },
  {
    text: 'Services',
    href: `/#${Sections.services}`,
    section: Sections.services,
  },
  {
    text: 'Testimonials',
    href: `/#${Sections.testimonials}`,
    section: Sections.testimonials,
  },
  {
    text: 'About Me',
    href: `/#${Sections.aboutMe}`,
    section: Sections.aboutMe,
  },
];

export const workBottomNavCategories: BottomNavCategoryT[] = [
  { text: 'Product Design', key: WorkCategories.productDesign },
  {
    text: 'Product Development',
    key: WorkCategories.productDevelopment,
  },
  {
    text: 'Video Editing',
    key: WorkCategories.videoEditing,
  },
  {
    text: 'Graphics Design',
    key: WorkCategories.illustration,
  },
  {
    text: '3D Artworks',
    key: WorkCategories.blender,
  },
];

export const footerButtons: FooterButtonT[][] = [
  [
    { text: 'Overview', href: '' },
    { text: 'Work', href: `/#${Sections.work}` },
    { text: 'Services', href: `/#${Sections.services}` },
    { text: 'Testimonials', href: `/#${Sections.testimonials}` },
    { text: 'About Me', href: `/#${Sections.aboutMe}` },
  ],
  [
    { text: 'More Work', href: '' },
    { text: 'Case Studies', href: '' },
    { text: 'Web Apps', href: '' },
    { text: 'Mobile Apps', href: '' },
    { text: 'Art Works', href: '' },
  ],
  [
    { text: 'Top Projects', href: '' },
    { text: 'DeepReel AI Videos', href: '' },
    { text: 'Athelton+', href: '' },
    { text: 'Markdown Editor', href: '' },
    { text: 'Jawline Fitness', href: '' },
  ],
];

export const projects: ProjectT[] = [
  {
    title: 'DeepReel AI Videos',
    description:
      'DeepReel’s AI video editor generates avatar script, visuals, music &amp; captions automatically in minutes. No video editing skills required!',
    image: deepReelProject,
  },
  {
    title: 'Nutrigram',
    description: 'Short description about the app mentioned above',
    image: nutrigramProject,
    altImage: nutrigramAltProject,
  },
  {
    title: 'Markdown Editor',
    description: 'Short description about the app mentioned above',
    image: markdownProject,
    altImage: markdownAltProject,
  },
  {
    title: 'Elbrezal Honey',
    description:
      'the El Brezal brand represents the most natural and strongest beekeeping products—products that are 100% natural and pure.',
    image: athletonProject,
  },
];

export const services: ServiceT[] = [
  {
    title: 'Web App \n Development',
    index: 0,
    className:
      'absolute right-0 origin-right pointer-events-none z-10 flex justify-end items-center md:items-start w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4',
    baseSrc: '/svgs/web',
    placeholderSrc: '/placeholders/web',
  },
  {
    title: 'Product \n Design',
    index: 1,
    className:
      'absolute right-0 pointer-events-none z-10 flex justify-start md:justify-center items-center md:items-start w-fit sm:w-full h-full -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4',
    baseSrc: '/svgs/product',
    placeholderSrc: '/placeholders/product',
  },
  {
    title: 'Mobile App \n Development',
    index: 2,
    className:
      'absolute right-0 pointer-events-none z-10 flex justify-end md:justify-start items-center md:items-start w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4',
    baseSrc: '/svgs/app',
    placeholderSrc: '/placeholders/app',
  },
  {
    title: 'Video \n Editing',
    index: 3,
    className:
      'absolute left-0 pointer-events-none z-10 flex justify-end sm:justify-start md:justify-end items-center md:items-end w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    baseSrc: '/svgs/video',
    placeholderSrc: '/placeholders/video',
  },
  {
    title: 'Logo \n Design',
    index: 4,
    className:
      'absolute left-0 pointer-events-none z-10 flex justify-end md:justify-center items-center md:items-end w-fit sm:w-full h-full mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    baseSrc: '/svgs/logo',
    placeholderSrc: '/placeholders/logo',
  },
  {
    title: '3D Design \n & Animation',
    index: 5,
    className:
      'absolute left-0 pointer-events-none z-10 flex  justify-end sm:justify-start items-center md:items-end w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    baseSrc: '/svgs/blender',
    placeholderSrc: '/placeholders/blender',
  },
];

export const breakpoints = {
  '2xl': 1536,
  lg: 1024,
  md: 768,
  sm: 640,
  xl: 1280,
  xs: 365,
};

export const testimonials: TestimonialT[] = [
  {
    testimonial:
      'Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.',
    client: 'John Doe',
    designation: 'CEO Inventrios1',
  },
  {
    testimonial:
      'Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.',
    client: 'John Doe',
    designation: 'CEO Inventrios2',
  },
  {
    testimonial:
      'Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.',
    client: 'John Doe',
    designation: 'CEO Inventrios3',
  },
  {
    testimonial:
      'Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.',
    client: 'John Doe',
    designation: 'CEO Inventrios4',
  },
  {
    testimonial:
      'Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.',
    client: 'John Doe',
    designation: 'CEO Inventrios5',
  },
  {
    testimonial:
      'Maaz is a creative powerhouse – his graphic design, UI skills, and 3D designs elevate every project. A go-to video editor and programmer, clients love the seamless blend of innovation and functionality he brings.',
    client: 'John Doe',
    designation: 'CEO Inventrios6',
  },
];

export const aboutSections = [
  'Maaz Rana',
  'Education',
  'Past Clients',
  'Socials',
  'Tech Stack',
  'Work Experience',
];

export const WorkExperiences: WorkExperienceT[] = [
  {
    company: 'Alfabolt',
    roles: 'Frontend Developer - Product Designer - Design Lead',
    tenure: '2022 - Present',
  },
  {
    company: 'Total School Solutions',
    roles: 'IT Manager - Graphics Lead',
    tenure: '2022 - 2024',
  },
  {
    company: 'Nustac Technologies',
    roles: 'Mobile App Developer - UI/UX Designer',
    tenure: '2021 - 2024',
  },
  {
    company: '20Four7 VA',
    roles: 'Specialist Art Director',
    tenure: '2022 - 2023',
  },
  {
    company: 'Beacon Tutors Pakistan',
    roles: 'Web Developer - UI/UX Designer',
    tenure: '2021 - 2022',
  },
  {
    company: 'Edwiz Solutions',
    roles: 'Illustration Designer',
    tenure: '2021 - 2022',
  },
];

export const productDesignProjects: ProjectAnalysisT[] = [
  alfabolt,
  humanizarTexto,
  pools515,
  elBrezal,
  superDuperStudio,
  smartCatch,
  aylaAI,
  robinBeauty,
  tutorania,
  markdownEditor,
  athletonPlus,
  deepReelAI,
  deepReelWebsite,
  menuHub,
  beaconTutors,
  beaconTutorsAdmin,
  equanimity,
  nutrigram,
  jawlineFitness,
  rivanna,
  beaconTutorsCRM,
  codingInterviewPrep,
  inventrios,
];

export const productDevelopmentProjects: ProjectAnalysisT[] = [
  alfabolt,
  deepReelCanva,
  jawlineFitness,
  superDuperStudio,
  tutorania,
  beaconTutors,
  beaconTutorsAdmin,
  inventrios,
];

export const designIconComponents = {
  figma: { Icon: SiFigma, props: { fill: '#F24E1E' } },
  illustrator: { Icon: SiAdobeillustrator, props: { fill: '#FF9A00' } },
  photoshop: { Icon: SiAdobephotoshop, props: { fill: '#31A8FF' } },
  afterEffects: { Icon: SiAdobeaftereffects, props: { fill: '#9999FF' } },
  premierePro: { Icon: SiAdobepremierepro, props: { fill: '#9999FF' } },
  adobeXd: { Icon: SiAdobexd, props: { fill: '#FF61F6' } },
  blender: { Icon: SiBlender, props: { fill: '#E87D0D' } },
};

export const devIconComponents = {
  next: { Icon: SiNextdotjs, props: { fill: 'var(--primary)' } },
  react: { Icon: SiReact, props: { fill: '#61DAFB' } },
  flutter: { Icon: SiFlutter, props: { fill: '#02569B' } },
  dart: { Icon: SiDart, props: { fill: '#0175C2' } },
  firebase: { Icon: SiFirebase, props: { fill: '#FFCA28' } },
  node: { Icon: SiNodedotjs, props: { fill: '#339933' } },
  python: { Icon: SiPython, props: { fill: '#3776AB' } },
  javascript: { Icon: SiJavascript, props: { fill: '#F7DF1E' } },
  typescript: { Icon: SiTypescript, props: { fill: '#3178C6' } },
  tailwind: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
  framer: { Icon: SiFramer, props: { fill: '#0055FF' } },
};

export const managementIconComponents = {
  slack: { Icon: SiSlack, props: { fill: '#4A154B' } },
  notion: { Icon: SiNotion, props: { fill: 'var(--primary)' } },
  trello: { Icon: SiTrello, props: { fill: '#0052CC' } },
  jira: { Icon: SiJira, props: { fill: '#0052CC' } },
  jiraSoftware: { Icon: SiJirasoftware, props: { fill: '#0052CC' } },
  github: { Icon: SiGithub, props: { fill: 'var(--primary)' } },
};

export const iconComponents = {
  ...designIconComponents,
  ...devIconComponents,
  ...managementIconComponents,
};

export const clientIconComponents = [
  { Icon: Alfabolt, props: { fill: 'var(--primary-hover)' } },
  { Icon: TSS, props: { fill: 'var(--primary-hover)' } },
  { Icon: Deepreel, props: { fill: 'var(--primary-hover)' } },
  { Icon: Athleton, props: { fill: 'var(--primary-hover)' } },
  { Icon: Rivanna, props: { fill: 'var(--primary-hover)' } },
  { Icon: Edwiz, props: { fill: 'var(--primary-hover)' } },
  { Icon: BeaconTutors, props: { fill: 'var(--primary-hover)' } },
  {
    Icon: MenuHub,
    props: { fill: 'var(--primary-hover)' },
  },
  { Icon: Lyfiti, props: { fill: 'var(--primary-hover)' } },
  { Icon: FiveOneFivePools },
];

export const clientColorIconComponents = [
  { Icon: Alfabolt, props: {} },
  { Icon: TSS, props: {} },
  { Icon: Deepreel, props: {} },
  { Icon: Athleton, props: {} },
  { Icon: Rivanna, props: {} },
  { Icon: Edwiz, props: {} },
  { Icon: BeaconTutors, props: {} },
  {
    Icon: MenuHub,
    props: {},
  },
  { Icon: Lyfiti, props: {} },
  { Icon: FiveOneFivePools, props: {} },
];

export const clientData: ClientDataT[] = [
  {
    heading: 'Alfabolt',
    testimonial:
      'Maaz is a rare talent who excels in both software development and UI/UX design. His ability to seamlessly integrate functionality with aesthetics is impressive. Our user engagement has significantly improved thanks to his contributions.',
    clientName: 'Ali Farooq',
    companyName: 'Alfabolt',
    productsInvolved: [
      {
        logo: Deepreel,
        name: 'DeepReel',
        services: ['Product Design', 'Web App', 'Website', 'Canva Add On', 'Adobe Express Add On'],
      },
      {
        logo: Athleton,
        name: 'Athleton+',
        services: ['Product Design'],
      },
      {
        logo: FiveOneFivePools,
        name: '',
        services: ['Product Design'],
      },
      {
        logo: Alfabolt,
        name: 'Alfabolt',
        services: ['Product Design', 'Website'],
      },
    ],
    technologiesInvolved: [designIconComponents['figma'], devIconComponents['next']],
  },
  {
    heading: 'Rivanna',
    testimonial:
      'Maaz is a rare talent who excels in both software development and UI/UX design. His ability to seamlessly integrate functionality with aesthetics is impressive. Our user engagement has significantly improved thanks to his contributions.',
    clientName: 'Ali Farooq',
    companyName: 'Alfabolt',
    productsInvolved: [
      {
        logo: Deepreel,
        name: 'DeepReel',
        services: ['Product Design', 'Web App', 'Website', 'Canva Add On', 'Adobe Express Add On'],
      },
      {
        logo: Athleton,
        name: 'Athleton+',
        services: ['Product Design'],
      },
      {
        logo: FiveOneFivePools,
        name: '',
        services: ['Product Design'],
      },
      {
        logo: Alfabolt,
        name: 'Alfabolt',
        services: ['Product Design', 'Website'],
      },
    ],
    technologiesInvolved: [designIconComponents['figma'], devIconComponents['next']],
  },
];
