import React from 'react'
import { getHeadphonesData } from '../../pages/api/mongodb';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Container, Grid, Hidden } from "@mui/material";
import ProductFilter from '@/components/CheckBoxs/ProductFilter';
import { variations } from '@/components/variants/data'

type HeadphoneDataType = {
  _id: string;
  title: string;
  description: string;
  brand: string;
  category: string;
  color: string[];
  price: {
    quantity: number;
    currency: string;
  };
  features: {
    usage: string;
    WaterResistance: string;
    connection: string;
    microphone: string;
    warranty: string;
    origin: string;
  };
  images: {
    variant: string;
    sizes: {
      s: string[];
      m: string[];
    };
  }[];
};

function headphones({ headphonesData }: { headphonesData: HeadphoneDataType[] }) {
  return (
    <Container maxWidth="xl" className='flex border-2 border-red-600'>
      <Hidden smDown>
        <Grid container sm={5} md={3} xl={3} className='border-2 border-green-500 w-full'>
          <ProductFilter variation={variations.headphones} />
        </Grid>
      </Hidden>
      <Grid container xs={12} sm={7} md={9} xl={9} className='border-2 border-green-600'>
        {headphonesData.map((headphone) => (
          <Grid xs={12} sm={6} md={4} xl={3} className='border-2 h-fit flex justify-center border-blue-600'>
            <Card shadow="md" key={headphone._id} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                {headphone.images.length > 0 && (
                  <div>
                    {headphone.images[0].sizes.s.length > 0 && (
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={headphone.title}
                        src={headphone.images[0].sizes.s[0]} />
                    )}
                  </div>
                )}
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{headphone.title}</b>
                <p className="text-default-500">{headphone.price.quantity} {headphone.price.currency}</p>
              </CardFooter>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export async function getServerSideProps() {
  try {
    const headphonesData = await getHeadphonesData();
    const serializedHeadphonesData = JSON.parse(JSON.stringify(headphonesData));

    return {
      props: {
        headphonesData: serializedHeadphonesData,
      },
    };
  } catch (error) {
    console.error("Error fetching headphones data:", error);
    return {
      props: {
        headphonesData: [],
      },
    };
  }
}
export default headphones


