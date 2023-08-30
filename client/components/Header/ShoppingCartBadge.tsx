import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import {
    Button,
    Badge,
} from "@nextui-org/react";
export default function ShoppingCartBadge() {
    return (
        <Badge content="5"  color="primary" >
            <Button
                radius="md"
                isIconOnly
            >
                <LocalGroceryStoreIcon />
            </Button>
        </Badge>
    )
}
