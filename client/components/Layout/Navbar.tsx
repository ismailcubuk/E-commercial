import React from "react";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/Features/ToggleMenu/action';
import { Navbar } from "@nextui-org/react";

import Search from '@/components/Header/Search'
import Login from '@/components/Header/Login'
import Brand from '@/components/Header/Brand'
import ShoppingCartBadge from '@/components/Header/ShoppingCartBadge'
import Navigation from '@/components/Header/Navigation'
import NavigationDropdown from '@/components/Header/NavigationDropdown'


export default function App() {
    const dispatch = useDispatch();
    const handleBrandClick = () => {
        dispatch(toggleMenu());
    };
    return (
        <div>
            <Navbar onMenuOpenChange={handleBrandClick} maxWidth="2xl" className="bg-white" >
                <Brand />
                <Search />
                <Login />
                <ShoppingCartBadge />
                <NavigationDropdown />
            </Navbar>
            <Navbar className="hidden sm:flex border-t-2 bg-mySecond " height={"full"}>
                <Navigation />
            </Navbar>
        </div>
    );
}
