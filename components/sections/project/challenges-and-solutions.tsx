import { ColorTypes, WeightTypes } from '@/helpers/enums';
import Typography from '@/components/Typography';
import { TextTypes } from '@/helpers/enums';
import { ProjectAnalysisT } from '@/helpers/project-analytics';

interface ChallengesAndSolutionsProps {
  projectData: ProjectAnalysisT;
}

export default function ProjectChallengesAndSolutions({
  projectData,
}: ChallengesAndSolutionsProps) {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 px-2 xs:px-4 sm:px-8 md:px-9 lg:px-10 xl:px-11 2xl:px-12 w-full">
      <div className="w-full gap-3 xs:gap-4 md:gap-5 xl:gap-6 flex flex-col">
        <div className="flex py-5 sm:py-6 lg:py-7 xl:py-6 gap-5 sm:gap-6 lg:gap-7 2xl:gap-8 self-center">
          <Typography type={TextTypes['5xl']} weight={WeightTypes.bold}>
            Challenges
          </Typography>
        </div>
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 2xl:gap-8 perspective-[300]">
          {projectData.detailedAnalysis.challenges.map((challenge, index) => (
            <div
              key={index}
              className="relative flex flex-col rotate-y-2 hover:-translate-y-2 hover:translate-x-2 transform-style-preserve-3d transition-transform duration-300 ease-in-out"
            >
              <Typography
                type={TextTypes['9xl']}
                weight={WeightTypes.black}
                color={ColorTypes.error}
                className="absolute top-4 xs:top-2 sm:top-0 -translate-y-1/2 -left-8 xs:-left-10 sm:-left-12 opacity-60 z-[-10] error-text-stroke text-primary-accent uppercase font-black !text-[1000%]"
              >
                {`${index + 1}`}
              </Typography>
              <div className="flex flex-col items-center justify-center py-7 xs:py-7.5 sm:py-8 md:py-8.5 lg:py-9 xl:py-9.5 2xl:py-10 px-7 xs:px-7.5 sm:px-8 md:px-8.5 lg:px-9 xl:px-9.5 2xl:px-10 gap-2.5 xs:gap-3 md:gap-3.5 xl:gap-4 outline outline-1 outline-secondary/40 bg-secondary-hover/10 hover:bg-primary-invert/25 transition-colors duration-300 ease-in-out z-[2] rounded-2xl md:rounded-3xl backdrop-blur-xs">
                <Typography
                  type={TextTypes['2xl']}
                  weight={WeightTypes.bold}
                  className="text-center"
                >
                  {challenge.title}
                </Typography>
                <Typography
                  type={TextTypes['lg']}
                  weight={WeightTypes.light}
                  className="opacity-80 text-center"
                >
                  {challenge.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full gap-3 xs:gap-4 md:gap-5 xl:gap-6 flex flex-col">
        <div className="flex py-5 sm:py-6 lg:py-7 xl:py-6 gap-5 sm:gap-6 lg:gap-7 2xl:gap-8 self-center">
          <Typography type={TextTypes['5xl']} weight={WeightTypes.bold}>
            Solutions
          </Typography>
        </div>
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 2xl:gap-8 perspective-[300]">
          {projectData.detailedAnalysis.solutions.map((solution, index) => (
            <div
              key={index}
              className="relative flex flex-col -rotate-y-2 hover:-translate-y-2 hover:-translate-x-2 transform-style-preserve-3d transition-transform duration-300 ease-in-out"
            >
              <Typography
                type={TextTypes['9xl']}
                weight={WeightTypes.black}
                color={ColorTypes.error}
                className="absolute top-4 xs:top-2 sm:top-0 -translate-y-1/2 -right-8 xs:-right-10 sm:-right-12 opacity-60 z-[-10] secondary-text-stroke text-primary-accent uppercase font-black !text-[1000%]"
              >
                {`${index + 1}`}
              </Typography>
              <div className="flex flex-col items-center justify-center py-7 xs:py-7.5 sm:py-8 md:py-8.5 lg:py-9 xl:py-9.5 2xl:py-10 px-7 xs:px-7.5 sm:px-8 md:px-8.5 lg:px-9 xl:px-9.5 2xl:px-10 gap-2.5 xs:gap-3 md:gap-3.5 outline outline-1 outline-secondary/40 bg-secondary-hover/10 hover:bg-primary-invert/25 transition-colors duration-300 ease-in-out z-[2] rounded-2xl md:rounded-3xl backdrop-blur-xs">
                <Typography
                  type={TextTypes['2xl']}
                  weight={WeightTypes.bold}
                  className="text-center"
                >
                  {solution.title}
                </Typography>
                <Typography
                  type={TextTypes['lg']}
                  weight={WeightTypes.light}
                  className="opacity-80 text-center"
                >
                  {solution.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
