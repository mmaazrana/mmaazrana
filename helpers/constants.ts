import { ProjectCategories, ProjectLogos, Sections, TestimonialClients, WorkCategories } from '@/helpers/enums'
import {
  BlenderProjectT,
  BottomNavButtonT,
  BottomNavCategoryT,
  ClientDataT,
  DropdownItemT,
  FooterButtonT,
  GraphicDesignProjectT,
  IconComponentsT,
  NavButtonT,
  ServiceT,
  TestimonialT,
  VideoProjectT,
  WorkExperienceT,
} from '@/helpers/types'
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobelightroom,
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
  SiLinear,
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
  testimonialsData,
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
import { getClientId, getClientQueryString, getPageSlug } from './parsers'
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
import SvgKueenzTechnologies from '@/components/icons/kueenz-technologies'
import Inventrios from '@/components/icons/Inventrios'

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
  { text: 'Services', href: `/#${Sections.services}`, type: 'secondary' },
  { text: 'About', href: `/#${Sections.aboutMe}`, type: 'secondary' },
  { text: 'Contact Me', href: 'mailto:awaismaaz@gmail.com', type: 'primary' },
]

export const topProjectsData = [alfabolt, humanizarTexto, aylaAI, elBrezal, pools515, superDuperStudio]

export const topClientsData = [
  testimonialsData[TestimonialClients.alfabolt],
  testimonialsData[TestimonialClients.kueenz],
  testimonialsData[TestimonialClients.beaconTutors],
  testimonialsData[TestimonialClients.rivanna],
]

export const topProjects: DropdownItemT[] = topProjectsData.map(project => ({
  text: project.title,
  href: `/work/${getPageSlug(project.title)}`,
}))

export const topClients: DropdownItemT[] = topClientsData.map(client => ({
  text: client.companyName,
  href: `/clients${getClientQueryString({ openProjectsParam: '', itemKey: client.key, isOpen: false })}#${getClientId(client.key)}`,
}))


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
    { text: 'Overview', href: '/' },
    { text: 'Services', href: `/#${Sections.services}` },
    { text: 'Testimonials', href: `/#${Sections.testimonials}` },
    { text: 'Clients', href: `/clients` },
    { text: 'About Me', href: `/#${Sections.aboutMe}` },
  ],
  [
    { text: 'More Work', href: '/portfolio' },
    { text: 'Case Studies', href: `/portfolio?tab=${WorkCategories.productDesign}` },
    { text: 'Web Apps', href: `/portfolio?tab=${WorkCategories.productDevelopment}` },
    { text: 'Mobile Apps', href: `/portfolio?tab=${WorkCategories.productDevelopment}` },
    { text: 'Art Works', href: `/portfolio?tab=${WorkCategories.blender}` },
  ],
  [
    { text: 'Top Projects', href: `/#${Sections.work}` },
    { text: 'Alfabolt', href: `/work/${getPageSlug(alfabolt.title)}` },
    { text: 'Humanizar Texto', href: `/work/${getPageSlug(humanizarTexto.title)}` },
    { text: 'Ayla AI', href: `/work/${getPageSlug(aylaAI.title)}` },
    { text: 'El Brezal', href: `/work/${getPageSlug(elBrezal.title)}` },
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
    roles: 'Lead Product Designer (UI/UX) & Frontend Developer, creating user-centric interfaces and responsive web apps.',
    tenure: '2022 - Present',
  },
  {
    company: 'Total School Solutions',
    roles: 'IT Manager & Lead Graphic Designer, overseeing IT and leading design of visual assets.',
    tenure: '2022 - 2024',
  },
  {
    company: 'Nustac Technologies',
    roles: 'Flutter Mobile App Developer & UI/UX Designer, building cross-platform mobile apps and intuitive user experiences.',
    tenure: '2021 - 2024',
  },
  {
    company: '20Four7 VA',
    roles: 'Specialist Art Director & Animator, managing cross functional teams and executing creative visual strategies.',
    tenure: '2022 - 2023',
  },
  {
    company: 'Beacon Tutors Pakistan',
    roles: 'Full Stack Web Developer & UI/UX Designer, developing web solutions and user-friendly interfaces for ed-tech.',
    tenure: '2021 - 2022',
  },
  {
    company: 'Edwiz Solutions',
    roles: 'Illustration & Graphics Designer, creating custom illustrations and graphic designs for clients.',
    tenure: '2021 - 2022',
  },
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
  lightroom: { Icon: SiAdobelightroom, props: { fill: '#31A8FF' } },
  afterEffects: { Icon: SiAdobeaftereffects, props: { fill: '#9999FF' } },
  premierePro: { Icon: SiAdobepremierepro, props: { fill: '#9999FF' } },
  adobeXd: { Icon: SiAdobexd, props: { fill: '#FF61F6' } },
  blender: { Icon: SiBlender, props: { fill: '#E87D0D' } },
  canva: { Icon: SiCanva, props: { fill: '#00C4CC' } },
}

