import userReducer from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./reducers/shopReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    shop: shopReducer,
  },
});
