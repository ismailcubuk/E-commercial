import React from 'react'
import Button from '@mui/material/Button';

export default function Continue() {
    return (
        <Button
            type="submit"
            fullWidth
            color='primary'
            className='bg-primary'
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href='#'
        >
            Continue
        </Button>
    )
}
