import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Button } from '@nextui-org/react';
import FirstName from '../UserProfileFrom/FirstName';
import LastName from '../UserProfileFrom/LastName';
import Mail from '../UserProfileFrom/Mail';
import Password from '../UserProfileFrom/Password';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '@/redux/actions/Actions';
import FormModal from '../UserProfileFrom/FormModal';
import { setErrorMessage, clearErrorMessage, selectErrorMessage } from '@/redux/slices/errorSlice';

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Register() {
    const [countdown, setCountdown] = useState(3);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const dispatch = useDispatch();
    const errorMessage = useSelector(selectErrorMessage);


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
                dispatch(setErrorMessage(errorStatus.error));
            } else {
                const errorData = await response.json();
                dispatch(setErrorMessage(errorData.message));
                dispatch(openModal());
                let countdownTimer = setInterval(() => {
                    setCountdown((prevCountdown) => prevCountdown - 1);
                }, 1000);
                setTimeout(() => {
                    clearInterval(countdownTimer);
                    dispatch(closeModal());
                    dispatch(clearErrorMessage());
                }, 3000);
                setFirstName(capitalizeFirstLetter(formObject.firstName));
                setLastName(capitalizeFirstLetter(formObject.lastName));
            }
        } catch (error) {
            console.error("Sunucu ile iletişim hatası:", error);
            dispatch(setErrorMessage("Bir hata oluştu. Lütfen tekrar deneyin."));
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <FormModal countdown={countdown} firstName={firstName} lastName={lastName} />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <FirstName />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LastName />
                </Grid>
                <Mail />
                <Password />
                <Grid item className='w-full'>
                    {errorMessage && (
                        <div className='text-red-600 bg-red-100 rounded-md px-5 py-1'>{errorMessage}</div>
                    )}
                </Grid>
                <Grid item className='flex w-full justify-between items-center' >
                    <Button color='primary' type='submit' >SIGN UP</Button>
                    <Link href="/login/signin" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>

            </Grid>


        </Box>
    )
}

export default Register