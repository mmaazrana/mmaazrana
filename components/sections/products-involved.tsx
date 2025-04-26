import React from 'react'
import Typography from '@/components/Typography'
import { Target } from 'lucide-react'
import ProductDetailsCard from './product-details-card'
import { ClientProductT } from '@/helpers/types'

interface ProductsInvolvedProps {
  products: Array<ClientProductT>
}

const ProductsInvolved: React.FC<ProductsInvolvedProps> = ({ products }) => {
  return (
    <div className='flex flex-col gap-xl'>
      <div className='flex flex-row gap-xl justify-between items-center'>
        <div className='flex flex-row gap-2xs items-center'>
          <div className={`h-(--fluid-1-2) w-m bg-secondary opacity-75`} />
          <Target className={'ml-3xs h-5xl w-5xl  stroke-secondary stroke-1'} />
          <Typography type='3xl' weight='bold' className='flat'>
            Products Involved
          </Typography>
        </div>
        <Typography
          type='lg'
          weight='medium'
          color='secondary'
          className='tracking-widest hidden about:block'
        >
          {`${products.length} PRODUCTS`}
        </Typography>
      </div>
      <div className={'flex flex-wrap gap-m ml-0 md:ml-3xl'}>
        {products.map((product, index) => (
          <ProductDetailsCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsInvolved
