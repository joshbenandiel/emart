import { configureStore } from '@reduxjs/toolkit'
import itemReducer from '../redux/itemSlice'
import cartReducer from '../redux/cartSlice'


export const store = configureStore({
  reducer: {
    item: itemReducer,
    cart: cartReducer,
  },
})