import {
    fetchHeadsetsStart,
    fetchHeadsetsSuccess,
    fetchHeadsetsFailure,
} from "../slices/headsetsSlice";
import { AppDispatch } from "../store/store";

export const fetchHeadsetsData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchHeadsetsStart());
    try {
        const response = await fetch("/api/headsets");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchHeadsetsSuccess(data));
    } catch (err: any) {
        dispatch(fetchHeadsetsFailure(err.message as string));
    }
};
