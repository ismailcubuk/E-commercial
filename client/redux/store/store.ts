import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '../reducers/menuReducer';
import alldataReducer from "../slices/alldataSlice";

export const store = configureStore({
  reducer: {
    alldata: alldataReducer,
    toggleMenu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
