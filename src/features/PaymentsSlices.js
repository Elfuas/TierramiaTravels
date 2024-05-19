import { createSlice } from "@reduxjs/toolkit"


const PaymentsSlice = createSlice({
   name: "Payments",
   initialState: {
      trans: null,
      Headers: {
         token: null,
         cardID: null,
         cvc: null
      }
   },
   reducers: {
      StartWithPay: state => {
         state.trans = !null
      }
   }
})

export const {} = PaymentsSlice.actions
export const PaymentsReducer = PaymentsSlice.reducer