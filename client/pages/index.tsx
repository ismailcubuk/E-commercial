import React from 'react'
import { Button } from '@mui/material';
import { Alarm } from '@mui/icons-material';
function index() {
  return (
    <div>
      <h2>Material-UI Icon Example</h2>
      <Button variant="contained" color="primary" startIcon={<Alarm />}>
        Alarm Icon
      </Button>
    </div>
  )
}

export default index