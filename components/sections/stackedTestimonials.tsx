import React, { FC, useState } from "react";
import { testimonials } from "@/helpers/constants";
import TestimonialCard from "@/components/cards/testimonialCard";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { TestimonialT } from "@/helpers/types";
import Typography from "@/components/Typography";
import { TextTypes, WeightTypes } from "@/helpers/enums";
import AutoScroll from "embla-carousel-auto-scroll";

interface StackedTestimonialsProps {}

const StackedTestimonials: FC<StackedTestimonialsProps> = () => {
  const half = Math.ceil(testimonials.length / 2);
  const firstHalf = testimonials.slice(0, half);
  const secondHalf = testimonials.slice(half);

  console.log("firstHalf", firstHalf);
  console.log("secondHalf", secondHalf);

  return (
    <>
      <div className={"ml-80"}>
        <TestimonialCarousel testimonials={firstHalf} />
      </div>
      <div className={"flex flex-col justify-center items-center w-full gap-2"}>
        <Typography
          type={TextTypes["8xl"]}
          weight={WeightTypes.extraBold}
          className={"text-center"}
        >
          Testimonials
        </Typography>
        <Typography
          type={TextTypes["2xl"]}
          weight={WeightTypes.regular}
          className={"text-center"}
        >
          Don’t just take my word for it
        </Typography>
      </div>
      <div className={"mr-80"}>
        <TestimonialCarousel testimonials={secondHalf} />
      </div>
    </>
  );
};

interface TestimonialCarouselProps {
  testimonials: TestimonialT[];
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    AutoScroll({
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 1,
    }),
  ]);

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container py-4">
          {testimonials.map((testimonial, index) => (
            <div className="embla__slide" key={index}>
              <TestimonialCard
                variant="flat"
                testimonial={testimonial.testimonial}
                client={testimonial.client}
                designation={testimonial.designation}
                isActive={selectedIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedTestimonials;
