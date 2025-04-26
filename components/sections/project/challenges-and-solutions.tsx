import {} from '@/helpers/enums'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import { ProjectAnalysisT } from '@/helpers/project-analytics'
import NumberedCard from '../../cards/numbered-card'

interface ChallengesAndSolutionsProps {
  projectData: ProjectAnalysisT
}

export default function ProjectChallengesAndSolutions({
  projectData,
}: ChallengesAndSolutionsProps) {
  return (
    <div className='relative grid grid-cols-1 lg:grid-cols-2 px-2 xs:px-4 sm:px-8 md:px-9 lg:px-10 xl:px-11 2xl:px-12 mb-10 sm:mb-4 w-full'>
      <div className='w-full gap-3 xs:gap-4 md:gap-5 xl:gap-6 flex flex-col'>
        <div className='flex py-5 sm:py-6 lg:py-7 xl:py-6 gap-5 sm:gap-6 lg:gap-7 2xl:gap-8 self-center'>
          <Typography type='5xl' weight='bold'>
            Challenges
          </Typography>
        </div>
        <div className='flex flex-col gap-5 sm:gap-6 lg:gap-7 2xl:gap-8 perspective-[300]'>
          {projectData.detailedAnalysis.challenges.map((challenge, index) => (
            <NumberedCard
              key={index}
              index={index}
              title={challenge.title}
              description={challenge.description}
              rotation='left'
            />
          ))}
        </div>
      </div>
      <div className='w-full gap-3 xs:gap-4 md:gap-5 xl:gap-6 flex flex-col'>
        <div className='flex py-5 sm:py-6 lg:py-7 xl:py-6 gap-5 sm:gap-6 lg:gap-7 2xl:gap-8 self-center'>
          <Typography type='5xl' weight='bold'>
            Solutions
          </Typography>
        </div>
        <div className='flex flex-col gap-5 sm:gap-6 lg:gap-7 2xl:gap-8 perspective-[300]'>
          {projectData.detailedAnalysis.solutions.map((solution, index) => (
            <NumberedCard
              key={index}
              index={index}
              title={solution.title}
              description={solution.description}
              rotation='right'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
