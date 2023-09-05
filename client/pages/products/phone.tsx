import React from 'react'
import { getPhonesData } from '../api/phones';
import ProductFilter from '@/components/Layout/ProductFilter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/SelectedProductLayout';
import CustomContainer from '@/components/Container/CustomContainer';

type PhonesDataType = {
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

function phone({ phonesData }: { phonesData: PhonesDataType[] }) {
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


