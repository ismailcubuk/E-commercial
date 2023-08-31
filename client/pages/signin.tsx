import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Background from '@/components/Login/Background';
import SignInUser from '@/components/Layout/Login/SignInUser';

export default function signin() {
    return (
        <Grid container component="main" >
            <CssBaseline />
            <Background />
            <SignInUser />
        </Grid>
    );
}