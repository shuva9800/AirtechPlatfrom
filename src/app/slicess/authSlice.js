import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signupData: null,
  loading: false,
  token:localStorage.getItem("shuvatoken") ? JSON.parse(localStorage.getItem("shuvatoken")) : null,
  error:null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
     signInFalior: (state,action) =>{
            state.error = action.payload;
            state.loading = false;
        },
  },
})

// Action creators are generated for each case reducer function
export const { setToken,setSignupData,setLoading, signInFalior} = authSlice.actions

export default authSlice.reducer