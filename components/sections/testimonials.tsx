import React, { FC, useCallback, useEffect, useState } from "react";
import { testimonials } from "@/helpers/constants";
import TestimonialCard from "@/components/cards/testimonialCard";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialsProps {
  windowWidth: number;
}

const Testimonials: FC<TestimonialsProps> = ({ windowWidth }) => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      delay: 4000,
    }),
  ]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={"embla w-full"}>
      <div className={"embla__viewport"} ref={emblaRef}>
        <div className={"embla__container py-4"}>
          {testimonials.map((testimonial, index) => (
            <div
              className={"embla__slide"}
              key={index}
              onClick={() => {
                if (index > selectedIndex) {
                  index === testimonials.length - 1 && selectedIndex === 0
                    ? emblaApi?.scrollPrev()
                    : emblaApi?.scrollNext();
                } else if (index < selectedIndex) {
                  selectedIndex === testimonials.length - 1 && index === 0
                    ? emblaApi?.scrollNext()
                    : emblaApi?.scrollPrev();
                }
              }}
            >
              <TestimonialCard
                testimonial={testimonial.testimonial}
                windowWidth={windowWidth}
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

export default Testimonials;
