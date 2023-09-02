import React from 'react'
import Button from '@mui/material/Button';

export default function SaveChanges() {
    return (
        <Button
            type="submit"
            fullWidth
            color='primary'
            className='bg-primary w-48'
            variant="contained"
            href='#'
        >
            Save Changes
        </Button>
    )
}
