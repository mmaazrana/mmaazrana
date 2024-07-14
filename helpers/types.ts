import { ButtonTypes, Sections } from "@/helpers/enums";
import React from "react";

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
  imagePath: string;
}

export interface ServiceT {
  title: string;
  index: IndexT;
  className: string;
  srcDark: string;
  srcLight: string;
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
  "2xl"?: number;
  lg?: number;
  md: any;
  sm: any;
  xl?: number;
  xs?: number;
}
