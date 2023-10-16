import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import userDataService from '@/utils/userDataService';
import { updateFirstName } from '@/redux/actions/userFormActions';
import { useEffect } from 'react';

export default function FirstName() {
    const dispatch = useDispatch();
    const { data } = useQuery('userData', userDataService.getUserData);
    const isDisabled = useSelector(state => state.edit.isDisabled);
    const newFirstName = useSelector(state => state.form.newFirstName);
    useEffect(() => {
        dispatch(updateFirstName(data?.firstName))
    }, [data?.firstName])
    const handleChange = (e: { target: { value: string; }; }) => {
        dispatch(updateFirstName(e.target.value));
    };
    return (
        <TextField
            disabled={isDisabled}
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={newFirstName}
            onChange={handleChange}
        />
    )
}
