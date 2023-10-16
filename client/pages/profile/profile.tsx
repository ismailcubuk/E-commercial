import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Navigation from "@/components/Layout/Profile/Navigation";
import Main from "@/components/Layout/Profile/Main";
import UserProfile from "@/components/UserProfile";
import FirstName from "@/components/UserProfileFrom/FirstName";
import LastName from "@/components/UserProfileFrom/LastName";
import Mail from "@/components/UserProfileFrom/Mail";
import Password from "@/components/UserProfileFrom/Password";
import { Button } from "@nextui-org/react";
import { useQuery } from 'react-query';
import userDataService from '@/utils/userDataService';
import { useDispatch, useSelector } from 'react-redux';
import { disableInput, toggleVisibilityChanges, toggleVisibilityEdit } from "@/redux/actions/Actions";

export default function profile() {
  const dispatch = useDispatch();
  const isVisibleChanges = useSelector((state) => state.visibility.isVisibleChanges);

  useEffect(() => {
    dispatch(disableInput());
  }, [])

  const changeClick = () => {
    dispatch(toggleVisibilityChanges())
    dispatch(toggleVisibilityEdit())
    dispatch(disableInput())
  }

  const { data, error, isLoading } = useQuery('userData', userDataService.getUserData);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <Container maxWidth="xl" className="flex p-10 ">
      <Grid container>
        <Navigation />
        <Main variant="profile">
          <UserProfile firstName={data?.firstName} lastName={data?.lastName}  />
          <Grid container spacing={2} mt={2} mb={4}>
            {/* İlk grup */}
            <Grid item xs={12} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <FirstName />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <LastName lastName={data?.lastName} />
                </Grid>
              </Grid>
            </Grid>
            {/* İkinci grup */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Mail email={data?.email} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Password password={data?.password} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {isVisibleChanges && <Button color="primary" onClick={changeClick} >SAVE CHANGES</Button>}
        </Main>
      </Grid>
    </Container>
  );
}
