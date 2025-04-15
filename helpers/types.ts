import { ButtonTypes, Sections, WorkCategories } from '@/helpers/enums';
import React from 'react';
import { IconType } from 'react-icons';
import { StaticImageData } from 'next/image';

export interface NavButtonT {
  text: string;
  href: string;
  type: ButtonTypes;
}

export interface BottomNavButtonT {
  text: string;
  href: string;
  section: Sections;
}

export interface BottomNavCategoryT {
  text: string;
  key: WorkCategories;
}

export interface FooterButtonT {
  text: string;
  href: string;
}

export interface FooterSocialT {
  icon: React.ReactElement;
  text: string;
  href: string;
}

export interface ProjectT {
  title: string;
  description: string;
  image: StaticImageData;
  altImage?: StaticImageData;
}

export interface ServiceT {
  title: string;
  index: IndexT;
  className: string;
  baseSrc: string;
  placeholderSrc: string;
}

export type IndexT = 0 | 1 | 2 | 3 | 4 | 5;

export interface TestimonialT {
  testimonial: string;
  client: string;
  designation: string;
}

export interface WorkExperienceT {
  company: string;
  roles: string;
  tenure: string;
}

export interface BreakpointT {
  '2xl'?: number;
  lg?: number;
  md: any;
  sm: any;
  xl?: number;
  xs?: number;
}

export interface ClientDataT {
  heading: string;
  testimonial: string;
  clientName: string;
  companyName: string;
  productsInvolved: ClientProductT[];
  technologiesInvolved: { Icon: IconType; props: any }[];
}

export interface ClientProductT {
  logo: any;
  name: string;
  services: string[];
}
