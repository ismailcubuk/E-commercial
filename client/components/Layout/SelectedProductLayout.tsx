import React from 'react';
import { Grid } from "@mui/material";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Product {
    _id: string;
    title: string;
    price: {
        quantity: number;
        currency: string;
    };
    images: {
        variant: string;
        sizes: {
            s: string[];
        };
    }[];
}

interface ProductListProps {
    products: Product[];
}

function ProductList({ products }: ProductListProps) {
    return (
        <Grid container xs={12} sm={7} md={8} lg={9} xl={9} className='h-fit flex justify-center sm:justify-start'>
            {products.map((product) => (
                <Grid container sm={12} md={6} lg={4} xl={3} className='h-fit flex justify-center items-center p-4' key={product._id}>
                    <Card className='h-fit' shadow="md" key={product._id} isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            {product.images.length > 0 && (
                                <div>
                                    {product.images[0].sizes.s.length > 0 && (
                                        <Image
                                            shadow="sm"
                                            radius="lg"
                                            width="100%"
                                            alt={product.title}
                                            src={product.images[0].sizes.s[0]}
                                        />
                                    )}
                                </div>
                            )}
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b className='w-8/12'>{product.title}</b>
                            <p className="text-default-500 w-4/12">{product.price.quantity} {product.price.currency}</p>
                        </CardFooter>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductList;
