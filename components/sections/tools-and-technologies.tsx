import React from 'react';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { FlaskRound } from 'lucide-react';
import TechnologyIcon from './technology-icon';

interface ToolsAndTechnologiesProps {
  technologies: Array<{
    title: string;
    Icon: {
      Icon: React.ComponentType<{ className?: string }>;
      props: {
        fill: string;
      };
    };
  }>;
}

const ToolsAndTechnologies: React.FC<ToolsAndTechnologiesProps> = ({ technologies }) => {
  return (
    <div className={'flex flex-col gap-7 sm:gap-8 md:gap-9 xl:gap-10'}>
      <div className={'flex flex-row gap-1 md:gap-2 xl:gap-3 items-center'}>
        <div
          className={`h-0.5 w-3 xs:w-3.5 sm:w-4 md:w-4.5 lg:w-5 xl:w-5.5 2xl:w-6 bg-secondary opacity-75`}
        />
        <FlaskRound
          className={
            'ml-2 h-9 sm:h-10 md:h-11 xl:h-12 w-9 xs:w-10 md:w-11 xl:w-12 stroke-secondary stroke-1'
          }
        />
        <Typography type={TextTypes['3xl']} weight={WeightTypes.bold}>
          Tools & Technologies
        </Typography>
      </div>
      <div
        className={
          'flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 xl:gap-3.5 2xl:gap-4 ml-0 md:ml-9 lg:ml-10 xl:ml-11 2xl:ml-12 mb-6 md:mb-7 xl:mb-8'
        }
      >
        {technologies.map((technology, index) => (
          <TechnologyIcon key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default ToolsAndTechnologies;
