import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Mail from '@/components/Forms/Login/Mail';
import Password from '@/components/Forms/Login/Password';
import Remember from '@/components/CheckBoxs/Login/Remember';
import SignIn from '@/components/Buttons/Login/SignInButton';
import Forgot from '@/components/Links/Login/Forgot';
import SignUp from '@/components/Links/Login/SignUpPage';
import LockIcon from '@/components/Icons/Login/LockIcon';
import Typography from '@mui/material/Typography';

export default function signin() {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        console.log({
            email: formData.get('email'),
            password: formData.get('password'),
        });
    };

    return (
        <Grid container component="main" className='bg-white'>
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
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
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
        </Grid>
    );
}