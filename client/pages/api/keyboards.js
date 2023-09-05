import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function getKeyboardsData() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const database = client.db("E-commerce");
    const collection = database.collection("keyboards");

    const keyboardsData = await collection.find({}).toArray();

    return keyboardsData;
  } finally {
    client.close();
  }
}
