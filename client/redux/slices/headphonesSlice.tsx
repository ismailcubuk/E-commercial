import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface HeadphonesState {
    data: Headphone[];
    loading: boolean;
    error: string | null;
}

interface Headphone {
    title: string;
    _id: string;
    name: string;
}

const initialState: HeadphonesState = {
    data: [],
    loading: false,
    error: null,
};

const headphonesSlice = createSlice({
    name: "headphones",
    initialState,
    reducers: {
        fetchHeadphonesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchHeadphonesSuccess: (state, action: PayloadAction<Headphone[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchHeadphonesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchHeadphonesStart, fetchHeadphonesSuccess, fetchHeadphonesFailure } = headphonesSlice.actions;

export const selectHeadphones = (state: RootState) => state.headphones;
export default headphonesSlice.reducer;
