import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CustomButton from "../Buttons/CustomButton";
import { Container, Grid, Typography, } from "@mui/material";

export default function OrdersCard() {
    const orders = (
        <div className="flex flex-row justify-between items-center w-full">
            <Grid sm={3} className="border-2">
                icon
            </Grid>
            <Grid sm={3} className="border-2">
                <p>budi 2017</p>
                <p>$226.00 x 4</p>
            </Grid>
            <Grid sm={3} className="border-2">
                <p>Product properties :</p>
                <p>Black, L</p>
            </Grid>
            <Grid sm={3} className="border-2 mr-7 flex justify-center">
                <CustomButton>wiew</CustomButton>
            </Grid>
        </div >
    )

    const tittle = (
        <div className="flex flex-row justify-between items-center">
            <Grid sm={3} className="border-2">
                <p>f0ba538b</p>
            </Grid>
            <Grid sm={3} className="border-2">
                <p>pending</p>
            </Grid>
            <Grid sm={3} className="border-2">
                <p>Nov 10,2022</p>
            </Grid>
            <Grid sm={3} className="border-2 flex justify-center">
                <p>$350.00</p>
            </Grid>

        </div>
    );
    return (
        <div>
            <div className="flex flex-row justify-between items-center  mx-6 mr-14">
                <Grid sm={3} className="border-2">
                    <p className="text-xl">Order</p>
                </Grid>
                <Grid sm={3} className="border-2">
                    <p className="text-xl">Status</p>
                </Grid>
                <Grid sm={3} className="border-2">
                    <p className="text-xl">Date purchased</p>
                </Grid>
                <Grid sm={3} className="border-2 flex justify-center">
                    <p className="text-xl">Total</p>
                </Grid>
            </div>
            <Accordion variant="splitted">
                <AccordionItem key="1" aria-label="Accordion 1" title={tittle}>
                    {orders}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title={tittle}>
                    {orders}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title={tittle}>
                    {orders}
                </AccordionItem>
            </Accordion>
        </div>
    );
}
