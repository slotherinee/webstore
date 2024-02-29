import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useGetProductsQuery } from '../store/services/products'
import ProductItem from './ProductItem'
import Spinner from './ui/Spinner'
import { Product } from '../types/productTypes'

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery({})
  if (error) return <h1>{(error as FetchBaseQueryError).status}</h1>
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {isLoading ? (
            <Spinner />
          ) : (
            data?.map((product: Product) => (
              <ProductItem key={product.id} data={product} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Products
