import React from 'react';
import { NavbarContent, NavbarItem, Link } from "@nextui-org/react";

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
    const generateItemUrl = (item: string) => {
        return `/products/${item.toLowerCase()}`
    };

    return (
        <NavbarContent justify="center" className="w-full flex">
            {menuItems.map((item, index) => (
                <Link href={generateItemUrl(item)} underline="hover" key={`${item}-${index}` }>
                    <NavbarItem className="text-black hover:text-primary ">
                        {item}
                    </NavbarItem>
                </Link>
            ))}
        </NavbarContent>
    );
}
