import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import SignInImage from '@/components/Login/SignInImage';
import SignInUser from '@/components/Layout/Login/SignInUser';

export default function signin() {
    return (
        <Grid container component="main" className='bg-white'>
            <CssBaseline />
            <SignInImage />
            <SignInUser />
        </Grid>
    );
}