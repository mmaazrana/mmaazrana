import React, { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/helpers/constants";
import TestimonialCard from "@/components/cards/testimonialCard";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
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
    <section className={"w-full"}>
      <div className={"embla"}>
        <div className={"embla__viewport"} ref={emblaRef}>
          <div className={"embla__container py-4"}>
            {testimonials.map((testimonial, index) => (
              <div className={"embla__slide"} key={index}>
                <TestimonialCard
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
    </section>
  );
};

export default Testimonials;
