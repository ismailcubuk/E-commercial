import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface MouseState {
    data: Mouse[];
    loading: boolean;
    error: string | null;
}

interface Mouse {
    title: string;
    _id: string;
    name: string;
}

const initialState: MouseState = {
    data: [],
    loading: false,
    error: null,
};

const mouseSlice = createSlice({
    name: "mouse",
    initialState,
    reducers: {
        fetchMouseStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMouseSuccess: (state, action: PayloadAction<Mouse[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchMouseFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchMouseStart, fetchMouseSuccess, fetchMouseFailure } = mouseSlice.actions;

export const selectMouse = (state: RootState) => state.mouse;
export default mouseSlice.reducer;
