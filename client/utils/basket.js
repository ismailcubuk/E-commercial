export const addBasket = async (data, product, color) => {
  try {
    if (!data) {
      console.log("Kullanıcı verileri yüklenemedi.");
      return;
    }
    const existingBasket = data.basket || [];
    const basketItem = {
      productImage: product.images[0].sizes.s[0],
      productName: product.description,
      productDetail: color,
      productPrice: product.price.quantity,
    };
    const updatedBasket = [...existingBasket, basketItem];

    const response = await fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        basket: updatedBasket,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.token) {
        localStorage.setItem("token", responseData.token);
      }
      console.log("response", "response okey");
    } else {
      console.log("response", "response not okey");
    }
  } catch (error) {
    console.error(error);
  }
};

export const clearBasket = async (data) => {
  try {
    const response = await fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        basket: [],
      }),
    });
    if (response.ok) {
      const responseData = await response.json();
      if (responseData.token) {
        localStorage.setItem("token", responseData.token);
      }
      console.log("Basket cleared successfully");
    } else {
      console.log("Failed to clear the basket");
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteBasketItem = async (data,itemName) => {
    try {
      const updatedBasket = data.basket.filter((item) => item.productName !== itemName);

      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          basket: updatedBasket,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.token) {
          localStorage.setItem("token", responseData.token);
        }
        console.log(`Item "${itemName}" removed from the basket`);
      } else {
        console.log("Failed to remove the item from the basket");
      }
    } catch (error) {
      console.error(error);
    }
  };