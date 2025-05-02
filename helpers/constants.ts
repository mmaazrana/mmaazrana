import { ProjectCategories, Sections, WorkCategories } from '@/helpers/enums'
import {
  BlenderProjectT,
  BottomNavButtonT,
  BottomNavCategoryT,
  ClientDataT,
  FooterButtonT,
  GraphicDesignProjectT,
  IconComponentsT,
  NavButtonT,
  ServiceT,
  TestimonialsT,
  TestimonialT,
  VideoProjectT,
  WorkExperienceT,
} from '@/helpers/types'
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiBlender,
  SiCanva,
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
} from 'react-icons/si'
import Alfabolt from '@/components/icons/alfabolt'
import TSS from '@/components/icons/tss'
import Deepreel from '@/components/icons/deepreel'
import Athleton from '@/components/icons/athleton'
import Edwiz from '@/components/icons/edwiz'
import Rivanna from '@/components/icons/rivanna'
import BeaconTutors from '@/components/icons/beacon-tutors'
import Lyfiti from '@/components/icons/lyfiti'
import FiveOneFivePools from '@/components/icons/pools515'
import MenuHub from '@/components/icons/menu-hub'
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
} from './project-analytics'
import {
  alfaboltProject,
  techtonicLogoProject,
  fatelyPostProject,
  eventPosterProject4,
  eventPosterProject3,
  eventPosterProject2,
  eventPosterProject1,
  eventCoverProject2,
  eventCoverProject1,
  eidMubarakProject,
  donationProject,
  countdownProject2,
  countdownProject1,
  cookieeesLogoProject,
  carsDebateLogoProject,
  aylaLogoProject,
  announcementProject4,
  announcementProject3,
  alphaLogoProject,
  announcementProject1,
  announcementProject2,
  kravingsLogoProject,
  kravingsLaunchProject,
  joliLogoProject,
  inventriosLogoProject,
  introductionPosterProject,
  informativePosterProject4,
  informativePosterProject3,
  gdscPosterProject,
  informativePosterProject2,
  headlinePosterProject,
  informativePosterProject1,
  menuHubLogoProject,
  moveLogoProject,
  nfcPosterProject,
  pools515LogoProject,
  recruitementProject1,
  recruitementProject2,
  recruitementProject3,
  recruitementProject4,
  reviewProject1,
  reviewProject2,
  shsLogoProject,
  tutoraniaLogoProject,
  yesLogoProject,
  tssProject,
  kravingsMenuProject,
  markdownPosterProject,
  maazLogoProject,
  teqnirLogoProject,
} from './graphics-projects'
import {
  carProject,
  chairProject,
  deskProject,
  discordProject,
  dumbbelsProject,
  earbudsProject,
  elevationProject,
  flutterProject,
  headphoneProject,
  homeProject,
  interiorProject,
  phoneProject,
  roomProject,
  youtubeProject,
} from './blender-projects'
import {
  beaconTutorProject1,
  beaconTutorProject2,
  beaconTutorProject3,
  beaconTutorProject4,
  beaconTutorProject5,
  budsProject1,
  budsProject2,
  budsProject3,
  carsDebateProject,
  creativerseProject,
  fireStarterProject,
  markazProject,
  nfcProject,
  nustacProject,
  phoneVideoProject,
  plutoProject,
} from './video-projects'
import { getPageSlug } from './parsers'
import SuperDuperStudio from '@/components/icons/super-duper-studio'
import AylaLogo from '@/components/icons/ayla'
import SvgInventrios from '@/components/icons/Inventrios'
import EquanimitySvg from '@/components/icons/equanimity'
import SvgRobinBeauty from '@/components/icons/robin-beauty'
import SvgSmartCatch from '@/components/icons/smart-catch'
import TutoraniaSvg from '@/components/icons/tutorania'
import SvgNutrigram from '@/components/icons/nutrigram'
import SvgHumanizarTexto from '@/components/icons/humanizar-texto'
import SvgElbrezal from '@/components/icons/elbrezal'
import ProductDesignProjects from '@/components/work/product-design-projects'
import ProductDevelopmentProjects from '@/components/work/product-development-projects'
import VideoEditingProjects from '@/components/work/video-editing-projects'
import GraphicDesignProjects from '@/components/work/graphic-design-projects'
import BlenderProjects from '@/components/work/blender-projects'
import ProjectOverview from '@/components/projects/overview'
import ProjectKeyFeatures from '@/components/projects/key-features'
import ProjectChallengesAndSolutions from '@/components/projects/challenges-and-solutions'
import ProjectTechStack from '@/components/projects/tech-stack'

