import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Mail from '@/components/Forms/Login/Mail';
import SignUp from '@/components/Links/Login/SignUpPage';
import LockIcon from '@/components/Icons/Login/LockIcon';
import Continue from '@/components/Buttons/Login/Continue';
import Typography from '@mui/material/Typography';
import ProfileNavigation from '@/components/Layout/ProfileNavigation';


export default function profile() {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log({
      email: formData.get('email'),
    });
  };

  return (
    <Grid container component="main" className='bg-white text-black justify-center' >
      <ProfileNavigation/>
      <Grid item xs={12} sm={7} md={8} xl={9} component={Paper} elevation={6} square>
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
    </Grid>
  );
}