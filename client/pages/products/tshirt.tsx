import React from 'react'
import { getTshirtsData } from '../api/tshirts';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';

function tshirts({ tshirtsData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.tshirts} />
      <ProductList products={tshirtsData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const tshirtsData = await getTshirtsData();
    const serializedTshirtsData = JSON.parse(JSON.stringify(tshirtsData));

    return {
      props: {
        tshirtsData: serializedTshirtsData,
      },
    };
  } catch (error) {
    console.error("Error fetching tshirts data:", error);
    return {
      props: {
        tshirtsData: [],
      },
    };
  }
}
export default tshirts


