import React from 'react'
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

export default headphones


