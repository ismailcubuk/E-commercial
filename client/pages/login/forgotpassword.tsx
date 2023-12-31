import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Mail from '@/components/UserProfileFrom/Mail';
import SignUp from '@/components/Links/Login/SignUpPage';
import LockIcon from '@/components/Icons/Login/LockIcon';
import Typography from '@mui/material/Typography';
import { CustomWButton } from '@/components/CustomButton';

export default function Signin() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        console.log({
            email: formData.get('email'),
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
                    backgroundImage: 'url(/images/login/ForgotPassword.gif)',
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
                        Forgot Password
                    </Typography>

                    {/* Forgot Password Form */}
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{
                        my: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography variant="body1" sx={{ textAlign: 'center', my: 2 }}>
                            Enter the email address associated with your account, and we'll send you a link to reset your password.
                        </Typography>
                        <Mail />
                        <CustomWButton>CONTINUE</CustomWButton>

                        {/* Sign Up Link */}
                        <Grid container>
                            <SignUp />
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
