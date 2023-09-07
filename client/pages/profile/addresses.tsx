import React from "react";
import { Container, Grid, Typography, } from "@mui/material";
import AddressesCard from "@/components/Cards/AddressesCard";
import Navigation from "@/components/Layout/Profile/Navigation";
import Main from "@/components/Layout/Profile/Main";

export default function addresses() {

  return (
    <Container maxWidth="xl" className="flex pt-10 ">
      <Grid container>
        <Navigation />
        <Main variant="address">
          <AddressesCard />
        </Main>
      </Grid>
    </Container>

  );
}
