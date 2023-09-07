import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { CustomButton } from "@/components/CustomButton";
import Navigation from "@/components/Layout/Profile/Navigation";
import Main from "@/components/Layout/Profile/Main";
import UserProfile from "@/components/UserProfile";
import FirstName from "@/components/UserProfileFrom/FirstName";
import LastName from "@/components/UserProfileFrom/LastName";
import Mail from "@/components/UserProfileFrom/Mail";
import Password from "@/components/UserProfileFrom/Password";

export default function profile() {

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
                  <LastName />
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
