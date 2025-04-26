import { ProjectAnalysisT } from '@/helpers/project-analytics';
import TechnologyCard from '../../cards/technology-card';

interface TechStackProps {
  projectData: ProjectAnalysisT;
}

export default function ProjectTechStack({ projectData }: TechStackProps) {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 about:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-10 sm:mb-4 gap-4'>
        {projectData.techStack.map((tech, index) => (
          <TechnologyCard key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
}
