import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface HeadsetsState {
    data: Headset[];
    loading: boolean;
    error: string | null;
}

interface Headset {
    title: string;
    _id: string;
    name: string;
}

const initialState: HeadsetsState = {
    data: [],
    loading: false,
    error: null,
};

const headsetsSlice = createSlice({
    name: "headsets", 
    initialState,
    reducers: {
        fetchHeadsetsStart: (state) => { 
            state.loading = true;
            state.error = null;
        },
        fetchHeadsetsSuccess: (state, action: PayloadAction<Headset[]>) => { 
            state.loading = false;
            state.data = action.payload;
        },
        fetchHeadsetsFailure: (state, action: PayloadAction<string>) => { 
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchHeadsetsStart, fetchHeadsetsSuccess, fetchHeadsetsFailure } = headsetsSlice.actions; 

export const selectHeadsets = (state: RootState) => state.headsets; 
export default headsetsSlice.reducer; 
