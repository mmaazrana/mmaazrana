import React, { FC, useEffect } from "react";
import ProjectCard from "@/components/cards/projectCard";
import { stagger, useAnimate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/helpers/constants";

interface WorkProps {}

const Work: FC<WorkProps> = ({}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0 });

  useEffect(() => {
    animate(
      "#project",
      inView
        ? { opacity: 1, scale: 1, transform: "translateY(0px)" }
        : { opacity: 0, scale: 0.3, transform: "translateY(50px)" },
      {
        duration: inView ? 0.5 : 0.25,
        delay: staggerList,
      },
    );
  }, [inView, animate, staggerList]);

  return (
    <div ref={ref} className={"w-full"}>
      <div
        ref={scope}
        className={"w-full grid gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 "}
      >
        <div
          className={
            "grid sm:flex gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
          }
        >
          {projects.slice(0, 2).map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              imagePath={project.imagePath}
              alt={i % 2 === 1}
            />
          ))}
        </div>
        <div
          className={
            "grid sm:flex gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
          }
        >
          {projects.slice(2, 4).map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              imagePath={project.imagePath}
              alt={i % 2 !== 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