export const HeroHeadings: string[] = [
  'Product & UI/UX Designer',
  'Frontend Web Developer',
  'Mobile App Developer',
  '3D Artist & Visualizer',
  'Motion Designer & Animator',
]

export const LottiePaths: string[] = [
  'https://lottie.host/f4163d11-af03-4689-b1b0-757862066f91/JuFMA6eW3b.lottie',
  'https://lottie.host/5f1f32ed-787f-4ce4-8605-e51fc38fd3ad/NTHxB2bgaF.lottie',
  'https://lottie.host/c1faf8ba-20de-49cb-bdbb-b5f9e5f9d233/FAkp9DRzBn.lottie',
  'https://lottie.host/36c7490a-3f67-41f4-89a5-003578a3058d/QTRT5TzYBD.lottie',
  'https://lottie.host/1b3beeb7-e069-499d-8a1f-7276f7220d87/mUkVw9uBCL.lottie',
]

export const LottieLightPaths: string[] = [
  'https://lottie.host/fe958409-38ce-43c1-b4a9-197e7ee533db/PNOlYlGU80.lottie',
  'https://lottie.host/fbd1b396-5276-4c9e-a71c-26179cbd8fbf/SexOhmG8im.lottie',
  'https://lottie.host/61413701-6be9-4188-8e80-8e9321718cac/wXMYKawPQB.lottie',
  'https://lottie.host/30c24204-0e61-4a80-abd0-7e30e13646d3/trQIO2xNpJ.lottie',
  'https://lottie.host/62043cba-21e1-408c-bc02-31cb26530c95/PiUj9mIaWF.lottie',
]

export const HeroDescriptions: string[] = [
  'Crafting user-centric digital experiences and intuitive interfaces. Specializing in UI/UX design that blends creativity and functionality for impactful, seamless products using tools like Figma.',
  'Transforming ideas into interactive web solutions. As a frontend developer, I specialize in coding elegant, responsive websites using Next.js, React, and Tailwind CSS with a focus on optimal user experience.',
  'Building the future of mobile applications. I bring innovative app ideas to life with user-centric design and robust functionality, primarily using Flutter for cross-platform development.',
  'Sculpting immersive 3D worlds and captivating visuals. I leverage three-dimensional design tools like Blender to bring concepts to life with depth, realism, and stunning detail.',
  'Breathing life into static elements. As a motion designer, I create visually stunning and emotionally resonant digital narratives through animation using tools like After Effects.',
]


export const navButtons: NavButtonT[] = [
  { text: 'Work', href: `/#${Sections.work}`, type: 'secondary' },
  { text: 'Services', href: `/#${Sections.services}`, type: 'secondary' },
  { text: 'Testimonials', href: `/#${Sections.testimonials}`, type: 'secondary' },
  { text: 'About', href: `/#${Sections.aboutMe}`, type: 'secondary' },
  { text: 'Contact Me', href: 'mailto:awaismaaz@gmail.com', type: 'primary' },
]

export const bottomNavButtons: BottomNavButtonT[] = [
  { text: 'Work', href: `/#${Sections.work}`, section: Sections.work },
  { text: 'Services', href: `/#${Sections.services}`, section: Sections.services },
  { text: 'Testimonials', href: `/#${Sections.testimonials}`, section: Sections.testimonials },
  { text: 'About Me', href: `/#${Sections.aboutMe}`, section: Sections.aboutMe },
]

