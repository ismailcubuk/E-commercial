import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Background from '@/components/Login/Background';
import SignUpUser from '@/components/Layout/Login/SignUpUser';

export default function signup() {
    return (
        <Grid container component="main" >
            <CssBaseline />
            <Background />
            <SignUpUser />
        </Grid>
    );
}