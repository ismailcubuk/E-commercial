import jwt from 'jsonwebtoken';

const getUserData = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwt.decode(token);
    if (decodedToken) {
      return {
        _id: decodedToken._id,
        email: decodedToken.email,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        password: decodedToken.password,
        profilePictures: decodedToken.profilePictures,
        wishlist: decodedToken.wishlist,
        orders: decodedToken.orders,
        basket: decodedToken.basket,
        addresses: decodedToken.addresses
      };
    }
  }
  return null;
};

export default { getUserData };
