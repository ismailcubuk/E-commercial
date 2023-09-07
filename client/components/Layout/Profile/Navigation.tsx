import React from 'react'
import CustomListProfile from "@/components/Links/Profile/Navigation";
import {Grid, Paper, Typography } from "@mui/material";

export default function Navigation() {
    return (
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} paddingX={2}>
            <Grid
                minWidth={200} component={Paper} elevation={6} square
                className="py-5 px-2 w-full border-small rounded-small border-default-200 ">
                <Typography variant="h6" className="pl-2">DASHBOARD</Typography>
                <CustomListProfile>Orders</CustomListProfile>
                <CustomListProfile>Wishlist</CustomListProfile>
                <CustomListProfile>Support</CustomListProfile>
                <Typography variant="h6" className="pl-2 pt-5">ACCOUNT SETTINGS</Typography>
                <CustomListProfile>Addresses</CustomListProfile>
                <CustomListProfile>Profile</CustomListProfile>
            </Grid>
        </Grid>
    )
}
