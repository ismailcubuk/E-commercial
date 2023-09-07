import React from 'react'
import { Grid, Paper } from "@mui/material";

export default function Main(props: any) {
    return (
        <Grid item xs={12} sm={12} md={8} lg={9} xl={9} paddingX={2} >
            <Grid
                component={Paper} elevation={6} square
                className="py-5 px-5 w-full border-small rounded-small border-default-200 ">
                {props.children}
            </Grid>
        </Grid>
    )
}
