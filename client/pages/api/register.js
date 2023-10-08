import connect from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  try {
    await connect();
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Girilen e-posta adresi zaten kayıtlı." });
    } else {
      const user = await User.create(req.body);
      if (!user) {
        return res.status(500).json({ error: "Kullanıcı oluşturulamadı." });
      }
      res.status(200).json({ message: "Kayıt başarıyla gerçekleşti." });
    }
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı oluşturulamadı." });
  }
}
