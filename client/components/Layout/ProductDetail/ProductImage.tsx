import React, { useState, useEffect, useRef } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ProductImage({ product }: any) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
    const [before, setBefore] = useState<number>(0);
    const [after, setAfter] = useState<number>(0);
    const imagesPerPage = product.images[0].sizes.s.length;

    const handleImageClick = (index: number) => {
        if (index !== selectedImageIndex) {
            setSelectedImageIndex(index);
        }
    };
    const handleColorClick = (index: number) => {
        setSelectedColorIndex(index);
        setSelectedImageIndex(0);
    };


    useEffect(() => {
        const itemsToShow = 4;
        const minBefore = Math.max(0, selectedImageIndex - (itemsToShow - 1));
        if (selectedImageIndex === 0) {
            setBefore(selectedImageIndex);
            setAfter(selectedImageIndex + 4);
        } else if (selectedImageIndex + 1 === imagesPerPage) {
            setBefore(minBefore);
            setAfter(selectedImageIndex + 1);
        } else if (selectedImageIndex === 1) {
            setBefore(selectedImageIndex - 1);
            setAfter(selectedImageIndex + 3);
        } else {
            setBefore(selectedImageIndex - 2);
            setAfter(selectedImageIndex + 2);
        }
    }, [selectedImageIndex, imagesPerPage]);


    return (
        <div className='border-2 flex border-red-500 w-full h-full'>
            <Grid item sm={12} md={7} className='w-full flex flex-col border-4 border-blue-500 items-center'>
                {product.images.length > 0 && (
                    <Grid item md={10} className='border-4 border-red-500 mb-5'>
                        {product.images[selectedColorIndex].sizes.s[selectedImageIndex].length > 0 && (
                            <Image
                                shadow="sm"
                                alt={product.title}
                                src={product.images[selectedColorIndex].sizes.m[selectedImageIndex]}
                            />
                        )}
                    </Grid>
                )}
                {product.images.length > 0 && (
                    <Grid className="flex w-full justify-around">
                        <IconButton onClick={() => setSelectedImageIndex(selectedImageIndex - 1)} disabled={selectedImageIndex === 0}>
                            <ArrowBackIcon />
                        </IconButton>
                        {product.images[selectedColorIndex].sizes.s.slice(before, after).map((imageUrl: string | undefined, index: number) => (
                            <Card
                                key={selectedImageIndex + index}
                                isPressable
                                onPress={() => handleImageClick(before + index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <CardBody className="overflow-visible p-0">
                                    <Image
                                        shadow="sm"
                                        radius="lg"
                                        width="100%"
                                        className="w-full object-cover sm:h-[80px] md:h-[100px] xl:h-[140px]"
                                        key={before + index}
                                        alt={product.title}
                                        src={imageUrl}
                                    />
                                </CardBody>
                            </Card>
                        ))}
                        <IconButton onClick={() => setSelectedImageIndex(selectedImageIndex + 1)} disabled={selectedImageIndex === imagesPerPage - 1}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Grid>
                )}
            </Grid>



            {/* main */}

            <Grid item sm={12} md={5} className='w-full border-2 p-5'>
                <Typography variant="h4">{product.description} </Typography>
                <Typography variant="h6"> Brand : {product.brand} </Typography>
                <Typography variant="h6"> {product.price.quantity} {product.price.currency} </Typography>


                <div>
                    {product.color && product.color.length > 0 && (
                        <div className="w-3/6 justify-between flex items-center flex-wrap gap-2">
                            {product.color.map((color: string, index: number) => (
                                <Button
                                    variant="bordered"
                                    key={index}
                                    className="w-10 h-10 border-4"
                                    onClick={() => handleColorClick(index)}
                                    style={{ backgroundColor: color }} > {index} </Button>
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
        </div>
    )
}