export const workBottomNavCategories: BottomNavCategoryT[] = [
  { text: 'Product Design', key: WorkCategories.productDesign, Component: ProductDesignProjects },
  { text: 'Product Development', key: WorkCategories.productDevelopment, Component: ProductDevelopmentProjects  },
  { text: 'Video Editing', key: WorkCategories.videoEditing, Component: VideoEditingProjects },
  { text: 'Graphics Design', key: WorkCategories.illustration, Component: GraphicDesignProjects },
  { text: '3D Artworks', key: WorkCategories.blender, Component: BlenderProjects },
] 

export const projectCategories: BottomNavCategoryT[] = [
  { text: 'Overview', key: ProjectCategories.overview, Component: ProjectOverview },
  { text: 'Key Features', key: ProjectCategories.keyFeatures, Component: ProjectKeyFeatures },
  { text: 'Tech Stack', key: ProjectCategories.techStack , Component: ProjectTechStack },
  { text: 'Challenges & Solutions', key: ProjectCategories.challengesAndSolutions, Component: ProjectChallengesAndSolutions },
]

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
]

export const featuredProjects: ProjectAnalysisT[] = [alfabolt, humanizarTexto, aylaAI, elBrezal]

export const services: ServiceT[] = [
  {
    title: 'Web App \n Development',
    index: 0,
    className:
      'absolute right-0 origin-right pointer-events-none z-10 flex justify-end items-center md:items-start w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4',
    baseSrc: '/svgs/web',
    placeholderSrc: '/placeholders/web',
    illustrationDescription: 'Illustration showing a modern web application interface with responsive design elements, representing professional web development services.',
  },
  {
    title: 'Product & \n UI/UX Design',
    index: 1,
    className:
      'absolute right-0 pointer-events-none z-10 flex justify-start md:justify-center items-center md:items-start w-fit sm:w-full h-full -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4',
    baseSrc: '/svgs/product',
    placeholderSrc: '/placeholders/product',
    illustrationDescription: 'Illustration depicting a product design process with UI/UX elements, wireframes, and user interface components, showcasing product design expertise.',
  },
  {
    title: 'Mobile App \n Development',
    index: 2,
    className:
      'absolute right-0 pointer-events-none z-10 flex justify-end md:justify-start items-center md:items-start w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 2xl:pr-12 -mt-0 md:-mt-6 lg:-mt-4 xl:-mt-3 2xl:-mt-4',
    baseSrc: '/svgs/app',
    placeholderSrc: '/placeholders/app',
    illustrationDescription: 'Illustration of a mobile application interface with modern design elements and user-friendly features, highlighting mobile app development capabilities.',
  },
  {
    title: 'Video Editing \n & Motion Graphics',
    index: 3,
    className:
      'absolute left-0 pointer-events-none z-10 flex justify-end sm:justify-start md:justify-end items-center md:items-end w-fit sm:w-full h-full pr-8 md:pr-6 lg:pr-10 xl:pr-11 2xl:pr-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    baseSrc: '/svgs/video',
    placeholderSrc: '/placeholders/video',
    illustrationDescription: 'Illustration showing video editing tools and motion graphics elements, representing professional video production and animation services.',
  },
  {
    title: 'Logo Design \n & Branding',
    index: 4,
    className:
      'absolute left-0 pointer-events-none z-10 flex justify-end md:justify-center items-center md:items-end w-fit sm:w-full h-full mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    baseSrc: '/svgs/logo',
    placeholderSrc: '/placeholders/logo',
    illustrationDescription: 'Illustration of brand identity elements including logo design, typography, and brand guidelines, showcasing branding expertise.',
  },
  {
    title: '3D Design \n & Visualization',
    index: 5,
    className:
      'absolute left-0 pointer-events-none z-10 flex  justify-end sm:justify-start items-center md:items-end w-fit sm:w-full h-full pl-8 md:pl-6 lg:pl-10 xl:pl-11 2xl:pl-12 mt-0 md:mt-6 lg:mt-4 xl:mt-3 2xl:mt-4',
    baseSrc: '/svgs/blender',
    placeholderSrc: '/placeholders/blender',
    illustrationDescription: 'Illustration of 3D modeling and visualization tools with rendered objects, representing 3D design and visualization services.',
  },
]

