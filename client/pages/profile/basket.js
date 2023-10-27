import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import userDataService from "@/utils/userDataService";
import { useQuery } from "react-query";
import { useDispatch } from 'react-redux';
import BasketMain from "../../components/Layout/Basket/BasketMain";
import OrderSummary from "../../components/Layout/Basket/OrderSummary";
import { updateTotal } from '../../redux/actions/basketActions';

export default function basket() {
  const { data } = useQuery("userData", userDataService.getUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.basket) {
      const calculatedTotal = data.basket.reduce(
        (accumulator, item) =>
          accumulator + item.productPrice * item.productCount,
        0
      );
      dispatch(updateTotal(calculatedTotal));
    }
  }, [data,dispatch]);

  return (
    <Container maxWidth="xl" className="flex pt-10">
      <Grid container className="w-full">
        {/* LEFT */}
        <Grid item xs={12} lg={8} className="px-3">
          <BasketMain />
        </Grid>
        {/* RİGHT */}
        <Grid container xs={12} lg={4} className="px-3">
          <OrderSummary />
        </Grid>
      </Grid>
    </Container>
  );
}
