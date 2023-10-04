import connect from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  await connect();
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ status: "Not able to find the user" });
  } else {
    res.redirect("/");
  }
}
