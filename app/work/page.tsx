'use client';
import Typography from '@/components/Typography';
import React from 'react';
import { TextTypes, WeightTypes } from '../../helpers/enums';

function Work() {
  return (
    <div className={'flex w-full h-[100dvh] justify-center items-center m-auto'}>
      <Typography weight={WeightTypes.black} type={TextTypes['9xl']}>
        Under Construction
      </Typography>
    </div>
  );
}

export default Work;
