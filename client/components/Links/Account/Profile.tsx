import React, { Component } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from "@nextui-org/react";

export default class Profile extends Component {
    render() {
        return (
            <Link href="/profile/profile" color="foreground" className='hover:text-primary hover:border-l-4 border-primary hover:ml-[-4px] pl-2'>
                <PersonOutlineOutlinedIcon className='mr-2 w-5 h-5' />
                <div className='flex justify-between w-full'>
                    <p>Profile</p>
                </div>
            </Link>
        )
    }
}
