import {
  fetchHeadphonesStart,
  fetchHeadphonesSuccess,
  fetchHeadphonesFailure,
} from "../slices/headphonesSlice";
import { AppDispatch } from "../store/store";

export const fetchHeadphonesData = () => async (dispatch: AppDispatch) => {
  dispatch(fetchHeadphonesStart());
  try {
      const response = await fetch("/api/headphones"); 
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(fetchHeadphonesSuccess(data)); 
  } catch (err: any) {
      dispatch(fetchHeadphonesFailure(err.message as string));
  }
};
