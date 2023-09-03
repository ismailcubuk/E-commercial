import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function CustomListProfile(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {

    const router = useRouter();

    const handleButtonClick = () => {
        switch (props.children) {
            case "Orders":
                router.push("/profile/orders");
                break;
            case "Wishlist":
                router.push("/profile/wishlist");
                break;
            case "Support":
                router.push("/profile/support");
                break;
            case 'Addresses':
                router.push('/profile/addresses');
                break;
            case 'Profile':
                router.push('/profile/profile');
                break;
            default:
                break;
        }
    };

    let displayIcon = null;

    switch (props.children) {
        case 'Orders':
            displayIcon = <ShoppingBasketOutlinedIcon className="mr-2" />;
            break;
        case 'Wishlist':
            displayIcon = <FavoriteBorderOutlinedIcon className="mr-2" />;
            break;
        case 'Support':
            displayIcon = <SupportAgentIcon className="mr-2" />;
            break;
        case 'Profile':
            displayIcon = <PersonOutlineOutlinedIcon className='mr-2' />;
            break;
        case 'Addresses':
            displayIcon = <LocationOnOutlinedIcon className="mr-2" />;
            break;

        default:
            break;
    }
    return (
        <Link className="w-full border-l-4 border-white px-1 py-2 hover:border-l-4  hover:border-primary hover:text-primary justify-between flex" onClick={handleButtonClick} href={`${props.children}`}>
            <div>
                {displayIcon}
                {props.children}
            </div>
            <div>
                5
            </div>
        </Link>
    )
}

export default CustomListProfile
