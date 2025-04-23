import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { ProjectAnalysisT } from '@/helpers/project-analytics';
import { useId } from 'react';
import * as m from 'motion/react-m';
interface KeyFeaturesProps {
  projectData: ProjectAnalysisT;
}

export default function ProjectKeyFeatures({ projectData }: KeyFeaturesProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');

  return (
    <div className="max-w-8xl w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 md:gap-5 xl:gap-6 w-full">
        {projectData.detailedAnalysis.keyFeatures.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start justify-start items-center bg-secondary-hover/10 hover:bg-primary-invert/25 hover:-translate-y-4 transition-all duration-300 ease-in-out px-6 xs:px-7 sm:px-8 md:px-9 lg:px-10 xl:px-11 2xl:px-12 py-6 xs:py-7 sm:py-8 md:py-9 lg:py-10 xl:py-11 2xl:py-12 gap-3 xs:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 rounded-3xl group"
          >
            <svg
              width="100"
              height="100"
              className={
                'absolute w-full h-full -top-2.5 -left-2.5 overflow-visible !transition-all duration-[100s]'
              }
            >
              <defs>
                <linearGradient
                  id={`aboutCardStroke${id}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                  gradientTransform="rotate(45)"
                >
                  <stop offset="0%" stopColor="var(--secondary)" stopOpacity="10%" />
                  <stop offset="100%" stopColor="var(--secondary)" stopOpacity="100%" />
                </linearGradient>
              </defs>
              <m.rect
                x="10"
                y="10"
                rx={24}
                ry={24}
                width="100%"
                height="100%"
                fill="none"
                stroke={`url(#aboutCardStroke${id})`}
                strokeWidth={2}
                className={`w-full h-full min-w-full min-h-full !transition-all rounded-xl sm:rounded-2xl md:rounded-3xl opacity-25 group-hover:opacity-50`}
              />
            </svg>
            {feature.icon && (
              <feature.icon className="self-end top-4 xs:top-5 top-4 xs:right-5 absolute sm:relative sm:self-start w-8 xs:w-9 sm:w-8 md:w-9 lg:w-10 xl:w-11 2xl:w-12 h-8 xs:h-9 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12 stroke-1 text-secondary" />
            )}
            <div className="flex flex-col mr-10 xs:mr-12 sm:mr-0 gap-2 sm:gap-2.5 lg:gap-3">
              <Typography type={TextTypes['3xl']} weight={WeightTypes.bold}>
                {feature.title}
              </Typography>
              <Typography type={TextTypes.xl} className="opacity-75">
                {feature.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
