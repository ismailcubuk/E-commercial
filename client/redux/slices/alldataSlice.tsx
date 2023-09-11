import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface AllDataState {
    data: Record<string, any>;
    loading: boolean;
    error: string | null;
}

const initialState: AllDataState = {
    data: {},
    loading: false,
    error: null,
};

const allDataSlice = createSlice({
    name: "allData",
    initialState,
    reducers: {
        fetchAllDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchAllDataSuccess: (state, action: PayloadAction<Record<string, any>>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchAllDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchAllDataStart, fetchAllDataSuccess, fetchAllDataFailure } = allDataSlice.actions;

export const selectAllData = (state: RootState) => state.alldata;
export default allDataSlice.reducer;
