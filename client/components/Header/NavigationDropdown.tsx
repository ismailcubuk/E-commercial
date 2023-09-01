import React from 'react';
import { useRouter } from 'next/router';
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useDispatch} from 'react-redux';
import { closeMenu } from '../../redux/Features/ToggleMenu/MenuActions'; // Update the path

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


