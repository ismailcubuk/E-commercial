import React, { useState, useEffect, useRef } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { Card, CardBody, Image, Button, CardHeader, Divider, CardFooter } from "@nextui-org/react";
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
        <div className='gap-6 flex w-full h-full'>
            <Grid item sm={12} md={7} >
                <Card>
                    <CardHeader className='flex justify-center'>
                        {product.images.length > 0 && (
                            <Grid item md={8}>
                                {product.images[selectedColorIndex].sizes.s[selectedImageIndex].length > 0 && (
                                    <Image
                                        shadow="sm"
                                        alt={product.title}
                                        src={product.images[selectedColorIndex].sizes.m[selectedImageIndex]}
                                    />
                                )}
                            </Grid>
                        )}
                    </CardHeader>
                    <CardBody className='flex flex-row border-t-2 w-full justify-around'>
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
                    </CardBody>
                </Card>


            </Grid>



            {/* main */}
            <Grid item sm={12} md={5} className='w-full'>

                <Card className='h-full p-5'>
                    <CardHeader className='border-b-2'>
                        <Typography variant="h4">{product.title} </Typography>
                    </CardHeader>
                    <CardBody>


                        {product.features && (
                            <Card className="border-2">
                                <CardHeader>Features</CardHeader>
                                <CardBody className="flex flex-row border-t-2 w-full gap-4 flex-wrap">
                                    <div>
                                        <div>Processor Speed: {product.features.ProcessorSpeed || product.features.led} </div>
                                        <div>Number of Processors: {product.features.NumberofProcessors}</div>
                                        <div>Display: {product.features.display} inches</div>
                                        <div>Processor: {product.features.processor}</div>
                                        <div>RAM: {product.features.ram} GB</div>
                                        <div>Camera: {product.features.camera} MP</div>
                                    </div>
                                </CardBody>
                            </Card>
                        )}



                        <div>
                            <Typography variant="h6"> Brand : {product.brand} </Typography>
                            <Typography variant="h6"> {product.price.quantity} {product.price.currency} </Typography>
                            {product.color && product.color.length > 0 && (
                                <Card >
                                    <CardHeader>COLORS</CardHeader>
                                    <CardBody className='flex flex-row border-t-2  w-full gap-4 flex-wrap' >
                                        {product.color.map((color: string, index: number) => (
                                            <Button
                                                variant="bordered"
                                                key={index}
                                                className="w-10 h-10 border-4"
                                                onClick={() => handleColorClick(index)}
                                                style={{ backgroundColor: color }} />
                                        ))}
                                    </CardBody>
                                </Card>

                            )}
                        </div>


                        <div>
                            {product.memory && product.memory.length > 0 && (
                                <Card className="border-2">
                                    <CardHeader>MEMORY</CardHeader>
                                    <CardBody className="flex flex-row border-t-2  w-full gap-4 flex-wrap">
                                        {product.memory.map((memory: string, index: number) => (
                                            <Button variant="bordered" key={index}> {memory} GB </Button>
                                        ))}
                                    </CardBody>

                                </Card>
                            )}
                        </div>


                    </CardBody>
                    <CardFooter className='border-t-2'>
                        <div className="w-full flex justify-between">
                            <div className="flex w-3/6">
                                <Button color="primary" className="w-full">Add Basket</Button>
                            </div>
                            <div className="flex w-2/6">
                                <Button color="primary" className="w-full">A</Button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </Grid>

        </div>
    )
}




