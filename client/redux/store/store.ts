import { configureStore } from "@reduxjs/toolkit";
import headphonesReducer from "../slices/headphonesSlice";
import menuReducer from '../reducers/menuReducer';

export const store = configureStore({
  reducer: {
    toggleMenu: menuReducer,
    headphones: headphonesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;