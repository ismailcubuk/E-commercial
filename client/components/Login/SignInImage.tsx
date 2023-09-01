import React from 'react'
import Grid from '@mui/material/Grid';

export default function SignInImage() {
    return (
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(/images/login/Signin.gif)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
            }}
        />
    )
}