export const breakpoints = { '2xl': 1536, lg: 1024, md: 768, sm: 640, xl: 1280, xs: 365 }

export const testimonialsData: TestimonialsT = {
  "alfabolt" : {
    testimonial:
      "Alfabolt's interface redesign by Maaz was transformative for our workflow. His understanding of both design principles and developer needs created a seamless experience that increased our team's productivity by 25%.",
    client: 'Ali Farooq',
    designation: 'CEO, Alfabolt',
  },
  "kueenz" : {
    testimonial:
      'I\'ve had the pleasure of collaborating with Maaz on various projects, and I cannot recommend him highly enough. As a product designer, he brings exceptional talent and a strategic mindset to every challenge. What sets him apart is not just his technical design skills, but his ability to understand the broader business context and provide thoughtful guidance that elevates the entire project. \n \n Maaz consistently delivers high-quality work on time and communicates clearly throughout the process. He listens carefully to requirements while confidently offering valuable insights that often lead to better outcomes than initially envisioned. His collaborative approach makes him an asset to any team, as he balances creative vision with practical execution. \n \n I look forward to working with Maaz on future projects and highly recommend him to anyone seeking a product designer who combines creative excellence with business acumen and professionalism.',
    client: 'Anum Mujahid',
    designation: 'Co-Founder, Kueenz',
  },
  "rivanna" : {
    testimonial:
      'Working with Maaz on our Ayla and Rivanna was incredibly smooth. He helped develop the app and the website from scratch, and tailored the design to the needs of the users.',
    client: 'Peter',
    designation: 'Founder, Rivanna',
  },
  "tss" : {
    testimonial:
      'Working with Maaz on our TSS graphics package was incredibly smooth. He took our educational content and transformed it with visuals that are engaging, clear, and perfectly aligned with our brand identity.',
    client: 'Rameen',
    designation: 'Country Manager, Total School Solutions',
  },
  "inventrios" : {
    testimonial:
      'The logos and branding materials Maaz designed for MenuHub perfectly communicate our value proposition. His ability to translate our vision into visual elements that resonate with our target audience is remarkable.',
    client: 'David Chen',
    designation: 'Founder, MenuHub',
  },
  "nutrigram" :   {
    testimonial:
      'The Nutrigram app Maaz designed has revolutionized how our clients track their nutrition. The interface is clean, engaging, and incredibly user-friendly. Our user retention has increased by 40% since launch!',
    client: 'Hassaan Ali',
    designation: 'Founder, Nutrigram',
  },
  "markdownEditor" : {
    testimonial:
      'Working with Maaz on the Markdown Editor was exceptional. His attention to detail and understanding of developer workflows resulted in a tool our entire engineering team now uses daily. The keyboard shortcuts and real-time preview are game-changers.',
    client: 'Usama Ejaz',
    designation: 'Co-Founder, Nustac Technologies',
  },
  "beaconTutors" : {
    testimonial:
      'The Beacon Tutors platform Maaz developed streamlined our entire tutoring operation. From the admin dashboard to the student interface, every element was thoughtfully designed and flawlessly executed.',
    client: 'Imran Haider',
    designation: 'Founder, Beacon Tutors Pakistan',
  },
  "nustac" : {
    testimonial:
      'The Beacon Tutors platform Maaz developed streamlined our entire tutoring operation. From the admin dashboard to the student interface, every element was thoughtfully designed and flawlessly executed.',
    client: 'Imran Haider',
    designation: 'Founder, Beacon Tutors Pakistan',
  },
}

export const testimonials: TestimonialT[] = Object.values(testimonialsData)

export const aboutSections = [
  'Maaz Rana',
  'Education',
  'Past Clients',
  'Socials',
  'Tech Stack',
  'Work Experience',
]

