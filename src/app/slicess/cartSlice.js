import { createSlice } from '@reduxjs/toolkit'
import {toast} from "react-hot-toast"

const initialState = {
totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTotalItems(state,action){
      state.totalItems =action.payload
    },
    //add to cart
    //remove from cart
    //resetCart
     resetCart: (state) => {
      state.cart = []
      state.total = 0
      state.totalItems = 0
      // Update to localstorage
      localStorage.removeItem("cart")
      localStorage.removeItem("total")
      localStorage.removeItem("totalItems")
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTotalItems,resetCart} = cartSlice.actions

export default cartSlice.reducer