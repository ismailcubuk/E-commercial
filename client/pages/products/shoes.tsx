import React from 'react'
import { getShoesData } from '../api/shoes';
import ProductFilter from '@/components/Layout/ProductFilter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/SelectedProductLayout';
import CustomContainer from '@/components/Container/CustomContainer';

type ShoesDataType = {
  _id: string;
  title: string;
  gender: string;
  brand: string;
  category: string;
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

function shoes({ shoesData }: { shoesData: ShoesDataType[] }) {
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