export const WorkExperiences: WorkExperienceT[] = [
  {
    company: 'Alfabolt',
    roles: 'Frontend Developer - Lead Product Designer (UI/UX)',
    tenure: '2022 - Present',
  },
  { company: 'Total School Solutions', roles: 'IT Manager - Lead Graphic Designer', tenure: '2022 - 2024' },
  {
    company: 'Nustac Technologies',
    roles: 'Flutter Mobile App Developer - UI/UX Designer',
    tenure: '2021 - 2024',
  },
  { company: '20Four7 VA', roles: 'Specialist Art Director & Animator', tenure: '2022 - 2023' },
  {
    company: 'Beacon Tutors Pakistan',
    roles: 'Full Stack Web Developer - UI/UX Designer',
    tenure: '2021 - 2022',
  },
  { company: 'Edwiz Solutions', roles: 'Illustration & Graphics Designer', tenure: '2021 - 2022' },
]

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
]

export const productDevelopmentProjects: ProjectAnalysisT[] = [
  alfabolt,
  deepReelCanva,
  jawlineFitness,
  superDuperStudio,
  tutorania,
  beaconTutors,
  beaconTutorsAdmin,
  inventrios,
]

export const videoProjects: VideoProjectT[] = [
  beaconTutorProject1,
  beaconTutorProject2,
  beaconTutorProject3,
  beaconTutorProject4,
  beaconTutorProject5,
  budsProject1,
  budsProject2,
  budsProject3,
  carsDebateProject,
  creativerseProject,
  fireStarterProject,
  markazProject,
  nfcProject,
  nustacProject,
  phoneVideoProject,
  plutoProject,
]

export const graphicDesignProjects: GraphicDesignProjectT[] = [
  alfaboltProject,
  teqnirLogoProject,
  alphaLogoProject,
  announcementProject4,
  eidMubarakProject,
  aylaLogoProject,
  announcementProject2,
  eventCoverProject2,
  countdownProject2,
  announcementProject3,
  countdownProject1,
  donationProject,
  eventCoverProject1,
  carsDebateLogoProject,
  announcementProject1,
  cookieeesLogoProject,
  tutoraniaLogoProject,
  inventriosLogoProject,
  gdscPosterProject,
  headlinePosterProject,
  joliLogoProject,
  kravingsLaunchProject,
  eventPosterProject2,
  informativePosterProject1,
  eventPosterProject1,
  eventPosterProject3,
  eventPosterProject4,
  informativePosterProject2,
  informativePosterProject3,
  informativePosterProject4,
  introductionPosterProject,
  fatelyPostProject,
  pools515LogoProject,
  kravingsLogoProject,
  tssProject,
  nfcPosterProject,
  kravingsMenuProject,
  recruitementProject4,
  reviewProject1,
  reviewProject2,
  shsLogoProject,
  recruitementProject1,
  recruitementProject2,
  recruitementProject3,
  markdownPosterProject,
  yesLogoProject,
  techtonicLogoProject,
  menuHubLogoProject,
  moveLogoProject,
  maazLogoProject,
]

export const blenderProjects: BlenderProjectT[] = [
  discordProject,
  chairProject,
  youtubeProject,
  deskProject,
  headphoneProject,
  roomProject,
  phoneProject,
  interiorProject,
  flutterProject,
  carProject,
  earbudsProject,
  elevationProject,
  homeProject,
  dumbbelsProject,
]

export const designIconComponents: IconComponentsT = {
  figma: { Icon: SiFigma, props: { fill: '#F24E1E' } },
  illustrator: { Icon: SiAdobeillustrator, props: { fill: '#FF9A00' } },
  photoshop: { Icon: SiAdobephotoshop, props: { fill: '#31A8FF' } },
  afterEffects: { Icon: SiAdobeaftereffects, props: { fill: '#9999FF' } },
  premierePro: { Icon: SiAdobepremierepro, props: { fill: '#9999FF' } },
  adobeXd: { Icon: SiAdobexd, props: { fill: '#FF61F6' } },
  blender: { Icon: SiBlender, props: { fill: '#E87D0D' } },
  canva: { Icon: SiCanva, props: { fill: '#00C4CC' } },
}

