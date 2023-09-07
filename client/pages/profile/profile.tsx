import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { CustomButton } from "@/components/CustomButton";
import FirstName from "@/components/Forms/Profile/FirstName";
import SurName from "@/components/Forms/Profile/SurName";
import Mail from "@/components/Forms/Profile/Mail";
import Password from "@/components/Forms/Profile/Password";
import Navigation from "@/components/Layout/Profile/Navigation";
import Main from "@/components/Layout/Profile/Main";
import UserProfile from "@/components/UserProfile";

export default function profile() {

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";



  return (
    <Container maxWidth="xl" className="flex p-10 ">
      <Grid container>
        {/* NAVİGATİON */}
        <Navigation />
        {/* MAİN */}
        <Main variant="profile">
          {/* USER PROFİLE */}
          <UserProfile />
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
