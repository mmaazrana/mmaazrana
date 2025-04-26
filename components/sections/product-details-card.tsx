import React, { useId } from 'react';
import Typography from '@/components/Typography';
import {} from '@/helpers/enums';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { ClientProductT } from '@/helpers/types';

interface ProductDetailsCardProps {
  product: ClientProductT;
}

const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({ product }) => {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');

  return (
    <Link
      href={product.link}
      target='_blank'
      className={
        'relative flex grow flex-col sm:flex-row justify-center items-center p-6 xs:p-7 sm:p-8 md:p-9 lg:p-10 xl:p-11 2xl:p-12 gap-5 xs:gap-5.5 sm:gap-6 md:gap-3.5 lg:gap-4 xl:gap-4.5 2xl:gap-5 rounded-rect overflow-hidden group cursor-default hover:-translate-y-2 transition-transform duration-300'
      }
    >
      <div
        className={
          'absolute top-2 md:top-3 right-2 md:right-3 rounded-full p-2.5 md:p-3 bg-black-dynamic/2 flex justify-center items-center'
        }
      >
        <ExternalLink className={'w-4 md:w-5 h-4 md:h-5 stroke-[1px] stroke-black-dynamic/50'} />
      </div>
      <svg className={'absolute top-0 left-0 w-full h-full'}>
        <defs>
          <linearGradient
            id={`aboutCardStroke${id}`}
            gradientUnits='userSpaceOnUse'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
            gradientTransform='rotate(60)'
          >
            <stop offset='0%' stopColor={product.primaryColor} stopOpacity='15%' />
            <stop offset='95%' stopColor={product.primaryColor} stopOpacity='100%' />
          </linearGradient>
        </defs>
        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill='none'
          stroke={`url(#aboutCardStroke${id})`}
          strokeWidth={3}
          className={`w-full h-full min-w-full min-h-full !transition-all rounded-rect opacity-80 group-hover:opacity-100`}
        />
      </svg>
      <span
        style={{
          filter: `drop-shadow(0px 10px 50px ${product.primaryColor})`,
        }}
        className={
          '-z-1 bg-primary-accent/15 absolute top-0 left-0 w-full h-full rounded-rect opacity-50 group-hover:opacity-100 transition-opacity duration-300'
        }
      />
      <span
        style={{
          backgroundColor: product.primaryColor,
        }}
        className={
          '-z-1 absolute top-0 left-0 w-full h-full rounded-rect opacity-1 group-hover:opacity-20 transition-opacity duration-300'
        }
      />
      <div className={'flex items-center gap-3 sm:gap-3.5 xl:gap-4 w-fit'}>
        <product.logo className='h-6 xs:h-7 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12 w-fit max-w-[10rem]' />
        {product.name && (
          <Typography type={'2xl'} weight='semi-bold'>
            {product.name}
          </Typography>
        )}
      </div>
      <div
        className={
          'flex flex-wrap flex-row justify-center sm:justify-start items-center gap-1.5 sm:gap-2'
        }
      >
        {product.services.map((service, index) => (
          <div
            key={index}
            className={
              'flex px-2.5 md:px-3 xl:px-3.5 py-1.5 md:py-2 rounded-full bg-black-dynamic/5 group-hover:bg-black-dynamic/10 transition-colors duration-300'
            }
          >
            <Typography type={'sm'}>{service}</Typography>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default ProductDetailsCard;
