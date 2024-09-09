import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slice/registerSlice/registerSlice";
import tasksReducer from "./slice/tasksSlice/tasksSlice";

export const store = configureStore({
    reducer:{
        register:registerReducer,
        tasks:tasksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch