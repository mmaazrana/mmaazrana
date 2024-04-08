import React, { FC } from "react";
import ProjectCard from "@/components/cards/projectCard";

interface WorkProps {}

const Work: FC<WorkProps> = ({}) => {
  return (
    <div
      className={"w-full grid gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 "}
    >
      <div
        className={"grid sm:flex gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"}
      >
        <ProjectCard
          title={"Athleton+"}
          description={
            "Short description about the app mentioned above, should be limited to two lines"
          }
          imagePath={"Athleton.svg"}
          alt={false}
        />
        <ProjectCard
          title={"Athleton+"}
          description={"Short description about the app mentioned above"}
          imagePath={"Markdown.svg"}
          alt={true}
        />
      </div>
      <div
        className={"grid sm:flex gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"}
      >
        <ProjectCard
          title={"Athleton+"}
          description={"Short description about the app mentioned above"}
          imagePath={"Markdown.svg"}
          alt={true}
        />
        <ProjectCard
          title={"Athleton+"}
          description={
            "Short description about the app mentioned above, should be limited to two lines"
          }
          imagePath={"Athleton.svg"}
          alt={false}
        />
      </div>
    </div>
  );
};

export default Work;