export const devIconComponents: IconComponentsT = {
  next: { Icon: SiNextdotjs, props: { fill: 'var(--black-dynamic)' } },
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
  notion: { Icon: SiNotion, props: { fill: 'var(--black-dynamic)' } },
  trello: { Icon: SiTrello, props: { fill: '#0052CC' } },
  linear: { Icon: SiLinear, props: { fill: 'var(--black-dynamic)' } },
  jira: { Icon: SiJira, props: { fill: '#0052CC' } },
  jiraSoftware: { Icon: SiJirasoftware, props: { fill: '#0052CC' } },
  github: { Icon: SiGithub, props: { fill: 'var(--black-dynamic)' } },
}

export const iconComponents: IconComponentsT = {
  ...designIconComponents,
  ...devIconComponents,
  ...managementIconComponents,
}

export const clientIconComponents = [
  { Icon: Alfabolt},
  { Icon: TSS},
  { Icon: SvgKueenzTechnologies},
  { Icon: SvgHumanizarTexto},
  { Icon: AylaLogo },
  { Icon: SvgNutrigram},
  { Icon: BeaconTutors},
  { Icon: EquanimitySvg },
  { Icon: SvgElbrezal},
  { Icon: SvgRobinBeauty },
  { Icon: Athleton},
  { Icon: Deepreel},
  { Icon: Rivanna},
  { Icon: Edwiz},
  { Icon: SvgInventrios},
  { Icon: SvgSmartCatch },
  { Icon: Lyfiti},
  { Icon: MenuHub},
  { Icon: FiveOneFivePools},
]

export const clientLogoData = {
  [ProjectLogos.alfabolt] : Alfabolt,
  [ProjectLogos.tss] : TSS,
  [ProjectLogos.kueenz] : SvgKueenzTechnologies,
  [ProjectLogos.humanizarTexto] : SvgHumanizarTexto,
  [ProjectLogos.ayla] : AylaLogo,
  [ProjectLogos.nutrigram] : SvgNutrigram,
  [ProjectLogos.beaconTutors] : BeaconTutors,
  [ProjectLogos.equanimity] : EquanimitySvg,
  [ProjectLogos.elbrezal] : SvgElbrezal,
  [ProjectLogos.robinBeauty] : SvgRobinBeauty,
  [ProjectLogos.athleton] : Athleton,
  [ProjectLogos.deepreel] : Deepreel,
  [ProjectLogos.rivanna] : Rivanna,
  [ProjectLogos.edwiz] : Edwiz,
  [ProjectLogos.inventrios] : SvgInventrios,
  [ProjectLogos.smartCatch] : SvgSmartCatch,
  [ProjectLogos.lyfiti] : Lyfiti,
  [ProjectLogos.menuHub] : MenuHub,
  [ProjectLogos.fiveOneFivePools] : FiveOneFivePools,
  [ProjectLogos.superDuper] : SuperDuperStudio,
  [ProjectLogos.tutorania] : TutoraniaSvg,
}


