import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { closeModal } from '@/redux/actions/Actions';

interface FormModalProps {
    countdown: number;
    firstName: string;
    lastName: string;
}

export default function FormModal({ countdown, firstName, lastName }: FormModalProps) {
    const dispatch = useDispatch();
    const router = useRouter();

    const isOpen = useSelector((state: any) => state.modal.isOpen);
    const handleCloseModal = () => {
        dispatch(closeModal());
        setErrorMessage(errorData.message)
        router.push('/login/signin');
    };
    useEffect(() => {
        if (countdown === 0) {
            handleCloseModal();
        }
    }, [countdown]);
    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-450 bg-white shadow-lg p-4 z-50 rounded-sm outline-none"
            >
                <Typography className='flex justify-center' variant="h4" >
                    {countdown}
                </Typography>
                <Typography className='flex justify-center' variant='h6'>
                    Hoş geldiniz {firstName} {lastName}
                </Typography>
            </div>
        </Modal>
    )
}