export const devIconComponents: IconComponentsT = {
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
}

export const managementIconComponents: IconComponentsT = {
  slack: { Icon: SiSlack, props: { fill: '#4A154B' } },
  notion: { Icon: SiNotion, props: { fill: 'var(--primary)' } },
  trello: { Icon: SiTrello, props: { fill: '#0052CC' } },
  jira: { Icon: SiJira, props: { fill: '#0052CC' } },
  jiraSoftware: { Icon: SiJirasoftware, props: { fill: '#0052CC' } },
  github: { Icon: SiGithub, props: { fill: 'var(--primary)' } },
}

export const iconComponents: IconComponentsT = {
  ...designIconComponents,
  ...devIconComponents,
  ...managementIconComponents,
}

export const clientIconComponents = [
  { Icon: Alfabolt, props: { fill: 'var(--primary-hover)' } },
  { Icon: TSS, props: { fill: 'var(--primary-hover)' } },
  { Icon: Deepreel, props: { fill: 'var(--primary-hover)' } },
  { Icon: Athleton, props: { fill: 'var(--primary-hover)' } },
  { Icon: Rivanna, props: { fill: 'var(--primary-hover)' } },
  { Icon: Edwiz, props: { fill: 'var(--primary-hover)' } },
  { Icon: BeaconTutors, props: { fill: 'var(--primary-hover)' } },
  { Icon: MenuHub, props: { fill: 'var(--primary-hover)' } },
  { Icon: Lyfiti, props: { fill: 'var(--primary-hover)' } },
  { Icon: FiveOneFivePools },
]

export const clientColorIconComponents = [
  { Icon: Alfabolt, props: {} },
  { Icon: TSS, props: {} },
  { Icon: Deepreel, props: {} },
  { Icon: Athleton, props: {} },
  { Icon: Rivanna, props: {} },
  { Icon: Edwiz, props: {} },
  { Icon: BeaconTutors, props: {} },
  { Icon: MenuHub, props: {} },
  { Icon: Lyfiti, props: {} },
  { Icon: FiveOneFivePools, props: {} },
]

