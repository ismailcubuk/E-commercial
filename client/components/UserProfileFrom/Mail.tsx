import React from 'react'
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';

export default function Mail() {
    return (
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                placeholder="Username or email"
                name="email"
                autoComplete="email"
                autoFocus
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailOutlineIcon />
                        </InputAdornment>
                    ),
                }}
            />
    )
}