import React from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Button } from '@nextui-org/react';
import { enableInput } from '@/redux/actions/Actions';
import { useDispatch } from 'react-redux';

interface MainProps {
    children: any;
    variant: "order" | "wishlist" | "support" | "address" | "profile";
}

export default function Main(props: MainProps) {
    let typographyText: string | null = null;
    let buttonLabel: string | null = null;
    let icon = null;

    switch (props.variant) {
        case "order":
            typographyText = "My Orders";
            icon = <ShoppingBasketOutlinedIcon className='w-10 h-10 text-primary' />;
            break;
        case "wishlist":
            typographyText = "My Wish List";
            icon = <FavoriteBorderOutlinedIcon className='w-10 h-10 text-primary' />;
            break;
        case "support":
            typographyText = "Support";
            icon = <SupportAgentIcon className='w-10 h-10 text-primary' />;
            break;

        case "address":
            typographyText = "My Address";
            buttonLabel = "Add New Address";
            icon = <LocationOnOutlinedIcon className='w-10 h-10 text-primary' />;
            break;
        case "profile":
            typographyText = "Profile";
            buttonLabel = "Edit Profile";
            icon = <PersonOutlineOutlinedIcon className='w-10 h-10 text-primary' />;
            break;
    }
    const dispatch = useDispatch();

    const editClick = () => {
        dispatch(enableInput());
    }
    return (
        <Grid item xs={12} sm={12} md={8} lg={9} xl={9} paddingX={2} >
            <Grid
                component={Paper} elevation={6} square
                className="py-5 px-5 w-full border-small rounded-small border-default-200 ">
                <div className="mb-5 items-center flex w-full justify-between">
                    <div className='flex items-center'>
                        {icon}
                        <Typography variant="h4">{typographyText}</Typography>
                    </div>
                    <div>
                        {buttonLabel && <Button color="primary" onClick={editClick}>{buttonLabel}</Button>}
                    </div>
                </div>
                {props.children}
            </Grid>
        </Grid>
    )
}
