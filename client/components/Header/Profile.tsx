import React from 'react'
import { Link } from "@nextui-org/react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Navigation(props: { children: string | number }) {

    let displayIcon = null;
    const lowerCaseText = String(props.children).toLowerCase();

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
        <Link className="w-full border-l-4 border-white px-1 py-2 hover:border-l-4  hover:border-primary hover:text-primary  justify-between flex text-black" href={`/profile/${lowerCaseText}`}>
            <div className='text-large flex items-center'>
                {displayIcon}
                {props.children}
            </div>
            <div>
                5
            </div>
        </Link>
    )
}

export default Navigation
