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
  const newFirstName = useSelector(state => state.form.newFirstName);
  const newLastName = useSelector(state => state.form.newLastName);
  const newEmail = useSelector(state => state.form.newEmail);
  const newPassword = useSelector(state => state.form.newPassword);

  const { data, refetch } = useQuery('userData', userDataService.getUserData);

  const handleSubmit = async () => {
    dispatch(toggleVisibilityChanges())
    dispatch(toggleVisibilityEdit())
    dispatch(disableInput())
    try {
        const response = await fetch('/api/update', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: data?._id,
                firstName: newFirstName,
                lastName: newLastName,
                email: newEmail,
                password: newPassword
            })
        });
        if (response.ok) {
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                refetch()
            }
            console.log("response", "response okey");
        } else {
            console.log("response", "response not okey");
        }
    } catch (error) {
        console.error(error);
    }
};
useEffect(() => {
  dispatch(disableInput());
}, [])


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
                  <LastName/>
                </Grid>
              </Grid>
            </Grid>
            {/* İkinci grup */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Mail/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Password />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {isVisibleChanges && <Button color="primary" onClick={handleSubmit} >SAVE CHANGES</Button>}
        </Main>
      </Grid>
    </Container>
  );
}
