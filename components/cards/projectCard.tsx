import React, { FC } from "react";

import Image, { StaticImageData } from "next/image";
import Typography from "@/components/Typography";

import { TextTypes, WeightTypes } from "@/helpers/enums";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  alt: boolean;
  windowWidth: number;
  altImage?: StaticImageData;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  alt,
  windowWidth,
  altImage,
}) => {
  return (
    <div
      id={"project"}
      className={`cursor-pointer group work overflow-hidden h-[320px] sm:h-[384px] md:h-[448px] lg:h-[512px] xl:h-[576px] items-start bg-secondary-hover rounded-3xl grid gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 ${alt ? "sm:basis-60 md:basis-2/5 lg:basis-1/3" : "flex-1 md:basis-3/5 lg:basis-2/3"} transition-all duration-300`}
    >
      <div
        className={"flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3"}
      >
        <Typography type={TextTypes["4xl"]} weight={WeightTypes.bold}>
          {title}
        </Typography>
        <Typography type={TextTypes.xl}>{description}</Typography>
      </div>
      <Image
        placeholder={"blur"}
        className={`border-none overflow-hidden shadow-2xl ${alt ? `border-2 w-full rounded-3xl sm:rounded-lg lg:rounded-xl xl:rounded-2xl group-hover:scale-[0.55]` : `border-[1.3px] rounded-xl sm:rounded-md lg:rounded-lg xl:rounded-xl overflow-hidden pb-10 md:pb-0 align-top min-w-full scale-150 group-hover:scale-100  `} origin-top-left transition-transform duration-300`}
        src={image}
        alt={"Project Banner"}
      />
      {alt && altImage && (
        <Image
          priority
          placeholder="blur"
          className={`border-none overflow-hidden shadow-2xl border-2 w-full rounded-3xl sm:rounded-lg lg:rounded-xl xl:rounded-2xl scale-[0.55] translate-y-[100%] translate-x-[45%] group-hover:-translate-y-[10%] sm:group-hover:-translate-y-[18%] origin-top-left transition-transform duration-300"}`}
          src={altImage}
          alt={"Project Banner"}
        />
      )}
    </div>
  );
};

export default ProjectCard;
