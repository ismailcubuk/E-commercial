import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import userDataService from '@/utils/userDataService';

export default function FirstName() {
    const { data, refetch } = useQuery('userData', userDataService.getUserData);

    const isDisabled = useSelector(state => state.edit.isDisabled);
    const [newFirstName, setNewFirstName] = useState(data?.firstName);

    const handleChange = (e) => {
        setNewFirstName( e.target.value );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/update', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: data?._id,
                    firstName: newFirstName
                })
            });
            if (response.ok) {
                const data = await response.json();
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    refetch()
                }
                console.log("response", "response okey");
            } else {
                console.log("response", "response not okey");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Güncelle</button>
            </form>
        </div>
    )
}
