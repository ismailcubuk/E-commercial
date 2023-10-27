export const addBasket = async (data, product, color,img) => {
  try {
    if (!data) {
      console.log("Kullanıcı verileri yüklenemedi.");
      return;
    }
    const existingBasket = data.basket || [];
    const existingItemIndex = existingBasket.findIndex(
        (item) =>
          item.productName === product.description && item.productDetail === color
      );
  
      if (existingItemIndex !== -1) {
        alert("Bu ürün zaten sepette.");
        return;
      }
    const basketItem = {
        productImage: img,
      productName: product.description,
      productDetail: color,
      productPrice: product.price.quantity,
      productCount: 1
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
// clear
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
// delete
export const deleteBasketItem = async (data, itemName) => {
  try {
    const updatedBasket = data.basket.filter(
      (item) => item.productName !== itemName
    );

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

// increment
export const incrementProductCount = async (data, itemName,itemDetail) => {
    try {
      const updatedBasket = data.basket.map((item) => {
        if (item.productName === itemName&& item.productDetail === itemDetail) {
          return {
            ...item,
            productCount: item.productCount + 1,
          };
        }
        return item;
      });
  
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
        console.log(`Ürün sayısı "${itemName}" artırıldı`);
      } else {
        console.log("Ürün sayısı artırılamadı");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // decrement
  export const decrementProductCount = async (data, itemName,itemDetail) => {
    try {
      const updatedBasket = data.basket.map((item) => {
        if (item.productName === itemName && item.productDetail === itemDetail && item.productCount > 1) {
          return {
            ...item,
            productCount: item.productCount - 1,
          };
        }
        return item;
      });
  
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
        console.log(`Ürün sayısı "${itemName}" azaltıldı`);
      } else {
        console.log("Ürün sayısı azaltılamadı");
      }
    } catch (error) {
      console.error(error);
    }
  };
