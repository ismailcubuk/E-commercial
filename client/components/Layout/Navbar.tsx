import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from "@nextui-org/react";
import { toggleMenu } from '../../redux/Features/ToggleMenu/MenuActions';

import Search from '@/components/Header/Search'
import Login from '@/components/Header/Login'
import Brand from '@/components/Header/Brand'
import ShoppingCartBadge from '@/components/Header/ShoppingCartBadge'
import Navigation from '@/components/Header/Navigation'
import NavigationDropdown from '@/components/Header/NavigationDropdown'
import Avatars from '@/components/Icons/Navbar/Avatar'

interface RootState {
    toggleMenu: boolean;
}

export default function App() {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state: RootState) => state.toggleMenu);
    const handleBrandClick = () => {
        dispatch(toggleMenu());
    };


    return (
        <div>
            <Navbar
                onMenuOpenChange={handleBrandClick}
                isMenuOpen={isMenuOpen} maxWidth="2xl"
                disableAnimation={true}
                className="bg-white" >
                <Brand />
                <Search />
                <Login />
                <ShoppingCartBadge />
                <NavigationDropdown />
                <Avatars />
            </Navbar>
            <Navbar className="hidden sm:flex border-t-2 bg-mySecond " height={"full"}>
                <Navigation />
            </Navbar>
        </div>
    );
}
