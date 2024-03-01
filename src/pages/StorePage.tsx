import { useEffect, useState } from 'react'
import FilterDropDown from '@/components/FilterDropDown'
import Products from '../components/Product/Products'
import { useGetProductsQuery } from '@/store/services/products'
import type { Product } from '@/types/productTypes'

const StorePage = () => {
  const [filterName, setFilterName] = useState<'Newest' | 'Oldest' | 'Price'>(
    'Newest'
  )
  const { data: products, isLoading } = useGetProductsQuery({})
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    if (isLoading || !products) return

    switch (filterName) {
      case 'Newest':
        setFilteredProducts([...products].sort((a, b) => a.id - b.id))
        break
      case 'Oldest':
        setFilteredProducts([...products].sort((a, b) => b.id - a.id))
        break
      case 'Price':
        setFilteredProducts([...products].sort((a, b) => a.price - b.price))
        break
      default:
        setFilteredProducts(products)
    }
  }, [filterName, products, isLoading])
  return (
    <section className='flex flex-col relative'>
      <FilterDropDown filterName={filterName} setFilterName={setFilterName} />
      <Products filteredProducts={filteredProducts} />
    </section>
  )
}

export default StorePage
