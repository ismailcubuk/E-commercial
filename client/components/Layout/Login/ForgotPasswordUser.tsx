import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Mail from '@/components/Login/Mail';
import SignUp from '@/components/Login/SignUpPage';
import LockIcon from '@/components/Login/LockIcon';
import SignInTypography from '@/components/Login/SignInTypography';
import Continue from '@/components/Login/Continue';

export default function ForgotPasswordUser() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log({
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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
                    <div >Enter the email address associated with your account and we'll sen you a link to reset your password.</div>
                    <Mail />
                    <Continue />
                    <Grid container>
                        <SignUp />
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}
