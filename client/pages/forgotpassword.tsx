import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ForgotPasswordImage from '@/components/Login/ForgotPasswordImage';
import ForgotPasswordUser from '@/components/Layout/Login/ForgotPasswordUser';

export default function signin() {
    return (
        <Grid container component="main" className='bg-white' >
            <CssBaseline />
            <ForgotPasswordImage />
            <ForgotPasswordUser />
        </Grid>
    );
}