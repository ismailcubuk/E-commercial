import React from 'react'
import { getHeadphonesData } from '../../pages/api/mongodb';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Container, Grid } from "@mui/material";


// function headphones() {
//   return (
// <Container maxWidth="xl" className="flex p-10 ">
//   <Grid container className="flex justify-around border-2">
//     <Grid xs={12} sm={12} md={2} xl={2} >
//       <div>FİLTER</div>
//     </Grid>
//     <Grid
//       container xs={12} sm={12} md={8} xl={9} component={Paper} square
//       className="py-5 px-5 w-full border-small rounded-small border-default-200 ">
//       <Grid xs={12}>
//         <div>MAİN</div>
//       </Grid>
//     </Grid>
//   </Grid>
// </Container>
//   )
// }

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
    };
  }[];
};
function headphones({ headphonesData }: { headphonesData: HeadphoneDataType[] }) {
  return (
    <Container>
      <Grid className='flex border-2 border-red-600'>
        {headphonesData.map((headphone) => (
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


