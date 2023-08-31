import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Mail from '@/components/Login/Mail';
import Password from '@/components/Login/Password';
import Remember from '@/components/Login/Remember';
import SignIn from '@/components/Login/SignInButton';
import Forgot from '@/components/Login/Forgot';
import SignUp from '@/components/Login/SignUpPage';
import LockIcon from '@/components/Login/LockIcon';
import SignInTypography from '@/components/Login/SignInTypography';

export default function SignInUser() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log({
            email: formData.get('email'),
            password: formData.get('password'),
        });
    };

    return (
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
                <SignInTypography />
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <Mail />
                    <Password />
                    <Remember />
                    <SignIn />
                    <Grid container>
                        <Forgot />
                        <SignUp />
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}
