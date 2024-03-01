import { Product } from '../../types/productTypes'

const GalleryItem = ({ category, title, description, image }: Product) => {
  return (
    <div className='lg:w-1/3 sm:w-1/2 p-4 cursor-pointer'>
      <div className='flex relative'>
        <img
          alt={title}
          className='absolute inset-0 w-full h-full object-contain object-center'
          src={image}
        />
        <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
          <h2 className='tracking-widest text-sm title-font font-medium text-blue-500 mb-1'>
            {category}
          </h2>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            {title.slice(0, 20) + '...'}
          </h1>
          <p className='leading-relaxed'>{description.slice(0, 75) + '...'}</p>
        </div>
      </div>
    </div>
  )
}

export default GalleryItem
