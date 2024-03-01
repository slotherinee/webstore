import { renderStars } from '../../utils/renderStars'
import type { Product } from '../../types/productTypes'
import { Button } from '../ui/button'

type ProductItemProps = {
  data: Product
}

const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <div className='relative m-8 flex justify-between w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
      <a className='flex justify-center relative mx-3 mt-3 h-60 overflow-hidden rounded-xl'>
        <img className='object-contain' src={data.image} alt={data.title} />
        <span className='absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>
          {data.rating.count} LEFT
        </span>
      </a>
      <div className='mt-4 px-5 pb-5'>
        <span>
          <h5 className='text-xl tracking-tight text-slate-900'>
            {data.title}
          </h5>
        </span>
        <div className='mt-2 mb-5 flex items-center justify-between'>
          <p>
            <span className='text-3xl mr-2 font-bold text-slate-900'>
              ${data.price.toFixed(0)}
            </span>
            <span className='text-sm text-slate-900 line-through'>
              ${(data.price + Math.round(Math.random() * 200 + 100)).toFixed(0)}
            </span>
          </p>
          <div className='flex items-center'>
            {renderStars(data)}
            <span className='mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold'>
              {data.rating.rate}
            </span>
          </div>
        </div>
        <Button className='flex items-center w-full active:scale-95'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          Add to cart
        </Button>
        {/* </a> */}
      </div>
    </div>
  )
}

export default ProductItem
