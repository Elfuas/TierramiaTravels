import { configureStore } from "@reduxjs/toolkit"
import { AuthReducer } from "@/features/AuthSlice"
import { PaymentsReducer } from "@/features/PaymentsSlices"

export const Store = configureStore({
   reducer:{
      Authentication: AuthReducer,
      Payments: PaymentsReducer
   }
})