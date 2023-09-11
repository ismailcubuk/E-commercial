import {
    fetchKeyboardsStart,
    fetchKeyboardsSuccess,
    fetchKeyboardsFailure,
} from "../slices/keyboardsSlice"; 
import { AppDispatch } from "../store/store";

export const fetchKeyboardsData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchKeyboardsStart()); 
    try {
        const response = await fetch("/api/keyboards");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchKeyboardsSuccess(data));
    } catch (err: any) {
        dispatch(fetchKeyboardsFailure(err.message as string));
    }
};
