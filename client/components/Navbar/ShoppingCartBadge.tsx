import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useRouter } from 'next/router'
import { Button, Badge } from "@nextui-org/react";
import { useQuery } from 'react-query';
import userDataService from '@/utils/userDataService';
export default function ShoppingCartBadge() {
    const router = useRouter();
    const handleRedirectToBasket = () => {
        router.push('/profile/basket');
    };
    const { data } = useQuery("userData", userDataService.getUserData);

    return (
        <Badge content={data?.basket?.length} color="primary" >
            <Button
                radius="md"
                isIconOnly
                onClick={handleRedirectToBasket}
            >
                <LocalGroceryStoreIcon />
            </Button>
        </Badge>
    )
}
