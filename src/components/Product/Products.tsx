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
    <section
      id='Projects'
      className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'
    >
      {isLoading ? (
        <Spinner />
      ) : (
        filteredProducts?.map((product: Product) => (
          <ProductItem key={product.id} data={product} />
        ))
      )}
    </section>
  )
}

export default Products
