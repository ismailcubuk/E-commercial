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
        <NavbarMenu >
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        color={
                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                        }
                        className="w-full"
                        href={generateItemUrl(item)}
                        size="lg"
                    >
                        {item}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    )
}
