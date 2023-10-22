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

        const response = await fetch('/api/update', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                basket: updatedBasket
            })
        });

        if (response.ok) {
            const responseData = await response.json();
            if (responseData.token) {
                localStorage.setItem('token', responseData.token);
            }
            console.log("response", "response okey");
        } else {
            console.log("response", "response not okey");
        }
    } catch (error) {
        console.error(error);
    }
};
