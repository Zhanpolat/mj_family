import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: localStorage.getItem('orders') ?
        JSON.parse(localStorage.getItem('orders')) : [],
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addToOrders: (state, action) => {
            state.orders.push({ ...action.payload })
            localStorage.setItem("orders", JSON.stringify(state.orders))
        },
        deleteOrders: (state) => {
            state.orders = []
            localStorage.setItem("orders", JSON.stringify(state.orders))
        }
    },
})

export const { addToOrders, deleteOrders } = ordersSlice.actions

export default ordersSlice.reducer