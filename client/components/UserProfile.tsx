import React, { useEffect, useState } from 'react'
import { Avatar, Badge } from "@nextui-org/react";
import { Typography } from "@mui/material";
import { useQuery } from 'react-query';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import userDataService from '@/utils/userDataService';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfilePictures } from '@/redux/actions/userFormActions';

const avatarImage1 = "https://i.pravatar.cc/150?u=a042581f4e29026024d";

export default function UserProfile() {
    const dispatch = useDispatch();
    const { data } = useQuery('userData', userDataService.getUserData);
    const newProfilePictures = useSelector(state => state.form.newProfilePictures);
    useEffect(() => {
        dispatch(updateProfilePictures(data?.profilePictures))
    }, [data])
    return (
        <div className="flex gap-5 items-center">
            <Badge content={<PhotoCameraOutlinedIcon/>} className="w-10 h-10" placement="bottom-right" color="default">
                <Avatar src={newProfilePictures} radius='md' className="w-20 h-20" />
            </Badge>
            <Typography variant="h4"> {data?.firstName} {data?.lastName}</Typography>
        </div>
    )
}
