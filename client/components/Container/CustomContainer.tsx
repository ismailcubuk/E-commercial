import React from 'react'
import { Container } from "@mui/material";

function CustomContainer(props: any) {
    return (
        <Container maxWidth="xl" className='flex pt-5' >
            {props.children}
        </Container>
    )
}

export default CustomContainer