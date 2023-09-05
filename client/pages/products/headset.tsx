import React from 'react'
import { getHeadsetsData } from '../api/headsets';
import ProductFilter from '@/components/Layout/ProductFilter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/SelectedProductLayout';
import CustomContainer from '@/components/Container/CustomContainer';

type HeadsetDataType = {
  _id: string;
  title: string;
  price: {
    quantity: number;
    currency: string;
  };
  images: {
    variant: string;
    sizes: {
      s: string[];
    };
  }[];
};

function headset({ headsetsData }: { headsetsData: HeadsetDataType[] }) {
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


