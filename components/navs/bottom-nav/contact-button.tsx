'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { ColorTypes, TextTypes, WeightTypes } from '@/helpers/enums';
import { useBottomNav } from './bottom-nav-context';
import * as m from 'motion/react-m';
import Typography from '@/components/Typography';
import { AnimatePresence } from 'motion/react';

interface ContactButtonProps {
  isMobile?: boolean;
}

const ContactButton: FC<ContactButtonProps> = ({ isMobile = false }) => {
  const { isEndOfPage } = useBottomNav();

  return (
    <m.span layout animate={{ width: isEndOfPage ? '100%' : 'fit' }} transition={{ duration: 0.4 }}>
      <Link
        href={isMobile ? '' : 'mailto:awaismaaz@gmail.com'}
        className={`${isMobile ? 'flex sm:hidden !justify-center !items-center !px-4 !py-2.5 sm:!p-[9px] md:!p-[10px] lg:!p-[11px] xl:!p-3' : 'hidden sm:flex !justify-center !items-center !px-[8px] md:!px-[11px] lg:!px-[14px] xl:!px-[15px] !p-2 sm:!p-[9px] md:!p-[10px] lg:!p-[11px] xl:!p-3'} flex-row gap-2 bg-primary hover:bg-primary-hover rounded-full !overflow-hidden !whitespace-nowrap`}
        aria-label={isMobile ? 'Get in Touch' : 'awaismaaz@gmail.com'}
      >
        <Mail
          className={
            '!fill-none stroke-primary-accent w-[14px] sm:w-[16px] md:w-[18px] lg:w-[20px] xl:w-6 h-[14px] sm:h-[16px] md:h-[18px] lg:h-[20px] xl:h-6'
          }
        />
        <AnimatePresence mode="wait">
          {isEndOfPage && (
            <m.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: isEndOfPage ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="max-h-[14px] sm:max-h-[16px] md:max-h-[18px] lg:max-h-[20px] xl:max-h-6 flex items-center justify-center"
            >
              <Typography
                type={TextTypes.xl}
                color={ColorTypes.primaryAccent}
                weight={isMobile ? WeightTypes.semiBold : WeightTypes.medium}
              >
                {isMobile ? 'Get in Touch' : 'awaismaaz@gmail.com'}
              </Typography>
            </m.div>
          )}
        </AnimatePresence>
      </Link>
    </m.span>
  );
};

export default ContactButton;
