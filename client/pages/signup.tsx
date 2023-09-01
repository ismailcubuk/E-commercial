import * as React from 'react';
import Grid from '@mui/material/Grid';
import SignUpImage from '@/components/Login/SignUpImage';
import SignUpUser from '@/components/Layout/Login/SignUpUser';

export default function signup() {
    return (
        <Grid container component="main" className='bg-white' >
            <SignUpImage />
            <SignUpUser />
        </Grid>
    );
}