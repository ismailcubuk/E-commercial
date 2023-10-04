import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockIcon from '@/components/Icons/Login/LockIcon';
import Typography from '@mui/material/Typography';
import Register from '@/components/Auth/Register';

export default function Signup() {

    return (
        <Grid container component="main">
            {/* Left Side */}
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(/images/login/Signup.gif)',
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
                        Sign up
                    </Typography>

                    {/* Signup Form */}
                    <Register />
                </Box>
            </Grid>
        </Grid>
    );
}
