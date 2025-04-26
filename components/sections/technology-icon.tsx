import React from 'react';
import Typography from '@/components/Typography';
import {} from '@/helpers/enums';

interface TechnologyIconProps {
  technology: {
    title: string;
    Icon: {
      Icon: React.ComponentType<{ className?: string }>;
      props: {
        fill: string;
      };
    };
  };
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ technology }) => {
  return (
    <div
      className={
        'relative flex flex-row justify-center items-center ml-1 px-2 xs:px-3 md:px-4 xl:px-5 py-2 xs:py-2.5 md:py-3 xl:py-3.5 gap-1.5 xs:gap-2 md:gap-2.5 xl:gap-3 rounded-full group cursor-default'
      }
    >
      <span
        style={{
          filter: `drop-shadow(0px 0px 50px ${technology.Icon.props.fill})`,
        }}
        className={
          '-z-1 bg-primary-accent/15 absolute top-0 left-0 w-full h-full rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300'
        }
      />
      <span
        style={{
          backgroundColor: technology.Icon.props.fill,
        }}
        className={
          '-z-1 absolute top-0 left-0 w-full h-full rounded-full opacity-5 group-hover:opacity-30 transition-opacity duration-300'
        }
      />
      <span
        style={{
          outlineColor: technology.Icon.props.fill,
        }}
        className={
          '-z-1 absolute top-0 left-0 w-full h-full rounded-full outline outline-1 opacity-35 group-hover:opacity-70 transition-opacity duration-300'
        }
      />
      <technology.Icon.Icon
        {...technology.Icon.props}
        className={'h-4.5 xs:h-5 md:h-5.5 xl:h-6 w-4.5 xs:w-5 md:w-5.5 xl:w-6'}
      />
      <Typography type='xl' weight='light' className={'opacity-80'}>
        {technology.title}
      </Typography>
    </div>
  );
};

export default TechnologyIcon;
