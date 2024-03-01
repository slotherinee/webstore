import { Link, NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { Button, buttonVariants } from '../ui/button'

const Header = () => {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to={'/'}
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <img src='/ReactLogo.png' alt='react fakestore logo' width={100} />
        </Link>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          <NavLink to={'/'} className='mr-5 hover:text-gray-900 cursor-pointer'>
            Home
          </NavLink>
          <ScrollLink
            to='gallery'
            smooth={true}
            duration={1000}
            className='mr-5 hover:text-gray-900 cursor-pointer'
          >
            Gallery
          </ScrollLink>
          <ScrollLink
            to='features'
            smooth={true}
            duration={1500}
            className='mr-5 hover:text-gray-900 cursor-pointer'
          >
            Features
          </ScrollLink>
          <ScrollLink
            to='testimonials'
            smooth={true}
            duration={2000}
            className='mr-5 hover:text-gray-900 cursor-pointer'
          >
            Testimonials
          </ScrollLink>
        </nav>
        <NavLink to={'/store'}>
          <Button
            variant='outline'
            size='sm'
            className='hover:text-white hover:bg-slate-900'
          >
            Store
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </Button>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
