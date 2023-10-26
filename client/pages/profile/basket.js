import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Button, Image } from "@nextui-org/react";
import userDataService from "@/utils/userDataService";
import { useQuery } from "react-query";
import DeleteIcon from "@mui/icons-material/Delete";
import { clearBasket, deleteBasketItem } from "@/utils/basket";
export default function basket() {
  const { data, refetch } = useQuery("userData", userDataService.getUserData);
  console.log(data);
  const clearToBasket = async () => {
    try {
      await clearBasket(data);
      refetch();
    } catch (error) {
      console.error("Ürün silerken hata oluştu: ", error);
    }
  };
  const deleteToBasketItem = async (itemName) => {
    try {
      await deleteBasketItem(data,itemName);
      refetch();
    } catch (error) {
      console.error("Ürün silerken hata oluştu: ", error);
    }
  };
  return (
    <Container maxWidth="xl" className="flex pt-10 ">
      <Grid container className="border-2 w-full">
        <Grid item xs={12} lg={8} className="border-2 p-10">
          <Typography variant="h4" className="pb-5">
            BASKET{" "}
          </Typography>
          {data &&
            data.basket.map((item, index) => (
              <Grid
                key={index}
                className="flex flex-row justify-between items-center py-2 border-b-2 w-full"
              >
                <Grid item xs={6} md={3}>
                  <Image height={100} width={100} src={item.productImage} />
                </Grid>
                <Grid item xs={6} md={3}>
                  <p>{item.productName}</p>
                </Grid>
                <Grid item xs={6} md={3}>
                  <p>Product properties :</p>
                  <p>{item.productDetail}</p>
                </Grid>
                <Grid>
                  <p>{item.productPrice} TRY</p>
                </Grid>
                <Grid item sm={6} md={3} className="flex justify-center">
                  <Button isIconOnly onClick={() =>deleteToBasketItem(item.productName)} color="danger" aria-label="Delete">
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
            ))}
          {data && data.basket.length > 0 ? (
            <Grid className="flex justify-end pt-2 w-full">
              <Grid item sm={3} className="justify-center flex">
                <button onClick={clearToBasket}>Delete Button</button>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
        <Grid item xs={12} lg={4} className="border-2">
          xs=4
        </Grid>
      </Grid>
    </Container>
  );
}
