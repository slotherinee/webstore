import { configureStore } from '@reduxjs/toolkit'
import addToCartSlice from './addToCart/addToCartSlice'

export const store = configureStore({
  reducer: {
    cart: addToCartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
