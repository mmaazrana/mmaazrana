'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import Button from '@/components/button';
import { ButtonTypes, WeightTypes } from '@/helpers/enums';
import { useBottomNav } from './bottom-nav-context';

interface ContactButtonProps {
  isMobile?: boolean;
}

const ContactButton: FC<ContactButtonProps> = ({ isMobile = false }) => {
  const { isEndOfPage } = useBottomNav();

  return (
    <Link
      href={isMobile ? '' : 'mailto:awaismaaz@gmail.com'}
      className={`${isMobile ? 'block sm:hidden' : 'w-full hidden sm:block'}`}
      aria-label={isMobile ? 'Get in Touch' : 'awaismaaz@gmail.com'}
    >
      <Button
        leftIcon={<Mail className={'!fill-none stroke-primary-accent'} />}
        type={ButtonTypes.primary}
        textWeight={isMobile ? WeightTypes.semiBold : WeightTypes.medium}
        textClassName={`${isEndOfPage ? 'opacity-100' : 'opacity-0'}`}
        className={`${isMobile ? 'w-fit !justify-center !items-center !px-4 sm:!p-[9px] md:!p-[10px] lg:!p-[11px] xl:!p-3' : 'justify-start !items-center !px-[8px] md:!px-[11px] lg:!px-[14px] xl:!px-[15px] !p-2 sm:!p-[9px] md:!p-[10px] lg:!p-[11px] xl:!p-3'} !overflow-hidden !whitespace-nowrap`}
        text={isMobile ? 'Get in Touch' : 'awaismaaz@gmail.com'}
      />
    </Link>
  );
};

export default ContactButton;
