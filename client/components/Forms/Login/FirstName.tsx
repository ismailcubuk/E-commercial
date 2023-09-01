import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function FirstName() {
    return (
        <Grid item xs={12} sm={6}>
            <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
            />
        </Grid>
    )
}
