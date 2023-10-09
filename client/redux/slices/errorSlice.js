import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: "",
  reducers: {
    setErrorMessage: (state, action) => {
      return action.payload;
    },
    clearErrorMessage: (state) => {
      return "";
    },
  },
});

export const { setErrorMessage, clearErrorMessage } = errorSlice.actions;

export const selectErrorMessage = (state) => state.error;

export default errorSlice.reducer;
