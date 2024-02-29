import { useGetFirstSixProductsQuery } from '../store/services/products'
import type { Product } from '../types/productTypes'
import GalleryItem from './GalleryItem'
import Spinner from './ui/Spinner'

const Gallery = () => {
  const { data, isLoading, error } = useGetFirstSixProductsQuery({})
  if (error) {
    if ('status' in error) {
      return <>{`Error: ${error.status}`}</>
    } else {
      return <>Error</>
    }
  }
  return (
    <section id='gallery' className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Explore Our Latest Collection
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Dive into our newest arrivals of clothing and accessories. From
            everyday essentials to exclusive designer pieces, our collection is
            carefully curated to bring you the latest trends and timeless
            classics. Start exploring and find your next favorite piece today.
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {isLoading ? (
            <Spinner />
          ) : (
            data.map((galleryItem: Product) => (
              <GalleryItem key={galleryItem.id} {...galleryItem} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
