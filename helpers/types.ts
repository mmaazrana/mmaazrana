import { ButtonTypes, Sections } from "@/helpers/enums";

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

export interface ServiceT {
  title: string;
  index: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface TestimonialT {
  testimonial: string;
  client: string;
  designation: string;
}
