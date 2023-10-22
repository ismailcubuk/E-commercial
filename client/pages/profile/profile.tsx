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
import { handleSubmit } from '@/utils/profileChanges';

export default function profile() {
  const dispatch = useDispatch();
  const isVisibleChanges = useSelector((state) => state.visibility.isVisibleChanges);
  const newFirstName = useSelector(state => state.form.newFirstName);
  const newLastName = useSelector(state => state.form.newLastName);
  const newEmail = useSelector(state => state.form.newEmail);
  const newPassword = useSelector(state => state.form.newPassword);

  const { data, refetch } = useQuery('userData', userDataService.getUserData);

  const submitProfileChanges  = async () => {
    handleSubmit(data, newFirstName, newLastName, newEmail, newPassword, refetch);
    dispatch(toggleVisibilityChanges());
    dispatch(toggleVisibilityEdit());
    dispatch(disableInput());
  };
  useEffect(() => {
    dispatch(disableInput());
  }, [])

  return (
    <Container maxWidth="xl" className="flex p-10 ">
      <Grid container>
        <Navigation />
        <Main variant="profile">
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
          {isVisibleChanges && <Button color="primary" onClick={submitProfileChanges } >SAVE CHANGES</Button>}
        </Main>
      </Grid>
    </Container>
  );
}
