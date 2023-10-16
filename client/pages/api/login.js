import connect from "../../lib/mongodb";
import User from "../../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  await connect();
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ status: "Not able to find the user" });
  } else {
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      },
      secretKey,
      { expiresIn: "7d" }
    );
    return res.status(200).json({ status: "Success", token });
  }
}