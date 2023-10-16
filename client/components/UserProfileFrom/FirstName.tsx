import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

export default function FirstName({ firstName, id }) {
    const isDisabled = useSelector(state => state.edit.isDisabled);
    const [formData, setFormData] = useState({
        firstName: firstName,
    });

    const handleChange = (e) => {
        setFormData({ firstName: e.target.value });
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
                    _id: id,
                    firstName: formData.firstName
                })
            });
            if (response.ok) {
                const data = await response.json();
                if (data.token) {
                    localStorage.setItem('token', data.token);
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
            {id}
            <form onSubmit={handleSubmit}>
                <TextField
                    disabled={isDisabled}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <button type="submit">Güncelle</button>
            </form>
        </div>
    )
}
