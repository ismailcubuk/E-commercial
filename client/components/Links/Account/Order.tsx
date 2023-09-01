import React from 'react'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from "@nextui-org/react";

export default function Order() {
    return (
        <Link href="/profile/orders" color="foreground" className='hover:text-primary hover:border-l-4 border-primary hover:ml-[-4px] pl-2'>
            <ShoppingBasketOutlinedIcon className='mr-2 w-5 h-5' />
            <div className='flex justify-between w-full'>
                <p>Orders</p>
                <p>3</p>
            </div>
        </Link>
    )
}
