import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Button } from "@nextui-org/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from 'react-redux';

export default function OrderSummary() {
    const total = useSelector((state) => state.basket.total);

  return (
    <Paper elevation={4} className="w-full p-5 h-fit">
      <Grid className="text-blue-700">
        <Typography variant="h4">Order Summary</Typography>
      </Grid>
      <Grid className="flex justify-between items-center mt-10">
        <Typography variant="h6">Subtotal</Typography>
        <Typography variant="body1">
          {(total - (16 / 100) * total).toFixed(3)} TRY{" "}
        </Typography>
      </Grid>
      <Grid className="flex justify-between items-center">
        <Typography variant="h6">VAT</Typography>
        <Typography variant="body1">
          {" "}
          {((16 / 100) * total).toFixed(3)} TRY{" "}
        </Typography>
      </Grid>
      <Grid className="flex justify-between items-center mt-5 mb-5 text-blue-700">
        <Typography variant="h5">TOTAL</Typography>
        <Typography variant="h4">{total.toFixed(3)} TRY</Typography>
      </Grid>
      <Button fullWidth color="success">
        <Typography
          className="text-white flex items-center justify-center"
          variant="h6"
        >
          Confirm Cart <KeyboardArrowRightIcon />{" "}
        </Typography>
      </Button>
    </Paper>
  );
}
