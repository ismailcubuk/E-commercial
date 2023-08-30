import React from 'react';
import { useRouter } from 'next/router';
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

const menuItems = [
    "Headphones",
    "Headset",
    "Keyboard",
    "Mouse",
    "Phone",
    "Shoes",
    "Tracksuit",
    "Tshirt",
    "Watch",
];

export default function NavigationDropdown() {
    const generateItemUrl = (item: string) => {
        return `/${item.toLowerCase()}`;
    };

    const router = useRouter();

    const handleItemClick = (item: string) => {
        const itemUrl = generateItemUrl(item);
        router.push(itemUrl);
    };

    return (
        <NavbarMenu className='bg-white border-2' >
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
