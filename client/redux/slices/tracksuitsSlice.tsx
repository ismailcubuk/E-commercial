import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface TracksuitsState {
    data: Tracksuit[];
    loading: boolean;
    error: string | null;
}

interface Tracksuit {
    title: string;
    _id: string;
    name: string;
}

const initialState: TracksuitsState = {
    data: [],
    loading: false,
    error: null,
};

const tracksuitsSlice = createSlice({
    name: "tracksuits",
    initialState,
    reducers: {
        fetchTracksuitsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTracksuitsSuccess: (state, action: PayloadAction<Tracksuit[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchTracksuitsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchTracksuitsStart, fetchTracksuitsSuccess, fetchTracksuitsFailure } = tracksuitsSlice.actions;

export const selectTracksuits = (state: RootState) => state.tracksuits;
export default tracksuitsSlice.reducer;
