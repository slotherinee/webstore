import { Button } from '@/components/ui/button'
import { Link, useRouteError, ErrorResponse } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse
  console.error(error)

  return (
    <div className='bg-gray-100 px-2 text-center'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <Link to={'/'}>
          <img
            src='/ReactLogo.png'
            width={100}
            className='absolute top-0 left-0 m-5'
          />
        </Link>
        <h1 className='text-8xl font-extrabold text-red-500'>{error.status}</h1>
        <p className='text-4xl font-medium text-gray-800'>{error.statusText}</p>
        <p className='text-xl text-gray-800 my-4'>
          We apologize for the inconvenience. Please try again later.
        </p>
        <Button asChild>
          <Link to={'/store'}>Go back to shopping</Link>
        </Button>
      </div>
    </div>
  )
}
