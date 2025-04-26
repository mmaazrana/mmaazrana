import { StaticImageData } from 'next/image'
import athleton from '../public/images/projects/athleton.webp'
import alfaboltImage from '../public/images/projects/alfabolt.webp'
import superDuper from '../public/images/projects/super-duper.webp'
import aylaAlt from '../public/images/projects/ayla-alt.webp'
import aylaMain from '../public/images/projects/ayla-main.webp'
import beaconTutorsAdminPanel from '../public/images/projects/beacon-tutor-admin-panel.webp'
import beaconTutorWebsite from '../public/images/projects/beacon-tutor-website.webp'
import beaconTutorCRM from '../public/images/projects/beacon-tutor-crm.webp'
import canvaAudio from '../public/images/projects/canva-audio.webp'
import canvaVideo from '../public/images/projects/canva-video.webp'
import deepreel from '../public/images/projects/deepreel.webp'
import equanimityImage from '../public/images/projects/equanimity.webp'
import humanizarMain from '../public/images/projects/humanizar-main.webp'
import humanizarAlt from '../public/images/projects/humanizar-alt.webp'
import interviewMain from '../public/images/projects/interview-main.webp'
import interviewAlt from '../public/images/projects/interview-alt.webp'
import inventriosImage from '../public/images/projects/inventrios.webp'
import jawlineMain from '../public/images/projects/jawline-main.webp'
import jawlineAlt from '../public/images/projects/jawline-alt.webp'
import markdownMain from '../public/images/projects/markdown-main.webp'
import markdownAlt from '../public/images/projects/markdown-alt.webp'
import menuMain from '../public/images/projects/menu-main.webp'
import menuAlt from '../public/images/projects/menu-alt.webp'
import nutrigramMain from '../public/images/projects/nutrigram-main.webp'
import nutrigramAlt from '../public/images/projects/nutrigram-alt.webp'
import pools515Main from '../public/images/projects/pools-515-main.webp'
import pools515Alt from '../public/images/projects/pools-515-alt.webp'
import rivannaImage from '../public/images/projects/rivanna.webp'
import tutoraniaImage from '../public/images/projects/tutorania.webp'
import smartCatchMain from '../public/images/projects/smart-catch-main.webp'
import smartCatchAlt from '../public/images/projects/smart-catch-alt.webp'
import elBrezalImage from '../public/images/projects/el-brezal.webp'
import robinImage from '../public/images/projects/robin.webp'

// Individual Project Analysis
// Alfabolt
import alfaboltCaseStudy from '../public/images/projects/individual/alfabolt/case-study.webp'
import alfaboltLanding from '../public/images/projects/individual/alfabolt/landing.webp'
import alfaboltPricing from '../public/images/projects/individual/alfabolt/pricing.webp'
import alfaboltService from '../public/images/projects/individual/alfabolt/service.webp'
import alfaboltTechnology from '../public/images/projects/individual/alfabolt/technology.webp'

import {
  Star,
  Gauge,
  Proportions,
  Images,
  Glasses,
  SearchCheck,
  Sparkles,
  UsersRound,
  HeartHandshake,
  FolderDot,
  SquareRoundCorner,
  CreditCard,
  Factory,
} from 'lucide-react'
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiBlender,
  SiCanva,
  SiCloudinary,
  SiDart,
  SiElasticsearch,
  SiExpress,
  SiFfmpeg,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGithub,
  SiGoogleanalytics,
  SiJavascript,
  SiJira,
  SiJirasoftware,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPython,
  SiReact,
  SiReacthookform,
  SiRedis,
  SiReactquery,
  SiRedux,
  SiSendgrid,
  SiSlack,
  SiSqlite,
  SiStripe,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiPostgresql,
  SiTensorflow,
  SiSocketdotio,
  SiNativescript,
} from 'react-icons/si'
import { WorkCategories } from './enums'
import { IconType } from 'react-icons/lib'
import { IconComponentsT, IconComponentT } from './types'

export const techStackIcons: IconComponentsT = {
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
  vercel: { Icon: SiVercel, props: { fill: 'var(--primary)' } },
  googleAnalytics: { Icon: SiGoogleanalytics, props: { fill: '#E37400' } },
  figma: { Icon: SiFigma, props: { fill: '#F24E1E' } },
  illustrator: { Icon: SiAdobeillustrator, props: { fill: '#FF9A00' } },
  photoshop: { Icon: SiAdobephotoshop, props: { fill: '#31A8FF' } },
  afterEffects: { Icon: SiAdobeaftereffects, props: { fill: '#9999FF' } },
  premierePro: { Icon: SiAdobepremierepro, props: { fill: '#9999FF' } },
  adobeXd: { Icon: SiAdobexd, props: { fill: '#FF61F6' } },
  blender: { Icon: SiBlender, props: { fill: '#E87D0D' } },
  slack: { Icon: SiSlack, props: { fill: '#4A154B' } },
  notion: { Icon: SiNotion, props: { fill: 'var(--primary)' } },
  trello: { Icon: SiTrello, props: { fill: '#0052CC' } },
  jira: { Icon: SiJira, props: { fill: '#0052CC' } },
  jiraSoftware: { Icon: SiJirasoftware, props: { fill: '#0052CC' } },
  github: { Icon: SiGithub, props: { fill: 'var(--primary)' } },
}

export interface keyFeaturesT {
  title: string
  description: string
  icon: IconType
}
export interface techStackT {
  title: string
  usage: string
  icon: IconComponentT
}

export interface challengesAndSolutionsT {
  title: string
  description: string
}

export interface ProjectAnalysisT {
  title: string
  shortDescription: string
  detailedAnalysis: {
    overview: string
    completeOn: string
    requirements: string[]
    keyFeatures: keyFeaturesT[]
    challenges: challengesAndSolutionsT[]
    solutions: challengesAndSolutionsT[]
  }
  categories: WorkCategories[]
  techStack: techStackT[]
  liveUrl?: string
  figmaUrl?: string
  images: { main: StaticImageData; screenshots: StaticImageData[] }
}

