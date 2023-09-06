import React from 'react'
import { Container,Grid } from "@mui/material";

function CustomContainer(props: any) {
    return (
        <Container maxWidth="xl" className='pt-5' >
            <Grid container className='flex flex-row'>
            {props.children}
            </Grid>
        </Container>
    )
}

export default CustomContainer