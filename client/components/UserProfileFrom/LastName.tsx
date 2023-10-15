import React from 'react'
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

export default function LastName({ lastName }) {
    const isDisabled = useSelector(state => state.edit.isDisabled);
    return (
        <TextField
            disabled={isDisabled}
            autoComplete="family-name"
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            defaultValue={lastName}
        />
    )
}
