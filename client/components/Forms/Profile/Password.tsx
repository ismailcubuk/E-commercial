import React from 'react'
import { Input } from "@nextui-org/react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

export default function Password() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <Input
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            variant="bordered"
            autoComplete="current-password"
            startContent={
                <InputAdornment position="start">
                    <LockOutlinedIcon />
                </InputAdornment>
            }
            endContent={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}
