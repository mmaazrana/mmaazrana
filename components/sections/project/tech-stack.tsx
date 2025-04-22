import { WeightTypes, TextTypes } from '@/helpers/enums';
import { ProjectAnalysisT } from '@/helpers/project-analytics';
import Typography from '@/components/Typography';

interface TechStackProps {
  projectData: ProjectAnalysisT;
}

export default function ProjectTechStack({ projectData }: TechStackProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {projectData.techStack.map((tech, index) => (
          <div
            key={index}
            className={
              'relative flex flex-col items-center justify-center gap-8 rounded-3xl aspect-square hover:-translate-y-4 transition-all duration-300 group'
            }
          >
            <svg
              width="100"
              height="100"
              className={'absolute w-full h-full overflow-visible group'}
            >
              <rect
                x="0"
                y="0"
                rx={24}
                ry={24}
                width="100%"
                height="100%"
                fill={tech.icon.props.fill}
                fillOpacity={0.15}
                stroke={tech.icon.props.fill}
                strokeOpacity={0.85}
                strokeWidth={1}
                className={`w-full h-full min-w-full min-h-full !transition-all rounded-xl sm:rounded-2xl md:rounded-3xl opacity-25 group-hover:opacity-50`}
              />
              <rect
                x="0"
                y="0"
                rx={24}
                ry={24}
                fill={tech.icon.props.fill}
                fillOpacity={0.5}
                stroke={tech.icon.props.fill}
                strokeOpacity={0.85}
                strokeWidth={1}
                width="100%"
                height="100%"
                style={{
                  filter: `drop-shadow(0px 50px 50px ${tech.icon.props.fill})`,
                }}
                className={`w-full h-full min-w-full min-h-full !transition-all rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-50 -z-1`}
              />
            </svg>
            <div className="flex flex-col self-center items-center justify-center gap-8">
              {tech.icon && <tech.icon.Icon className="w-20 h-20" {...tech.icon.props} />}
              <div className="flex flex-col items-center justify-center gap-2">
                <Typography
                  type={TextTypes['2xl']}
                  weight={WeightTypes.bold}
                  className="text-center"
                >
                  {tech.title}
                </Typography>
                <Typography
                  type={TextTypes.lg}
                  weight={WeightTypes.light}
                  className="text-center opacity-75"
                >
                  {tech.usage}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
