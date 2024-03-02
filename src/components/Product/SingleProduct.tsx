import { useGetSingleProductQuery } from '@/store/services/products'
import { Button } from '../ui/button'
import Spinner from '../ui/Spinner'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/useRedux'
import { addToCart } from '@/store/cart/cartSlice'
import { v4 as uuidv4 } from 'uuid'
import { renderStars } from '@/utils/renderStars'

const SingleProduct = () => {
  const params = useParams()
  const {
    data: product,
    isLoading,
    isError,
  } = useGetSingleProductQuery(params.id)
  const dispatch = useAppDispatch()
  return (
    <section className='min-h-[80svh] text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt={product?.title}
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={product?.image}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {product?.category}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {product?.title}
              </h1>
              <div className='flex mb-4'>
                <span className='flex items-center'>
                  {renderStars(product)}
                  {/* <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg> */}
                  <span className='text-gray-600 ml-3'>
                    {product?.rating?.rate} Reviews
                  </span>
                </span>
              </div>
              <p className='leading-relaxed'>{product?.description}</p>

              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  ${product?.price}
                </span>
                <Button
                  onClick={() =>
                    dispatch(addToCart({ ...product, itemId: uuidv4() }))
                  }
                  className='flex ml-auto py-2 px-6'
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        )}
        {isError && <h1>Something went wrong. Sorry.</h1>}
      </div>
    </section>
  )
}

export default SingleProduct
