type ProductItemProps = {
  data: {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
  }
}

const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
      <a className='block relative h-48 rounded overflow-hidden'>
        <img
          alt={data.title}
          className='object-contain object-center w-full h-full block'
          src={data.image}
        />
      </a>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          {data.category}
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          {data.title}
        </h2>
        <p className='mt-1'>${data.price}</p>
      </div>
    </div>
  )
}

export default ProductItem
