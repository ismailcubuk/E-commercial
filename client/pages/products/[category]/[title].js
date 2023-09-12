import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllData } from "@/redux/actions/alldataActions";
import { selectAllData } from "@/redux/slices/alldataSlice";
import { AppDispatch } from "@/redux/store/store";

export default function ProductDetail() {
  const router = useRouter();
  const { category, title } = router.query;

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectAllData);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
//   const formattedTitle = title?.replace("-", " ");
//   const spacedText = formattedTitle?.split(" ")



//   const upper = spacedText?.map((item) => {
//     return item[0].toUpperCase()+item.slice(1).toLowerCase()+" ";
//   })
// const asd = JSON.stringify(upper)
// console.log(formattedTitle);



  // console.log(data[category]?.filter((product) => product.title === "Logitech G903"));

  return <div>asd</div>;
}