export const clientColorIconComponents = [
  { Icon: Alfabolt, props: {} },
  { Icon: TSS, props: {} },
  { Icon: Deepreel, props: {} },
  { Icon: Athleton, props: {} },
  { Icon: Rivanna, props: {} },
  { Icon: Edwiz, props: {} },
  { Icon: BeaconTutors, props: {} },
  { Icon: SvgKueenzTechnologies, props: {} },
  { Icon: MenuHub, props: {} },
  { Icon: Lyfiti, props: {} },
  { Icon: FiveOneFivePools, props: {} },
]

export const clientData: ClientDataT[] = [
  {
    key: TestimonialClients.alfabolt,
    companyLogo: Alfabolt,
    companyLink: 'https://alfabolt.com',
    heading: 'Alfabolt',
    testimonial:testimonialsData[TestimonialClients.alfabolt].testimonial,
    clientName: testimonialsData[TestimonialClients.alfabolt].client,
    designation: testimonialsData[TestimonialClients.alfabolt].designation,
    productsInvolved: [
      {
        logo: Alfabolt,
        primaryColor: '#EE1E3A',
        name: 'Alfabolt',
        title: 'Alfabolt',
        services: ['Product Design (UI/UX)', 'Website Development'],
        link: `work/${getPageSlug(alfabolt.title)}`,
      },
      {
        logo: Athleton,
        primaryColor: 'var(--black-dynamic)',
        name: 'Athleton+',
        title: 'Athleton Plus',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(athletonPlus.title)}`,
      },
      {
        logo: SuperDuperStudio,
        primaryColor: '#FA5F33',
        name: '',
        title: 'Super Duper Studio',
        services: ['Product Design (UI/UX)', 'Website Development'],
        link: `work/${getPageSlug(superDuperStudio.title)}`,
      },
      {
        logo: FiveOneFivePools,
        primaryColor: '#5884CF',
        name: '',
        title: 'Five One Five Pools',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(pools515.title)}`,
      },
      {
        logo: Deepreel,
        primaryColor: '#FF3C5F',
        name: 'Deepreel',
        title: 'DeepReel AI VIdeos',
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
    key: TestimonialClients.kueenz,
    companyLogo: SvgKueenzTechnologies,
    companyLink: 'https://kueenztechnologies.com',
    heading: 'Kueenz Technologies',
    testimonial: testimonialsData[TestimonialClients.kueenz].testimonial,
    clientName: testimonialsData[TestimonialClients.kueenz].client,
    designation: testimonialsData[TestimonialClients.kueenz].designation,
    productsInvolved: [
      {
        logo: SvgHumanizarTexto,
        primaryColor: '#6209D2',
        name: 'Humanizar Texto',
        title: 'Humanizar Texto',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(humanizarTexto.title)}`,
      },
      {
        logo: SvgElbrezal,
        primaryColor: '#FAD235',
        name: 'Elbrezal Honey',
        title: 'Elbrezal Honey',
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
    key: TestimonialClients.beaconTutors,
    companyLogo: BeaconTutors,
    heading: 'Beacon Tutors',
    testimonial: testimonialsData[TestimonialClients.beaconTutors].testimonial,
    clientName: testimonialsData[TestimonialClients.beaconTutors].client,
    designation: testimonialsData[TestimonialClients.beaconTutors].designation,
    productsInvolved: [
      {
        logo: BeaconTutors,
        primaryColor: '#FF6F66',
        name: 'Beacon Tutors Pakistan',
        title: 'Beacon Tutors Pakistan',
        services: ['Product Design (UI/UX)', 'Website Development', 'Graphic Design', 'Animation', 'Illustration'],
        link: `work/${getPageSlug(beaconTutors.title)}`,
      },
      {
        logo: BeaconTutors,
        primaryColor: '#C6F0EB',
        name: 'Beacon Tutors CRM',
        title: 'Beacon Tutors CRM',
        services: ['Product Design (UI/UX)', 'Web App Development'],
        link: `work/${getPageSlug(beaconTutorsCRM.title)}`,
      },
      {
        logo: TutoraniaSvg,
        primaryColor: '#6EC2FF',
        name: 'Tutorania',
        title: 'Tutorania',
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
    key: TestimonialClients.rivanna,
    companyLogo: Rivanna,
    heading: 'Rivanna',
    testimonial: testimonialsData[TestimonialClients.rivanna].testimonial,
    clientName: testimonialsData[TestimonialClients.rivanna].client,
    designation: testimonialsData[TestimonialClients.rivanna].designation,
    productsInvolved: [
      {
        logo: Rivanna,
        primaryColor: '#59606E',
        name: 'Rivanna',
        title: 'Rivanna Software',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(rivanna.title)}`,
      },
      {
        logo: AylaLogo,
        primaryColor: '#7D8FFF',
        name: 'Ayla AI',
        title: 'Ayla AI',
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
    key: TestimonialClients.nustac,
    heading: 'Nustac',
    testimonial: testimonialsData[TestimonialClients.nustac].testimonial,
    clientName: testimonialsData[TestimonialClients.nustac].client,
    designation: testimonialsData[TestimonialClients.nustac].designation,
    productsInvolved: [
      {
        logo: Rivanna,
        primaryColor: '#FFE363',
        name: 'Jawline Fitness',
        title: 'Jawline Fitness',
        services: ['Product Design (UI/UX)', 'Mobile App Development (Flutter)', 'Animation', 'Illustration'],
        link: `work/${getPageSlug(jawlineFitness.title)}`,
      },
      {
        logo: AylaLogo,
        primaryColor: '#5382DB',
        name: 'Interview Preparation',
        title: 'Coding Interview Preparation',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(codingInterviewPrep.title)}`,
      },
      {
        logo: AylaLogo,
        primaryColor: 'var(--black-dynamic)',
        name: 'Markdown Editor',
        title: 'Markdown Editor',
        services: ['Product Design (UI/UX)', 'Web Development'],
        link: `work/${getPageSlug(markdownEditor.title)}`,
      },
      {
        logo: SvgSmartCatch,
        primaryColor: '#003882',
        name: '',
        title: 'Smart Catch',
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
    key: TestimonialClients.inventrios,
    companyLogo: Inventrios,
    heading: 'Inventrios',
    testimonial: testimonialsData[TestimonialClients.inventrios].testimonial,
    clientName: testimonialsData[TestimonialClients.inventrios].client,
    designation: testimonialsData[TestimonialClients.inventrios].designation,
    productsInvolved: [
      {
        logo: SvgRobinBeauty,
        primaryColor: '#94DDEF',
        name: '',
        title: 'Robin Beauty',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(robinBeauty.title)}`,
      },
      {
        logo: MenuHub,
        primaryColor: '#F37832',
        name: '',
        title: 'Menu Hub',
        services: ['Product Design (UI/UX)', 'Logo Design'],
        link: `work/${getPageSlug(menuHub.title)}`,
      },
      {
        logo: EquanimitySvg,
        primaryColor: '#005AC1',
        name: 'Equanimity',
        title: 'Equanimity',
        services: ['Product Design (UI/UX)'],
        link: `work/${getPageSlug(equanimity.title)}`,
      },
      {
        logo: SvgInventrios,
        primaryColor: '#40AFF9',
        name: 'Inventrios',
        title: 'Inventrios',
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
    key: TestimonialClients.nutrigram,
    companyLogo: SvgNutrigram,
    heading: 'Nutrigram',
    testimonial: testimonialsData[TestimonialClients.nutrigram].testimonial,
    clientName: testimonialsData[TestimonialClients.nutrigram].client,
    designation: testimonialsData[TestimonialClients.nutrigram].designation,
    productsInvolved: [
      {
        logo: SvgNutrigram,
        primaryColor: '#E23352',
        name: 'Nutrigram',
        title: 'Nutrigram',
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

export const getClientLogo = (testimonialKey: TestimonialClients) => {
  return clientData.find(client => client.key === testimonialKey)?.companyLogo
}

export const getProductsInvolved = (testimonialKey: TestimonialClients) => {
  return clientData.find(client => client.key === testimonialKey)?.productsInvolved
}

