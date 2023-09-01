import React from 'react'
import { Link } from "@nextui-org/react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function Addresses() {
    return (
        <Link href="/profile/address" color="foreground" className='hover:text-primary hover:border-l-4 border-primary hover:ml-[-4px] pl-2'>
            <LocationOnOutlinedIcon className='mr-2 w-5 h-5' />
            <div className='flex justify-between w-full'>
                <p>Addresses</p>
                <p>3</p>
            </div>
        </Link>
    )
}
