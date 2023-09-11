import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../slices/headphonesSlice";
import { AppDispatch } from "../store/store";

export const fetchHeadphonesData = () => async (dispatch: AppDispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await fetch("/api/headphones");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (err:any) {
    dispatch(fetchDataFailure(err.message as string));
  }
};
