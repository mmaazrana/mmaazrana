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
          title={"DeepReel AI Videos"}
          description={
            "Short description about the app mentioned above, should be limited to two lines"
          }
          imagePath={"/svgs/deepreel.svg"}
          alt={false}
        />
        <ProjectCard
          title={"Nutrigram"}
          description={"Short description about the app mentioned above"}
          imagePath={"svgs/nutrigram.svg"}
          alt={true}
        />
      </div>
      <div
        className={"grid sm:flex gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12"}
      >
        <ProjectCard
          title={"Markdown Editor"}
          description={"Short description about the app mentioned above"}
          imagePath={"svgs/markdown.svg"}
          alt={true}
        />
        <ProjectCard
          title={"Athleton+"}
          description={
            "Short description about the app mentioned above, should be limited to two lines"
          }
          imagePath={"svgs/athleton.svg"}
          alt={false}
        />
      </div>
    </div>
  );
};

export default Work;
