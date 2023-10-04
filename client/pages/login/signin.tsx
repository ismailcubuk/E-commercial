import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockIcon from '@/components/Icons/Login/LockIcon';
import Typography from '@mui/material/Typography';
import Login from '@/components/Auth/Login';

export default function Signin() {
    return (
        <Grid container>
            {/* Left Side */}
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

            {/* Right Side */}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <LockIcon />
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    {/* Sign-in Form */}
                    <Login />
                </Box>
            </Grid>
        </Grid>
    );
}
