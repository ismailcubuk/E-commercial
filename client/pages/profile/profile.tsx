import React, { useState } from "react";

import { Listbox, ListboxItem, ListboxSection, Avatar, Badge } from "@nextui-org/react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ListboxWrapper from "../../components/Layout/ListboxWrapper";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import FirstName from "@/components/Forms/Profile/FirstName";
import SurName from "@/components/Forms/Profile/SurName";
import Mail from "@/components/Forms/Profile/Mail";
import Password from "@/components/Forms/Profile/Password";
import CustomButton from "@/components/Buttons/CustomButton";
import CustomListProfile from "@/components/List/CustomListProfile";



export default function profile() {

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const avatarImage = "https://i.pravatar.cc/150?u=a042581f4e29026024d";


  return (
    <Container maxWidth="xl" className="flex p-10 ">
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
          container xs={12} sm={12} md={8} xl={9} component={Paper} square
          className="py-5 px-5 w-full border-small rounded-small border-default-200 ">
          <Grid xs={12}>
            <div className="border-2 mb-5 border-red-400 flex w-full justify-between">
              <Typography variant="h4">Profile</Typography>
              {/* <BackToProfile/> */}
              <CustomButton>EDIT PROFLE</CustomButton>
            </div>

            <div className="flex gap-5 items-center ">
              <Badge content={<PhotoCameraOutlinedIcon />} className="w-10 h-10" placement="bottom-right" color="default">
                <Avatar src={avatarImage} radius='md' className="w-20 h-20" />
              </Badge>
              <Typography variant="h2"> İsmail çubuk</Typography>
            </div>

            <Grid container spacing={2} mt={2} mb={4}>
              {/* İlk grup */}
              <Grid item xs={12} >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6}>
                    <FirstName />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <SurName />
                  </Grid>
                </Grid>
              </Grid>

              {/* İkinci grup */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Mail />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <Password />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <CustomButton>SAVE CHANGES</CustomButton>
          </Grid>
        </Grid>
      </Grid>


    </Container>

  );
}
