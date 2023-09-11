import {
    fetchTracksuitsStart,
    fetchTracksuitsSuccess,
    fetchTracksuitsFailure,
} from "../slices/tracksuitsSlice";
import { AppDispatch } from "../store/store";

export const fetchTracksuitsData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchTracksuitsStart());
    try {
        const response = await fetch("/api/tracksuits");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchTracksuitsSuccess(data));
    } catch (err: any) {
        dispatch(fetchTracksuitsFailure(err.message as string));
    }
};
