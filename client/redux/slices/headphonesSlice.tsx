import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface HeadphonesState {
    data: Headphone[];
    loading: boolean;
    error: string | null;
}

interface Headphone {
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
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<Headphone[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = headphonesSlice.actions;

export const selectHeadphones = (state: RootState) => state.headphones;
export default headphonesSlice.reducer;
