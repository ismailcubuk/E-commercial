import React from 'react'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

export default function Forgot() {
    return (
        <Grid item xs>
            <Link href="/forgotpassword" variant="body2">
                Forgot password?
            </Link>
        </Grid>
    )
}
