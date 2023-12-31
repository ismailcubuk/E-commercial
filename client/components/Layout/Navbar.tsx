import { useDispatch, useSelector } from 'react-redux';
import { Navbar, NavbarMenuToggle } from "@nextui-org/react";
import { toggleMenu } from '@/redux/actions/Actions';
import Search from '@/components/Navbar/Search'
import Login from '@/components/Navbar/Login'
import Brand from '@/components/Navbar/Brand'
import ShoppingCartBadge from '@/components/Navbar/ShoppingCartBadge'
import Navigation from '@/components/Navbar/Navigation'
import NavigationDropdown from '@/components/Navbar/NavigationDropdown'
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
                disableAnimation={true}>
                <Brand />
                <Search />
                <Login />
                <ShoppingCartBadge />
                <NavigationDropdown />
                <Avatars />
            </Navbar>
            <Navbar className="hidden md:flex border-t-2 bg-mySecond " height={"full"}>
                <Navigation />
            </Navbar>
        </div>
    );
}
