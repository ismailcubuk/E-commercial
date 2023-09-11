import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface ShoesState {
    data: Shoe[];
    loading: boolean;
    error: string | null;
}

interface Shoe {
    title: string;
    _id: string;
    name: string;
}

const initialState: ShoesState = {
    data: [],
    loading: false,
    error: null,
};

const shoesSlice = createSlice({
    name: "shoes",
    initialState,
    reducers: {
        fetchShoesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchShoesSuccess: (state, action: PayloadAction<Shoe[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchShoesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchShoesStart, fetchShoesSuccess, fetchShoesFailure } = shoesSlice.actions;

export const selectShoes = (state: RootState) => state.shoes;
export default shoesSlice.reducer;
