import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function getHeadphonesData() {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined.");
  }
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const database = client.db("E-commerce");
    const collection = database.collection("headphones");

    const headphonesData = await collection.find({}).toArray();

    return headphonesData;
  } finally {
    client.close();
  }
}
