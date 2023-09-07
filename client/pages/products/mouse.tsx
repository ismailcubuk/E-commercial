import React from 'react'
import { getMouseData } from '../api/mouse';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';

function mouse({ mouseData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.mouse} />
      <ProductList products={mouseData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const mouseData = await getMouseData();
    const serializedMouseData = JSON.parse(JSON.stringify(mouseData));

    return {
      props: {
        mouseData: serializedMouseData,
      },
    };
  } catch (error) {
    console.error("Error fetching mouse data:", error);
    return {
      props: {
        mouseData: [],
      },
    };
  }
}
export default mouse