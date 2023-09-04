import React from "react";
import { Accordion, AccordionItem, Input } from "@nextui-org/react";
import { Grid } from "@mui/material";
import CustomButton from "../Buttons/CustomButton";

export default function AddressesCard() {
    const address = (
        <div >
            <div className="flex gap-5">
                <Grid sm={4}>
                    <Input name="location" id="location" variant="bordered" label="Location" placeholder="Enter your location" />
                </Grid>
                <Grid sm={4}>
                    <Input name="address" id="address" variant="bordered" label="Address" placeholder="Enter your address" />
                </Grid>
                <Grid sm={4} className="mr-7">
                    <Input name="number" id="number" variant="bordered" label="Number" placeholder="Enter your phone number" />
                </Grid>
            </div>
            <div className="pt-4 flex justify-end">
                <CustomButton>Save Changes</CustomButton>
            </div>
        </div>
    )

    const tittle = (
        <div className="flex flex-row justify-between items-center w-full">
            <Grid sm={4} >
                <p>Office</p>
            </Grid>
            <Grid sm={4} className="flex justify-center">
                <p>497 Erdman Passage, New Zoietown</p>
            </Grid>
            <Grid sm={4} className="flex justify-center">
                <p>(213) 840-9416</p>
            </Grid>
        </div>

    );
    return (
        <div>
            <Accordion variant="splitted">
                <AccordionItem key="1" aria-label="Accordion 1" title={tittle}>
                    {address}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title={tittle}>
                    {address}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title={tittle}>
                    {address}
                </AccordionItem>
            </Accordion>
        </div>
    );
}
