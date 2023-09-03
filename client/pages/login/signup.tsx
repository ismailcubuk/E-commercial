import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockIcon from '@/components/Icons/Login/LockIcon';
import Mail from '@/components/Forms/Login/Mail';
import Password from '@/components/Forms/Login/Password';
import Policies from '@/components/CheckBoxs/Login/Policies';
import SignInPage from '@/components/Links/Login/SignInPage';
import FirstName from '@/components/Forms/Login/FirstName';
import LastName from '@/components/Forms/Login/LastName';
import Typography from '@mui/material/Typography';
import CustomWButton from '@/components/Buttons/CustomWButton';

export default function signup() {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        console.log({
            email: formData.get('email'),
            password: formData.get('password'),
        });
    };

    return (
        <Grid container component="main" className='bg-white' >
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
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <FirstName />
                            <LastName />
                            <Grid item xs={12}>
                                <Mail />
                            </Grid>
                            <Grid item xs={12}>
                                <Password />
                            </Grid>
                            <Grid item xs={12}>
                                <Policies />
                            </Grid>
                        </Grid>
                        <CustomWButton>SIGN UP</CustomWButton>
                        <Grid container justifyContent="flex-end">
                            <SignInPage />
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}