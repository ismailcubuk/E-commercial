import React from 'react'
import TextField from '@mui/material/TextField';

export default function FirstName() {
    return (
            <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
            />
    )
}
