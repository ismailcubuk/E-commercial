import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Button } from '@nextui-org/react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRouter } from 'next/router';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    zIndex: 50,
    borderRadius: 2,
    outline: 'none'
};
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Register() {
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [open, setOpen] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [countdown, setCountdown] = useState(3);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleCloseModal = () => {
        setOpen(false);
        setErrorMessage(""); 
        setCountdown(3); 
        router.push('/login/signin');

    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);

            const formObject: { [key: string]: string } = {};

            formData.forEach((value, key) => {
                formObject[key] = value as string;
            });
            const response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify(formObject),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorStatus = await response.json();
                setErrorMessage(errorStatus.error);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message)
                setOpen(true);
                let countdownTimer = setInterval(() => {
                    setCountdown((prevCountdown) => prevCountdown - 1);
                }, 1000);
                setTimeout(() => {
                    clearInterval(countdownTimer);
                    handleCloseModal();
                }, 3000);
                setFirstName(capitalizeFirstLetter(formObject.firstName));
                setLastName(capitalizeFirstLetter(formObject.lastName));
            }
        } catch (error) {
            console.error("Sunucu ile iletişim hatası:", error);
            setErrorMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    useEffect(() => {
        if (countdown === 0) {
            handleCloseModal();
        }
    }, [countdown]);
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography className='flex justify-center' variant="h4" >
                    {countdown}
                </Typography>
                <Typography className='flex justify-center' variant='h6'>
                    Hoş geldiniz {firstName} {lastName}
                </Typography>
            </Box>
            </Modal>

            <Grid container spacing={2}>
                {/* firstName Lastname */}
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
                {/* mail */}
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
            </Grid>
            {errorMessage && (
                <div style={{ color: 'red' }}>{errorMessage}</div>
            )}

            {/* Signup Button */}
            <Button color='primary' type='submit' >SIGN UP</Button>
            {/* Sign In Link */}
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="/login/signin" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Register