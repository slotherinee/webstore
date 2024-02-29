import { useAppDispatch, useAppSelector } from '../hooks/useRedux.ts'
import {
  decrement,
  increment,
  selectCount,
} from '../store/addToCart/addToCartSlice.ts'
import { useGetPokemonByNameQuery } from '../store/services/pokemon.ts'
export default function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')

  return (
    <>
      <div className='App'>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
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
    </>
  )
}
