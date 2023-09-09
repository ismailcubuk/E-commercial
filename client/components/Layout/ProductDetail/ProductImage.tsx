import React, { useState, useEffect } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { Card, CardBody, Image, Button, CardHeader, CardFooter } from "@nextui-org/react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logos from '../../Icons/Logo/Logo'

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

        switch (selectedImageIndex) {
            case 0:
                setBefore(selectedImageIndex);
                setAfter(selectedImageIndex + 4);
                break;
            case imagesPerPage - 1:
                setBefore(minBefore);
                setAfter(selectedImageIndex + 1);
                break;
            case 1:
                setBefore(selectedImageIndex - 1);
                setAfter(selectedImageIndex + 3);
                break;
            default:
                setBefore(selectedImageIndex - 2);
                setAfter(selectedImageIndex + 2);
                break;
        }
    }, [selectedImageIndex, imagesPerPage]);

    function renderFeature(featureName: string, label: string, unit: string) {
        const value = product.features[featureName];
        if (value !== undefined) {
            return <div className='w-full xl:w-3/6 '>
                <Card className='flex flex-row justify-between m-1 p-3'>
                    <div>
                        {label}:
                    </div>
                    <div>
                        {value}{unit}
                    </div>
                </Card>
            </div>;
        } else {
            return null;
        }
    }

    return (
        <div className='gap-6 flex w-full h-full'>
            <Grid item sm={12} md={7} >
                <Card>
                    <CardHeader className='flex justify-center'>
                        {product.images.length > 0 && (
                            <Grid item md={8}>
                                {product.images[selectedColorIndex].sizes.s[selectedImageIndex].length > 0 && (
                                    <Image
                                        alt={product.title}
                                        src={product.images[selectedColorIndex].sizes.m[selectedImageIndex]}
                                    />
                                )}
                            </Grid>
                        )}
                    </CardHeader>
                    <CardBody className=' border-t-2'>
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
                <Card className='py-3'>
                    <CardHeader className='border-b-4 gap-4  px-10'>
                        <Logos variant={product.brand} />
                        <Typography variant="h4" className='border-2'>{product.title} </Typography>
                    </CardHeader>
                    <CardBody className='gap-4 '>

                        {product.features && (
                            <Card >
                                <CardHeader>Features</CardHeader>
                                <CardBody className="border-t-1 flex flex-row flex-wrap">
                                    {renderFeature("ProcessorSpeed", "Processor Speed", "")}
                                    {renderFeature("led", "LED", "")}
                                    {renderFeature("DPI", "DPI", "")}
                                    {renderFeature("usage", "Usage", "")}
                                    {renderFeature("weight", "Weight", "")}

                                    {renderFeature("NumberofProcessors", "Number of Processors", "")}
                                    {renderFeature("variant", "Variant", "")}
                                    {renderFeature("WaterResistance", "Water Resistance", "")}
                                    {renderFeature("impedance", "Impedance (Ohm)", "")}
                                    {renderFeature("screenSize", "Screen Size", "")}

                                    {renderFeature("display", "Display", " inches")}
                                    {renderFeature("connection", "Connection", "")}
                                    {renderFeature("batery", "Battery", "")}

                                    {renderFeature("processor", "Processor", "")}
                                    {renderFeature("language", "Language", "")}
                                    {renderFeature("ResponseTime", "Response Time", "")}
                                    {renderFeature("microphone", "Microphone", "")}
                                    {renderFeature("memory", "Memory", "")}

                                    {renderFeature("ram", "RAM", " GB")}
                                    {renderFeature("warranty", "Warranty", "")}

                                    {renderFeature("camera", "Camera", " MP")}
                                    {renderFeature("origin", "Origin", "")}
                                </CardBody>
                            </Card>
                        )}



                        <div>
                            {product.color && product.color.length > 0 && (
                                <Card >
                                    <CardHeader>COLORS</CardHeader>
                                    <CardBody className='flex flex-row border-t-1  w-full gap-4 flex-wrap' >
                                        {product.color.map((color: string, index: number) => (
                                            <Button
                                                variant="bordered"
                                                key={index}
                                                className="w-10 h-10 "
                                                onClick={() => handleColorClick(index)}
                                                style={{ backgroundColor: color }} />
                                        ))}
                                    </CardBody>
                                </Card>

                            )}
                        </div>


                        <div>
                            {product.memory && product.memory.length > 0 && (
                                <Card className="">
                                    <CardHeader>MEMORY</CardHeader>
                                    <CardBody className="flex flex-row border-t-1  w-full gap-4 flex-wrap">
                                        {product.memory.map((memory: string, index: number) => (
                                            <Button variant="bordered" key={index}> {memory} GB </Button>
                                        ))}
                                    </CardBody>

                                </Card>
                            )}
                        </div>

                        <Typography variant="h6"> {product.price.quantity} {product.price.currency} </Typography>

                    </CardBody>
                    <CardFooter className='border-t-4'>
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




