'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Typography from '@/components/Typography';
import Link from 'next/link';
import { TextTypes, WeightTypes } from '@/helpers/enums';
import { useBottomNav } from './BottomNavContext';

interface FooterSectionProps {
  section: Array<{
    text: string;
    href: string;
  }>;
}

const FooterSection: FC<FooterSectionProps> = ({ section }) => {
  const { isEndOfPage } = useBottomNav();

  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(150px)' }}
      animate={{
        opacity: isEndOfPage ? 1 : 0,
        transform: `translateY(${isEndOfPage ? 0 : 150}px)`,
      }}
      transition={{
        duration: isEndOfPage ? 0.25 : 0,
        delay: isEndOfPage ? 0.1 : 0,
      }}
      className={
        'transition-colors grow flex flex-auto items-stretch w-full flex-col mt-6 lg:my-8 gap-1 md:gap-2 xl:gap-3'
      }
    >
      <Typography
        type={TextTypes['2xl']}
        weight={WeightTypes.bold}
        className={'mb-4 whitespace-nowrap'}
      >
        {section[0].text}
      </Typography>
      {section.slice(1).map((button, index) => (
        <div id="pages" key={index} className={'transition-colors'}>
          <Link href={button.href}>
            <Typography
              type={TextTypes.xl}
              className={
                'opacity-30 hover:opacity-50 transition-opacity duration-250 whitespace-nowrap'
              }
            >
              {button.text}
            </Typography>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};

export default FooterSection;
