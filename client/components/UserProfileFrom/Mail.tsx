import React from 'react'
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import userDataService from '@/utils/userDataService';
import { updateEmail } from '@/redux/actions/userFormActions';
import { useEffect } from 'react';

export default function Mail() {
    const dispatch = useDispatch();
    const { data } = useQuery('userData', userDataService.getUserData);
    const isDisabled = useSelector(state => state.edit.isDisabled);
    const newEmail = useSelector(state => state.form.newEmail);
    useEffect(() => {
        dispatch(updateEmail(data?.email))
    }, [data?.email])
    const handleChange = (e: { target: { value: string; }; }) => {
        dispatch(updateEmail(e.target.value));
    };
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
                value={newEmail}
                onChange={handleChange}
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