export const pools515: ProjectAnalysisT = {
  title: '515 Pools',
  shortDescription:
    'A comprehensive pool management system that streamlines pool maintenance scheduling, testing, and service tracking for both pool owners and service providers.',
  detailedAnalysis: {
    overview:
      'Pools515 streamlines operations for pool service businesses by providing a comprehensive platform for scheduling, service management, client communication, and billing. The system features an intuitive interface designed for both office staff and field technicians.',
    completeOn: 'Jul 2023',
    requirements: [
      'Appointment scheduling system',
      'Service tracking capability',
      'Client management tools',
      'Billing and invoicing features',
      'Mobile app for field technicians',
      'Notification system for clients',
      'Service history tracking',
      'Reporting and analytics',
    ],
    keyFeatures: [
      {
        title: 'Appointment scheduling',
        description: 'Intuitive calendar interface for organizing service visits and assignments.',
        icon: Star,
      },
      {
        title: 'Service tracking',
        description:
          'Detailed tracking of service activities, chemicals used, and maintenance performed.',
        icon: Star,
      },
      {
        title: 'Client management',
        description: 'Comprehensive client profiles with property details and service preferences.',
        icon: Star,
      },
      {
        title: 'Technician routing',
        description: 'Optimized routing for field technicians to maximize efficiency.',
        icon: Star,
      },
      {
        title: 'Mobile app integration',
        description:
          'Field-ready mobile application for technicians to log services and access information.',
        icon: Star,
      },
      {
        title: 'Automated notifications',
        description:
          'Client alerts for upcoming appointments, completed services, and billing information.',
        icon: Star,
      },
      {
        title: 'Billing management',
        description: 'Comprehensive system for managing invoices, payments, and recurring billing.',
        icon: Star,
      },
      { title: 'On-site inspection management', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      {
        title: 'Complex scheduling system handling multiple service types',
        description:
          'Developing a flexible scheduling system that can handle various service types with different durations and frequencies.',
      },
      {
        title: 'Real-time availability management for service providers',
        description:
          'Implementing a system that tracks technician availability and location in real-time for efficient scheduling.',
      },
      {
        title: 'Accurate pricing calculations based on service types and frequency',
        description:
          'Creating a pricing engine that can calculate costs based on service types, property specifications, and frequency.',
      },
      {
        title: 'Managing different user roles and permissions',
        description:
          'Building comprehensive role management for office staff, technicians, and clients with appropriate permissions.',
      },
    ],
    solutions: [
      {
        title: 'Implemented an intuitive calendar-based scheduling interface',
        description:
          'Developed a flexible scheduling system that can handle various service types with different durations and frequencies.',
      },
      {
        title: 'Developed a robust notification system for appointment management',
        description:
          'Implemented a system that tracks technician availability and location in real-time for efficient scheduling.',
      },
      {
        title: 'Created a flexible pricing model that adapts to different service packages',
        description:
          'Developed a pricing engine that can calculate costs based on service types, property specifications, and frequency.',
      },
      {
        title: 'Designed a user-friendly interface that simplifies complex pool maintenance tasks',
        description:
          'Developed a flexible scheduling system that can handle various service types with different durations and frequencies.',
      },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'React/Next.js',
      usage: 'Frontend',
      icon: { Icon: SiReact, props: { fill: '#61DAFB' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
  ],
  images: { main: pools515Main, screenshots: [pools515Alt, pools515Alt, pools515Alt] },
}

export const beaconTutors: ProjectAnalysisT = {
  title: 'Beacon Tutors Pakistan',
  shortDescription:
    "Pakistan's largest tutoring network platform connecting qualified tutors with students for personalized learning experiences.",
  detailedAnalysis: {
    overview:
      'Beacon Tutors Pakistan is a comprehensive tutoring platform designed to bridge the gap between students and qualified tutors. The platform features an intuitive interface for connecting tutors with students, managing educational services, and streamlining the tutoring process.',
    completeOn: 'Jul 2023',
    requirements: [
      'Educational and engaging hero section with playful illustrations',
      'Clear service categorization with visual icons and descriptive cards',
      'Step-by-step process visualization with custom illustrations',
      'Consistent color scheme with educational theme',
      'Well-structured information hierarchy with clear sections',
      'Mobile-responsive design with adaptive layouts',
      'Multi-step form with progress indicators for easy navigation',
    ],
    keyFeatures: [
      { title: 'City-based tutor matching', description: 'Detailed service pages', icon: Star },
      {
        title: 'Chemical tracking',
        description: 'Inventory and usage tracking for pool chemicals and supplies.',
        icon: Star,
      },
      {
        title: 'Reporting tools',
        description: 'Analytical reports for business performance and service metrics.',
        icon: Star,
      },
      {
        title: 'Weather integration',
        description: 'Weather forecast integration for planning maintenance schedules.',
        icon: Star,
      },
      {
        title: 'Client portal',
        description: 'Self-service portal for clients to view service history and make requests.',
        icon: Star,
      },
      { title: 'User role management', description: 'Detailed service pages', icon: Star },
      {
        title: 'Detailed inquiry form with subject selection',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Educational resource sharing', description: 'Detailed service pages', icon: Star },
    ],

    challenges: [
      {
        title: 'Creating an intuitive tutor matching system',
        description: 'Detailed service pages',
      },
      {
        title: 'Handling diverse educational service categories',
        description: 'Detailed service pages',
      },
      {
        title: 'Implementing location-based service availability',
        description: 'Detailed service pages',
      },
      {
        title: 'Managing different user roles and permissions',
        description: 'Detailed service pages',
      },
      { title: 'Ensuring seamless mobile responsiveness', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed a step-by-step inquiry process for better user guidance',
        description: 'Detailed service pages',
      },
      {
        title: 'Implemented city-based filtering for localized tutor matching',
        description: 'Detailed service pages',
      },
      {
        title: 'Built responsive layouts for all device sizes',
        description: 'Detailed service pages',
      },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    {
      title: 'React/Next.js',
      usage: 'Frontend',
      icon: { Icon: SiReact, props: { fill: '#61DAFB' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
  ],
  images: {
    main: beaconTutorWebsite,
    screenshots: [beaconTutorWebsite, beaconTutorWebsite, beaconTutorWebsite],
  },
}

export const deepReelAI: ProjectAnalysisT = {
  title: 'DeepReel AI Videos',
  shortDescription:
    'An innovative AI-powered video creation platform that enables users to generate professional avatar-based videos with automated script generation, visuals, and captions.',
  detailedAnalysis: {
    overview:
      'DeepReel is a cutting-edge AI video creation platform that revolutionizes the way users create professional videos. The platform features AI avatars, automated script generation, and a suite of video editing tools, making professional video creation accessible to everyone regardless of their technical expertise.',
    completeOn: 'Jul 2023',
    requirements: [
      'Sleek dark and light theme options for comfortable editing',
      'Intuitive dashboard layout with quick-access creation options',
      'Advanced video editor with real-time preview capabilities',
      'Grid-based asset management system for organized content',
      'Clear navigation with contextual sidebar menu',
      'Professional avatar selection interface with preview options',
      'Streamlined video creation workflow with step indicators',
      'Modern gradient-based header design with personalized welcome',
    ],
    keyFeatures: [
      {
        title: 'Advanced realistic AI-powered avatar generation and customization',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Automated script generation and editing',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Real-time video preview system',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Multiple avatar style options', description: 'Detailed service pages', icon: Star },
      {
        title: 'Background customization tools',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Asset management and organization',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Video campaign creation and management',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Dark and light theme support', description: 'Detailed service pages', icon: Star },
      { title: 'Multi-language avatar support', description: 'Detailed service pages', icon: Star },
      {
        title: 'Cloud-based video storage and management',
        description: 'Detailed service pages',
        icon: Star,
      },
    ],
    challenges: [
      {
        title: 'Implementing complex AI video generation pipeline',
        description: 'Detailed service pages',
      },
      {
        title: 'Managing real-time video preview performance',
        description: 'Detailed service pages',
      },
      { title: 'Handling large-scale asset management', description: 'Detailed service pages' },
      {
        title: 'Ensuring seamless video processing and delivery',
        description: 'Detailed service pages',
      },
      {
        title: 'Optimizing avatar rendering quality and speed',
        description: 'Detailed service pages',
      },
    ],
    solutions: [
      {
        title: 'Developed an optimized AI processing pipeline for quick video generation',
        description: 'Detailed service pages',
      },
      {
        title: 'Implemented efficient asset caching and management system',
        description: 'Detailed service pages',
      },
      {
        title: 'Created intuitive UI patterns for complex video editing tasks',
        description: 'Detailed service pages',
      },
      {
        title: 'Built scalable cloud infrastructure for video processing',
        description: 'Detailed service pages',
      },
      {
        title: 'Designed user-friendly interfaces for technical features',
        description: 'Detailed service pages',
      },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    {
      title: 'React/Next.js',
      usage: 'Frontend',
      icon: { Icon: SiReact, props: { fill: '#61DAFB' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    {
      title: 'TensorFlow.js',
      usage: 'AI',
      icon: { Icon: SiTensorflow, props: { fill: '#0052CC' } },
    },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
  ],
  images: { main: deepreel, screenshots: [deepreel, deepreel, deepreel] },
  liveUrl: 'https://www.deepreel.com',
}

export const jawlineFitness: ProjectAnalysisT = {
  title: 'Jawline Fitness',
  shortDescription:
    'A specialized fitness application focused on facial exercise routines, featuring personalized workout plans and progress tracking for jawline enhancement.',
  detailedAnalysis: {
    overview:
      'Jawline Fitness is a sophisticated mobile application designed to help users enhance their facial aesthetics through targeted exercises. The app provides structured workout programs, progress tracking, and customizable settings in an elegant, dark-themed interface.',
    completeOn: 'Jul 2023',
    requirements: [
      'Sleek dark theme with yellow accent colors for optimal visibility',
      'Custom illustrations for exercise demonstrations',
      'Clean and minimalist calendar interface for tracking progress',
      'Intuitive exercise level progression system',
      'Well-organized settings menu with clear categorization',
      'Custom timer interface with wave animation background',
      'Consistent navigation bar with iconic representations',
      'Progress indicators for workout completion',
    ],
    keyFeatures: [
      {
        title: 'Personalized exercise plans based on user age',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Level-based progression system',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Custom exercise timer with rest periods',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Daily workout scheduling and reminders',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Exercise history and progress tracking',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Voice-guided workouts', description: 'Detailed service pages', icon: Star },
      {
        title: 'Customizable exercise settings',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Vibration feedback system', description: 'Detailed service pages', icon: Star },
      {
        title: 'Exercise duration customization',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Progress calendar view', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      {
        title: 'Creating intuitive exercise demonstration visuals',
        description: 'Detailed service pages',
      },
      { title: 'Implementing precise timer functionality', description: 'Detailed service pages' },
      { title: 'Managing multiple reminder schedules', description: 'Detailed service pages' },
      { title: 'Ensuring accurate progress tracking', description: 'Detailed service pages' },
      {
        title: 'Optimizing app performance with animations',
        description: 'Detailed service pages',
      },
    ],
    solutions: [
      {
        title: 'Developed custom exercise illustration system',
        description: 'Detailed service pages',
      },
      {
        title: 'Implemented precise timer with visual feedback',
        description: 'Detailed service pages',
      },
      {
        title: 'Created flexible reminder management system',
        description: 'Detailed service pages',
      },
      {
        title: 'Built comprehensive progress tracking dashboard',
        description: 'Detailed service pages',
      },
      {
        title: 'Optimized animations for smooth performance',
        description: 'Detailed service pages',
      },
      { title: 'Designed intuitive navigation patterns', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    {
      title: 'React Native',
      usage: 'Frontend',
      icon: { Icon: SiReact, props: { fill: '#61DAFB' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Native Device APIs',
      usage: 'APIs',
      icon: { Icon: SiNativescript, props: { fill: '#0052CC' } },
    },
  ],
  images: { main: jawlineMain, screenshots: [jawlineAlt, jawlineAlt, jawlineAlt] },
}

export const codingInterviewPrep: ProjectAnalysisT = {
  title: 'Coding Interview Prep',
  shortDescription:
    'A comprehensive coding interview preparation platform featuring progress tracking, programming language references, algorithm studies, and daily coding challenges.',
  detailedAnalysis: {
    overview:
      'An advanced interview preparation application designed to help developers master coding interviews. The platform combines structured learning paths, progress tracking, and comprehensive reference materials with a focus on algorithms, data structures, and programming fundamentals.',
    completeOn: 'Jul 2023',
    requirements: [
      'Sophisticated dark theme optimized for code reading',
      'Interactive progress tracking graphs with multi-metric visualization',
      'Clean card-based layout for educational content',
      'Intuitive calendar interface for study planning',
      'Language-specific color coding and iconography',
      'Organized reference material hierarchy',
      'Progress indicators with visual achievement markers',
      'Responsive navigation with contextual sections',
    ],
    keyFeatures: [
      {
        title: 'Multi-language programming references',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Algorithm complexity analysis tools',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Daily coding challenges and problems',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Progress tracking and visualization',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Social comparison features', description: 'Detailed service pages', icon: Star },
      {
        title: 'Interview preparation timeline',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Custom study plan creation', description: 'Detailed service pages', icon: Star },
      { title: 'Achievement tracking system', description: 'Detailed service pages', icon: Star },
      {
        title: 'Programming language selection guide',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Comprehensive DSA curriculum', description: 'Detailed service pages', icon: Star },
      {
        title: 'Integration with coding platforms (LeetCode, HackerRank)',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Mathematical visualization tools',
        description: 'Detailed service pages',
        icon: Star,
      },
    ],
    challenges: [
      {
        title: 'Implementing complex progress tracking metrics',
        description: 'Detailed service pages',
      },
      {
        title: 'Creating intuitive visualization for algorithms',
        description: 'Detailed service pages',
      },
      {
        title: 'Managing vast educational content structure',
        description: 'Detailed service pages',
      },
      { title: 'Ensuring accurate difficulty progression', description: 'Detailed service pages' },
      { title: 'Integrating multiple coding platforms', description: 'Detailed service pages' },
      {
        title: 'Maintaining consistent cross-platform experience',
        description: 'Detailed service pages',
      },
    ],
    solutions: [
      {
        title: 'Developed custom progress tracking algorithms',
        description: 'Detailed service pages',
      },
      {
        title: 'Implemented interactive visualization systems',
        description: 'Detailed service pages',
      },
      { title: 'Created modular content management system', description: 'Detailed service pages' },
      {
        title: 'Established consistent cross-platform design system',
        description: 'Detailed service pages',
      },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'Next.js',
      usage: 'Frontend',
      icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Firebase Auth',
      usage: 'Authentication',
      icon: { Icon: SiFirebase, props: { fill: '#0052CC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
  ],
  images: { main: interviewMain, screenshots: [interviewAlt, interviewAlt, interviewAlt] },
}

export const equanimity: ProjectAnalysisT = {
  title: 'Equanimity',
  shortDescription:
    'A modern investment platform focused on sustainable and renewable energy projects, offering users the ability to invest in and manage environmentally conscious funds.',
  detailedAnalysis: {
    overview:
      'Equanimity is a sophisticated investment platform that bridges the gap between investors and sustainable energy projects. The platform provides a clean, professional interface for fund discovery, investment management, and communication with fund managers.',
    completeOn: 'Jul 2023',
    requirements: [
      'Clean, minimalist design with focus on content hierarchy',
      'Professional white-themed interface with blue accents',
      'Card-based fund presentation with visual categorization',
      'Intuitive chat interface for investor communications',
      'Well-structured fund creation forms with clear sections',
      'Responsive layout adapting to different screen sizes',
      'Clear information hierarchy in fund details',
      'Modern authentication interface with brand consistency',
    ],
    keyFeatures: [
      {
        title: 'User authentication and account management',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Fund discovery and browsing', description: 'Detailed service pages', icon: Star },
      {
        title: 'Real-time chat communication system',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Fund creation and management tools',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Investment tracking and monitoring',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Sustainable energy project categorization',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Detailed fund information pages',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Document upload and management',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Investment progress tracking', description: 'Detailed service pages', icon: Star },
      {
        title: 'Multi-step fund creation process',
        description: 'Detailed service pages',
        icon: Star,
      },
    ],
    challenges: [
      {
        title: 'Implementing secure investment transactions',
        description: 'Detailed service pages',
      },
      { title: 'Managing complex fund creation workflows', description: 'Detailed service pages' },
      { title: 'Building real-time communication features', description: 'Detailed service pages' },
      {
        title: 'Ensuring data accuracy for financial information',
        description: 'Detailed service pages',
      },
      { title: 'Creating intuitive investment interfaces', description: 'Detailed service pages' },
      { title: 'Handling document verification processes', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed secure transaction processing system',
        description: 'Detailed service pages',
      },
      { title: 'Created step-by-step fund creation wizard', description: 'Detailed service pages' },
      { title: 'Implemented WebSocket-based chat system', description: 'Detailed service pages' },
      { title: 'Integrated document verification system', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'Next.js',
      usage: 'Frontend',
      icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
  ],
  images: {
    main: equanimityImage,
    screenshots: [equanimityImage, equanimityImage, equanimityImage],
  },
}

export const aylaAI: ProjectAnalysisT = {
  title: 'Ayla AI Assistant',
  shortDescription:
    'An intelligent AI companion app designed to help users manage their daily routines, medications, and appointments through natural conversations and smart reminders.',
  detailedAnalysis: {
    overview:
      'Ayla is a sophisticated AI assistant application that combines conversational AI with practical daily life management. The app features a clean, accessible interface for managing personal information, reminders, and engaging in natural conversations with the AI assistant.',
    completeOn: 'Jul 2023',
    requirements: [
      'Soft, calming color palette with purple accents',
      'Modern chat interface with bubble design',
      'Clear visual hierarchy in settings and reminders',
      'Intuitive toggle controls for features',
      'Minimalist profile management interface',
      'Consistent bottom navigation bar',
      'Smooth onboarding flow with biometric options',
      'Well-organized settings categorization',
    ],
    keyFeatures: [
      {
        title: 'AI-powered conversational interface',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Smart reminder system', description: 'Detailed service pages', icon: Star },
      { title: 'Medication tracking', description: 'Detailed service pages', icon: Star },
      { title: 'Appointment management', description: 'Detailed service pages', icon: Star },
      { title: 'Biometric authentication', description: 'Detailed service pages', icon: Star },
      { title: 'Customizable AI personality', description: 'Detailed service pages', icon: Star },
      { title: 'Location-based services', description: 'Detailed service pages', icon: Star },
      { title: 'Profile customization', description: 'Detailed service pages', icon: Star },
      { title: 'Natural language processing', description: 'Detailed service pages', icon: Star },
      { title: 'Context-aware assistance', description: 'Detailed service pages', icon: Star },
      {
        title: 'Multi-modal interaction options',
        description: 'Detailed service pages',
        icon: Star,
      },
    ],
    challenges: [
      { title: 'Creating natural conversational flows', description: 'Detailed service pages' },
      { title: 'Implementing context-aware responses', description: 'Detailed service pages' },
      { title: 'Managing complex reminder systems', description: 'Detailed service pages' },
      { title: 'Ensuring user privacy and data security', description: 'Detailed service pages' },
      { title: 'Handling offline functionality', description: 'Detailed service pages' },
      { title: 'Optimizing AI response time', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed sophisticated conversation handling system',
        description: 'Detailed service pages',
      },
      { title: 'Implemented context retention mechanism', description: 'Detailed service pages' },
      {
        title: 'Created flexible reminder management system',
        description: 'Detailed service pages',
      },
      { title: 'Built secure local data storage solution', description: 'Detailed service pages' },
      {
        title: 'Designed efficient offline-first architecture',
        description: 'Detailed service pages',
      },
      { title: 'Optimized AI processing pipeline', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'React Native',
      usage: 'Frontend',
      icon: { Icon: SiReact, props: { fill: '#61DAFB' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    {
      title: 'TensorFlow.js',
      usage: 'AI',
      icon: { Icon: SiTensorflow, props: { fill: '#0052CC' } },
    },
    { title: 'SQLite', usage: 'Database', icon: { Icon: SiSqlite, props: { fill: '#0052CC' } } },
  ],
  images: { main: aylaMain, screenshots: [aylaAlt, aylaAlt, aylaAlt] },
}

export const deepReelCanva: ProjectAnalysisT = {
  title: 'DeepReel Canva App',
  shortDescription:
    "A powerful Canva integration that brings DeepReel's AI video generation capabilities directly into the Canva platform, enabling users to create professional AI-powered videos within their design workflow.",
  detailedAnalysis: {
    overview:
      "The DeepReel Canva App is a seamless integration that brings advanced AI video generation capabilities to Canva's platform. It maintains DeepReel's powerful features while adapting to Canva's design ecosystem, allowing users to create professional AI presenter videos directly within their Canva projects.",
    completeOn: 'Jul 2023',
    requirements: [
      "Dark theme interface matching DeepReel's brand identity",
      'Grid-based presenter selection interface',
      'Clear segmentation between video and voice features',
      'Intuitive voice customization controls',
      'Well-organized settings panels',
      'Visual feedback for selection states',
      'Consistent action button styling',
      'Professional presenter preview system',
    ],
    keyFeatures: [
      {
        title: 'AI presenter selection and customization',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Voice generation and customization',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Multiple aspect ratio support', description: 'Detailed service pages', icon: Star },
      {
        title: 'Script translation capabilities',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Voice expressiveness control', description: 'Detailed service pages', icon: Star },
      { title: 'Speaking style adjustment', description: 'Detailed service pages', icon: Star },
      { title: 'Custom voice creation', description: 'Detailed service pages', icon: Star },
      { title: 'Video preview system', description: 'Detailed service pages', icon: Star },
      { title: 'Credit management system', description: 'Detailed service pages', icon: Star },
      { title: 'Feedback collection mechanism', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      {
        title: "Integrating complex AI features within Canva's ecosystem",
        description: 'Detailed service pages',
      },
      { title: 'Managing cross-platform compatibility', description: 'Detailed service pages' },
      { title: 'Optimizing video preview performance', description: 'Detailed service pages' },
      { title: 'Handling different aspect ratios', description: 'Detailed service pages' },
      { title: 'Ensuring seamless user authentication', description: 'Detailed service pages' },
      {
        title: 'Maintaining consistent UI/UX with both platforms',
        description: 'Detailed service pages',
      },
    ],
    solutions: [
      { title: 'Developed custom Canva SDK implementation', description: 'Detailed service pages' },
      {
        title: 'Created efficient video processing pipeline',
        description: 'Detailed service pages',
      },
      { title: 'Implemented adaptive preview system', description: 'Detailed service pages' },
      { title: 'Established consistent design system', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDevelopment],
  techStack: [
    { title: 'React.js', usage: 'Frontend', icon: { Icon: SiReact, props: { fill: '#61DAFB' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Canva SDK',
      usage: 'Integration',
      icon: { Icon: SiCanva, props: { fill: '#0052CC' } },
    },
    {
      title: 'FFmpeg',
      usage: 'Video Processing',
      icon: { Icon: SiFfmpeg, props: { fill: '#0052CC' } },
    },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
  ],
  images: { main: canvaVideo, screenshots: [canvaAudio, canvaAudio, canvaAudio] },
  liveUrl: 'https://www.canva.com/apps/deepreel',
}

export const beaconTutorsAdmin: ProjectAnalysisT = {
  title: 'Beacon Tutors Admin Dashboard',
  shortDescription:
    "A comprehensive administrative platform for Pakistan's largest tutoring network, enabling efficient management of tutoring requests, reviews, announcements, and approvals.",
  detailedAnalysis: {
    overview:
      "The Beacon Tutors Admin Dashboard is a sophisticated management system designed to streamline the operations of Pakistan's premier tutoring service. It provides administrators with powerful tools for managing tutor inquiries, student reviews, announcements, and approval processes.",
    completeOn: 'Jul 2023',
    requirements: [
      'Clean, professional interface with intuitive tab navigation',
      'Organized content sections for different administrative functions',
      'User-friendly forms with clear input fields',
      'Avatar-based review system for personal touch',
      'Well-structured announcement management interface',
      'Consistent design language across all sections',
      'Clear visual hierarchy in data presentation',
      'Responsive layout for various screen sizes',
    ],
    keyFeatures: [
      {
        title: 'Comprehensive inquiry management',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Review system with moderation', description: 'Detailed service pages', icon: Star },
      {
        title: 'Announcement creation and management',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Tutor approval system', description: 'Detailed service pages', icon: Star },
      { title: 'Student feedback management', description: 'Detailed service pages', icon: Star },
      { title: 'User profile management', description: 'Detailed service pages', icon: Star },
      { title: 'Administrative controls', description: 'Detailed service pages', icon: Star },
      { title: 'Data filtering and sorting', description: 'Detailed service pages', icon: Star },
      { title: 'User role management', description: 'Detailed service pages', icon: Star },
      { title: 'Activity tracking system', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Managing complex user relationships', description: 'Detailed service pages' },
      { title: 'Implementing efficient data filtering', description: 'Detailed service pages' },
      { title: 'Ensuring secure access control', description: 'Detailed service pages' },
      { title: 'Handling large volumes of inquiries', description: 'Detailed service pages' },
      { title: 'Creating intuitive moderation tools', description: 'Detailed service pages' },
      { title: 'Maintaining data consistency', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed robust user relationship management system',
        description: 'Detailed service pages',
      },
      {
        title: 'Implemented advanced filtering and sorting mechanisms',
        description: 'Detailed service pages',
      },
      {
        title: 'Created comprehensive role-based access system',
        description: 'Detailed service pages',
      },
      {
        title: 'Built scalable inquiry management workflow',
        description: 'Detailed service pages',
      },
      { title: 'Designed efficient moderation interface', description: 'Detailed service pages' },
      { title: 'Established reliable data synchronization', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    {
      title: 'Next.js',
      usage: 'Frontend',
      icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    {
      title: 'Express.js',
      usage: 'Backend',
      icon: { Icon: SiExpress, props: { fill: '#0052CC' } },
    },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
    {
      title: 'React Query',
      usage: 'Data Fetching',
      icon: { Icon: SiReactquery, props: { fill: '#0052CC' } },
    },
  ],
  images: {
    main: beaconTutorsAdminPanel,
    screenshots: [beaconTutorsAdminPanel, beaconTutorsAdminPanel, beaconTutorsAdminPanel],
  },
}

export const markdownEditor: ProjectAnalysisT = {
  title: 'Markdown Editor',
  shortDescription:
    'A modern, feature-rich markdown editor for mobile devices with support for attachments, tables, and advanced formatting, designed with a focus on productivity and ease of use.',
  detailedAnalysis: {
    overview:
      'The Markdown Editor is a sophisticated mobile application that transforms the markdown editing experience on smartphones. It combines powerful editing capabilities with an intuitive interface, making it easy to create and manage markdown documents with rich features like tables, attachments, and advanced formatting options.',
    completeOn: 'Jul 2023',
    requirements: [
      'Clean, dark-themed interface optimized for mobile',
      'Organized document management with chronological sorting',
      'Intuitive search functionality with visual results',
      'Grid-based attachment gallery view',
      'Smart table creation interface',
      'Clear document organization by time periods',
      'Accessible formatting toolbar',
      'Seamless preview mode integration',
    ],
    keyFeatures: [
      { title: 'Advanced markdown editing', description: 'Detailed service pages', icon: Star },
      { title: 'Table creation and management', description: 'Detailed service pages', icon: Star },
      { title: 'Image and file attachments', description: 'Detailed service pages', icon: Star },
      { title: 'Document organization by date', description: 'Detailed service pages', icon: Star },
      {
        title: 'Full-text search functionality',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Tags and checklist support', description: 'Detailed service pages', icon: Star },
      { title: 'Rich text formatting options', description: 'Detailed service pages', icon: Star },
      { title: 'Document preview mode', description: 'Detailed service pages', icon: Star },
      { title: 'Auto-save functionality', description: 'Detailed service pages', icon: Star },
      { title: 'Custom formatting toolbar', description: 'Detailed service pages', icon: Star },
      { title: 'Multiple document support', description: 'Detailed service pages', icon: Star },
      { title: 'Export capabilities', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      {
        title: 'Implementing complex table creation interface',
        description: 'Detailed service pages',
      },
      { title: 'Managing large attachment libraries', description: 'Detailed service pages' },
      { title: 'Ensuring smooth preview rendering', description: 'Detailed service pages' },
      { title: 'Optimizing search performance', description: 'Detailed service pages' },
      { title: 'Handling different markdown extensions', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed custom table creation interface', description: 'Detailed service pages' },
      {
        title: 'Implemented efficient attachment management',
        description: 'Detailed service pages',
      },
      { title: 'Created optimized markdown preview system', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'React Native',
      usage: 'Frontend',
      icon: { Icon: SiReact, props: { fill: '#61DAFB' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'SQLite', usage: 'Database', icon: { Icon: SiSqlite, props: { fill: '#0052CC' } } },
  ],
  images: { main: markdownMain, screenshots: [markdownAlt, markdownAlt, markdownAlt] },
}

export const menuHub: ProjectAnalysisT = {
  title: 'MenuHub',
  shortDescription:
    'A comprehensive restaurant digitization platform that helps business owners modernize their operations with digital menus, streamlined ordering, and enhanced customer experience.',
  detailedAnalysis: {
    overview:
      'MenuHub is an innovative platform designed to transform traditional restaurants into digital-first businesses. It provides a complete solution for menu digitization, order management, and customer engagement, helping restaurants adapt to modern dining expectations.',
    completeOn: 'Jul 2023',
    requirements: [
      'Vibrant orange and white color scheme reflecting food industry',
      'Clean, card-based design for restaurant listings',
      'High-quality food photography integration',
      'Clear pricing structure presentation',
      'Intuitive navigation system',
      'Responsive design across devices',
      'Professional landing page layout',
      'User-friendly registration interface',
    ],
    keyFeatures: [
      {
        title: 'Digital menu creation and management',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Restaurant profile customization',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Order management system', description: 'Detailed service pages', icon: Star },
      { title: 'Customer engagement tools', description: 'Detailed service pages', icon: Star },
      { title: 'Business analytics dashboard', description: 'Detailed service pages', icon: Star },
      { title: 'Multi-location support', description: 'Detailed service pages', icon: Star },
      { title: 'Menu item categorization', description: 'Detailed service pages', icon: Star },
      { title: 'Photo gallery management', description: 'Detailed service pages', icon: Star },
      { title: 'Pricing tier options', description: 'Detailed service pages', icon: Star },
      { title: 'Restaurant discovery platform', description: 'Detailed service pages', icon: Star },
      { title: 'Business owner dashboard', description: 'Detailed service pages', icon: Star },
      { title: 'Customer feedback system', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      {
        title: 'Creating intuitive menu digitization process',
        description: 'Detailed service pages',
      },
      { title: 'Managing complex restaurant data', description: 'Detailed service pages' },
      { title: 'Implementing efficient order system', description: 'Detailed service pages' },
      { title: 'Ensuring scalable platform architecture', description: 'Detailed service pages' },
      { title: 'Handling multiple pricing tiers', description: 'Detailed service pages' },
      { title: 'Maintaining consistent user experience', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed streamlined menu creation workflow',
        description: 'Detailed service pages',
      },
      {
        title: 'Built robust restaurant data management system',
        description: 'Detailed service pages',
      },
      { title: 'Implemented real-time order tracking', description: 'Detailed service pages' },
      { title: 'Created scalable cloud infrastructure', description: 'Detailed service pages' },
      { title: 'Designed flexible pricing system', description: 'Detailed service pages' },
      { title: 'Established consistent design patterns', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'Next.js',
      usage: 'Frontend',
      icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    {
      title: 'Express.js',
      usage: 'Backend',
      icon: { Icon: SiExpress, props: { fill: '#0052CC' } },
    },
    { title: 'Stripe', usage: 'Payment', icon: { Icon: SiStripe, props: { fill: '#0052CC' } } },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
  ],
  images: { main: menuMain, screenshots: [menuAlt, menuAlt, menuAlt] },
}

export const nutrigram: ProjectAnalysisT = {
  title: 'Nutrigram',
  shortDescription:
    'A modern nutrition tracking and meal analysis app that helps users monitor their caloric intake, compete with friends, and maintain healthy eating habits through an engaging interface.',
  detailedAnalysis: {
    overview:
      'Nutrigram is a sophisticated nutrition tracking application that combines precise food logging with social features. The app offers an intuitive interface for tracking meals, analyzing nutritional content, and engaging with friends through competitive features, all while maintaining a focus on health and wellness.',
    completeOn: 'Jul 2023',
    requirements: [
      'Bold pink color scheme creating engaging visual identity',
      'Clean, minimalist interface with clear hierarchy',
      'Intuitive circular progress indicators',
      'Modern onboarding with illustrated characters',
      'Easy-to-use height input interface',
      'Detailed food logging screens',
      'Social leaderboard with friend rankings',
      'Comprehensive nutritional breakdown displays',
    ],
    keyFeatures: [
      {
        title: 'Calorie tracking and monitoring',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Detailed nutritional analysis', description: 'Detailed service pages', icon: Star },
      { title: 'Social competition system', description: 'Detailed service pages', icon: Star },
      { title: 'Food photo logging', description: 'Detailed service pages', icon: Star },
      { title: 'Progress history tracking', description: 'Detailed service pages', icon: Star },
      { title: 'Friend leaderboard', description: 'Detailed service pages', icon: Star },
      { title: 'Customizable serving sizes', description: 'Detailed service pages', icon: Star },
      { title: 'Comprehensive food database', description: 'Detailed service pages', icon: Star },
      { title: 'Visual progress indicators', description: 'Detailed service pages', icon: Star },
      { title: 'Meal history logging', description: 'Detailed service pages', icon: Star },
      { title: 'Nutritional goals tracking', description: 'Detailed service pages', icon: Star },
      {
        title: 'Multi-metric health monitoring',
        description: 'Detailed service pages',
        icon: Star,
      },
    ],
    challenges: [
      { title: 'Creating intuitive food logging process', description: 'Detailed service pages' },
      {
        title: 'Implementing accurate nutritional calculations',
        description: 'Detailed service pages',
      },
      { title: 'Managing real-time social features', description: 'Detailed service pages' },
      { title: 'Ensuring data accuracy and consistency', description: 'Detailed service pages' },
      { title: 'Building engaging competitive features', description: 'Detailed service pages' },
      { title: 'Handling offline functionality', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed streamlined food logging interface',
        description: 'Detailed service pages',
      },
      {
        title: 'Implemented comprehensive nutritional database',
        description: 'Detailed service pages',
      },
      { title: 'Created efficient real-time social system', description: 'Detailed service pages' },
      { title: 'Built robust data validation system', description: 'Detailed service pages' },
      { title: 'Designed engaging competition mechanics', description: 'Detailed service pages' },
      { title: 'Implemented offline-first architecture', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'React Native',
      usage: 'Frontend',
      icon: { Icon: SiReact, props: { fill: '#61DAFB' } },
    },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Firebase',
      usage: 'Database',
      icon: { Icon: SiFirebase, props: { fill: '#0052CC' } },
    },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    { title: 'SQLite', usage: 'Database', icon: { Icon: SiSqlite, props: { fill: '#0052CC' } } },
  ],
  images: { main: nutrigramMain, screenshots: [nutrigramAlt, nutrigramAlt, nutrigramAlt] },
}

export const athletonPlus: ProjectAnalysisT = {
  title: 'Athleton+',
  shortDescription:
    'A comprehensive fitness training management platform that connects trainers with clients, featuring workout scheduling, progress tracking, and detailed session management.',
  detailedAnalysis: {
    overview:
      'Athleton+ is a sophisticated fitness platform designed to streamline the relationship between personal trainers and their clients. The platform offers comprehensive tools for session scheduling, workout management, and progress tracking, all within a clean and intuitive interface.',
    completeOn: 'Jul 2023',
    requirements: [
      'Modern interface with blue accent colors',
      'Clean calendar view for session management',
      'Intuitive appointment scheduling interface',
      'Profile cards with trainer/client information',
      'Well-organized settings and configuration panels',
      'Clear workout progress visualization',
      'Mobile-responsive design for all screens',
      'Consistent navigation and action buttons',
    ],
    keyFeatures: [
      {
        title: 'Advanced appointment scheduling',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Trainer-client matching system',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Workout progress tracking', description: 'Detailed service pages', icon: Star },
      { title: 'Session calendar management', description: 'Detailed service pages', icon: Star },
      { title: 'Profile customization', description: 'Detailed service pages', icon: Star },
      { title: 'Settings management', description: 'Detailed service pages', icon: Star },
      { title: 'Progress reporting', description: 'Detailed service pages', icon: Star },
      { title: 'Mobile app integration', description: 'Detailed service pages', icon: Star },
      { title: 'Client management tools', description: 'Detailed service pages', icon: Star },
      { title: 'Workout history tracking', description: 'Detailed service pages', icon: Star },
      { title: 'Payment processing', description: 'Detailed service pages', icon: Star },
      { title: 'Notification system', description: 'Detailed service pages', icon: Star },
    ],

    challenges: [
      { title: 'Managing complex scheduling requirements', description: 'Detailed service pages' },
      { title: 'Implementing real-time updates', description: 'Detailed service pages' },
      { title: 'Ensuring cross-platform consistency', description: 'Detailed service pages' },
      { title: 'Building efficient notification system', description: 'Detailed service pages' },
      { title: 'Handling timezone differences', description: 'Detailed service pages' },
      { title: 'Creating intuitive booking interface', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed robust scheduling algorithm', description: 'Detailed service pages' },
      {
        title: 'Implemented WebSocket for real-time features',
        description: 'Detailed service pages',
      },
      { title: 'Created consistent cross-platform design', description: 'Detailed service pages' },
      {
        title: 'Built reliable notification delivery system',
        description: 'Detailed service pages',
      },
      { title: 'Integrated timezone management', description: 'Detailed service pages' },
      { title: 'Designed user-friendly booking flow', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'React Native',
      usage: 'Frontend',
      icon: { Icon: SiReact, props: { fill: '#61DAFB' } },
    },
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    {
      title: 'Firebase',
      usage: 'Database',
      icon: { Icon: SiFirebase, props: { fill: '#0052CC' } },
    },
    { title: 'Stripe', usage: 'Payment', icon: { Icon: SiStripe, props: { fill: '#0052CC' } } },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
  ],
  images: { main: athleton, screenshots: [athleton, athleton, athleton] },
}

export const beaconTutorsCRM: ProjectAnalysisT = {
  title: 'Beacon Tutors CRM',
  shortDescription:
    'A specialized CRM system for managing tutoring inquiries, lead processing, and client relationships, featuring automated workflows and comprehensive inquiry tracking.',
  detailedAnalysis: {
    overview:
      'The Beacon Tutors CRM is a sophisticated customer relationship management system specifically designed for tutoring services. It streamlines the process of handling student inquiries, managing leads, and processing applications through an intuitive interface with automated workflows.',
    completeOn: 'Jul 2023',
    requirements: [
      'Clean, professional dark-themed interface',
      'Organized sidebar navigation with clear categories',
      'Intuitive inquiry form with smart field validation',
      'Grid-based inquiry management view',
      'Detailed inquiry inspection modal',
      'Status-based inquiry organization',
      'Clear processing pipeline visualization',
      'Consistent action button placement',
    ],
    keyFeatures: [
      {
        title: 'Comprehensive inquiry management',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Lead processing pipeline', description: 'Detailed service pages', icon: Star },
      { title: 'Demo session tracking', description: 'Detailed service pages', icon: Star },
      {
        title: 'Student information management',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Location-based inquiry sorting',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Contact information tracking', description: 'Detailed service pages', icon: Star },
      { title: 'Automated workflow management', description: 'Detailed service pages', icon: Star },
      { title: 'Status tracking system', description: 'Detailed service pages', icon: Star },
      { title: 'Multi-step processing', description: 'Detailed service pages', icon: Star },
      { title: 'Inquiry categorization', description: 'Detailed service pages', icon: Star },
      { title: 'Detailed reporting', description: 'Detailed service pages', icon: Star },
      { title: 'User role management', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Managing complex inquiry workflows', description: 'Detailed service pages' },
      { title: 'Implementing efficient data organization', description: 'Detailed service pages' },
      { title: 'Creating intuitive status tracking', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed structured workflow pipeline', description: 'Detailed service pages' },
      { title: 'Created organized data architecture', description: 'Detailed service pages' },
      { title: 'Implemented clear status indicators', description: 'Detailed service pages' },
      { title: 'Built flexible inquiry type system', description: 'Detailed service pages' },
      { title: 'Established data validation rules', description: 'Detailed service pages' },
      { title: 'Designed efficient filtering mechanism', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    {
      title: 'Express.js',
      usage: 'Backend',
      icon: { Icon: SiExpress, props: { fill: '#0052CC' } },
    },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
    {
      title: 'React Query',
      usage: 'Data Fetching',
      icon: { Icon: SiReactquery, props: { fill: '#0052CC' } },
    },
  ],
  images: { main: beaconTutorCRM, screenshots: [beaconTutorCRM, beaconTutorCRM, beaconTutorCRM] },
}

export const inventrios: ProjectAnalysisT = {
  title: 'Inventrios',
  shortDescription:
    'A modern technology company website showcasing various digital services including web development, mobile apps, machine learning, and design, featuring an elegant dark theme with interactive elements.',
  detailedAnalysis: {
    overview:
      "Inventrios is a sophisticated technology company website that effectively communicates its diverse service offerings through a modern, dark-themed interface. The site combines elegant design with clear service presentations, creating an engaging user experience that highlights the company's technical expertise.",
    completeOn: 'Jul 2023',
    requirements: [
      'Elegant dark theme with blue accents',
      'Custom illustrated service icons',
      'Modern typography with clear hierarchy',
      'Animated section transitions',
      'Interactive service cards',
      'Consistent brand elements',
      'Clean project showcase layout',
      'Professional testimonial presentation',
    ],
    keyFeatures: [
      { title: 'Service showcase cards', description: 'Detailed service pages', icon: Star },
      { title: 'Project portfolio section', description: 'Detailed service pages', icon: Star },
      { title: 'Testimonials integration', description: 'Detailed service pages', icon: Star },
      { title: 'Contact form system', description: 'Detailed service pages', icon: Star },
      { title: 'Animated transitions', description: 'Detailed service pages', icon: Star },
      { title: 'Custom illustrations', description: 'Detailed service pages', icon: Star },
      { title: 'Responsive design', description: 'Detailed service pages', icon: Star },
      { title: 'Case study presentations', description: 'Detailed service pages', icon: Star },
      { title: 'Service descriptions', description: 'Detailed service pages', icon: Star },
      { title: 'Team section', description: 'Detailed service pages', icon: Star },
      { title: 'Project management overview', description: 'Detailed service pages', icon: Star },
      { title: 'Technology stack display', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Creating cohesive dark theme design', description: 'Detailed service pages' },
      { title: 'Implementing smooth animations', description: 'Detailed service pages' },
      { title: 'Organizing diverse service offerings', description: 'Detailed service pages' },
      { title: 'Ensuring responsive layouts', description: 'Detailed service pages' },
      { title: 'Optimizing performance', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed consistent color system', description: 'Detailed service pages' },
      { title: 'Built custom animation framework', description: 'Detailed service pages' },
      { title: 'Created organized service structure', description: 'Detailed service pages' },
      { title: 'Implemented flexible grid system', description: 'Detailed service pages' },
      { title: 'Optimized asset delivery', description: 'Detailed service pages' },
      { title: 'Established clear visual patterns', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Framer Motion',
      usage: 'Animation',
      icon: { Icon: SiFramer, props: { fill: '#0052CC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
    { title: 'Vercel', usage: 'Deployment', icon: { Icon: SiVercel, props: { fill: '#0052CC' } } },
    { title: 'SendGrid', usage: 'Email', icon: { Icon: SiSendgrid, props: { fill: '#0052CC' } } },
  ],
  images: {
    main: inventriosImage,
    screenshots: [inventriosImage, inventriosImage, inventriosImage],
  },
}

export const superDuperStudio: ProjectAnalysisT = {
  title: 'Super Duper Studio',
  shortDescription:
    "A vibrant and engaging website for a children's creative studio that offers art, design, and exploration activities, featuring playful design elements and comprehensive program information.",
  detailedAnalysis: {
    overview:
      "Super Duper Studio's website perfectly captures the spirit of childhood creativity and exploration. The platform combines playful design with functional content organization to showcase their creative programs for children, featuring a warm and inviting aesthetic that appeals to both parents and kids.",
    completeOn: 'Jul 2023',
    requirements: [
      'Cheerful color palette with coral, mint green, and pink accents',
      'Playful typography and engaging headings',
      "High-quality photography of children's activities",
      'Whimsical decorative elements and illustrations',
      'Clean content layout with bubble-shaped sections',
      'Engaging testimonial presentations',
      'Dynamic image galleries',
      'Mobile-responsive design with consistent styling',
    ],
    keyFeatures: [
      { title: 'Program showcase sections', description: 'Detailed service pages', icon: Star },
      { title: 'Interactive service cards', description: 'Detailed service pages', icon: Star },
      { title: 'Testimonial integration', description: 'Detailed service pages', icon: Star },
      { title: 'Newsletter subscription', description: 'Detailed service pages', icon: Star },
      { title: 'Social media integration', description: 'Detailed service pages', icon: Star },
      { title: 'Program pricing tables', description: 'Detailed service pages', icon: Star },
      { title: 'Photo galleries', description: 'Detailed service pages', icon: Star },
      { title: 'Contact form system', description: 'Detailed service pages', icon: Star },
      { title: 'Event calendar', description: 'Detailed service pages', icon: Star },
      { title: 'Location information', description: 'Detailed service pages', icon: Star },
      { title: 'Team member profiles', description: 'Detailed service pages', icon: Star },
      { title: 'Service package details', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      {
        title: 'Balancing playful design with functionality',
        description: 'Detailed service pages',
      },
      { title: 'Creating engaging content presentation', description: 'Detailed service pages' },
      { title: 'Implementing responsive layouts', description: 'Detailed service pages' },
      { title: 'Managing rich media content', description: 'Detailed service pages' },
      { title: 'Ensuring fast load times', description: 'Detailed service pages' },
      { title: 'Maintaining consistent branding', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed modular design system', description: 'Detailed service pages' },
      { title: 'Created engaging content blocks', description: 'Detailed service pages' },
      { title: 'Implemented flexible responsive design', description: 'Detailed service pages' },
      { title: 'Optimized media delivery', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
    {
      title: 'Framer Motion',
      usage: 'Animation',
      icon: { Icon: SiFramer, props: { fill: '#0052CC' } },
    },
    {
      title: 'React Hook Form',
      usage: 'Form',
      icon: { Icon: SiReacthookform, props: { fill: '#0052CC' } },
    },
    {
      title: 'Cloudinary',
      usage: 'Media',
      icon: { Icon: SiCloudinary, props: { fill: '#0052CC' } },
    },
    { title: 'Vercel', usage: 'Deployment', icon: { Icon: SiVercel, props: { fill: '#0052CC' } } },
    { title: 'SendGrid', usage: 'Email', icon: { Icon: SiSendgrid, props: { fill: '#0052CC' } } },
  ],
  images: { main: superDuper, screenshots: [superDuper, superDuper, superDuper] },
}

export const deepReelWebsite: ProjectAnalysisT = {
  title: 'DeepReel Website',
  shortDescription:
    'A modern landing page for an AI-powered video creation platform, featuring sleek design, comprehensive feature presentation, and clear value propositions for personalized video content creation.',
  detailedAnalysis: {
    overview:
      "The DeepReel website effectively showcases the platform's AI video creation capabilities through a sophisticated dark-themed design. It presents complex technical features in an accessible way, highlighting the platform's ability to create personalized videos at scale with AI avatars.",
    completeOn: 'Jul 2023',
    requirements: [
      'Elegant dark theme with vibrant pink accents',
      'Clean feature presentation cards',
      'High-quality AI avatar demonstrations',
      'Clear pricing tier structure',
      'Consistent iconography throughout',
      'Professional typography hierarchy',
      'Strategic whitespace utilization',
      'Engaging call-to-action placement',
    ],
    keyFeatures: [
      { title: 'AI avatar showcase', description: 'Detailed service pages', icon: Star },
      { title: 'Language support display', description: 'Detailed service pages', icon: Star },
      { title: 'Pricing tier comparison', description: 'Detailed service pages', icon: Star },
      { title: 'Feature benefit cards', description: 'Detailed service pages', icon: Star },
      { title: 'Ethics and safety section', description: 'Detailed service pages', icon: Star },
      { title: 'Integration highlights', description: 'Detailed service pages', icon: Star },
      { title: 'Video campaign builder', description: 'Detailed service pages', icon: Star },
      { title: 'Testimonials section', description: 'Detailed service pages', icon: Star },
      { title: 'Technology partnerships', description: 'Detailed service pages', icon: Star },
      { title: 'Platform capabilities', description: 'Detailed service pages', icon: Star },
      { title: 'Custom solutions', description: 'Detailed service pages', icon: Star },
      { title: 'Enterprise features', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Communicating complex AI features', description: 'Detailed service pages' },
      { title: 'Demonstrating video capabilities', description: 'Detailed service pages' },
      {
        title: 'Maintaining performance with video content',
        description: 'Detailed service pages',
      },
      { title: 'Creating clear pricing structure', description: 'Detailed service pages' },
      { title: 'Balancing information density', description: 'Detailed service pages' },
      { title: 'Ensuring responsive video playback', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed clear feature presentations', description: 'Detailed service pages' },
      { title: 'Created intuitive product demonstrations', description: 'Detailed service pages' },
      { title: 'Implemented professional design system', description: 'Detailed service pages' },
      { title: 'Structured information hierarchy', description: 'Detailed service pages' },
      { title: 'Built interactive feature showcases', description: 'Detailed service pages' },
      { title: 'Established consistent content strategy', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
    {
      title: 'Framer Motion',
      usage: 'Animation',
      icon: { Icon: SiFramer, props: { fill: '#0052CC' } },
    },
    { title: 'Stripe', usage: 'Payment', icon: { Icon: SiStripe, props: { fill: '#0052CC' } } },
    { title: 'Vercel', usage: 'Deployment', icon: { Icon: SiVercel, props: { fill: '#0052CC' } } },
    {
      title: 'Google Analytics',
      usage: 'Analytics',
      icon: { Icon: SiGoogleanalytics, props: { fill: '#0052CC' } },
    },
  ],
  images: { main: deepreel, screenshots: [deepreel, deepreel, deepreel] },
  liveUrl: 'https://www.deepreel.com',
}

export const alfabolt: ProjectAnalysisT = {
  title: 'Alfabolt Website',
  liveUrl: 'https://www.alfabolt.com',
  shortDescription:
    'A modern software development company website showcasing custom software solutions, mobile app development, and industry expertise through detailed case studies and service pages.',
  detailedAnalysis: {
    overview:
      'The Alfabolt website presents a sophisticated digital presence that effectively communicates complex technical services through a modern, user-centric design. The platform features comprehensive case studies, detailed service pages, and industry-specific solutions, all wrapped in a professional dark theme.',
    completeOn: 'Feb 2025',
    requirements: [
      'Complete redesign of the website',
      'Sales focused layout and UX',
      'High performance without compromising on visuals',
      'Fully responsive and adaptive design',
      'Modern and professional design',
      'SEO friendly layout and design',
      'Accessibility focused design',
      'Adherence to brand guidelines',
    ],
    keyFeatures: [
      {
        title: 'High Performance Website Redesign',
        description:
          'Utilised Next.js built in optimizations along with effective design choices maximise efficiency.',
        icon: Gauge,
      },
      {
        title: 'Responsive Design',
        description:
          "Utopia's Fluid typography and spacing was used from day one to cut down boilerplate and design overhead.",
        icon: Proportions,
      },
      {
        title: 'Image Optimization',
        description:
          'Next.js static imports with dynamic placeholders to cut down on load times, along with properly sized images, in .webp and .avif formats. ',
        icon: Images,
      },
      {
        title: 'Accessible Design',
        description:
          'Extensive testing, contrast checking, and accessibility audits were conducted to ensure the website is fully accessible.',
        icon: Glasses,
      },
      {
        title: 'SEO Optimization',
        description:
          'Next.js server side rendering, with intelligent design choices, to ensure the website is fully optimised for search engines.',
        icon: SearchCheck,
      },
      {
        title: 'Modern and Professional',
        description:
          'Design choices were tailored around professionalism and modernity, resulting in a clean and professional look.',
        icon: Sparkles,
      },
      {
        title: 'Sleek Icon Design',
        description:
          "Custom icons were created to go hand-in-hand with the company's branding, adding to the overall professional look.",
        icon: SquareRoundCorner,
      },
      {
        title: 'Interactive Client testimonials',
        description:
          'Lightweight Embla Carousel was used to showcase client testimonials, with reduced overhead and high performance.',
        icon: UsersRound,
      },
      {
        title: 'Services and Solutions',
        description:
          "Individual services and sub-services pages were created to showcase the company's offerings, with a focus on clarity and ease of understanding.",
        icon: HeartHandshake,
      },
      {
        title: 'Case Studies',
        description:
          'Previous work of the company was showcased effectively through case study pages, with 3D mockups of the products they worked on.',
        icon: FolderDot,
      },
      {
        title: 'Value-based pricing section',
        description:
          'Focused pricing plans for users of various needs were created, with the ability to conveniently compare between plans.',
        icon: CreditCard,
      },
      {
        title: 'Industry-specific solutions',
        description:
          "Individual industry pages were created to showcase the company's expertise in specific domains.",
        icon: Factory,
      },
    ],
    challenges: [
      {
        title: 'Design System',
        description:
          'Developing a consistent and scalable design system that can be easily maintained and updated.',
      },
      {
        title: 'Sales focused design',
        description:
          'Designing the website to convert users into customers, with a focus on sales and conversion.',
      },
      {
        title: 'Responsive design',
        description: 'Ensuring the website is responsive and fully functional on all devices.',
      },
      {
        title: 'Performance optimization',
        description: 'Enforcing a performance-first approach, with a low LCP and CLS.',
      },
      {
        title: 'SEO Optimization',
        description: 'Website should rank well on search engines, for organic lead generation.',
      },
      {
        title: 'Accessibility',
        description:
          'Ensuring the website is fully accessible to all users, with a focus on accessibility and usability.',
      },
    ],
    solutions: [
      {
        title: 'Component based design',
        description:
          'Created a modular component system that focuses on reusability and scalability.',
      },
      {
        title: 'Market Research',
        description:
          'Conducted thorough market research to better tailor the website for conversions.',
      },
      {
        title: 'Fluid Typography and Spacing',
        description:
          "Utopia's Fluid typography and spacing was used from day one to cut down boilerplate and design overhead.",
      },
      {
        title: 'Performance optimization',
        description: 'Enforcing a performance-first approach, with a low LCP and CLS.',
      },
      {
        title: 'SEO optimization',
        description:
          'Next.js server side rendering, with intelligent design choices, to ensure the website is fully optimised for search engines.',
      },
      { title: 'Contrast and Touch Area Testing', description: 'Designed scalable page templates' },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    { title: 'Next.js', usage: 'Front-End Framework', icon: techStackIcons.next },
    { title: 'TypeScript', usage: 'Programming Language', icon: techStackIcons.typescript },
    { title: 'Vercel', usage: 'Deployment Platform', icon: techStackIcons.vercel },
    { title: 'Google Analytics', usage: 'Analytics Tool', icon: techStackIcons.googleAnalytics },
    { title: 'Figma', usage: 'UI/UX Design', icon: techStackIcons.figma },
    {
      title: 'Adobe Illustrator',
      usage: 'Icon & Illustration Design',
      icon: techStackIcons.illustrator,
    },
    {
      title: 'Adobe Photoshop',
      usage: 'Image Resizing & Optimization',
      icon: techStackIcons.photoshop,
    },
    { title: 'Blender', usage: '3D Mockups & Rendering', icon: techStackIcons.blender },
  ],
  images: {
    main: alfaboltImage,
    screenshots: [
      alfaboltCaseStudy,
      alfaboltPricing,
      alfaboltLanding,
      alfaboltService,
      alfaboltTechnology,
    ],
  },
}

export const tutorania: ProjectAnalysisT = {
  title: 'Tutorania',
  shortDescription:
    'A comprehensive tutoring management platform featuring team organization, analytics tracking, and detailed reporting tools for educational institutions and tutoring businesses.',
  detailedAnalysis: {
    overview:
      'Tutorania is a sophisticated platform designed to streamline tutoring operations through advanced team management, performance tracking, and analytical tools. The system provides detailed insights into tutoring activities while maintaining an organized and efficient workflow.',
    completeOn: 'Jul 2023',
    requirements: [
      'Clean, minimalist interface with navy blue accents',
      'Organized team member listings with profile images',
      'Comprehensive analytics dashboards with data visualization',
      'Detailed activity logs and reports',
      'Clear navigation structure with intuitive sections',
      'Well-structured form layouts for data entry',
      'Interactive data tables with sorting capabilities',
      'Responsive design adapting to different screen sizes',
    ],
    keyFeatures: [
      { title: 'Team member management', description: 'Detailed service pages', icon: Star },
      {
        title: 'Performance analytics tracking',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Detailed activity reporting', description: 'Detailed service pages', icon: Star },
      { title: 'Member profile management', description: 'Detailed service pages', icon: Star },
      { title: 'Data visualization tools', description: 'Detailed service pages', icon: Star },
      { title: 'Custom report generation', description: 'Detailed service pages', icon: Star },
      { title: 'Team organization tools', description: 'Detailed service pages', icon: Star },
      { title: 'Progress tracking metrics', description: 'Detailed service pages', icon: Star },
      { title: 'Historical data analysis', description: 'Detailed service pages', icon: Star },
      { title: 'User role management', description: 'Detailed service pages', icon: Star },
      {
        title: 'Interactive analytics dashboard',
        description: 'Detailed service pages',
        icon: Star,
      },
      {
        title: 'Comprehensive search functionality',
        description: 'Detailed service pages',
        icon: Star,
      },
    ],
    challenges: [
      { title: 'Managing complex team hierarchies', description: 'Detailed service pages' },
      { title: 'Implementing efficient data visualization', description: 'Detailed service pages' },
      { title: 'Handling large datasets for analytics', description: 'Detailed service pages' },
      { title: 'Creating intuitive reporting tools', description: 'Detailed service pages' },
      { title: 'Ensuring data accuracy and consistency', description: 'Detailed service pages' },
      { title: 'Building scalable search functionality', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed flexible team management system', description: 'Detailed service pages' },
      { title: 'Implemented optimized charting solutions', description: 'Detailed service pages' },
      {
        title: 'Created efficient data processing pipeline',
        description: 'Detailed service pages',
      },
      { title: 'Built user-friendly report generator', description: 'Detailed service pages' },
      { title: 'Established robust data validation', description: 'Detailed service pages' },
      { title: 'Designed scalable search architecture', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign, WorkCategories.productDevelopment],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'React Query',
      usage: 'Data Fetching',
      icon: { Icon: SiReactquery, props: { fill: '#0052CC' } },
    },
    {
      title: 'Express.js',
      usage: 'Backend',
      icon: { Icon: SiExpress, props: { fill: '#0052CC' } },
    },
  ],
  images: { main: tutoraniaImage, screenshots: [tutoraniaImage, tutoraniaImage, tutoraniaImage] },
}

export const rivannaProduct: ProjectAnalysisT = {
  title: 'Rivanna',
  shortDescription:
    'A sophisticated legal document analysis platform featuring semantic search, document comparison, and market norm analysis tools for legal professionals.',
  detailedAnalysis: {
    overview:
      'Rivanna is an advanced legal technology platform that transforms how legal professionals analyze and compare documents. The system combines powerful semantic search capabilities with detailed market analysis tools, making complex document analysis intuitive and efficient.',
    completeOn: 'Jul 2023',
    requirements: [
      'Professional dark theme with clean typography',
      'Organized document search interface with clear filters',
      'Detailed document comparison views',
      'Market norm percentage visualizations',
      'Intuitive document navigation system',
      'Clear search result presentation',
      'Well-structured document previews',
      'Consistent action button placement',
    ],
    keyFeatures: [
      { title: 'Advanced semantic search', description: 'Detailed service pages', icon: Star },
      { title: 'Document comparison tools', description: 'Detailed service pages', icon: Star },
      { title: 'Market norm analysis', description: 'Detailed service pages', icon: Star },
      {
        title: 'Precedent search functionality',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Cross-reference capabilities', description: 'Detailed service pages', icon: Star },
      { title: 'Document preview system', description: 'Detailed service pages', icon: Star },
      { title: 'Search result filtering', description: 'Detailed service pages', icon: Star },
      { title: 'Relevancy scoring', description: 'Detailed service pages', icon: Star },
      { title: 'Document categorization', description: 'Detailed service pages', icon: Star },
      { title: 'Version tracking', description: 'Detailed service pages', icon: Star },
      { title: 'Statistical analysis tools', description: 'Detailed service pages', icon: Star },
      { title: 'Export functionality', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Implementing complex semantic search', description: 'Detailed service pages' },
      { title: 'Managing large document datasets', description: 'Detailed service pages' },
      { title: 'Creating intuitive comparison views', description: 'Detailed service pages' },
      { title: 'Ensuring search accuracy', description: 'Detailed service pages' },
      { title: 'Handling document versioning', description: 'Detailed service pages' },
      { title: 'Optimizing search performance', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed advanced search algorithms', description: 'Detailed service pages' },
      { title: 'Created efficient document storage system', description: 'Detailed service pages' },
      { title: 'Built intuitive comparison interface', description: 'Detailed service pages' },
      { title: 'Implemented precise search matching', description: 'Detailed service pages' },
      { title: 'Designed robust version control', description: 'Detailed service pages' },
      { title: 'Optimized search response time', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    {
      title: 'Elasticsearch',
      usage: 'Database',
      icon: { Icon: SiElasticsearch, props: { fill: '#0052CC' } },
    },
    {
      title: 'PostgreSQL',
      usage: 'Database',
      icon: { Icon: SiPostgresql, props: { fill: '#0052CC' } },
    },
    { title: 'Redis', usage: 'Database', icon: { Icon: SiRedis, props: { fill: '#0052CC' } } },
    {
      title: 'React Query',
      usage: 'Data Fetching',
      icon: { Icon: SiReactquery, props: { fill: '#0052CC' } },
    },
  ],
  images: { main: rivannaImage, screenshots: [rivannaImage, rivannaImage, rivannaImage] },
}

export const rivanna: ProjectAnalysisT = {
  title: 'Rivanna Website',
  shortDescription:
    'A professional legal technology company website showcasing advanced document analysis and market intelligence tools through a clean, modern interface focused on legal professionals.',
  detailedAnalysis: {
    overview:
      "The Rivanna website effectively communicates the platform's sophisticated legal technology solutions through a clean, professional design. It presents complex legal document analysis tools and market intelligence features in an accessible way while maintaining a strong focus on legal industry expertise.",
    completeOn: 'Jul 2023',
    requirements: [
      'Professional dark theme with monochromatic color scheme',
      'Clean typography emphasizing readability',
      'Interactive feature demonstrations',
      'Clear pricing structure presentation',
      'Organized product capabilities section',
      'Consistent navigation elements',
      'Well-structured content hierarchy',
      'Strategic whitespace utilization',
    ],
    keyFeatures: [
      { title: 'Product feature showcase', description: 'Detailed service pages', icon: Star },
      { title: 'Interactive demonstrations', description: 'Detailed service pages', icon: Star },
      { title: 'Pricing plan comparison', description: 'Detailed service pages', icon: Star },
      { title: 'Documentation access', description: 'Detailed service pages', icon: Star },
      {
        title: 'Market intelligence presentation',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Use case scenarios', description: 'Detailed service pages', icon: Star },
      { title: 'Legal technology overview', description: 'Detailed service pages', icon: Star },
      { title: 'Industry expertise highlights', description: 'Detailed service pages', icon: Star },
      { title: 'Platform capabilities', description: 'Detailed service pages', icon: Star },
      { title: 'Search functionality showcase', description: 'Detailed service pages', icon: Star },
      { title: 'Document analysis examples', description: 'Detailed service pages', icon: Star },
      { title: 'Client testimonials', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Communicating complex legal technology', description: 'Detailed service pages' },
      { title: 'Presenting technical features clearly', description: 'Detailed service pages' },
      { title: 'Maintaining professional brand image', description: 'Detailed service pages' },
      { title: 'Balancing information density', description: 'Detailed service pages' },
      { title: 'Creating engaging demonstrations', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed clear feature presentations', description: 'Detailed service pages' },
      { title: 'Created intuitive product demonstrations', description: 'Detailed service pages' },
      { title: 'Implemented professional design system', description: 'Detailed service pages' },
      { title: 'Structured information hierarchy', description: 'Detailed service pages' },
      { title: 'Built interactive feature showcases', description: 'Detailed service pages' },
      { title: 'Established consistent content strategy', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
    {
      title: 'Framer Motion',
      usage: 'Animation',
      icon: { Icon: SiFramer, props: { fill: '#0052CC' } },
    },
    {
      title: 'React Query',
      usage: 'Data Fetching',
      icon: { Icon: SiReactquery, props: { fill: '#0052CC' } },
    },
    { title: 'Vercel', usage: 'Deployment', icon: { Icon: SiVercel, props: { fill: '#0052CC' } } },
    {
      title: 'Google Analytics',
      usage: 'Analytics',
      icon: { Icon: SiGoogleanalytics, props: { fill: '#0052CC' } },
    },
  ],
  images: { main: rivannaImage, screenshots: [rivannaImage, rivannaImage, rivannaImage] },
}

export const humanizarTexto: ProjectAnalysisT = {
  title: 'Humanizar Texto',
  shortDescription:
    'A sophisticated text humanization and paraphrasing mobile application with advanced AI capabilities, subscription management, and user-friendly text editing features.',
  detailedAnalysis: {
    overview:
      'Humanizar Texto is an innovative mobile application that leverages AI to help users transform and humanize their text content. The app combines powerful text processing capabilities with an intuitive interface, making it easy for users to create more natural and engaging content.',
    completeOn: 'Jul 2023',
    requirements: [
      'Modern purple-themed interface with consistent branding',
      'Clean, minimalist text editing screens',
      'Well-organized settings panel with clear options',
      'Intuitive subscription plan presentation',
      'User-friendly account management interface',
      'Clear feedback system for text processing',
      'Elegant authentication screens',
      'Professional illustration integration',
    ],
    keyFeatures: [
      { title: 'AI-powered text humanization', description: 'Detailed service pages', icon: Star },
      {
        title: 'Text paraphrasing capabilities',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Subscription plan management', description: 'Detailed service pages', icon: Star },
      { title: 'User account system', description: 'Detailed service pages', icon: Star },
      { title: 'Premium feature access', description: 'Detailed service pages', icon: Star },
      { title: 'Payment processing', description: 'Detailed service pages', icon: Star },
      { title: 'Text history tracking', description: 'Detailed service pages', icon: Star },
      { title: 'Settings customization', description: 'Detailed service pages', icon: Star },
      { title: 'Email verification', description: 'Detailed service pages', icon: Star },
      { title: 'Feedback collection', description: 'Detailed service pages', icon: Star },
      {
        title: 'Multiple text processing modes',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Word count tracking', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Implementing complex text processing', description: 'Detailed service pages' },
      { title: 'Managing subscription lifecycles', description: 'Detailed service pages' },
      { title: 'Creating intuitive text editing', description: 'Detailed service pages' },
      { title: 'Ensuring secure payments', description: 'Detailed service pages' },
      { title: 'Handling user authentication', description: 'Detailed service pages' },
      { title: 'Optimizing app performance', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed efficient text processing pipeline',
        description: 'Detailed service pages',
      },
      { title: 'Created robust subscription management', description: 'Detailed service pages' },
      { title: 'Built user-friendly text editor', description: 'Detailed service pages' },
      { title: 'Implemented secure payment system', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    {
      title: 'Express.js',
      usage: 'Backend',
      icon: { Icon: SiExpress, props: { fill: '#0052CC' } },
    },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    { title: 'Stripe', usage: 'Payment', icon: { Icon: SiStripe, props: { fill: '#0052CC' } } },
  ],
  images: { main: humanizarMain, screenshots: [humanizarAlt, humanizarAlt, humanizarAlt] },
}

export const smartCatch: ProjectAnalysisT = {
  title: 'Smart Catch',
  shortDescription:
    'A comprehensive fishing community platform featuring fish identification, weather tracking, and social forums for anglers to share experiences and tips.',
  detailedAnalysis: {
    overview:
      'Smart Catch is an innovative mobile application designed for fishing enthusiasts, combining practical tools like weather tracking and fish identification with social features that enable community engagement and knowledge sharing.',
    completeOn: 'Jul 2023',
    requirements: [
      'Professional dark blue branding with clean typography',
      'Intuitive weather dashboard with temperature tracking',
      'Well-organized forum topics with clear categorization',
      'Interactive fish identification interface',
      'User-friendly authentication screens',
      'Clear navigation with bottom tab bar',
      'Engaging community discussion layout',
      'Visual fish species comparison tools',
    ],
    keyFeatures: [
      { title: 'Fish species identification', description: 'Detailed service pages', icon: Star },
      { title: 'Real-time weather tracking', description: 'Detailed service pages', icon: Star },
      {
        title: 'Community forums and discussions',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'User profile management', description: 'Detailed service pages', icon: Star },
      {
        title: 'Location-based weather updates',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Fishing tips and guides', description: 'Detailed service pages', icon: Star },
      { title: 'Species information database', description: 'Detailed service pages', icon: Star },
      { title: 'Community photo sharing', description: 'Detailed service pages', icon: Star },
      { title: 'Expert advice section', description: 'Detailed service pages', icon: Star },
      { title: 'Catch logging system', description: 'Detailed service pages', icon: Star },
      { title: 'Weather forecast integration', description: 'Detailed service pages', icon: Star },
      { title: 'Social interaction features', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Implementing accurate fish identification', description: 'Detailed service pages' },
      { title: 'Managing real-time weather updates', description: 'Detailed service pages' },
      { title: 'Creating engaging community features', description: 'Detailed service pages' },
      { title: 'Handling offline functionality', description: 'Detailed service pages' },
      { title: 'Ensuring data accuracy', description: 'Detailed service pages' },
      { title: 'Optimizing image processing', description: 'Detailed service pages' },
    ],
    solutions: [
      { title: 'Developed robust image recognition system', description: 'Detailed service pages' },
      { title: 'Implemented efficient weather tracking', description: 'Detailed service pages' },
      { title: 'Built interactive community platform', description: 'Detailed service pages' },
      { title: 'Created offline-first architecture', description: 'Detailed service pages' },
      { title: 'Established data validation system', description: 'Detailed service pages' },
      { title: 'Optimized image processing pipeline', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    {
      title: 'TensorFlow.js',
      usage: 'AI',
      icon: { Icon: SiTensorflow, props: { fill: '#0052CC' } },
    },
    {
      title: 'Socket.io',
      usage: 'Real-time',
      icon: { Icon: SiSocketdotio, props: { fill: '#0052CC' } },
    },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
  ],
  images: { main: smartCatchMain, screenshots: [smartCatchAlt, smartCatchAlt, smartCatchAlt] },
}

export const elBrezal: ProjectAnalysisT = {
  title: 'El Brezal Honey',
  shortDescription:
    'An elegant e-commerce platform for premium honey products, featuring detailed product information, recipes, and an educational component about honey varieties and beekeeping.',
  detailedAnalysis: {
    overview:
      'El Brezal is a sophisticated honey product website that combines e-commerce functionality with educational content. The platform showcases various honey products through beautiful photography and detailed information, while educating visitors about honey varieties and their uses.',
    completeOn: 'Jul 2023',
    requirements: [
      'Warm color palette with honey-inspired tones',
      'High-quality product photography',
      'Clean product information layout',
      'Detailed recipe presentation cards',
      'Well-organized product categorization',
      'Elegant typography with clear hierarchy',
      'Consistent honey jar illustrations',
      'Professional product comparison tables',
    ],
    keyFeatures: [
      {
        title: 'Product catalog with detailed descriptions',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Recipe collection and sharing', description: 'Detailed service pages', icon: Star },
      {
        title: 'Honey variety education section',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Product comparison tools', description: 'Detailed service pages', icon: Star },
      { title: 'Beekeeping information', description: 'Detailed service pages', icon: Star },
      { title: 'Shopping cart functionality', description: 'Detailed service pages', icon: Star },
      { title: 'Order management system', description: 'Detailed service pages', icon: Star },
      { title: 'Customer reviews integration', description: 'Detailed service pages', icon: Star },
      { title: 'Honey sourcing information', description: 'Detailed service pages', icon: Star },
      {
        title: 'Nutritional information display',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Recipe search functionality', description: 'Detailed service pages', icon: Star },
      { title: 'Product filtering system', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      {
        title: 'Presenting complex product information clearly',
        description: 'Detailed service pages',
      },
      { title: 'Creating engaging recipe layouts', description: 'Detailed service pages' },
      { title: 'Managing product inventory', description: 'Detailed service pages' },
      { title: 'Implementing secure checkout', description: 'Detailed service pages' },
      { title: 'Organizing educational content', description: 'Detailed service pages' },
      { title: 'Optimizing image-heavy pages', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed clear product information hierarchy',
        description: 'Detailed service pages',
      },
      { title: 'Created interactive recipe format', description: 'Detailed service pages' },
      { title: 'Built robust inventory management', description: 'Detailed service pages' },
      { title: 'Implemented secure payment gateway', description: 'Detailed service pages' },
      { title: 'Designed organized content structure', description: 'Detailed service pages' },
      { title: 'Optimized image loading system', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    { title: 'Stripe', usage: 'Payment', icon: { Icon: SiStripe, props: { fill: '#0052CC' } } },
    {
      title: 'Cloudinary',
      usage: 'Storage',
      icon: { Icon: SiCloudinary, props: { fill: '#0052CC' } },
    },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
  ],
  images: { main: elBrezalImage, screenshots: [elBrezalImage, elBrezalImage, elBrezalImage] },
}

export const robinBeauty: ProjectAnalysisT = {
  title: 'Robin Beauty Bazar',
  shortDescription:
    'An AI-powered beauty recommendation platform that provides personalized skincare routines and product suggestions based on individual skin characteristics and preferences.',
  detailedAnalysis: {
    overview:
      'Robin Beauty Bazar is a sophisticated beauty tech platform that leverages AI to provide personalized skincare recommendations. The application combines intelligent skin analysis with product matching algorithms to create tailored beauty routines for each user.',
    completeOn: 'Jul 2023',
    requirements: [
      'Clean, modern interface with light blue accents',
      'Professional beauty photography integration',
      'Intuitive skincare quiz interface',
      'Clear pricing tier presentation',
      'Well-organized product recommendations',
      'Elegant onboarding flow',
      'Consistent brand elements throughout',
      'User-friendly account management screens',
    ],
    keyFeatures: [
      { title: 'AI-powered skin analysis', description: 'Detailed service pages', icon: Star },
      { title: 'Personalized beauty routines', description: 'Detailed service pages', icon: Star },
      { title: 'Product recommendations', description: 'Detailed service pages', icon: Star },
      { title: 'Subscription management', description: 'Detailed service pages', icon: Star },
      { title: 'Beauty profile creation', description: 'Detailed service pages', icon: Star },
      { title: 'Skincare quiz system', description: 'Detailed service pages', icon: Star },
      { title: 'Product matching algorithm', description: 'Detailed service pages', icon: Star },
      { title: 'User preference tracking', description: 'Detailed service pages', icon: Star },
      { title: 'Routine customization', description: 'Detailed service pages', icon: Star },
      { title: 'Progress monitoring', description: 'Detailed service pages', icon: Star },
      {
        title: 'Product effectiveness tracking',
        description: 'Detailed service pages',
        icon: Star,
      },
      { title: 'Beauty community features', description: 'Detailed service pages', icon: Star },
    ],
    challenges: [
      { title: 'Implementing accurate skin analysis', description: 'Detailed service pages' },
      { title: 'Creating personalized recommendations', description: 'Detailed service pages' },
      { title: 'Managing subscription features', description: 'Detailed service pages' },
    ],
    solutions: [
      {
        title: 'Developed advanced skin analysis algorithm',
        description: 'Detailed service pages',
      },
      {
        title: 'Created sophisticated recommendation system',
        description: 'Detailed service pages',
      },
      {
        title: 'Implemented robust subscription management',
        description: 'Detailed service pages',
      },
      { title: 'Built extensive product cataloging', description: 'Detailed service pages' },
    ],
  },
  categories: [WorkCategories.productDesign],
  techStack: [
    { title: 'Next.js', usage: 'Backend', icon: { Icon: SiNextdotjs, props: { fill: '#0052CC' } } },
    {
      title: 'TypeScript',
      usage: 'Programming Language',
      icon: { Icon: SiTypescript, props: { fill: '#3178C6' } },
    },
    { title: 'Node.js', usage: 'Backend', icon: { Icon: SiNodedotjs, props: { fill: '#339933' } } },
    { title: 'MongoDB', usage: 'Database', icon: { Icon: SiMongodb, props: { fill: '#0052CC' } } },
    {
      title: 'TensorFlow.js',
      usage: 'AI',
      icon: { Icon: SiTensorflow, props: { fill: '#0052CC' } },
    },
    { title: 'Stripe', usage: 'Payment', icon: { Icon: SiStripe, props: { fill: '#0052CC' } } },
    {
      title: 'Redux',
      usage: 'State Management',
      icon: { Icon: SiRedux, props: { fill: '#764ABC' } },
    },
    {
      title: 'Tailwind CSS',
      usage: 'Styling',
      icon: { Icon: SiTailwindcss, props: { fill: '#06B6D4' } },
    },
  ],
  images: { main: robinImage, screenshots: [robinImage, robinImage, robinImage] },
}

export const projectsAnalysis: ProjectAnalysisT[] = [
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
  deepReelCanva,
  athletonPlus,
  deepReelAI,
  deepReelWebsite,
  menuHub,
  beaconTutors,
  beaconTutorsAdmin,
  nutrigram,
  jawlineFitness,
  equanimity,
  rivanna,
  beaconTutorsCRM,
  codingInterviewPrep,
  inventrios,
]
