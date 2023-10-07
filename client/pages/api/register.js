import connect from "../../lib/mongodb";
import User from "../../models/User"

export default async function handler(req, res) {
    try {
        await connect();
        const user = await User.create(req.body);
        console.log("Kullanıcı oluşturuldu:", user); 
        res.redirect('/login/signin');
        if (!user) {
            return res.json({ code: 'User not created' });
        }
    } catch (error) {
        console.error("Kullanıcı oluşturma hatası:", error); 
        res.status(400).json({ status: 'Not able to create a new user.' });
    }
}
