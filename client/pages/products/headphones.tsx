import React from 'react'
import { getHeadphonesData } from '../api/headphones';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';

function headphones({ headphonesData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.headphones} />
      <ProductList products={headphonesData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const headphonesData = await getHeadphonesData();
    const serializedHeadphonesData = JSON.parse(JSON.stringify(headphonesData));

    return {
      props: {
        headphonesData: serializedHeadphonesData,
      },
    };
  } catch (error) {
    console.error("Error fetching headphones data:", error);
    return {
      props: {
        headphonesData: [],
      },
    };
  }
}
export default headphones


