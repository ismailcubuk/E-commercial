export const addFavorite = async (data, product, color) => {
  try {
    if (!data) {
      console.log("favori verileri yüklenemedi.");
      return;
    }
    const existingWishlist = data.wishlist || [];
    const existingItemIndex = existingWishlist.findIndex(
      (item) =>
        item.productName === product.description && item.favProductColor === color
    );

    if (existingItemIndex !== -1) {
      alert("Bu ürün zaten favoride.");
      return;
    }
    const favItem = {
        productName: product.description,
      favProduct: product,
      favProductColor: color,
    };
    const updatedWishlist = [...existingWishlist, favItem];

    const response = await fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        wishlist: updatedWishlist,
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
