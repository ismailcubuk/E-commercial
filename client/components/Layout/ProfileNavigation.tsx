import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Order from '@/components/Links/Account/Order';
import Favorite from '@/components/Links/Account/Favorite';
import Profile from '@/components/Links/Account/Profile';
import Addresses from '@/components/Links/Account/Addresses';

export default function ProfileNavigation() {
    return (
        <Grid
            container
            xs={false}
            sm={5}
            md={4}
            xl={3}
            className='hidden sm:flex flex-col'
        >
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    py: 2,
                    px: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',

                }}
            >
                <div className="flex flex-col gap-4 w-full">
                    <Typography variant="h6">DASHBOARD</Typography>
                    <Order />
                    <Favorite />
                </div>
                <div className="flex flex-col gap-3 w-full pt-10">
                    <Typography variant="h6">ACCOUNT SETTINGS</Typography>
                    <Profile />
                    <Addresses />
                </div>
            </Box>
        </Grid>
    )
}
