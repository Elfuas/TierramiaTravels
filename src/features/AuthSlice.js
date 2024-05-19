import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
   name: "Authentication",
   initialState: {
      loading: false,
      payload: "not-authenticated"
   },
   reducers: {
      StartAuthentication: state => {
         state = state.loading = true
      },

      SignUpNewUser: (state, action) =>{
         state.loading = true
         console.log( action )
         state.loading = false
      }
   }
})

export const { StartAuthentication, SignUpNewUser } = AuthSlice.actions
export const AuthReducer = AuthSlice.reducer