import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token:localStorage.getItem("shuvatoken") ? JSON.parse(localStorage.getItem("shuvatoken")) : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state,action){
      state.token =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setToken} = authSlice.actions

export default authSlice.reducer