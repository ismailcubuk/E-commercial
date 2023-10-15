import React from 'react'
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export default function Mail({ email }) {
    const isDisabled = useSelector(state => state.edit.isDisabled);
    return (
        <Grid item xs={12}>
            <TextField
                disabled={isDisabled}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                placeholder="Username or email"
                name="email"
                autoComplete="email"
                defaultValue={email}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailOutlineIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Grid>
    )
}