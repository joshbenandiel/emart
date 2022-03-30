import { createSlice , current  } from '@reduxjs/toolkit'


const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
   addToCart: (state, action) => {
    const cartList = state.cart
    const newItem = action.payload
    const findItem = state.cart.find(item => item.id === newItem.id)


    if(findItem){
      console.log(current(cartList))
      cartList.map(item => {
        if(item.id === newItem.id){
          return item.count += 1 
        } else {
          return null
        }
      })
      
    } else {
      let newArr = [
          ...cartList,
          {
            ...newItem,
            count: 1
          }
      ]

      state.cart = newArr
    }
   },
   removeToCart: ((state, action) => {
    const cartList = state.cart
    const selectedItem = action.payload

    const filteredItems = cartList.filter(item => item.id !== selectedItem.id)

    state.cart = filteredItems

   }),
   increment: (state, action) => {
      const cartList = state.cart
      const selectedItem = action.payload

      cartList.map(item => {
        if(item.id === selectedItem.id){
          return item.count += 1 
        } else {
          return null
        }
      })
   },
   decrement: (state, action) => {
    const cartList = state.cart
    const selectedItem = action.payload
    const filteredItems = cartList.filter(item => item.id !== selectedItem.id)

    cartList.map(item => {
      if(item.id === selectedItem.id){
        if(item.count === 1){
          return state.cart = filteredItems
        } else {
          return item.count -= 1
        }
      } else {
        return null
      }

    })
 },
  },
})


export const { addToCart, removeToCart, increment,  decrement } = cartSlice.actions

export default cartSlice.reducer