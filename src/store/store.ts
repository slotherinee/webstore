import { configureStore } from '@reduxjs/toolkit'
import addToCartSlice from './addToCart/addToCartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './services/pokemon'
import { fakeStoreApi } from './services/products'

export const store = configureStore({
  reducer: {
    cart: addToCartSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      fakeStoreApi.middleware
    ),
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
