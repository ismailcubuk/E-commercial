import React from 'react'
import { Link } from "@nextui-org/react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Favorite() {
    return (
        <Link href="/profile/favorite" color="foreground" className='hover:text-primary hover:border-l-4 border-primary hover:ml-[-4px] pl-2'>
            <FavoriteBorderOutlinedIcon className='mr-2 w-5 h-5' />
            <div className='flex justify-between w-full'>
                <p>Favorite</p>
                <p>3</p>
            </div>
        </Link>
    )
}
