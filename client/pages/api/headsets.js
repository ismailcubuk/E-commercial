import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function getHeadsetsData() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const database = client.db("E-commerce");
    const collection = database.collection("headsets");

    const headsetsData = await collection.find({}).toArray();

    return headsetsData;
  } finally {
    client.close();
  }
}
