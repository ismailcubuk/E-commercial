import React from 'react'
import Button from '@mui/material/Button';

export default function EditProfile() {
    return (
        <Button
            type="submit"
            fullWidth
            color='primary'
            className='bg-primary w-48'
            variant="contained"
            href='#'
        >
            Edit Profile
        </Button>
    )
}
