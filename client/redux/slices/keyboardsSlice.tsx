import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface KeyboardsState {
    data: Keyboard[];
    loading: boolean;
    error: string | null;
}

interface Keyboard {
    title: string;
    _id: string;
    name: string;
}

const initialState: KeyboardsState = {
    data: [],
    loading: false,
    error: null,
};

const keyboardsSlice = createSlice({
    name: "keyboards",
    initialState,
    reducers: {
        fetchKeyboardsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchKeyboardsSuccess: (state, action: PayloadAction<Keyboard[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchKeyboardsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchKeyboardsStart, fetchKeyboardsSuccess, fetchKeyboardsFailure } = keyboardsSlice.actions;

export const selectKeyboards = (state: RootState) => state.keyboards;
export default keyboardsSlice.reducer; 
