import {
    fetchPhonesStart,
    fetchPhonesSuccess,
    fetchPhonesFailure,
} from "../slices/phonesSlice";
import { AppDispatch } from "../store/store";

export const fetchPhonesData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchPhonesStart()); 
    try {
        const response = await fetch("/api/phones");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchPhonesSuccess(data));
    } catch (err: any) {
        dispatch(fetchPhonesFailure(err.message as string)); 
    }
};
