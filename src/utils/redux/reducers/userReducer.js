import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  credentials: {
    name: "",
  },
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = "";
    },
    setCredentials: (state, action) => {
      state.credentials.name = action.payload;
    },
    deleteCredential: (state) => {
      state.credentials.name = "";
      state.credentials.surname = "";
    },
    logOut: (state) => {
      state.token = state.token = "";
      state.credentials =  {
        name: "",
      } 
    },
  },
});

export const {
  setToken,
  deleteToken,
  setCredentials,
  deleteCredential,
  logOut,
} = userReducer.actions;

export const selectUserName = (state) => state.user.credentials.name;
export const selectUserToken = (state) => state.user.token;

export default userReducer.reducer;
