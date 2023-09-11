import {
    fetchAllDataStart,
    fetchAllDataSuccess,
    fetchAllDataFailure,
} from "../slices/alldataSlice";
import { AppDispatch } from "../store/store";

export const fetchAllData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchAllDataStart());
    try {
        const response = await fetch("/api/getAllData");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(fetchAllDataSuccess(data));
    } catch (err: any) {
        dispatch(fetchAllDataFailure(err.message as string));
    }
};
