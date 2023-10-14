import connect from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  try {
    await connect();
    const { email, firstName, lastName, password, profilePictures } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Girilen e-posta adresi zaten kayıtlı." });
    } else {
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        profilePictures,
        wishlist: [],
        orders: [],
        basket: [],
        addresses: [],
      });

      await newUser.save();

      res.status(200).json({ message: "Kayıt başarıyla gerçekleşti." });
    }
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı oluşturulamadı." });
  }
}
