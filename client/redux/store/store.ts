import { configureStore } from "@reduxjs/toolkit";
import {menuReducer, modalReducer} from "../reducers/Reducer";
import alldataReducer from "../slices/alldataSlice";
import userReducer from "../slices/userSlice";
import errorReducer from '../slices/errorSlice';

export const store = configureStore({
  reducer: {
    alldata: alldataReducer,
    toggleMenu: menuReducer,
    user: userReducer,
    modal : modalReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
