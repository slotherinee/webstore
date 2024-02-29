import useShopNow from '../hooks/useShopNow'

const Features = () => {
  const handleShopNowClick = useShopNow()
  return (
    <section id='features' className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
            Our Unique Features
          </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            Discover the latest trends in fashion with our wide selection of
            clothing and accessories. From everyday essentials to exclusive
            designer pieces, our collection is carefully curated to bring you
            the best of style and comfort. Shop with us and elevate your
            wardrobe with our high-quality, fashionable items.
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
            <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
              Our Collections
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Women's Clothing
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Men's Clothing
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Accessories
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                New Arrivals
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Sale
              </a>
            </nav>
          </div>
          <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
            <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
              Customer Service
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                24/7 Support
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Shipping Information
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Returns & Exchanges
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                FAQs
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Customer service
              </a>
            </nav>
          </div>
          <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
            <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
              Shopping With Us
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Secure Payment
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Track Your Order
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Gift Cards
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Size Guide
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Wishlist
              </a>
            </nav>
          </div>
          <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
            <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
              Our Policies"
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Shopping Policy
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Buying Policy
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Shipping Policy
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Selling Policy
              </a>
              <a>
                <span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Measurement Guide
              </a>
            </nav>
          </div>
        </div>
        <button
          onClick={handleShopNowClick}
          className='flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        >
          Shop now
        </button>
      </div>
    </section>
  )
}

export default Features
