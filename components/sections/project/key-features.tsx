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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {projectData.detailedAnalysis.keyFeatures.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start justify-start items-center bg-secondary-hover/10 hover:bg-primary-invert/25 hover:-translate-y-4 transition-all duration-300 ease-in-out px-12 py-12 gap-6 rounded-3xl group"
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
            {feature.icon && <feature.icon className="w-12 h-12 stroke-1 text-secondary" />}
            <div className="flex flex-col gap-3">
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
