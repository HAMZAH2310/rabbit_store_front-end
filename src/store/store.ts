import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;