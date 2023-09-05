import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function getMouseData() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const database = client.db("E-commerce");
    const collection = database.collection("mouse");

    const mouseData = await collection.find({}).toArray();

    return mouseData;
  } finally {
    client.close();
  }
}
