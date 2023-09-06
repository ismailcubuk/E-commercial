import React from 'react'
import { getTracksuitsData } from '../api/tracksuits';
import ProductFilter from '@/components/Layout/ProductFilter';
import { variations } from '@/components/variants/data'
import ProductList from '@/components/Layout/SelectedProductLayout';
import CustomContainer from '@/components/Container/CustomContainer';

type TracksuitsDataType = {
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

function tracksuits({ tracksuitsData }: { tracksuitsData: TracksuitsDataType[] }) {
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


