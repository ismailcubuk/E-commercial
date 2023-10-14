import React from 'react'
import TextField from '@mui/material/TextField';

export default function LastName() {
    return (
        <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
        />
    )
}
