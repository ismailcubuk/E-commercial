import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function getAllData() {
    if (!MONGO_URI) {
        throw new Error("MONGO_URI is not defined.");
    }
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();

        const database = client.db("E-commerce");

        const categories = [
            "headphones",
            "headsets",
            "keyboards",
            "mouse",
            "phones",
            "shoes",
            "tracksuits",
            "tshirts",
            "watches",
        ];

        const allData: Record<string, any> = {};

        for (const category of categories) {
            const collection = database.collection(category);
            const categoryData = await collection.find({}).toArray();
            allData[category] = categoryData;
        }

        return allData;
    } finally {
        client.close();
    }
}

(async () => {
    try {
        const data = await getAllData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
})();
