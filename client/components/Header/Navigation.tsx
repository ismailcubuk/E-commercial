import React from 'react'
import { NavbarContent, NavbarItem, Link, } from "@nextui-org/react";
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
function generateItemUrl(item: string) {
    return `${item.toLowerCase()}`;
}
export default function Navigation() {
    return (
        <NavbarContent justify="center" className="w-full">
            <NavbarItem className="w-full flex justify-between  ">
                {menuItems.map((item, index) => (
                    <Link
                        href={generateItemUrl(item)}
                        key={`${item}-${index}`}
                        className=" text-black flex-1 flex justify-center items-center px-4 py-1 font-semibold "
                        underline="hover"
                    >
                        {item}
                    </Link>
                ))}
            </NavbarItem>
        </NavbarContent>
    )
}
