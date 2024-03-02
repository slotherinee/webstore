import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../types/productTypes'

const initialState = {
  items: <Product[]>[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity =
          (state.items[itemIndex].quantity || 0) + 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity = (item.quantity || 0) + 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity = (item.quantity || 0) - 1
        if (item.quantity <= 0) {
          // If quantity is 0 or less, remove item from cart
          state.items = state.items.filter(item => item.id !== action.payload)
        }
      }
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export const selectTotalCost = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * (item.quantity || 0),
    0
  )

export default cartSlice.reducer
