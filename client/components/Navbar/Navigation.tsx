import React from 'react'
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { useRouter } from 'next/router';

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

export default function Navigation() {
    const router = useRouter();
    const generateItemUrl = (item: string) => {
        return `/products/${item.toLocaleLowerCase()}`
    }

    const handleItemClick = (item: string) => {
        const itemUrl = generateItemUrl(item);

        router.push(itemUrl);
    };
    return (
        <NavbarContent justify="center" className="w-full flex">
            {menuItems.map((item, index) => (
                <NavbarItem 
                className="cursor-pointer hover:text-blue-500 "
                onClick={() => handleItemClick(item)}
                key={`${item}-${index}`}>
                    {item}
                </NavbarItem>
            ))}
        </NavbarContent>
    )
}
