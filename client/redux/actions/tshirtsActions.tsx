import {
    fetchTshirtsStart,
    fetchTshirtsSuccess,
    fetchTshirtsFailure,
} from "../slices/tshirtsSlice"; 
import { AppDispatch } from "../store/store";

export const fetchTshirtsData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchTshirtsStart());
    try {
        const response = await fetch("/api/tshirts");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchTshirtsSuccess(data));
    } catch (err: any) {
        dispatch(fetchTshirtsFailure(err.message as string));
    }
};
