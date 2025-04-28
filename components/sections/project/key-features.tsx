import { ProjectAnalysisT } from '@/helpers/project-analytics'
import IconCard from '../../cards/icon-card'

interface KeyFeaturesProps {
  projectData: ProjectAnalysisT
}

export default function ProjectKeyFeatures({ projectData }: KeyFeaturesProps) {
  return (
    <div className='max-w-8xl w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-10 sm:mb-4 gap-s w-full'>
        {projectData.detailedAnalysis.keyFeatures.map((feature, index) => (
          <IconCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  )
}
