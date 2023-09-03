import React from 'react'
import { Card, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function AddressesCard() {
    return (
        <Card >
            <CardBody className="flex flex-row justify-between items-center">
                <p>office</p>
                <p>497 Erman Passage,new zoietown</p>
                <p>(213) 840-9416</p>
                <div >
                    <Button color='default' className='opacity-60 mr-2' radius='full' variant='bordered' isIconOnly >
                        <EditIcon />
                    </Button>
                    <Button color='default' className='opacity-60' radius='full' variant='bordered' isIconOnly >
                        <DeleteIcon />
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}
