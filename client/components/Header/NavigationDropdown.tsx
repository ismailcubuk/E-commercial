import React from 'react'
import { Link, NavbarMenu, NavbarMenuItem, } from "@nextui-org/react";

function generateItemUrl(item: string) {
    return `${item.toLowerCase()}`;
}
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

    return (
        <NavbarMenu className='w-fit max-h-fit border-2 border-red-500'>
            {menuItems.map((item, index) => (
                <NavbarMenuItem className='w-full border-2 rounded-md border-blue-400 hover:bg-grey-200' key={`${item}-${index}` }>
                    <Link
                        color='foreground'
                        href={generateItemUrl(item)}
                        size="lg"
                        className='w-full hover:bg-bgmenu'
                    >
                        {item}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    )
}
