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
        },
        setUnit: (state, action) => {
            state.unit = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    }
})

export const {
    setName,
    setPrice,
    setUnit,
    setCategory
} = shopReducer.actions;

export const selectProductName = (state) => state.shop;


export default shopReducer.reducer;