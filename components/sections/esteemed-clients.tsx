import React, { FC } from 'react';
import { clientColorIconComponents } from '@/helpers/constants';
import Typography from '@/components/Typography';
import { TextTypes, WeightTypes } from '@/helpers/enums';

interface EsteemedClientsProps {}

const EsteemedClients: FC<EsteemedClientsProps> = () => {
  return (
    <>
      <div
        className={
          'flex flex-row gap-3 md:gap-4 justify-between h-14 xs:h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 2xl:h-26 px-8 xs:px-9 sm:px-10 md:px-11 lg:px-12 xl:px-13 2xl:px-14 -mx-20 w-[100vw] max-w-8xl mx-auto'
        }
      >
        {clientColorIconComponents.slice(0, 7).map(({ Icon, props }, index) => (
          <div key={index}>
            <Icon
              {...props}
              className={
                'w-full h-full opacity-70 hover:opacity-100 hover:scale-102 hover:-translate-y-2 transition-all duration-300'
              }
            />{' '}
          </div>
        ))}
      </div>
      <div className={'flex flex-col justify-center items-center w-full gap-4'}>
        <Typography
          type={TextTypes['6xl']}
          weight={WeightTypes.extraBold}
          className={'text-center'}
        >
          Esteemed Clients
        </Typography>
        <Typography
          type={TextTypes['2xl']}
          weight={WeightTypes.light}
          className={'text-center max-w-3xl opacity-75'}
        >
          Comapnies and Individuals who have trusted me to deliver exceptional results.
        </Typography>
      </div>
      <div
        className={
          'flex flex-row gap-3 md:gap-4 xl:gap-5 2xl:gap-6 justify-between h-14 xs:h-15 sm:h-16 md:h-17 lg:h-18 xl:h-19 2xl:h-20 px-8 xs:px-9 sm:px-10 md:px-11 lg:px-12 xl:px-13 2xl:px-14 -mx-20 w-[100vw]  max-w-8xl mx-auto'
        }
      >
        {clientColorIconComponents.slice(7).map(({ Icon, props }, index) => (
          <div key={index}>
            <Icon
              {...props}
              className={
                'w-full h-full opacity-75 hover:opacity-100 hover:scale-102 hover:translate-y-2 transition-all duration-300'
              }
            />{' '}
          </div>
        ))}
      </div>
    </>
  );
};

export default EsteemedClients;
