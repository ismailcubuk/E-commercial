import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { updateLastName } from '@/redux/actions/userFormActions';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import userDataService from '@/utils/userDataService';
export default function LastName() {
    const dispatch = useDispatch();
    const { data } = useQuery('userData', userDataService.getUserData);
    const isDisabled = useSelector(state => state.edit.isDisabled);
    const newLastName = useSelector(state => state.form.newLastName);
    useEffect(() => {
        dispatch(updateLastName(data?.lastName))
    }, [data?.lastName])
    const handleChange = (e: { target: { value: string; }; }) => {
        dispatch(updateLastName(e.target.value));
    };
    return (
        <TextField
            disabled={isDisabled}
            autoComplete="family-name"
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            value={newLastName}
            onChange={handleChange}
        />
    )
}
