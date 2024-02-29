import { useAppDispatch, useAppSelector } from '../hooks/useRedux.ts'
import {
  decrement,
  increment,
  selectCount,
} from '../store/addToCart/addToCartSlice.ts'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

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
