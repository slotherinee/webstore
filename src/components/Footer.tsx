import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center justify-between sm:flex-row flex-col'>
        <Link
          to={'/'}
          onClick={handleLogoClick}
          className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'
        >
          <img
            src='/public/ReactLogo.png'
            alt='react fakestore logo'
            width={100}
          />
        </Link>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4'>
          © 2023 React FakeStore
        </p>
      </div>
    </footer>
  )
}

export default Footer
