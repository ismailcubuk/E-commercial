import React from 'react'
import { getShoesData } from '../api/shoes';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';

function shoes({ shoesData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.shoes} />
      <ProductList products={shoesData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const shoesData = await getShoesData();
    const serializedShoesData = JSON.parse(JSON.stringify(shoesData));

    return {
      props: {
        shoesData: serializedShoesData,
      },
    };
  } catch (error) {
    console.error("Error fetching shoes data:", error);
    return {
      props: {
        shoesData: [],
      },
    };
  }
}
export default shoes


