import React from "react";
import { Container, Grid, Typography, } from "@mui/material";
import { LocationOnIcon } from '../../components/Icons/Icons'
import AddressesCard from "@/components/Cards/Addresses/AddressesCard";
import CustomButton from "@/components/Buttons/CustomButton";
import Paper from '@mui/material/Paper';
import CustomListProfile from '@/components/List/CustomListProfile'
export default function wishlist() {

  return (
    <Container maxWidth="xl" className="flex pt-10 ">
      <Grid container className="flex justify-around">
        <Grid xs={12} sm={12} md={2} xl={2} >
          <Grid
            minWidth={200} component={Paper} elevation={6} square
            className="py-5 px-2 w-full border-small rounded-small border-default-200 ">
            <Typography variant="h6" className="pl-2">DASHBOARD</Typography>
            <CustomListProfile>Orders</CustomListProfile>
            <CustomListProfile>Wishlist</CustomListProfile>
            <CustomListProfile>Support</CustomListProfile>
            <Typography variant="h6" className="pl-2 pt-5">ACCOUNT SETTINGS</Typography>
            <CustomListProfile>Addresses</CustomListProfile>
            <CustomListProfile>Profile</CustomListProfile>
          </Grid>
        </Grid>
        <Grid
          container xs={12} sm={12} md={8} xl={9} component={Paper} elevation={6} square
          className="py-5 px-5 w-full border-small rounded-small border-default-200 ">
          <Grid xs={12}>
            <div className="mb-5 flex w-full justify-between items-center ">
              <div className="flex">
                <LocationOnIcon className="h-10 w-10 text-primary "/>
                <Typography variant="h4">My Addresses</Typography>
              </div>
              <CustomButton>Add New Address</CustomButton>
            </div>
            <div className="flex flex-col gap-4">
              <AddressesCard />
              <AddressesCard />
              <AddressesCard />
              <AddressesCard />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  );
}
