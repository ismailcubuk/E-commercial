import React from 'react'
import { getTshirtsData } from '../api/tshirts';
import ProductFilter from '@/components/Layout/ProductFilter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/SelectedProductLayout';
import CustomContainer from '@/components/Container/CustomContainer';

type TshirtsDataType = {
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

function tshirts({ tshirtsData }: { tshirtsData: TshirtsDataType[] }) {
  return (
    <CustomContainer>
      <ProductFilter variation={variations.tshirts} />
      <ProductList products={tshirtsData} />
    </CustomContainer>
  );
}

export async function getServerSideProps() {
  try {
    const tshirtsData = await getTshirtsData();
    const serializedTshirtssData = JSON.parse(JSON.stringify(tshirtsData));

    return {
      props: {
        tshirtsData: serializedTshirtssData,
      },
    };
  } catch (error) {
    console.error("Error fetching tshirts data:", error);
    return {
      props: {
        tshirtsData: [],
      },
    };
  }
}
export default tshirts


