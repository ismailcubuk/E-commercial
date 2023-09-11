import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '../reducers/menuReducer';
import headphonesReducer from "../slices/headphonesSlice";
import headsetsReducer from "../slices/headsetsSlice";
import keyboardsReducer from "../slices/keyboardsSlice";
import mouseReducer from "../slices/mouseSlice";
import phonesReducer from "../slices/phonesSlice";
import shoesReducer from "../slices/shoesSlice";
import tracksuitsReducer from "../slices/tracksuitsSlice";
import tshirtsReducer from "../slices/tshirtsSlice";
import watchesReducer from "../slices/watchesSlice";

export const store = configureStore({
  reducer: {
    toggleMenu: menuReducer,
    headphones: headphonesReducer,
    headsets: headsetsReducer,
    keyboards: keyboardsReducer,
    mouse: mouseReducer,
    phones: phonesReducer,
    shoes: shoesReducer,
    tracksuits: tracksuitsReducer,
    tshirts: tshirtsReducer,
    watches: watchesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
