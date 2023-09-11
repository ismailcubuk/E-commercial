import {
    fetchMouseStart,
    fetchMouseSuccess,
    fetchMouseFailure,
} from "../slices/mouseSlice"; 
import { AppDispatch } from "../store/store";

export const fetchMouseData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchMouseStart()); 
    try {
        const response = await fetch("/api/mouse"); 
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchMouseSuccess(data));
    } catch (err: any) {
        dispatch(fetchMouseFailure(err.message as string));
    }
};
