import connect from "../../lib/mongodb";
import User from "../../models/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    await connect();
    const { _id, firstName, lastName, email, password, basket, wishlist } = req.body;
    const existingUser = await User.findOne({ _id });
    if (!existingUser) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }

    existingUser.firstName = firstName;
    existingUser.lastName = lastName;
    existingUser.email = email;
    existingUser.password = password;
    existingUser.basket = basket;
    existingUser.wishlist = wishlist;
    await existingUser.save();

    const updatedToken = jwt.sign(
      {
        _id: existingUser._id,
        email: existingUser.email,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        password: existingUser.password,
        basket: existingUser.basket,
        wishlist: existingUser.wishlist,
      },
      "asd"
    );

    res.status(200).json({
      message: "Kullanıcı bilgileri başarıyla güncellendi.",
      token: updatedToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Kullanıcı bilgileri güncellenemedi." });
  }
}
