import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllData } from "@/redux/actions/alldataActions";
import { selectAllData } from "@/redux/slices/alldataSlice";
import ProductImage from "@/components/Layout/ProductDetail/ProductImage";
import CustomContainer from "@/components/Container/CustomContainer";
import { Grid } from '@mui/material'
export default function ProductPage() {
  const router = useRouter();
  const { category, id } = router.query;

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
  const lowercaseCategory = category?.toLocaleLowerCase();
  const filteredProduct = data[lowercaseCategory]?.find(
    (product) => product._id === id
  );

  if (!filteredProduct) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <CustomContainer>
      <Grid container className="flex w-full h-full">
        <ProductImage product={filteredProduct} />
      </Grid>
    </CustomContainer>
  );
}
