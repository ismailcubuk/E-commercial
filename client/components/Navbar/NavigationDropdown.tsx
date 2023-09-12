import React from 'react';
import { useRouter } from 'next/router';
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useDispatch } from 'react-redux';
import { closeMenu } from '@/redux/actions/menuActions';
import Typography from '@mui/material/Typography';

const menuItems = [
    "Headphones",
    "Headsets",
    "Keyboards",
    "Mouse",
    "Phones",
    "Shoes",
    "Tracksuits",
    "Tshirts",
    "Watches",
];

export default function NavigationDropdown() {
    const dispatch = useDispatch();
    const router = useRouter();

    const generateItemUrl = (item: string) => {
        return `/products/${item.toLowerCase()}`;
    };

    const handleItemClick = (item: string) => {
        const itemUrl = generateItemUrl(item);

        dispatch(closeMenu());

        router.push(itemUrl);
    };

    return (
        <NavbarMenu className='border-t-4' >
            <Typography variant='h5' className='border-b-2 w-fit border-black'>CATEGORİES</Typography>
            {menuItems.map((item, index) => (
                <NavbarMenuItem
                    className='w-full text-black rounded-md cursor-pointer p-2 hover:bg-bgmenu'
                    onClick={() => handleItemClick(item)}
                    key={`${item}-${index}`}>
                    {item}
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    );
}
