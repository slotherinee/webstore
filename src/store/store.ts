import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { fakeStoreApi } from './services/products'
import cartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
