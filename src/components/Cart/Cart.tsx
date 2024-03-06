import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/hooks/useRedux'
import { selectCartItems, selectTotalCost } from '@/store/cart/cartSlice'
import CartItem from './CartItem'
import { Product } from '@/types/productTypes'
import { Link } from 'react-router-dom'

const Cart = () => {
  const totalPrice = useAppSelector(selectTotalCost)
  const cartItems = useAppSelector(selectCartItems)
  return (
    <div className='min-h-screen bg-gray-100 pt-20'>
      <div className='mb-10 text-center text-2xl font-bold'>
        {!!cartItems.length ? (
          'Cart Items'
        ) : (
          <h3 className='font-light text-5xl text-gray-400'>Cart is empty</h3>
        )}
      </div>
      <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        <div className='rounded-lg md:w-2/3'>
          {!!cartItems.length ? (
            cartItems.map((data: Product) => (
              <CartItem key={data.id} data={data} />
            ))
          ) : (
            <div className='flex flex-col justify-center items-center'>
              <img src='/nocart.png' alt='no cart items' />
              <Button className='mt-20 active:scale-95' asChild>
                <Link to={'/store'}>Go back to shopping</Link>
              </Button>
            </div>
          )}
        </div>
        {!!cartItems.length && (
          <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
            <div className='mb-2 flex justify-between'>
              <p className='text-gray-700'>Subtotal</p>
              <p className='text-gray-700'>${totalPrice.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-gray-700'>Shipping</p>
              <p className='text-gray-700'>$5.00</p>
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
              <p className='text-lg font-bold'>Total</p>
              <div className=''>
                <p className='mb-1 text-lg font-bold'>
                  ${(totalPrice + 5.0).toFixed(2)} USD
                </p>
                <p className='text-sm text-gray-700'>including VAT</p>
              </div>
            </div>
            <Button className='w-full mt-6 active:scale-95'>Check out</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
