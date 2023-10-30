import React, { useEffect } from "react";
import { Container, Grid, Typography, } from "@mui/material";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Paper from '@mui/material/Paper';
import userDataService from '@/utils/userDataService';
import { useQuery } from "react-query";
import Navigation from "@/components/Layout/Profile/Navigation";
import Main from "@/components/Layout/Profile/Main";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
export default function wishlist() {
  const { data, refetch } = useQuery('userData', userDataService.getUserData);
  console.log(data?.wishlist[0].favProductColor);

  return (
    <Container maxWidth="xl" className="flex pt-10 ">
      <Grid container>
        <Navigation />
        <Main variant="wishlist">
          <Grid item xs={12} className='flex flex-wrap justify-center sm:justify-start'>
            {data?.wishlist.map((wish) => (
              <Grid item sm={12} md={6} lg={4} xl={3} className='h-fit flex justify-center items-center p-4' key={wish._id}>
                <Card className='h-fit' shadow="md" key={wish._id} isPressable>
                  <CardBody className="overflow-visible p-0">
                    {wish.favProduct.images.length > 0 && (
                      <div className="relative">
                          <Button isIconOnly color="danger" size="sm" aria-label="Like" className="absolute z-50 right-2 top-2">
                            <ClearIcon />
                          </Button>
                          {wish.favProduct.images[0].sizes.s.length > 0 && (
                            <Image
                              shadow="sm"
                              radius="lg"
                              width="100%"
                              alt={wish.favProduct.title}
                              src={wish.favProduct.images[0].sizes.s[0]}
                            />
                          )}
                      </div>
                    )}
                  </CardBody>
                  <CardFooter>
                    <Grid container >
                      <Grid item xs={12} className="text-small" >
                        {(wish.favProduct.category.toLowerCase() === "shoes" || wish.favProduct.category.toLowerCase() === "tracksuit" || wish.favProduct.category.toLowerCase() === "tshirt") &&
                          wish.favProduct.brand && wish.favProduct.gender && (
                            <div>
                              <b className=' mr-2'>{wish.favProduct.brand}</b>
                              <b>{wish.favProduct.gender}</b>
                            </div>
                          )}
                        <b className="flex justify-start">{wish.favProduct.title} {wish.favProduct.variant} {wish.favProduct.gb}</b>
                      </Grid>
                        <Grid item xs={12} className="flex justify-between" >
                          <b className="text-lg">{wish.favProduct.price.quantity} {wish.favProduct.price.currency}</b>
                          <Button isIconOnly color="primary" size="sm" aria-label="Like">
                            <AddIcon />
                          </Button>
                      </Grid>
                    </Grid>
                  </CardFooter>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Main>
      </Grid>
    </Container>

  );
}
