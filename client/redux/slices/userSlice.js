import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    setUserData: (state, action) => {
      const { email, firstName, lastName } = action.payload;
      state.email = email;
      state.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
      state.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
