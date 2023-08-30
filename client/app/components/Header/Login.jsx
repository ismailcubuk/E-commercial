import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import {
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";
export default function Login() {
    return (
        <NavbarContent justify="end">
            <NavbarItem >
                <Button as={Link} color="primary" href="/login" variant="solid" className="px-10 font-bold">
                    <PersonIcon />
                    Login
                </Button>
            </NavbarItem>
        </NavbarContent>
    )
}
