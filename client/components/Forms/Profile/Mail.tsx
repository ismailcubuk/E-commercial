import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Input } from "@nextui-org/react";

export default function Mail() {
    return (
        <Input
            type="email"
            label="Email"
            variant="bordered"
            placeholder="you@example.com"
            startContent={
                <MailOutlineIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
        />
    )
}
