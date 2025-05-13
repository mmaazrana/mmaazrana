import { ButtonTypes, ProjectCategories, Sections, TestimonialClients, WorkCategories } from '@/helpers/enums'
import React from 'react'
import { IconType } from 'react-icons'
import { StaticImageData } from 'next/image'

export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
export type Params = Promise<{ project: string }>

export interface NavButtonT {
  text: string
  href: string
  type: ButtonTypes
}

export interface DropdownItemT {
  text: string
  href: string
  rightIcon?: React.ReactElement
}

export interface IconComponentT {
  Icon: IconType
  props: { fill: string; [key: string]: string}
}

export type IconComponentsT = Record<string, IconComponentT>

export interface BottomNavButtonT {
  text: string
  href: string
  section: Sections
}

export interface BottomNavCategoryT {
  text: string
  key: WorkCategories | ProjectCategories
  Component: React.ComponentType<any>
}

export interface BottomNavProjectCategoryT {
  text: string
  key: ProjectCategories
  Component: React.ComponentType<any>
}

export interface FooterButtonT {
  text: string
  href: string
}

export interface FooterSocialT {
  icon: React.ReactElement
  text: string
  href: string
}

export interface ProjectT {
  title: string
  description: string
  image: StaticImageData
  altImage?: StaticImageData[]
}

export type IndexT = 0 | 1 | 2 | 3 | 4 | 5

export interface ServiceT {
  title: string
  index: IndexT
  className: string
  baseSrc: string
  placeholderSrc: string
  illustrationDescription: string
}


export interface ServiceCardProps {
  title: string
  illustrationDescription: string
  index: IndexT
  className?: string
  onClick?: () => void
}

export interface TestimonialsT {
  [key: string]: TestimonialT
}

export interface TestimonialT {
  key: TestimonialClients
  testimonial: string
  client: string
  designation: string
  companyName: string
}

export interface WorkExperienceT {
  company: string
  roles: string
  tenure: string
}

export interface BreakpointT {
  '2xl'?: number
  lg?: number
  md: any
  sm: any
  xl?: number
  xs?: number
}

export interface ClientDataT {
  key: TestimonialClients
  companyLogo ?: any
  companyLink?: string
  heading: string
  testimonial: string
  clientName: string
  designation: string
  productsInvolved: ClientProductT[]
  technologiesInvolved: ClientTechnologyT[]
}

export interface ClientProductT {
  logo: any
  primaryColor: string
  name?: string
  title?: string
  services: string[]
  link: string
}

export interface ClientTechnologyT {
  Icon: { Icon: IconType; props: any }
  title: string
}

export interface GraphicDesignProjectT {
  title: string
  description: string
  image: StaticImageData[]
}

export interface BlenderProjectT {
  title: string
  description: string
  image: StaticImageData[]
}

export interface VideoProjectT {
  title: string
  description: string
  fileName: string
  thumbnail: StaticImageData
}
