import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useGetProductsQuery } from '../../store/services/products'
import ProductItem from './ProductItem'
import Spinner from '../ui/Spinner'
import { Product } from '../../types/productTypes'

type ProductsProps = {
  filteredProducts: Product[]
}

const Products = ({ filteredProducts }: ProductsProps) => {
  const { error, isLoading } = useGetProductsQuery({})

  if (error) return <h1>{(error as FetchBaseQueryError).status}</h1>
  return (
    <section className='flex justify-center  text-gray-600 body-font'>
      <div className='container py-20 '>
        <div className='flex flex-wrap justify-evenly'>
          {isLoading ? (
            <Spinner />
          ) : (
            filteredProducts?.map((product: Product) => (
              <ProductItem key={product.id} data={product} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Products
