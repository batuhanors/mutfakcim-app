import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    price: "",
    unit: "",
    category: ""
}

export const shopReducer = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        }
    }
})