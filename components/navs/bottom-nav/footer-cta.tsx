import React, { FC } from 'react';
import * as m from 'motion/react-m';
import Typography from '@/components/Typography';
import ContactButton from './contact-button';
import SocialLinks from './social-links';

interface FooterCTAProps {
  isEndOfPage: boolean;
}

const FooterCTA: FC<FooterCTAProps> = ({ isEndOfPage }) => {
  return (
    <div
      className={`${isEndOfPage ? 'w-full sm:max-w-[202px] md:max-w-[217px] lg:max-w-[232px] xl:max-w-[280px]' : 'max-w-[40px] sm:max-w-[34px] md:max-w-[40px] lg:max-w-[46px] xl:max-w-[52px]'} w-full grow shrink relative delay-100 duration-500 flex flex-col justify-end items-center sm:items-end flex-wrap gap-6`}
    >
      <div className={'flex flex-row justify-between items-center gap-6 w-full'}>
        {isEndOfPage && (
          <m.div
            layout
            initial={{ opacity: 0, transform: 'translateY(100px)' }}
            animate={{
              opacity: isEndOfPage ? 1 : 0,
              transform: `translateY(${isEndOfPage ? 0 : 100}px)`,
            }}
            transition={{
              duration: 0.3,
              delay: isEndOfPage ? 0.4 : 0.25,
            }}
            className={'transition-none flex sm:w-full sm:min-w-full'}
          >
            <Typography
              type={'2xl'}
              weight='semi-bold'
              leading={'medium'}
              className={`w-full overflow-hidden`}
            >
              Ready to create something awesome?
            </Typography>
          </m.div>
        )}
        <m.div
          initial={{ opacity: 0, transform: 'translateX(50px)' }}
          animate={{
            opacity: isEndOfPage ? 1 : 0,
            transform: `translateX(${isEndOfPage ? 0 : 50}px)`,
          }}
          transition={{
            duration: 0.25,
            delay: isEndOfPage ? 0.35 : 0.25,
          }}
          className={'transition-none'}
        >
          <ContactButton isMobile />
        </m.div>
      </div>
      <SocialLinks isEndOfPage={isEndOfPage} />
      <ContactButton />
    </div>
  );
};

export default FooterCTA;
