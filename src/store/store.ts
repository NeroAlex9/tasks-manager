import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slice/registerSlice/registerSlice";
import authReducer from "./slice/authSlice/authSlice"

export const store = configureStore({
    reducer:{
        register:registerReducer,
        auth: authReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch