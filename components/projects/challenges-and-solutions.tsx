import {} from '@/helpers/enums'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'
import NumberedCard from '../cards/numbered-card'
import { challengesAndSolutionsT } from '@/helpers/project-analytics'

interface ChallengesAndSolutionsProps {
  challenges: challengesAndSolutionsT[]
  solutions: challengesAndSolutionsT[]
}

export default function ProjectChallengesAndSolutions({
  challenges,
  solutions,
}: ChallengesAndSolutionsProps) {
  return (
    <div className='relative grid grid-cols-1 lg:grid-cols-2 px-2 xs:px-4 sm:px-8 md:px-9 lg:px-10 xl:px-11 2xl:px-12 mb-10 sm:mb-4 gap-xs w-full'>
      <div className='w-full gap-s flex flex-col'>
        <div className='flex py-5 sm:py-6 lg:py-7 xl:py-6 self-center'>
          <Typography tag='h3' type='5xl' weight='bold'>
            Challenges
          </Typography>
        </div>
        <div className='flex flex-col gap-xl perspective-[300]'>
          {challenges.map((challenge, index) => (
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
      <div className='w-full gap-s flex flex-col'>
        <div className='flex py-5 sm:py-6 lg:py-7 xl:py-6 self-center'>
          <Typography tag='h3' type='5xl' weight='bold'>
            Solutions
          </Typography>
        </div>
        <div className='flex flex-col gap-xl perspective-[300]'>
          {solutions.map((solution, index) => (
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
