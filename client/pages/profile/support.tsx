import React from "react";
import { Container, Grid } from "@mui/material";
import AddressesCard from "@/components/Cards/AddressesCard";
import Main from "@/components/Layout/Profile/Main";
import Navigation from "@/components/Layout/Profile/Navigation";


export default function support() {

    return (
        <Container maxWidth="xl" className="flex pt-10 ">
            <Grid container>
                <Navigation />
                <Main variant="support">
                    <AddressesCard />
                </Main>
            </Grid>
        </Container>
    );
}
