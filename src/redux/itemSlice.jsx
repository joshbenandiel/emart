import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: {},
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
   setSelectedItem: (state, action) => {
      state.item = action.payload
   }
  },
})


export const { setSelectedItem } = itemSlice.actions

export default itemSlice.reducer