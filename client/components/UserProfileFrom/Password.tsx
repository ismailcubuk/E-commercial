import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export default function Password({ password }) {
    const isDisabled = useSelector(state => state.edit.isDisabled);

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
                defaultValue={password}
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



