import React from 'react'
import { Avatar, Badge } from "@nextui-org/react";
import { Typography } from "@mui/material";

import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
const avatarImage = "https://i.pravatar.cc/150?u=a042581f4e29026024d";
export default function UserProfile() {
    return (
        <div className="flex gap-5 items-center ">
            <Badge content={<PhotoCameraOutlinedIcon />} className="w-10 h-10" placement="bottom-right" color="default">
                <Avatar src={avatarImage} radius='md' className="w-20 h-20" />
            </Badge>
            <Typography variant="h4"> İsmail çubuk</Typography>
        </div>
    )
}
