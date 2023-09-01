import * as React from 'react';
import Grid from '@mui/material/Grid';
import ForgotPasswordImage from '@/components/Login/ForgotPasswordImage';
import ForgotPasswordUser from '@/components/Layout/Login/ForgotPasswordUser';

export default function signin() {
    return (
        <Grid container component="main" className='bg-white' >
            <ForgotPasswordImage />
            <ForgotPasswordUser />
        </Grid>
    );
}