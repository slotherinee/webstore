import testimonialsData from '../../utils/testimonialsData'

const Testimonials = () => {
  return (
    <section id='testimonials' className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {testimonialsData.map(({ name, role, image, content = '' }) => (
            <div key={name} className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
              <div className='h-full flex flex-col justify-between items-center text-center'>
                <div>
                  <img
                    alt='testimonial'
                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                    src={image}
                  />
                  <p className='leading-relaxed'>{content}</p>
                </div>
                <div>
                  <span className='inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4'></span>
                  <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                    {name}
                  </h2>
                  <p className='text-gray-500'>{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
