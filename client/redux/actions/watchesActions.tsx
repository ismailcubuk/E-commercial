import {
    fetchWatchesStart,
    fetchWatchesSuccess,
    fetchWatchesFailure,
} from "../slices/watchesSlice";
import { AppDispatch } from "../store/store";

export const fetchWatchesData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchWatchesStart());
    try {
        const response = await fetch("/api/watches");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchWatchesSuccess(data));
    } catch (err: any) {
        dispatch(fetchWatchesFailure(err.message as string));
    }
};
