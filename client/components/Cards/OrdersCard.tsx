import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button, Image } from "@nextui-org/react";
import { Grid } from "@mui/material";
import userDataService from "@/utils/userDataService";
import { useQuery } from "react-query";

export default function OrdersCard() {
    const { data } = useQuery('userData', userDataService.getUserData);
    console.log("mydata", data);


    const tittle = (
        <div className="flex flex-row justify-between items-center">
            <Grid sm={3}>
                <p>f0ba538b</p>
            </Grid>
            <Grid sm={3}>
                <p>pending</p>
            </Grid>
            <Grid sm={3}>
                <p>Nov 10,2022</p>
            </Grid>
            <Grid sm={3} className=" flex justify-center">
                <p>$350.00</p>
            </Grid>

        </div>
    );
    return (
        <div>
            <div className="flex flex-row justify-between items-center mx-6 mr-14 mb-5">
                <Grid sm={3}>
                    <p className="text-xl">Order</p>
                </Grid>
                <Grid sm={3}>
                    <p className="text-xl">Status</p>
                </Grid>
                <Grid sm={3}>
                    <p className="text-xl">Date purchased</p>
                </Grid>
                <Grid sm={3} className=" flex justify-center">
                    <p className="text-xl">Total</p>
                </Grid>
            </div>
            <Accordion variant="splitted">
                {data&&data.basket.map((item, index) => (
                    <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={tittle}>
                        <div className="flex flex-row justify-between items-center w-full">
                            <Grid sm={3}>
                                <Image width={80} src={item.productImage} />
                            </Grid>
                            <Grid sm={3}>
                                <p>{item.productName}</p>
                                <p>{item.productPrice} TRY</p>
                            </Grid>
                            <Grid sm={3}>
                                <p>Product properties :</p>
                                <p>{item.productDetail}</p>
                            </Grid>
                            <Grid sm={3} className="mr-7 flex justify-center">
                                <Button color="primary">View</Button>
                            </Grid>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
