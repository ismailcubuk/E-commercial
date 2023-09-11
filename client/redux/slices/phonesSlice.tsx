import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface PhonesState {
    data: Phone[];
    loading: boolean;
    error: string | null;
}

interface Phone {
    title: string;
    _id: string;
    name: string;
}

const initialState: PhonesState = {
    data: [],
    loading: false,
    error: null,
};

const phonesSlice = createSlice({
    name: "phones",
    initialState,
    reducers: {
        fetchPhonesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPhonesSuccess: (state, action: PayloadAction<Phone[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchPhonesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchPhonesStart, fetchPhonesSuccess, fetchPhonesFailure } = phonesSlice.actions;

export const selectPhones = (state: RootState) => state.phones;
export default phonesSlice.reducer;
