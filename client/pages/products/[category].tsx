import React from "react";
import CustomContainer from "@/components/Container/CustomContainer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllData } from "@/redux/actions/alldataActions";
import { selectAllData } from "@/redux/slices/alldataSlice";
import { AppDispatch } from "@/redux/store/store";
import { useRouter } from "next/router";
import ProductFilter from '@/components/Layout/Product/Filter';
import ProductList from '@/components/Layout/Product/ProductMain';

export default function category() {
  const router = useRouter();
  const { category } = router.query;

  const dispatch: AppDispatch = useDispatch();
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

  return (
    <CustomContainer>
      <ProductFilter category={category} />
      <ProductList products={data[category]} />
    </CustomContainer>
  );
}
