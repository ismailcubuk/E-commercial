import React from "react";
import { getProductDetails } from "../../../api/productDetail";
import ProductMain from "@/components/Layout/ProductDetail/ProductMain";
import ProductImage from "@/components/Layout/ProductDetail/ProductImage";
import CustomContainer from "@/components/Container/CustomContainer";
import { Grid } from '@mui/material'

function ProductDetail({ product }) {
  if (!product) {
    return <p>Ürün bulunamadı.</p>;
  }

  return (
    <CustomContainer>
      <Grid container className="border-2 flex border-red-500 w-full h-full">
        <ProductImage product={product} />
        {/* <ProductMain product={product} /> */}
      </Grid>
    </CustomContainer>
  );
}

export default ProductDetail;
export async function getServerSideProps(context) {
  const { category, id } = context.params;

  let newCategory = category;

  switch (newCategory) {
    case "mouse":
    case "shoes":
      break;
    case "watch":
      newCategory += "es";
      break;
    default:
      newCategory += "s";
  }

  let lowercaseCategoryWithS = newCategory;

  const product = await getProductDetails(lowercaseCategoryWithS, id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  const stringifiedProductId = product._id.toString();

  return {
    props: {
      product: {
        ...product,
        _id: stringifiedProductId,
      },
    },
  };
}
