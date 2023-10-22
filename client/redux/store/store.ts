import { configureStore } from "@reduxjs/toolkit";
import { editReducer, menuReducer, modalReducer, visibilityReducer } from "../reducers/Reducer";
import { userFormReducer } from "../reducers/userFormReducer";
import { basketReducer } from "../reducers/basketReducer";
import alldataReducer from "../slices/alldataSlice";
import userReducer from "../slices/userSlice";
import errorReducer from "../slices/errorSlice";

export const store = configureStore({
  reducer: {
    alldata: alldataReducer,
    toggleMenu: menuReducer,
    user: userReducer,
    modal: modalReducer,
    error: errorReducer,
    edit: editReducer,
    visibility: visibilityReducer,
    form: userFormReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
