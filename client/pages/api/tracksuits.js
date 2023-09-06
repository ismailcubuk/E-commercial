import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function getTracksuitsData() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const database = client.db("E-commerce");
    const collection = database.collection("tracksuits");

    const tracksuitsData = await collection.find({}).toArray();

    return tracksuitsData;
  } finally {
    client.close();
  }
}
