import React, { FC } from "react";
import ProjectCard from "@/components/cards/projectCard";
import { projects } from "@/helpers/constants";

interface WorkProps {
  windowWidth: number;
}

const Work: FC<WorkProps> = ({ windowWidth }) => {
  return (
    <div
      className={"w-full grid gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 "}
    >
      <div
        className={"grid sm:flex gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"}
      >
        {projects.slice(0, 2).map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            windowWidth={windowWidth}
            altImage={project.altImage}
            alt={i % 2 === 1}
          />
        ))}
      </div>
      <div
        className={"grid sm:flex gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"}
      >
        {projects.slice(2, 4).map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            windowWidth={windowWidth}
            altImage={project.altImage}
            alt={i % 2 !== 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
