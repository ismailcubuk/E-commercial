import React from 'react'
import { getKeyboardsData } from '../api/keyboards';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';

function keyboards({ keyboardsData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.keyboards} />
      <ProductList products={keyboardsData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const keyboardsData = await getKeyboardsData();
    const serializedKeyboardsData = JSON.parse(JSON.stringify(keyboardsData));

    return {
      props: {
        keyboardsData: serializedKeyboardsData,
      },
    };
  } catch (error) {
    console.error("Error fetching keyboards data:", error);
    return {
      props: {
        keyboardsData: [],
      },
    };
  }
}
export default keyboards


