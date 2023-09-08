import { Grid, Typography } from "@mui/material";
import { Button } from "@nextui-org/react";
import React from 'react'

export default function ProductMain({ product }: any) {
    return (
        <Grid item md={5} className='w-full border-2 p-5'>
            <Typography variant="h4">{product.description} </Typography>
            <Typography variant="h6"> Brand : {product.brand} </Typography>
            <Typography variant="h6"> {product.price.quantity} {product.price.currency} </Typography>


            <div>
                {product.color && product.color.length > 0 && (
                    <div className="w-3/6 justify-between flex items-center flex-wrap gap-2">
                        {product.color.map((color: string, index: number) => (
                            <Button variant="bordered" key={index} className="w-10 h-10 border-4" style={{ backgroundColor: color }} />
                        ))}
                    </div>
                )}
            </div>


            <div>
                {product.memory && product.memory.length > 0 && (
                    <div className="border-2">
                        <Typography variant="h6">Memory</Typography>
                        <div className="w-3/6 justify-between flex items-center">

                            {product.memory.map((memory: string, index: number) => (
                                <Button variant="bordered" key={index}> {memory} </Button>
                            ))}
                        </div>

                    </div>
                )}
            </div>

            <div className="w-full flex justify-between">
                <div className="flex w-3/6">
                    <Button color="primary" className="w-full">Add Basket</Button>
                </div>
                <div className="flex w-2/6">
                    <Button color="primary" className="w-full">A</Button>
                </div>
            </div>
        </Grid>
    )
}
