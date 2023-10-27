import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "react-query";
import userDataService from "@/utils/userDataService";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

import {
  clearBasket,
  deleteBasketItem,
  incrementProductCount,
  decrementProductCount,
} from "@/utils/basket";
import { Grid, Paper, Typography } from "@mui/material";

export default function BasketMain() {
    const { data, refetch } = useQuery("userData", userDataService.getUserData);

    const clearToBasket = async () => {
        try {
          await clearBasket(data);
          refetch();
        } catch (error) {
          console.error("Basket cant cleraed", error);
        }
      };
      const deleteToBasketItem = async (itemName,itemDetail) => {
        try {
          await deleteBasketItem(data, itemName,itemDetail);
          refetch();
        } catch (error) {
          console.error("cant delete item", error);
        }
      };
      const handleIncrement = async (data, itemName, itemDetail) => {
        try {
          await incrementProductCount(data, itemName, itemDetail);
          refetch();
        } catch (error) {
          console.error("cant increment", error);
        }
      };
    
      const handleDecrement = async (data, itemName, itemDetail) => {
        try {
          await decrementProductCount(data, itemName, itemDetail);
          refetch();
        } catch (error) {
          console.error("cant decrement", error);
        }
      };
  return (
    <Paper elevation={4} className="w-full p-5">
      <Typography variant="h4" className="pb-5">
        Basket
      </Typography>
      {data &&
        data.basket.map((item, index) => (
          <Grid container key={index} className="py-2">
           <Grid container xs={11} className="border-b-2 w-full flex justify-between">
           <Grid item xs={12} md={7} className="flex justify-between items-center">
              <Image height={100} width={100} src={item.productImage} />
              <p>{item.productName}</p>
              <div>
                <p>Product properties</p>
                <p>{item.productDetail}</p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-between items-center">
              <div className="border-2 flex w-20 p-2 justify-around">
                <button onClick={() => handleDecrement(data,item.productName,item.productDetail)}>
                  -
                </button>
                <div>{item.productCount}</div>
                <button onClick={() => handleIncrement(data,item.productName,item.productDetail)}>
                  +
                </button>
              </div>
             <div className="flex flex-col">
             <Typography variant="h6">
                {(item.productPrice * item.productCount).toFixed(3)} TRY{" "}
              </Typography>
              <Typography variant="body2">
                {item.productPrice} x {item.productCount}
              </Typography>
             </div>
            </Grid>
           </Grid>
           <Grid item xs={1} className="flex items-center justify-center">
           <Button
                isIconOnly
                onClick={() => deleteToBasketItem(item.productName, item.productDetail)}
                color="danger"
                aria-label="Delete"
              >
                <DeleteIcon />
              </Button>
           </Grid>
          </Grid>
        ))}
      {data && data.basket.length > 0 ? (
        <Grid className="flex justify-between pt-2 w-full">
          <Link href="/" className="flex justify-center items-center">
            <ArrowBackIcon className="w-5 h-5" />
            Back To Shopping
          </Link>
          <button
            onClick={clearToBasket}
            className="flex justify-center items-center"
          >
            <DeleteForeverIcon className="w-5 h-5" />
            Empty Cart
          </button>
        </Grid>
      ) : null}
    </Paper>
  )
}
