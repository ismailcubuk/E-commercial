import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

export default function FirstName({ firstName }) {
    const isDisabled = useSelector(state => state.edit.isDisabled);

    return (
            <TextField
                disabled={isDisabled}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                defaultValue={firstName}
            />
    )
}
