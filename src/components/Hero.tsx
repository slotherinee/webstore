import useShopNow from '../hooks/useShopNow'

const Hero = () => {
  const handleShopNowClick = useShopNow()
  return (
    <section className='text-gray-600  body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Discover Your Style
            <br className='hidden lg:inline-block' />
            With Our Exclusive Collection
          </h1>
          <p className='mb-6 leading-relaxed'>
            Explore our wide range of clothing and accessories from 1000+
            fashion brands. From the latest trends to timeless classics, we have
            something for every occasion, style, and season.
          </p>
          <div className='flex justify-center'>
            <button
              onClick={handleShopNowClick}
              className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            width='720'
            height='600'
            src='/herox1.png'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
