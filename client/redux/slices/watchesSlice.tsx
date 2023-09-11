import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface WatchesState {
    data: Watch[];
    loading: boolean;
    error: string | null;
}

interface Watch {
    title: string;
    _id: string;
    name: string;
}

const initialState: WatchesState = {
    data: [],
    loading: false,
    error: null,
};

const watchesSlice = createSlice({
    name: "watches",
    initialState,
    reducers: {
        fetchWatchesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchWatchesSuccess: (state, action: PayloadAction<Watch[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchWatchesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchWatchesStart, fetchWatchesSuccess, fetchWatchesFailure } = watchesSlice.actions;

export const selectWatches = (state: RootState) => state.watches;
export default watchesSlice.reducer;
