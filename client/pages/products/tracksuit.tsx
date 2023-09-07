import React from 'react'
import { getTracksuitsData } from '../api/tracksuits';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';

function tracksuits({ tracksuitsData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.tracksuits} />
      <ProductList products={tracksuitsData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const tracksuitsData = await getTracksuitsData();
    const serializedTracksuitsData = JSON.parse(JSON.stringify(tracksuitsData));

    return {
      props: {
        tracksuitsData: serializedTracksuitsData,
      },
    };
  } catch (error) {
    console.error("Error fetching tracksuits data:", error);
    return {
      props: {
        shoesData: [],
      },
    };
  }
}
export default tracksuits


