import React from 'react';
import Typography from '@/components/Typography';
import { ColorTypes, TextTypes, WeightTypes } from '@/helpers/enums';
import { Target } from 'lucide-react';
import ProductDetailsCard from './product-details-card';
import { ClientProductT } from '@/helpers/types';

interface ProductsInvolvedProps {
  products: Array<ClientProductT>;
}

const ProductsInvolved: React.FC<ProductsInvolvedProps> = ({ products }) => {
  return (
    <div className={'flex flex-col gap-7 sm:gap-8 md:gap-9 xl:gap-10'}>
      <div className={'flex flex-row justify-between items-center'}>
        <div className={'flex flex-row gap-1 md:gap-2 xl:gap-3 items-center'}>
          <div
            className={`h-0.5 w-3 xs:w-3.5 sm:w-4 md:w-4.5 lg:w-5 xl:w-5.5 2xl:w-6 bg-secondary opacity-75`}
          />
          <Target
            className={
              'ml-2 h-9 sm:h-10 md:h-11 xl:h-12 w-9 xs:w-10 md:w-11 xl:w-12 stroke-secondary stroke-1'
            }
          />
          <Typography type={TextTypes['3xl']} weight={WeightTypes.bold}>
            Products Involved
          </Typography>
        </div>
        <Typography
          type={TextTypes['lg']}
          weight={WeightTypes.light}
          color={ColorTypes.secondary}
          className="tracking-widest hidden about:block"
        >
          {`${products.length} PRODUCTS`}
        </Typography>
      </div>
      <div
        className={
          'flex flex-wrap gap-3 sm:gap-4 md:gap-5 xl:gap-6 ml-0 md:ml-9 lg:ml-10 xl:ml-11 2xl:ml-12'
        }
      >
        {products.map((product, index) => (
          <ProductDetailsCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsInvolved;
