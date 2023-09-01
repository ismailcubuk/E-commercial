import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Policies() {
    return (
        <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
        />
    )
}
