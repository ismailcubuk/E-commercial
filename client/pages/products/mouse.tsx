import React from 'react'
import { getMouseData } from '../api/mouse';
import ProductFilter from '@/components/Layout/ProductFilter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/SelectedProductLayout';
import CustomContainer from '@/components/Container/CustomContainer';

type MouseDataType = {
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

function mouse({ mouseData }: { mouseData: MouseDataType[] }) {
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