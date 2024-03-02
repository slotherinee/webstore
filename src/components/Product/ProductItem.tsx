import type { Product } from '../../types/productTypes'
import { useAppDispatch } from '@/hooks/useRedux'
import { addToCart } from '@/store/cart/cartSlice'
import { v4 as uuidv4 } from 'uuid'

import { Link } from 'react-router-dom'

type ProductItemProps = {
  data: Product
}

const ProductItem = ({ data }: ProductItemProps) => {
  const dispatch = useAppDispatch()
  return (
    <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
      <div>
        <Link to={`/store/items/${data.id}`}>
          <img
            src={data.image}
            alt='Product'
            className='h-80 w-72 object-contain rounded-t-xl'
          />
        </Link>
        <div className='px-4 py-3 w-72'>
          <span className='text-gray-400 mr-3 uppercase text-xs'>
            {data.category}
          </span>
          <p className='text-lg font-bold text-black truncate block capitalize'>
            {data.title}
          </p>
          <div className='flex items-center'>
            <p className='text-lg font-semibold text-black cursor-auto my-3'>
              ${data.price}
            </p>
            <del>
              <p className='text-sm text-gray-600 cursor-auto ml-2'>
                ${data.price + Math.floor(Math.random() * 100 + 100)}
              </p>
            </del>
            <div className='ml-auto'>
              <div
                className='cursor-pointer'
                onClick={() =>
                  dispatch(addToCart({ ...data, itemId: uuidv4() }))
                }
              >
                <img
                  src={null ? '/bbag.png' : '/wbag.png'}
                  className='w-6 h-6'
                  alt='cart icon'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
