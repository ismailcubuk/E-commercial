import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface TshirtsState {
    data: Tshirt[];
    loading: boolean;
    error: string | null;
}

interface Tshirt {
    title: string;
    _id: string;
    name: string;
}

const initialState: TshirtsState = {
    data: [],
    loading: false,
    error: null,
};

const tshirtsSlice = createSlice({
    name: "tshirts",
    initialState,
    reducers: {
        fetchTshirtsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTshirtsSuccess: (state, action: PayloadAction<Tshirt[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchTshirtsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchTshirtsStart, fetchTshirtsSuccess, fetchTshirtsFailure } = tshirtsSlice.actions;

export const selectTshirts = (state: RootState) => state.tshirts;
export default tshirtsSlice.reducer;
