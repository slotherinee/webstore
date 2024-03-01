import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as Error
  console.error(error)

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Link to={'/'}>
        <img
          src='/ReactLogo.png'
          width={100}
          className='absolute top-0 left-0 m-5'
        />
      </Link>
      <h1 className='text-3xl mb-5'>Oops!</h1>
      <p className='text-xl'>
        Sorry, an unexpected error has occurred. Page not found.
      </p>
      <p>
        <i>{error.message}</i>
      </p>
      <Link className='mt-5' to={'/'}>
        <button className='border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'>
          Go back
        </button>
      </Link>
    </div>
  )
}
