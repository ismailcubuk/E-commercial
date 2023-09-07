import React from 'react'
import { getHeadsetsData } from '../api/headsets';
import ProductFilter from '@/components/Layout/Product/Filter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/Product/ProductMain';
import CustomContainer from '@/components/Container/CustomContainer';

function headset({ headsetsData }: any) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.headset} />
      <ProductList products={headsetsData} />
    </CustomContainer>

  );
}

export async function getServerSideProps() {
  try {
    const headsetsData = await getHeadsetsData();
    const serializedheadsetData = JSON.parse(JSON.stringify(headsetsData));

    return {
      props: {
        headsetsData: serializedheadsetData,
      },
    };
  } catch (error) {
    console.error("Error fetching headset data:", error);
    return {
      props: {
        headsetsData: [],
      },
    };
  }
}
export default headset


