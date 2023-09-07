import React from 'react'
import { getPhonesData } from '../api/phones';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';



function phone({ phonesData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.phones} />
      <ProductList products={phonesData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const phonesData = await getPhonesData();
    const serializedPhonesData = JSON.parse(JSON.stringify(phonesData));

    return {
      props: {
        phonesData: serializedPhonesData,
      },
    };
  } catch (error) {
    console.error("Error fetching phones data:", error);
    return {
      props: {
        phonesData: [],
      },
    };
  }
}
export default phone


