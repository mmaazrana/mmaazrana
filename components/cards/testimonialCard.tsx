import React, { FC } from "react";
import CSRTestimonialCard from "@/components/cards/CSRTestimonialCard";
import SSRTestimonialCard from "@/components/cards/SSRTestimonialCard";

export interface TestimonialCardProps {
  variant: "animated" | "flat";
  testimonial: string;
  windowWidth?: number;
  client: string;
  designation: string;
  isActive: boolean;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ variant, ...props }) => {
  return variant === "animated" ? (
    <CSRTestimonialCard {...props} />
  ) : (
    <SSRTestimonialCard {...props} />
  );
};

export default TestimonialCard;
