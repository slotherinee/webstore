import { createSlice } from '@reduxjs/toolkit'
import type { Product } from '../../types/productTypes'
import { RootState } from '../store'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: Product[]
  itemsInCart: number
}
const initialState: CartState = {
  items: [],
  itemsInCart: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
      state.itemsInCart = state.items.length
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(
        item => item.itemId !== action.payload.itemId
      )
      state.itemsInCart = state.items.length
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const selectCartItems = (state: RootState) => state.cart.items
export default cartSlice.reducer
