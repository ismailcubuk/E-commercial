import {
    fetchShoesStart,
    fetchShoesSuccess,
    fetchShoesFailure,
} from "../slices/shoesSlice";
import { AppDispatch } from "../store/store";

export const fetchShoesData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchShoesStart());
    try {
        const response = await fetch("/api/shoes");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchShoesSuccess(data));
    } catch (err: any) {
        dispatch(fetchShoesFailure(err.message as string));
    }
};
