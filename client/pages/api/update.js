import connect from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  try {
    await connect();
    const { _id, firstName} = req.body; 

    const existingUser = await User.findOne({ _id }); 

    if (!existingUser) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }

    existingUser.firstName = firstName;

    await existingUser.save();

    res.status(200).json({ message: "Kullanıcı bilgileri başarıyla güncellendi." });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: "Kullanıcı bilgileri güncellenemedi." });
  }
}
