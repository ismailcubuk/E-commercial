import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockIcon from '@/components/Login/LockIcon';
import SignUpTypography from '@/components/Login/SignUpTypography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Mail from '@/components/Login/Mail';
import Password from '@/components/Login/Password';
import LastName from '@/components/Login/LastName';
import FirstName from '@/components/Login/FirstName';
import Policies from '@/components/Login/Policies';
import SignUpButton from '@/components/Login/SignUpButton';
import SignInPage from '@/components/Login/SignInPage';

export default function SignUpUser() {

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
                <SignUpTypography />
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FirstName />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LastName />
                        </Grid>
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
                    <SignUpButton/>
                    <Grid container justifyContent="flex-end">
                    <SignInPage/>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}
