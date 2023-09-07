import React from "react";

import { Avatar, Badge } from "@nextui-org/react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { CustomButton } from "@/components/CustomButton";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import FirstName from "@/components/Forms/Profile/FirstName";
import SurName from "@/components/Forms/Profile/SurName";
import Mail from "@/components/Forms/Profile/Mail";
import Password from "@/components/Forms/Profile/Password";
import Navigation from "@/components/Layout/Profile/Navigation";
import Main from "@/components/Layout/Profile/Main";

export default function profile() {

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const avatarImage = "https://i.pravatar.cc/150?u=a042581f4e29026024d";


  return (
    <Container maxWidth="xl" className="flex p-10 ">
      <Grid container>
        {/* NAVİGATİON */}
        <Navigation />
        {/* MAİN */}
        <Main variant="profile">
          <div className="flex gap-5 items-center ">
            <Badge content={<PhotoCameraOutlinedIcon />} className="w-10 h-10" placement="bottom-right" color="default">
              <Avatar src={avatarImage} radius='md' className="w-20 h-20" />
            </Badge>
            <Typography variant="h4"> İsmail çubuk</Typography>
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
        </Main>
      </Grid>
    </Container>
  );
}
