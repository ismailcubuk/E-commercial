import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '../reducers/menuReducer';
import alldataReducer from "../slices/alldataSlice";
import userReducer from "../slices/userSlice"
export const store = configureStore({
  reducer: {
    alldata: alldataReducer,
    toggleMenu: menuReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
