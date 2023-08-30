import React from 'react'
import {
    NavbarBrand,
    NavbarContent,
    Link,
    NavbarMenuToggle,
} from "@nextui-org/react";
import ShantyIcon from "../../public/images/header/shanty.png";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/types';
export default function Brand() {
    const isMenuOpen = useSelector((state: RootState) => state.toggleMenu?.isMenuOpen);

    return (
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden text-black"
            />
            <NavbarBrand className="pr-10 w-full" as={Link} href="/">
                <Image
                    src={ShantyIcon}
                    alt="My Image"
                    width={36}
                    height={36}
                />
                <p className="hidden sm:block font-bold font-serif text-inherit  text-shanty text-xl cursor-default">SHANTY</p>
            </NavbarBrand>
        </NavbarContent>
    )
}
