import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./slice/ordersSlice";

export const store = configureStore({
    reducer: {
        orders: ordersReducer,
    },
})