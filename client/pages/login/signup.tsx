import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockIcon from '@/components/Icons/Login/LockIcon';
import Mail from '@/components/UserProfileFrom/Mail';
import Password from '@/components/UserProfileFrom/Password';
import Policies from '@/components/CheckBoxs/Login/Policies';
import SignInPage from '@/components/Links/Login/SignInPage';
import Typography from '@mui/material/Typography';
import { CustomWButton } from '@/components/CustomButton';
import FirstName from '@/components/UserProfileFrom/FirstName';
import LastName from '@/components/UserProfileFrom/LastName';
import Auth from '@/components/Auth/Auth';

export default function Signup() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        console.log({
            email: formData.get('email'),
            password: formData.get('password'),
        });
    };

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
                    <Auth />
                </Box>
            </Grid>
        </Grid>
    );
}
