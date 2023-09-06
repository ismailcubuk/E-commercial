import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function getShoesData() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const database = client.db("E-commerce");
    const collection = database.collection("shoes");

    const shoesData = await collection.find({}).toArray();

    return shoesData;
  } finally {
    client.close();
  }
}