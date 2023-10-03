import React from 'react';
import { Grid } from "@mui/material";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from 'next/link';

interface Product {
    _id: string;
    title: string;
    variant: string;
    gb: string;
    series: number;
    gender: string;
    brand: string;
    category: string;
    price: {
        quantity: number;
        currency: string;
    };
    images: {
        variant: string;
        sizes: {
            s: string[];
            m: string[];
        };
    }[];
}
function capitalizeFirstLetter(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
interface ProductListProps {
    products: Product[];
}

function ProductMain({ products }: ProductListProps) {


    return (
        <Grid item xs={12} sm={7} md={8} lg={9} xl={9} className='flex flex-wrap justify-center sm:justify-start' >
            {products?.map((product) => (
                <Grid item sm={12} md={6} lg={4} xl={3} className='h-fit flex justify-center items-center p-4' key={product._id}>
                    <Link
                        href={product.variant && product.gb
                            ? `/products/${product.category}/${product.title}-${product.variant}-${product.gb}`
                            : `/products/${product.category}/${product.title}`} passHref>
                        <Card className='h-fit' shadow="md" key={product._id} isPressable>
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
                                <div className='flex flex-col w-4/6'>
                                    {(product.category.toLowerCase() === "shoes" || product.category.toLowerCase() === "tracksuit" || product.category.toLowerCase() === "tshirt") &&
                                        product.brand && product.gender && (
                                            <div>
                                                <b className=' mr-2'>{capitalizeFirstLetter(product.brand)}</b>
                                                <b>{capitalizeFirstLetter(product.gender)}</b>
                                            </div>
                                        )}
                                    <b>{product.title} {product.variant} {product.gb}</b>
                                </div>
                                <p className="text-default-500 w-2/6">{product.price.quantity} {product.price.currency}</p>
                            </CardFooter>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductMain;
