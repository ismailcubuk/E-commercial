import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function getPhonesData() {
    if (!MONGO_URI) {
        throw new Error("MONGO_URI is not defined.");
    }
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();

        const database = client.db("E-commerce");
        const collection = database.collection("phones");

        const phonesData = await collection.find({}).toArray();

        return phonesData;
    } finally {
        client.close();
    }
}