export const clientData: ClientDataT[] = [
  {
    heading: 'Alfabolt',
    testimonial:testimonialsData['alfabolt'].testimonial,
    clientName: testimonialsData['alfabolt'].client,
    designation: testimonialsData['alfabolt'].designation,
    productsInvolved: [
      {
        logo: Alfabolt,
        primaryColor: '#EE1E3A',
        name: 'Alfabolt',
        services: ['Product Design (UI/UX)', 'Website Development'],
        link: `work/${getPageSlug(alfabolt.title)}`,
      },
      {
        logo: Athleton,
        primaryColor: 'var(--black-dynamic)',
        name: 'Athleton+',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(athletonPlus.title)}`,
      },
      {
        logo: SuperDuperStudio,
        primaryColor: '#FA5F33',
        name: '',
        services: ['Product Design (UI/UX)', 'Website Development'],
        link: `work/${getPageSlug(superDuperStudio.title)}`,
      },
      {
        logo: FiveOneFivePools,
        primaryColor: '#5884CF',
        name: '',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(pools515.title)}`,
      },
      {
        logo: Deepreel,
        primaryColor: '#FF3C5F',
        name: 'DeepReel',
        services: ['Product Design (UI/UX)', 'Web App Development', 'Website Development', 'Canva Integration', 'Adobe Express Integration'],
        link: `work/${getPageSlug(deepReelAI.title)}`,
      },
    ],
    technologiesInvolved: [
      { Icon: devIconComponents['next'], title: 'Next.js' },
      { Icon: devIconComponents['react'], title: 'React' },
      { Icon: devIconComponents['typescript'], title: 'TypeScript' },
      { Icon: devIconComponents['javascript'], title: 'JavaScript' },
      { Icon: devIconComponents['framer'], title: 'Framer' },
      { Icon: designIconComponents['canva'], title: 'Canva' },
      { Icon: devIconComponents['tailwind'], title: 'Tailwind CSS' },
      { Icon: designIconComponents['figma'], title: 'Figma' },
      { Icon: designIconComponents['illustrator'], title: 'Illustrator' },
      { Icon: designIconComponents['photoshop'], title: 'Photoshop' },
      { Icon: designIconComponents['blender'], title: 'Blender' },
    ],
  },
  {
    heading: 'Kueenz Technologies',
    testimonial: testimonialsData['kueenz'].testimonial,
    clientName: testimonialsData['kueenz'].client,
    designation: testimonialsData['kueenz'].designation,
    productsInvolved: [
      {
        logo: SvgHumanizarTexto,
        primaryColor: '#6209D2',
        name: 'Humanizar Texto',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(humanizarTexto.title)}`,
      },
      {
        logo: SvgElbrezal,
        primaryColor: '#FAD235',
        name: 'Elbrezal Honey',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(elBrezal.title)}`,
      },
    ],

    technologiesInvolved: [
      { Icon: designIconComponents['figma'], title: 'Figma' },
      { Icon: designIconComponents['illustrator'], title: 'Illustrator' },
      { Icon: designIconComponents['photoshop'], title: 'Photoshop' },
    ],
  },
  {
    heading: 'Beacon Tutors',
    testimonial: testimonialsData['beaconTutors'].testimonial,
    clientName: testimonialsData['beaconTutors'].client,
    designation: testimonialsData['beaconTutors'].designation,
    productsInvolved: [
      {
        logo: BeaconTutors,
        primaryColor: '#FF6F66',
        name: 'Beacon Tutors Pakistan',
        services: ['Product Design (UI/UX)', 'Website Development', 'Graphic Design', 'Animation', 'Illustration'],
        link: `work/${getPageSlug(beaconTutors.title)}`,
      },
      {
        logo: BeaconTutors,
        primaryColor: '#C6F0EB',
        name: 'Beacon Tutors CRM',
        services: ['Product Design (UI/UX)', 'Web App Development'],
        link: `work/${getPageSlug(beaconTutorsCRM.title)}`,
      },
      {
        logo: TutoraniaSvg,
        primaryColor: '#6EC2FF',
        name: 'Tutorania',
        services: ['Product Design (UI/UX)', 'Web App Development'],
        link: `work/${getPageSlug(tutorania.title)}`,
      },
    ],

    technologiesInvolved: [
      { Icon: devIconComponents['next'], title: 'Next.js' },
      { Icon: devIconComponents['react'], title: 'React' },
      { Icon: devIconComponents['typescript'], title: 'TypeScript' },
      { Icon: devIconComponents['javascript'], title: 'JavaScript' },
      { Icon: devIconComponents['tailwind'], title: 'Tailwind CSS' },
      { Icon: designIconComponents['figma'], title: 'Figma' },
      { Icon: designIconComponents['illustrator'], title: 'Illustrator' },
      { Icon: designIconComponents['photoshop'], title: 'Photoshop' },
      { Icon: designIconComponents['afterEffects'], title: 'After Effects' },
      { Icon: designIconComponents['premierePro'], title: 'Premiere Pro' },
    ],
  },
  {
    heading: 'Rivanna',
    testimonial: testimonialsData['rivanna'].testimonial,
    clientName: testimonialsData['rivanna'].client,
    designation: testimonialsData['rivanna'].designation,
    productsInvolved: [
      {
        logo: Rivanna,
        primaryColor: '#59606E',
        name: 'Rivanna',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(rivanna.title)}`,
      },
      {
        logo: AylaLogo,
        primaryColor: '#7D8FFF',
        name: 'Ayla AI',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(aylaAI.title)}`,
      },
    ],
    technologiesInvolved: [
      { Icon: designIconComponents['figma'], title: 'Figma' },
      { Icon: designIconComponents['illustrator'], title: 'Illustrator' },
      { Icon: designIconComponents['photoshop'], title: 'Photoshop' },
    ],
  },
  {
    heading: 'Nustac',
    testimonial: testimonialsData['nustac'].testimonial,
    clientName: testimonialsData['nustac'].client,
    designation: testimonialsData['nustac'].designation,
    productsInvolved: [
      {
        logo: Rivanna,
        primaryColor: '#FFE363',
        name: 'Jawline Fitness',
        services: ['Product Design (UI/UX)', 'Mobile App Development (Flutter)', 'Animation', 'Illustration'],
        link: `work/${getPageSlug(jawlineFitness.title)}`,
      },
      {
        logo: AylaLogo,
        primaryColor: '#5382DB',
        name: 'Interview Preparation',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(codingInterviewPrep.title)}`,
      },
      {
        logo: AylaLogo,
        primaryColor: 'var(--black-dynamic)',
        name: 'Markdown Editor',
        services: ['Product Design (UI/UX)', 'Web Development'],
        link: `work/${getPageSlug(markdownEditor.title)}`,
      },
      {
        logo: SvgSmartCatch,
        primaryColor: '#003882',
        name: '',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(smartCatch.title)}`,
      },
    ],
    technologiesInvolved: [
      { Icon: devIconComponents['flutter'], title: 'Flutter' },
      { Icon: devIconComponents['dart'], title: 'Dart' },
      { Icon: designIconComponents['figma'], title: 'Figma' },
      { Icon: designIconComponents['illustrator'], title: 'Illustrator' },
      { Icon: designIconComponents['photoshop'], title: 'Photoshop' },
      { Icon: designIconComponents['afterEffects'], title: 'After Effects' },
      { Icon: designIconComponents['premierePro'], title: 'Premiere Pro' },
    ],
  },
  {
    heading: 'Inventrios',
    testimonial: testimonialsData['inventrios'].testimonial,
    clientName: testimonialsData['inventrios'].client,
    designation: testimonialsData['inventrios'].designation,
    productsInvolved: [
      {
        logo: SvgRobinBeauty,
        primaryColor: '#94DDEF',
        name: '',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(robinBeauty.title)}`,
      },
      {
        logo: MenuHub,
        primaryColor: '#F37832',
        name: '',
        services: ['Product Design (UI/UX)', 'Logo Design'],
        link: `work/${getPageSlug(menuHub.title)}`,
      },
      {
        logo: EquanimitySvg,
        primaryColor: '#005AC1',
        name: 'Equanimity',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(equanimity.title)}`,
      },
      {
        logo: SvgInventrios,
        primaryColor: '#40AFF9',
        name: 'Inventrios',
        services: ['Product Design (UI/UX)', 'Website Development', 'Animation', 'Illustration'],
        link: `work/${getPageSlug(inventrios.title)}`,
      },
    ],
    technologiesInvolved: [
      { Icon: designIconComponents['figma'], title: 'Figma' },
      { Icon: designIconComponents['illustrator'], title: 'Illustrator' },
      { Icon: designIconComponents['photoshop'], title: 'Photoshop' },
      { Icon: designIconComponents['afterEffects'], title: 'After Effects' },
      { Icon: designIconComponents['premierePro'], title: 'Premiere Pro' },
    ],
  },
  {
    heading: 'Nutrigram',
    testimonial: testimonialsData['nutrigram'].testimonial,
    clientName: testimonialsData['nutrigram'].client,
    designation: testimonialsData['nutrigram'].designation,
    productsInvolved: [
      {
        logo: SvgNutrigram,
        primaryColor: '#E23352',
        name: 'Nutrigram',
        services: ['Product Design (UI/UX)', 'Mobile App Design'],
        link: `work/${getPageSlug(nutrigram.title)}`,
      },
    ],
    technologiesInvolved: [
      { Icon: designIconComponents['figma'], title: 'Figma' },
      { Icon: designIconComponents['illustrator'], title: 'Illustrator' },
    ],
  },
]
