import React from "react";
import { getProductDetails } from "../../../api/productDetail";

function ProductDetail({ product }) {
  if (!product) {
    return <p>Ürün bulunamadı.</p>;
  }
  console.log(product);
  return (
    <div>
      <h2>Ürün Detay Sayfası</h2>
      <p>Ürün Adı: {product.title}</p>
      <p>Ürün Fiyatı: {product.category}</p>
    </div>
  );
}

export default ProductDetail;
export async function getServerSideProps(context) {
  const { category, id } = context.params; 

  let newCategory = category

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
