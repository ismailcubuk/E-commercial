import React from "react";
import { Container, Grid } from "@mui/material";
import Navigation from "@/components/Layout/Profile/Navigation";
import OrdersCard from "@/components/Cards/OrdersCard";
import Main from "@/components/Layout/Profile/Main";
export default function orders() {

  return (
    <Container maxWidth="xl" className="flex pt-10 ">
      <Grid container>
        <Navigation />
        <Main variant="order">
          <OrdersCard />
        </Main>
      </Grid>
    </Container >

  );
}
