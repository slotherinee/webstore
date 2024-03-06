import { Link, NavLink, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'
import { useAppSelector } from '@/hooks/useRedux'
import { totalCartItems } from '@/store/cart/cartSlice'

const Header = () => {
  const count = useAppSelector(totalCartItems)
  const location = useLocation()
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
        {location.pathname === '/store' ? (
          <Link to={'/cart'}>
            <Button
              variant='outline'
              size='sm'
              className='hover:text-white hover:bg-slate-900 px-6 active:scale-95'
            >
              Cart ({count})
            </Button>
          </Link>
        ) : (
          <Link to={'/store'}>
            <Button
              variant='outline'
              size='sm'
              className='hover:text-white hover:bg-slate-900 px-5 active:scale-95'
            >
              Store
              <MoveRight className='ml-3' strokeWidth={1} size={20} />
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
