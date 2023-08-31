import React from 'react'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function SignInPage() {
    return (
        <Grid item>
            <Link href="/signin" variant="body2">
                Already have an account? Sign in
            </Link>
        </Grid>
    )
}
