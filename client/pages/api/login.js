import connect from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  await connect();
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ status: "Not able to find the user" });
  } else {
    return res.json({ status: "Success", email: user.email, firstName: user.firstName, lastName: user.lastName });
  }
}
