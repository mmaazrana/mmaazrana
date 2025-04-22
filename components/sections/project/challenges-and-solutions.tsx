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
    <div className="relative grid grid-cols-1 lg:grid-cols-2 px-12 w-full">
      <div className="w-full gap-6 flex flex-col">
        <div className="flex py-8 gap-8 self-center">
          <Typography type={TextTypes['5xl']} weight={WeightTypes.bold}>
            Challenges
          </Typography>
        </div>
        <div className="flex flex-col gap-8 perspective-[300]">
          {projectData.detailedAnalysis.challenges.map((challenge, index) => (
            <div
              key={index}
              className="relative flex flex-col rotate-y-2 hover:-translate-y-2 hover:translate-x-2 transform-style-preserve-3d transition-transform duration-300 ease-in-out"
            >
              <Typography
                type={TextTypes['9xl']}
                weight={WeightTypes.black}
                color={ColorTypes.error}
                className="absolute top-0 -translate-y-1/2 -left-12 opacity-60 z-[-10] error-text-stroke text-primary-accent uppercase font-black !text-[1000%]"
              >
                {`${index + 1}`}
              </Typography>
              <div className="flex flex-col items-center justify-center py-10 px-10 gap-4 outline outline-1 outline-secondary/40 bg-secondary-hover/10 hover:bg-primary-invert/25 transition-colors duration-300 ease-in-out z-[2] rounded-3xl backdrop-blur-xs">
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
      <div className=" w-full gap-6 flex flex-col">
        <div className="flex py-8 gap-8 self-center">
          <Typography type={TextTypes['5xl']} weight={WeightTypes.bold}>
            Solutions
          </Typography>
        </div>
        <div className="flex flex-col gap-8 perspective-[300]">
          {projectData.detailedAnalysis.solutions.map((solution, index) => (
            <div
              key={index}
              className="relative flex flex-col -rotate-y-2 hover:-translate-y-2 hover:-translate-x-2 transform-style-preserve-3d transition-transform duration-300 ease-in-out"
            >
              <Typography
                type={TextTypes['9xl']}
                weight={WeightTypes.black}
                color={ColorTypes.error}
                className="absolute top-0 -translate-y-1/2 -right-12  opacity-60 z-[-10] secondary-text-stroke text-primary-accent uppercase font-black !text-[1000%]"
              >
                {`${index + 1}`}
              </Typography>
              <div className="flex flex-col items-center justify-center py-10 px-10 gap-4 outline outline-1 outline-secondary/40 bg-secondary-hover/10 hover:bg-primary-invert/25 transition-colors duration-300 ease-in-out z-[2] rounded-3xl backdrop-blur-xs">
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
