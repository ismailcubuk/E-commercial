import React from 'react'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function SignUpPage() {
    return (
        <Grid item>
            <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
            </Link>
        </Grid>
    )
}
