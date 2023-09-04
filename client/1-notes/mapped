import React from 'react'
import { Container, Grid, Paper } from "@mui/material";
import { getHeadphonesData } from '../../pages/api/mongodb';


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
    
    <div>
      <h1>Headphones List</h1>
      <ul className='flex'>
        {headphonesData.map((headphone) => (
          <li className='border-2 border-red-500 m-5' key={headphone._id}>
            <div className='border-2'>
              <div>
                title : {headphone.title}
              </div>
              <div>
                description : {headphone.description}
              </div>
              <div>
                brand : {headphone.brand}
              </div>
              <div>
                category : {headphone.category}
              </div>
              <div className='border-2 border-red-500'>
                {headphone.color.map((colors) => (
                  <div> variant :  {colors} </div>
                ))}
              </div>
            </div>
            <div>
              price: {headphone.price.quantity} {headphone.price.currency}
            </div>
            <div className='flex flex-col border-2 border-blue-500'>
              <div>
                usage : {headphone.features.usage}
              </div>
              <div>
                WaterResistance: {headphone.features.WaterResistance}
              </div>
              <div>
                connection : {headphone.features.connection}
              </div>
              <div>
                microphone : {headphone.features.microphone}
              </div>
              <div>
                warranty : {headphone.features.warranty}
              </div>
              <div>
                origin : {headphone.features.origin}
              </div>
            </div>
            <div>
              origin : {headphone.images.length > 0 && (
                <div>
                  <div> {headphone.images[0].variant} </div>
                  <div>
                    {headphone.images[0].sizes.s.length > 0 && (
                      <img src={headphone.images[0].sizes.s[0]} />
                    )}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
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


