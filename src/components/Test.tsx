import type { RootState } from '../store/store.ts'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/addToCart/addToCartSlice.ts'

export function Counter() {
  const count = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
