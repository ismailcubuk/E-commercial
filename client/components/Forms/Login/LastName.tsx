import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function LastName() {
    return (
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
            />
        </Grid>
    )
}
