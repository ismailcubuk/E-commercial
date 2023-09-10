import React from 'react';
import { NavbarBrand, NavbarContent, Link, NavbarMenuToggle } from "@nextui-org/react";
import ShantyIcon from "../Icons/Navbar/shanty.png";
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/types/actionTypes';
import { toggleMenu } from '@/redux/actions/menuActions'; // Redux eylem yaratıcısını içe aktarın

export default function Brand() {
    const isMenuOpen = useSelector((state: RootState) => state.toggleMenu.isMenuOpen);
    const dispatch = useDispatch(); // Dispatch fonksiyonunu alın

    const handleToggleMenu = () => {
        // Redux eylemi çağırarak menüyü açma veya kapatma
        dispatch(toggleMenu());
    };

    return (
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
                className="sm:hidden text-black"
                onClick={handleToggleMenu} // Menüyü açma veya kapatma işlevini çağırın
            />
            <NavbarBrand className="pr-10 w-full" as={Link} href="/">
                <Image
                    src={ShantyIcon}
                    alt="Benim Resmim"
                    width={36}
                    height={36}
                />
                <p className="hidden sm:block font-bold font-serif text-inherit text-shanty text-xl cursor-default ml-2">SHANTY</p>
            </NavbarBrand>
        </NavbarContent>
    )
}
