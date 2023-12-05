import React, {FC} from 'react';
import Image from "next/image";

interface ProjectCardProps {
    title: string
    description: string
    imagePath: string
    alt: boolean
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
    return (<div
        className={`overflow-hidden h-[320px] sm:h-[384px] md:h-[448px] lg:h-[512px] xl:h-[576px] items-start bg-secondary-hover rounded-3xl grid gap-8 sm:gap-9 md:gap-10 lg:gap-11 xl:gap-12 p-8 sm:p-9 md:p-10 lg:p-11 xl:p-12 ${props.alt ? "sm:basis-60 md:basis-2/5 lg:basis-1/3" : "flex-1 md:basis-3/5 lg:basis-2/3"}`}>
        <div className={" grid gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3"}>
            <h4 className={"font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold"}>{props.title}</h4>
            <p className={"text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal"}>{props.description}</p>
        </div>
        <Image width={200} height={100} className={`  border-secondary bg-secondary  overflow-hidden shadow-2xl ${props.alt? "border-2 w-full rounded-3xl sm:rounded-xl lg:rounded-2xl xl:rounded-3xl" : "border-[1.3px] rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden pb-10 md:pb-0 align-top min-w-full scale-150 origin-top-left"}`} src={props.imagePath} alt={"Project Banner"}/>
    </div>);
};

export default ProjectCard;