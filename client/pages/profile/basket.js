import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Button, Image } from "@nextui-org/react";
import userDataService from "@/utils/userDataService";
import { useQuery } from "react-query";

export default function basket() {
  const { data } = useQuery("userData", userDataService.getUserData);

  return (
    <Container maxWidth="xl" className="flex pt-10 ">
      <Grid container className="border-2 w-full">
        <Grid item xs={12} lg={8} className="border-2 p-10">
          <Typography variant="h4" className="pb-5">
            BASKET{" "}
          </Typography>
          {data &&
            data.basket.map((item, index) => (
              <Grid
                key={index}
                className="flex flex-row justify-between items-center py-2 border-b-2 w-full"
              >
                <Grid xs={6} md={3}>
                  <Image height={100} width={100} src={item.productImage} />
                </Grid>
                <Grid xs={6} md={3}>
                  <p>{item.productName}</p>
                </Grid>
                <Grid xs={6} md={3}>
                  <p>Product properties :</p>
                  <p>{item.productDetail}</p>
                </Grid>
                <Grid>
                  <p>{item.productPrice} TRY</p>
                </Grid>
                <Grid sm={6} md={3} className="flex justify-center">
                  <Button color="primary">delete</Button>
                </Grid>
              </Grid>
            ))}
          <Grid className="flex justify-end pt-2 w-full">
            <Grid sm={3} className="justify-center flex">
              <p>Delete Button</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} className="border-2">
          xs=4
        </Grid>
      </Grid>
    </Container>
  );
}
