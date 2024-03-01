import useShopNow from '../../hooks/useShopNow.tsx'
import { sectionsData } from '../../utils/featuresData.ts'
import { Button } from '../ui/button.tsx'

const Features = () => {
  const handleShopNowClick = useShopNow()
  return (
    <section id='features' className='text-gray-600 body-font bg-gray-100'>
      <div className='container px-5 py-20 mx-auto'>
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
          {sectionsData.map((section, index) => (
            <div key={index} className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
              <h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
                {section.title}
              </h2>
              <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5'>
                {section.items.map((item, idx) => (
                  <a key={idx}>
                    <span className='bg-blue-500 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
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
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <Button
          onClick={handleShopNowClick}
          className='flex mx-auto mt-16 text-white py-2 px-8 active:scale-95'
        >
          Shop Now
        </Button>
      </div>
    </section>
  )
}

export default Features
