import React, { FC } from "react";
import ProjectCard from "@/components/cards/projectCard";
import { projects } from "@/helpers/constants";
import ProjectCardMobile from "@/components/cards/mobile/projectCardMobile";

interface WorkProps {}

const Work: FC<WorkProps> = () => {
  return (
    <div
      className={
        "w-full flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 "
      }
    >
      <div
        className={
          "hidden sm:flex flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
        }
      >
        {projects.slice(0, 2).map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            altImage={project.altImage}
            alt={i % 2 === 1}
          />
        ))}
      </div>
      <div
        className={
          "hidden sm:flex flex-row gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
        }
      >
        {projects.slice(2, 4).map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            altImage={project.altImage}
            alt={i % 2 !== 1}
          />
        ))}
      </div>
      <div
        className={
          "flex sm:hidden flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"
        }
      >
        {projects.map((project, i) => (
          <ProjectCardMobile
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            altImage={project.altImage}
            alt={i === 1 || i === 2}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
