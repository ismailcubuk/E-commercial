import React from 'react'
import { getWatchesData } from '../api/watches';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';

function watch({ watchesData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.watches} />
      <ProductList products={watchesData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const watchesData = await getWatchesData();
    const serializedWatchesData = JSON.parse(JSON.stringify(watchesData));

    return {
      props: {
        watchesData: serializedWatchesData,
      },
    };
  } catch (error) {
    console.error("Error fetching watch data:", error);
    return {
      props: {
        watchesData: [],
      },
    };
  }
}
export default watch


