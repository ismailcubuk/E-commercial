import * as React from 'react';
import Grid from '@mui/material/Grid';
import SignInImage from '@/components/Login/SignInImage';
import SignInUser from '@/components/Layout/Login/SignInUser';

export default function signin() {
    return (
        <Grid container component="main" className='bg-white'>
            <SignInImage />
            <SignInUser />
        </Grid>
    );
}