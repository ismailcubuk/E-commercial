import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/slices/userSlice';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const dispatch = useDispatch();


    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.status.toLowerCase() === "success") {
                dispatch(setUserData({
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                }));
                router.push('/');
            } else {
                setLoginError("Invalid Mail or Password.")
            }
        }
    };
    return (
        <Box component="form" noValidate action="/api/login" method='post' onSubmit={handleLogin} className='w-full xl:px-10' sx={{ mt: 1 }}>
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
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlinedIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
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
                    )
                }}
            />
            {loginError && (
                <div className='text-red-700 bg-red-100 mb-2 p-1 px-5 rounded-md'>{loginError}</div>
            )}
            <Button color="primary" type='submit' fullWidth >
                SIGN IN
            </Button>

            {/* Forgot Password and Sign Up Links */}
            <Grid container>
                <Grid item xs>
                    <Link href="/login/forgotpassword" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/login/signup" variant="body2">
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login