import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Remember() {
    return (
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        />
    )
}
