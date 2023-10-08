import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Button } from '@nextui-org/react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRouter } from 'next/router';
import FirstName from '../UserProfileFrom/FirstName';
import LastName from '../UserProfileFrom/LastName';
import Mail from '../UserProfileFrom/Mail';
import Password from '../UserProfileFrom/Password';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '@/redux/actions/Actions';
import FormModal from '../UserProfileFrom/FormModal';

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
function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Register() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const [countdown, setCountdown] = useState(3);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const dispatch = useDispatch();
    const isOpen = useSelector((state: any) => state.modal.isOpen);

    const handleCloseModal = () => {
        dispatch(closeModal());
        setErrorMessage("");
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
                dispatch(openModal());
                let countdownTimer = setInterval(() => {
                    setCountdown((prevCountdown) => prevCountdown - 1);
                }, 1000);
                setTimeout(() => {
                    clearInterval(countdownTimer);
                    dispatch(closeModal());
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
            <FormModal countdown={countdown} firstName={firstName} lastName={lastName} />
            <Grid container spacing={1}>
                <FirstName />
                <LastName />
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