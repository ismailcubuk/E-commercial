import React from 'react'
import Grid from '@mui/material/Grid';

export default function ForgotPasswordImage() {
    return (
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(/images/login/ForgotPassword.gif)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
            }}
        />
    )
}
