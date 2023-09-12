import React from 'react';
import { NavbarBrand, NavbarContent, Link, NavbarMenuToggle } from "@nextui-org/react";
import ShantyIcon from "../Icons/Navbar/shanty.png";
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/types/actionTypes';
import { toggleMenu } from '@/redux/actions/menuActions';

export default function Brand() {
    const isMenuOpen = useSelector((state: RootState) => state.toggleMenu.isMenuOpen);
    const dispatch = useDispatch(); 

    const handleToggleMenu = () => {
        
        dispatch(toggleMenu());
    };

    return (
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "close" : "open"}
                className="md:hidden text-black"
                onClick={handleToggleMenu}
            />
            <NavbarBrand className="pr-10 w-full" as={Link} href="/">
                <Image
                    src={ShantyIcon}
                    alt="ShantyLogo"
                    width={36}
                    height={36}
                />
                <p className="hidden sm:block font-bold font-serif text-inherit text-shanty text-xl cursor-default ml-2">SHANTY</p>
            </NavbarBrand>
        </NavbarContent>
    )
}
