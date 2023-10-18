import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { updatePassword } from '@/redux/actions/userFormActions';
import userDataService from '@/utils/userDataService';

export default function Password() {
    const dispatch = useDispatch();
    const { data } = useQuery('userData', userDataService.getUserData);
    const isDisabled = useSelector(state => state.edit.isDisabled);
    const newPassword = useSelector(state => state.form.newPassword) || '';
    useEffect(() => {
        dispatch(updatePassword(data?.password))
    }, [data?.firstName])
    const handleChange = (e: { target: { value: string; }; }) => {
        dispatch(updatePassword(e.target.value));
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const handleClickShowPassword = () => {
            setShowPassword((show) => !show)
    }
    useEffect(() => {
        if (isDisabled) {
            setShowPassword(false)
        }
    }, [isDisabled])

    return (
        <Grid item xs={12}>
            <TextField
                disabled={isDisabled}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                value={newPassword}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlinedIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            {isDisabled ? null :
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>}
                        </InputAdornment>
                    )
                }}
            />
        </Grid>
    )
}



