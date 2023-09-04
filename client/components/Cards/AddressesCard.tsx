import React from "react";
import { Accordion, AccordionItem, Input } from "@nextui-org/react";

export default function AddressesCard() {
    const address = (
        <div className="flex">
            <Input name="location" id="location" variant="bordered" label="Location" placeholder="Enter your location" />
            <Input name="address" id="address" variant="bordered" label="Address" placeholder="Enter your address" />
            <Input name="number" id="number" variant="bordered" label="Number" placeholder="Enter your phone number" />
        </div>
    )

    const tittle = (
        <div className="flex flex-row justify-between items-center">
            <p>office</p>
            <p>497 Erdman Passage, New Zoietown</p>
            <p>(213) 840-9416</p>
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
